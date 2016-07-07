class Review < ActiveRecord::Base

belongs_to :tea
belongs_to :user

validates :user_id, :tea_id, :rating, :body, presence: true
validates :user_id, uniqueness: { scope: :tea_id, message: "You've already reviewed this item" }
validates :rating, inclusion: { in: (1..5), message: 'is not a valid rating' }


  def username
    self.user.username
  end

  def tea_name
    self.tea.name
  end

end
