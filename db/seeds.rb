# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

possible_reviews = [
  "terrible tea",
  "this tea was ok. might give it away as a gift.",
  "it was aight",
  "I bought this tea as a gift for my daughter-in-law, and she seems to adore it!",
  "Wonderful!",
  "why would anyone buy this tea? it's sold by a horrible company with no morals!",
  "this tea was ok - my partner liked it more than me i think",
  "I liked this tea a whole lot, but golly, it sure was difficult to steep.",
  "The flavor and complexity of this tea were truly unique, but I really wish the tea was available loose, rather than exclusively in tea bags.",
  "What a trip down memory lane! My grandfather user to prepare this tea for us very carefully. I can't wait to share the experience with my own grandchildren.",
  "What a disappointment! Gross tea, expensive, and I couldn't buy less than 4 ounces!",
  "While this tea tasted nice, it was too easy to burn for my taste. I doubt I'll be buying the tea again.",
  "I love that this tea comes in both bags and looseleaf, but the quality is clearly very different between the two. Steer clear of the bags.",
  "This tea has such a nice aroma - I can always tell when my partner is making a cup. It's a little dusty, however, so the cup always has some crud in it at the end.",
  "I love this tea! It's perfect for right after dinner. We can get several steeps out of it, so we only need one set of tea leaves for the whole family!",
]



tea1 = Tea.create!(name: 'Gyokuro Imperial', tea_type: 'Green', description: 'Rich, almost full-bodied, smooth taste with sweet ending and complex notes.', region: 'Unknown', steep_time: 2, temperature: 77, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419221/black-tea_zppx8s.jpg')
Tea.create!(name: 'Jasmine Dragon Phoenix Pearls', tea_type: 'Green', description: 'Young green tea leaves are scented 3-4 times with summery blossoms of fresh jasmine, this tea is a phenomenon of fragrance and sweetness.', region: 'Unknown', steep_time: 2, temperature: 77, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana')
Tea.create!(name: 'Jade Citrus Mint', tea_type: 'Green', description: 'Bright citrus balance of lemon verbena and lemongrass with a hint of spearmint and rich China Chun Mee green tea base.', region: 'Unknown', steep_time: 2, temperature: 77, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana')
Tea.create!(name: 'Sakura Alluré', tea_type: 'Green', description: 'Enchanting and lively cherries and hibiscus blend with soft rose and mango.', region: 'Unknown', steep_time: 2, temperature: 77, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana')
Tea.create!(name: 'Spring Mao Feng, 2015', tea_type: 'Green', description: 'Harvested mid-March 2015 in Northern Fujian, this bright and refreshing green tea is naturally sweet with mild notes of grass.', region: 'China', steep_time: 1, temperature: 85, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company')

Tea.create!(name: 'Lapsang Souchong', tea_type: 'Black', region: 'Taiwan', steep_time: '4', temperature: '280', leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Wegmans', description: 'Lapsang has a dark, smokey flavor. It is commonly flavoured with fruit extracts for an interesting contrast.')
tea2 = Tea.create!(name: 'DARJEELING 2ND FLUSH', tea_type: 'Black', description: 'The name Darjeeling comes from the Tibetan words for thunderbolt, “dorje,” and land, “ling.” This tea shows off the brisk, nutty, full-bodied flavor characteristics for which Darjeeling teas are renowned.', region: 'India', steep_time: 4, temperature: 97, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Asha Tea House', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419223/black-tea2_ifcmmq.jpg')
Tea.create!(name: 'FORMOSA ASSAM', tea_type: 'Black', description: 'Assam tea bushes were first brought to Taiwan by the Japanese during their occupation of Taiwan. This clean, full-bodied black tea has no noticeable astringency and makes for a perfect morning tradition.', region: 'Taiwan', steep_time: 4, temperature: 97, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Asha Tea House')
Tea.create!(name: 'GONG FU BLACK', tea_type: 'Black', description: 'The Yunnan province in China is famous for robust black teas, and this one is no exception. The flavor is full-bodied, woody, and slightly smoky. Gong fu makes a perfect breakfast tea.', region: 'China', steep_time: 4, temperature: 97, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Asha Tea House')

Tea.create!(name: 'SILVER NEEDLE', tea_type: 'White', description: 'This luxurious tea is comprised exclusively of tender, unopened buds--a grade of tea historically reserved for royalty. The flavor is remarkably pure, reminiscent of the freshest glacier water.', region: 'China', steep_time: 2, temperature: 82, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Asha Tea House')
Tea.create!(name: 'Youthberry White', tea_type: 'White', description: 'Delicate white tea gets its youthful blush from red currants, açai berry, hibiscus and rose petals. Candied pineapple and mango pieces mingle with Fuji and golden delicious apples in this sweetly timeless elixir.', region: 'Unknown', steep_time: 2, temperature: 80, leaf_quantity: 1.5, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419144/green-tea_blv5do.jpg')
Tea.create!(name: 'Watermellon Mint Chiller White', tea_type: 'White', description: 'This refreshing white tea is crisp, clean and the perfect antidote to a hot day. Melon, brisk flavors of peppermint and soothing, stimulating eucalyptus mix marvelously with notes of pineapple, tangerine and berries creating a minty, juicy chiller that will keep you calm and collected no matter how high the mercury rises.', region: 'Unknown', steep_time: 2, temperature: 80, leaf_quantity: 1.5, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana')

tea3 = Tea.create!(name: 'Organic Chai Caffeine-Free', tea_type: 'Herbal', description: 'An Indian spice tea made without tea. Simply orange peel, ginger, cinnamon, cardamon, pepper & cloves. Our Chai Caffeine-Free makes a highly aromatic and delicious tea when combined with milk and honey.', region: 'Unknown', steep_time: 3, temperature: 96, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419153/Decaf-peach-black-tea_mpevox.jpg')
Tea.create!(name: 'Peppermint Rose', tea_type: 'Herbal', description: 'One of our more popular herbals, Peppermint Rose is a very simple blend of peppermint leaves and rose petals. The inspiration came from mint teas from Morocco that are sometimes served with a few drops of rose water.', region: 'Morocco', steep_time: 3, temperature: 96, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company')
Tea.create!(name: 'Chamomile Flowers', tea_type: 'Herbal', description: 'A daisy-like flower that brews a mild, honey-like infusion. Chamomile is often used to combat anxiety and sleeplessness. We think it blends well with later harvest green teas, by taking away the astringent, bitter edge.', region: 'Unknown', steep_time: 5, temperature: 100, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419141/JXO-all_kmgxj1.jpg')
Tea.create!(name: 'Chrysanthemum Buds (Tai Bai Ju)', tea_type: 'Herbal', description: 'Our chrysanthemum buds are the first harvest from Zheijang province. A distant relative of chamomile, these yellow buds have a cleaner and and a more honeylike finish than their later harvest blossoms. Bright and delicate, this is the perfect herbal tea to drink just before bedtime.', region: 'Unknown', steep_time: 4, temperature: 90, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419149/Green-Tea-Bowl_zznvje.jpg')

Tea.create!(name: 'Monkey Picked Oolong', tea_type: 'Oolong', description: 'As legend has it, ancient Buddhist Monks trained monkeys to gather the youngest leaves from the tip-top of wild tea trees for this special Imperial Reserve blend. The legend lives on, now with the deft hand-plucking of the broken, evenly sized leaves that unfurl to create a light, orchid aroma, and the highest grade of oolong in the world.', region: 'Unknown', steep_time: 3, temperature: 90, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana')
tea4 = Tea.create!(name: 'Tung Ting Oolong', tea_type: 'Oolong', description: 'Grown high in the Nantou mountains of Taiwan, this world-renowned oolong tea is hand-plucked from the first new growth in early spring. It takes a full 24 hours to produce a 2 lb bag of tea, as each bud and leaf is carefully oxidized, rolled and fired in small batches.', region: 'Taiwan', steep_time: 2, temperature: 90, leaf_quantity: 1.5, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419142/Qi_Lan_Oolong_tea_leaf_evmvd2.jpg')
Tea.create!(name: 'TRADITIONAL DARK ROAST', tea_type: 'Oolong', description: 'Often called “old man tea,” this is a quintessential dark roast oolong custom-roasted for Asha by our award- winning producer Jack. Upfront flavors of toasted grain and caramel give way to a deep, chewy, tobacco- studded finish.', region: 'Taiwan', steep_time: 2, temperature: 96, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Asha Tea House')
Tea.create!(name: 'Persimmon Blossom (Ya Sai)', tea_type: 'Oolong', description: 'The Phoenix Mountain range historically has been isolated from the rest of Guangzhou due to its remote location and harsh terrain, resulting in the development of distinctly unique tea varieties and traditions. In particular, this persimmon blossom tea was so rare and so desirable that farmers took to calling (ya sai) meaning “duck poop” to disguise the teas\' quality and hoard it for themselves. When tasting this tea, it is easy to see why such measures were taken. Reminiscent of a Sugar Apple, in recent years the tea has been re-christened as Persimmon Blossom to better reflect its true flavor. Refined orchard fruit notes and a refreshing clarity of flavor akin to Asian pear, matched with the complex floral notes of wildflower honey. With a smooth and substantial mouthfeel, the flavors retain a crisp and bright fruit-forward finish that lingers for a remarkably long time. Crisp, clean, aromatic, with strong notes of Asian pear and wildflower honey.', region: 'China', steep_time: 2, temperature: 96, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Red Blossom Tea Company')

Tea.create!(name: 'Golden Dragon Yellow Tea', tea_type: 'Yellow', description: 'We are proud to offer one of the rarest teas in the world; our limited edition yellow tea direct from China. The name ‘yellow’ tea refers not only to the unique processing and the lovely, bright golden infusion color, but due to its rarity it is also associated with the imperial yellow worn exclusively by emperors for centuries. Unlike any tea you have tasted before, at first sip it evokes the exquisite pleasure of everyday luxuries. Captivating high floral notes mingle with a smooth honeyed body and a subtle creamy, buttery finish. A perfectly balanced tea curated just for you.', region: 'China', steep_time: 2, temperature: 80, leaf_quantity: 1, leaf_density: (rand(30 - 5) + 5), retailer: 'Teavana', image_public_id: 'http://res.cloudinary.com/fuchssarahe/image/upload/v1467419148/green-tea-acne_mhvmnj.jpg')


guest = User.create!(username: 'guest', password: '123456')

Ownership.create!(user_id: guest.id, tea_id: tea1.id)
Ownership.create!(user_id: guest.id, tea_id: tea2.id)
Ownership.create!(user_id: guest.id, tea_id: tea3.id)
Ownership.create!(user_id: guest.id, tea_id: tea4.id)

users = {}
15.times do |i|
  users[i] = User.create!(username: Faker::Internet.user_name, password: Faker::Internet.password)
  positivity = rand(15)
  teas = [rand(5), rand(5)+5, rand(5)+10, rand(6)+15]
  Review.create!(user_id: users[i].id, tea_id: teas[0], rating: (positivity % 5), body: possible_reviews[positivity], steep_time: rand(10)*0.5, leaf_quantity: rand(6)*0.5, temperature: (rand(120 - 65) + 65), leaf_density: (rand(30 - 5) + 5) )
  Review.create!(user_id: users[i].id, tea_id: teas[1], rating: (positivity % 5), body: possible_reviews[positivity], steep_time: rand(10)*0.5, leaf_quantity: rand(6)*0.5, temperature: (rand(120 - 65) + 65), leaf_density: (rand(30 - 5) + 5) )
  Review.create!(user_id: users[i].id, tea_id: teas[2], rating: (positivity % 5), body: possible_reviews[positivity], steep_time: rand(10)*0.5, leaf_quantity: rand(6)*0.5, temperature: (rand(120 - 65) + 65), leaf_density: (rand(30 - 5) + 5) )
  Review.create!(user_id: users[i].id, tea_id: teas[3], rating: (positivity % 5), body: possible_reviews[positivity], steep_time: rand(10)*0.5, leaf_quantity: rand(6)*0.5, temperature: (rand(120 - 65) + 65), leaf_density: (rand(30 - 5) + 5) )
end
