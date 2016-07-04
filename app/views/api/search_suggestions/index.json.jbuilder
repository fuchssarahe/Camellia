json.array! @suggestions, partial: 'api/search_suggestions/suggestion', as: :suggestion, locals: { suggestion_type: @suggestion_type }
