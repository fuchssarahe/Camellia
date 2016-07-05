class Tea < ActiveRecord::Base
  has_many :ownerships, dependent: :destroy
  has_many :owners, through: :ownerships, source: :user

  validates :name, :tea_type, :region, :steep_time, :temperature, :leaf_quantity, :leaf_density, :retailer, presence: true
  validates :tea_type, inclusion: { in: %w(Black Red White Dark Yellow Green Oolong Herbal Other) }
  validates :region, inclusion: { in: ['Albania','Argentina','Australia','Bangladesh','Bolivia', 'Brazil', 'Burkina Faso', 'Burma', 'Chile', 'China', 'Colombia', 'Ecuador', 'Egypt' ,'France', 'Germany', 'Guatemala', 'India', 'Indonesia', 'Italy', 'Japan', 'Kenya', 'Malawi', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'New Zealand', 'Nigeria', 'Paraguay', 'Portugal', 'Rwanda', 'South Africa', 'South Korea', 'Sri Lanka', 'Sudan', 'Taiwan', 'Tanzania', 'Thailand', 'Turkey', 'Uganda', 'United States of America', 'Vietnam', 'Zimbabwe', 'Unknown'] }

  def image=(file)
    upload_params = Cloudinary::Uploader.upload(file)
    self.image_public_id = upload_params['url']
  end

  def self.search(parameters, limit = nil)
    if parameters[:tea]
      # 'tea' will only be a key of parameters if users are searching under the tea field
      teas = Tea.where("UPPER(name) LIKE :search_parameters OR UPPER(description) LIKE :search_parameters", {search_parameters: '%' + parameters[:tea].upcase + '%'})
    else
      query_string = ''
      parameters.each do |key, value|
        query_string = query_string + 'UPPER(' + key + ')' + ' LIKE ' + "'%#{value.upcase}%'"
      end
      teas = Tea.where(query_string)
    end

    if limit
      # (limit param determines whether a suggestion is needed or not)
      selector = 'id, name as search_name'
      suggestion_type = 'tea'
      return [teas.limit(limit).select(selector), suggestion_type]

    else
      # returns full tea detail
      return teas
    end
  end

end
