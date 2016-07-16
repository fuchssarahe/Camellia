class Tea < ActiveRecord::Base
  attr_accessor :description_part

  has_many :ownerships, dependent: :destroy
  has_many :owners, through: :ownerships, source: :user
  has_many :reviews, dependent: :destroy

  validates :name, uniqueness: true
  validates :name, :tea_type, :region, :steep_time, :temperature, :leaf_quantity, :leaf_density, :retailer, presence: true
  validates :tea_type, inclusion: { in: %w(Black Red White Dark Yellow Green Oolong Herbal Other), message: "is not a valid tea type" }
  validates :region, inclusion: { in: ['Albania','Argentina','Australia','Bangladesh','Bolivia', 'Brazil', 'Burkina Faso', 'Burma', 'Chile', 'China', 'Colombia', 'Ecuador', 'Egypt' ,'France', 'Germany', 'Guatemala', 'India', 'Indonesia', 'Italy', 'Japan', 'Kenya', 'Malawi', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'New Zealand', 'Nigeria', 'Paraguay', 'Portugal', 'Rwanda', 'South Africa', 'South Korea', 'Sri Lanka', 'Sudan', 'Taiwan', 'Tanzania', 'Thailand', 'Turkey', 'Uganda', 'United States of America', 'Vietnam', 'Zimbabwe', 'Unknown'], message: 'is not a valid region' }

  def image=(file)
    unless file == ''
      upload_params = Cloudinary::Uploader.upload(file)
      self.image_public_id = upload_params['url']
    end
  end

  def self.search(parameters, limit = nil)
    if parameters[:tea]
      # 'tea' will only be a key of parameters if users are searching under the tea field
      teas = Tea.where("UPPER(name) LIKE :search_parameters OR UPPER(description) LIKE :search_parameters", {search_parameters: '%' + parameters[:tea].upcase + '%'}).includes(:reviews)
    else
      # these will be direct searches for region or tea_type - this was made to accommodate other search fields in future
      query_string = ''
      parameters.each do |key, value|
        query_string = query_string + 'UPPER(' + key + ')' + ' LIKE ' + "'%#{value.upcase}%'"
      end
      teas = Tea.where(query_string).includes(:reviews)
    end

    if limit
      # limit param determines whether a suggestion is needed or not
      selector = 'id, description, name as search_name'
      suggestion_type = 'tea'
      return [teas.limit(limit).select(selector), suggestion_type]

    else
      # returns full tea detail
      return teas
    end
  end

  def rating
    value = self.reviews.average(:rating)
    if value
      return value.to_i
    end
    nil
  end

  def user_rating(user_id)
    self.reviews.where(user_id: user_id).average(:rating)
  end

  def avg_steep_time
    average = self.reviews.average(:steep_time)
    if average
      return averge.round(1)
    end
  end

  def avg_temperature
    average = self.reviews.average(:temperature)
    if average
      return averge.round
    end
  end

  def avg_leaf_quantity
    average = self.reviews.average(:leaf_quantity)
    if average
      return averge.round(1)
    end
  end

  def avg_leaf_density
    average = self.reviews.average(:leaf_density)
    if average
      return averge.round(1)
    end
  end


end
