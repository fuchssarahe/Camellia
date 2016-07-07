json.extract! review, :id,
                      :user_id,
                      :username,
                      :tea_name,
                      :tea_id,
                      :rating,
                      :body,
                      :steep_time,
                      :leaf_quantity,
                      :temperature,
                      :leaf_density
json.date_posted time_ago_in_words(review.created_at)
