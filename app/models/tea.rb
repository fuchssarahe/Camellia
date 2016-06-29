class Tea < ActiveRecord::Base

  validates :name, :type, :region, :steep_time, :temperature, :leaf_quantity, :leaf_density, :retailer, presence: true
  validates :type, inclusion: { in: %w(Black Red White Dark Yellow Green Oolong Herbal) }
  validates :region, inclusion: { in: ['Albania','Argentina','Australia','Bangladesh','Bolivia', 'Brazil', 'Burkina Faso', 'Burma', 'Chile', 'China', 'Colombia', 'Ecuador', 'Egypt' ,'France', 'Germany', 'Guatemala', 'India', 'Indonesia', 'Italy', 'Japan', 'Kenya', 'Malawi', 'Malaysia', 'Mexico', 'Morocco', 'Nepal', 'New Zealand', 'Nigeria', 'Paraguay', 'Portugal', 'Rwanda', 'South Africa', 'South Korea', 'Sri Lanka', 'Sudan', 'Taiwan', 'Tanzania', 'Thailand', 'Turkey', 'Uganda', 'United States of America', 'Vietnam', 'Zimbabwe'] }

end
