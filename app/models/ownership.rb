class Ownership < ActiveRecord::Base

  belongs_to :user
  belongs_to :tea

  validates :user_id, :tea_id, presence: true
  validates :user_id, uniqueness: { scope: :tea_id, message: 'user already owns this tea' }

end
