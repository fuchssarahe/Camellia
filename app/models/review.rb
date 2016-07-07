class Review < ActiveRecord::Base

belongs_to :tea
belongs_to :user

validates :user_id, :tea_id, :rating, :body, presence: true
validates :user_id, uniqueness: { scope: :tea_id, message: "You've already reviewed this item" }
validates :rating, inclusion: { in: (1..5) }


  def username
    self.user.username
  end

end