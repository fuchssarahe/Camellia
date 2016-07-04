class Tea < ActiveRecord::Base
  # attr_reader :image

  validates :name, :tea_type, :region, :steep_time, :temperature, :leaf_quantity, :leaf_density, :retailer, presence: true
  validates :tea_type, inclusion: { in: %w(Black Red White Dark Yellow Green Oolong Herbal Other) }
  validates :region, inclusion: { in: ['Albania','Argentina','Australia','Bangladesh','Bolivia', 'Brazil', 'Burkina Faso', 'Burma', 'Chile', 'China', 'Colombia', 'Ecuador', 'Egypt' ,'France', 'Germany', 'Guatemala', 'India', 'Indonesia', 'Italy', 'Japan', 'Kenya', 'Malawi', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'New Zealand', 'Nigeria', 'Paraguay', 'Portugal', 'Rwanda', 'South Africa', 'South Korea', 'Sri Lanka', 'Sudan', 'Taiwan', 'Tanzania', 'Thailand', 'Turkey', 'Uganda', 'United States of America', 'Vietnam', 'Zimbabwe', 'Unknown'] }

  def image=(file)
    upload_params = Cloudinary::Uploader.upload(file)
    self.image_public_id = upload_params['url']
  end

  def search(parameters, limit = nil)
    if parameters[:tea]
      # should return tea information

      selector = 'id, name as search_name'

      suggestions = Tea.where("UPPER(name) LIKE :search_params OR description LIKE :search_params", {search_params: '%' + search_params[:tea].upcase + '%'})
      suggestion_type = 'tea'

    else
      # should return either region or tea type names

      column = search_params.keys[0]
      selector = column + ' as search_name'

      suggestions = Tea.distinct.where("UPPER(#{column}) LIKE :search_params", {search_params: '%' + search_params[column].upcase + '%'})
      suggestion_type = column
    end



    if limit
      # returns search suggestions
      return [suggestions.limit(limit).select(selector), suggestion_type]
    else
      # returns full tea detail
      return suggestions
    end
  end

end
