class Sipping < ActiveRecord::Base

  belongs_to :user
  belongs_to :tea

  validates :user_id, :tea_id, presence: true

end
