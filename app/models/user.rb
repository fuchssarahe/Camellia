class User < ActiveRecord::Base
  attr_reader :password

  has_many :ownerships, dependent: :destroy
  has_many :teas, through: :ownerships
  has_many :reviews
  has_many :sippings
  has_many :sipped_teas, through: :sippings

  after_initialize :ensure_session_token

  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 4, allow_nil: true }


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    return user if user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def date_joined
    self.created_at.to_s[0..10]
  end
end
