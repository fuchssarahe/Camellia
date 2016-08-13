json.partial! 'api/teas/tea', tea: @tea
json.avg_steep_time @tea.avg_steep_time
json.avg_temperature @tea.avg_temperature
json.avg_leaf_quantity @tea.avg_leaf_quantity
json.avg_leaf_density @tea.avg_leaf_density
json.sipping_count @tea.sippings.count
