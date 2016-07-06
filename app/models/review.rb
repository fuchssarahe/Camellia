class Review < ActiveRecord::Base

belongs_to :tea
belongs_to :user

validates :user_id, :tea_id, :rating, :body, presence: true
validates :user_id, uniqueness: { scope: :tea_id }



end
