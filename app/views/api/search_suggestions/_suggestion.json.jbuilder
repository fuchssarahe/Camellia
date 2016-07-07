json.suggestion_type suggestion_type
json.suggestion suggestion.search_name
if suggestion_type == 'tea'
  json.tea_id suggestion.id
  # json.description suggestion.description_part
  # p suggestion.description_part
end
