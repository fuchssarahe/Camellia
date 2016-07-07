json.extract! tea, :id,
                   :name,
                   :description,
                   :tea_type,
                   :region,
                   :steep_time,
                   :temperature,
                   :leaf_quantity,
                   :leaf_density,
                   :retailer,
                   :image_public_id,
                   :rating
if current_user
  json.current_user_rating tea.user_rating(current_user.id)
end
