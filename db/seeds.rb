puts "seeding brands..."

b1 = Brand.create(name: "Gus", brand_link: "https://gusmodern.com/")
b2 = Brand.create(name: "Havertys", brand_link: "https://www.havertys.com/")
b3 = Brand.create(name: "Howard Lorton", brand_link: "https://www.howardlorton.com/")
b4 = Brand.create(name: "Room & Board", brand_link: "https://www.roomandboard.com/stores")

puts "seeding types..."

t1 = Type.create(name:"Sofa")
t2 = Type.create(name:"Chair")
t3 = Type.create(name:"Rug")
t4 = Type.create(name:"Light")
t5 = Type.create(name: "Table")
t6 = Type.create(name:"Other")

puts "seeding Users"
User.create(username: "sarah_kimberly", password_digest: "lolly2four")
User.create(username: "alex_erps", password_digest: "chuckles")

puts "seeding furniture..."

Furniture.create(name: "Adelaide Sofa", image: "https://secure.img1-cg.wfcdn.com/im/02628646/compr-r85/9695/96953347/adelaide-sofa.jpg", brand_id: b1.id, type_id: t1.id )
Furniture.create(name: "Yanko", image: "https://www.yankodesign.com/images/design_news/2019/08/yd_chair_designs_layout.jpg", brand_id: b2.id, type_id: t2.id )
Furniture.create(name: "Jute Rustic", image: "http://cdn.home-designing.com/wp-content/uploads/2021/09/geometric-abstract-center-rugs-for-living-room-large-scale-pattern-statement-piece-genuine-wool-rug-colorful-carved-edges-3D-decorative-600x600.jpg", brand_id: b3.id, type_id: t3.id )