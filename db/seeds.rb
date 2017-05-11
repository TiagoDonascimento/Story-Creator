# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email: "fake@email.com", password: "password")

Story.create(story_name:"Indiana jones and the last crusade",
protaginst:"indiana jones",
cover:"http://img.cinemablend.com/cb/d/f/d/c/a/2/dfdca299e811e375a8453c18496658aa0162077d89032fda28d47b1004be0bc6.jpg",
setting:"desert",
goal:"wants to find holy grail",
user: user)

Story.create(story_name:"harry potter",
protaginst:"Harry Potter",
cover:"http://nerdist.com/wp-content/uploads/2016/02/20160210_nerdistnews_harrypottercursedchild_1x1.jpg",
setting:"hogwarts",
goal:"To be a great wizard",
user: user)

Story.create(story_name:"One piece",
protaginst:"Monkey D luffy",
cover:"https://media2.giphy.com/media/tuCFp8rod0x3O/giphy.gif",
setting:"The Grand Line",
goal:"To be King of the pirates",
user: user)

Story.create(story_name:"Super mario bros",
protaginst:"Mario",
cover:"https://vignette3.wikia.nocookie.net/the-dashiexp/images/f/f6/MarioHand.png/revision/latest?cb=20150712141121",
setting:"Mushroom kingdom",
goal:"save the princess",
user: user)

Story.create(story_name:"Pooh bear eats the shoe",
protaginst:"Pooh Bear",
cover:"https://advancedgraphics.com/wp-content/uploads/2013/08/642%20Winnie%20the%20Pooh.jpg",
setting:"hundred acre wood",
goal:"wants to find some honey",
user: user)

Story.create(story_name:"Ristar",
protaginst:"Ristar",
cover:"http://img06.deviantart.net/3f4a/i/2015/126/9/a/ristar_the_shooting_star_by_drawloverlala-d8s9ebr.png",
setting:"space",
goal:"To save his dad",
user: user)

Story.create(story_name:"rocket knight adventures",
protaginst:"sparkster",
cover:"http://vignette2.wikia.nocookie.net/rocketknight/images/6/6e/Sparkster_%28Rocket_Knight_Adventures_Japan_Artwork%29.png/revision/latest?cb=20150815030037",
setting:"zebulan",
goal:"To save the princess",
user: user)

Story.create(story_name:"Invader Zim",
protaginst:"Zim",
cover:"http://www.toonzone.net/wp-content/uploads/2017/04/invader_zim_render_by_neonstartapeinvasion-d9m3yz6-1024x751.png",
setting:"Space",
goal:"take over the earth",
user: user)
