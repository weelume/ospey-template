export type Locale='zh'|'en';
export const text=(locale:Locale,zh:string,en:string)=>locale==='zh'?zh:en;
export const navigation=[['home','首页','Home'],['about','关于我们','About'],['properties','精选房源','Properties'],['review','客户评价','Review'],['faq','常见问题','FAQ']] as const;
export const properties=[
 {zh:'极简栖居别墅',en:'Minimalist Haven House',category:['品质住宅','Residential'],price:'$1,250,000',location:'San Francisco, CA',image:'house-1.jpg',video:'property-1.mp4'},
 {zh:'现代奢居别墅',en:'Modern Luxury House',category:['豪华别墅','Luxury Villa'],price:'$2,450,000',location:'Los Angeles, CA',image:'house-2.jpg',video:'property-2.mp4'},
 {zh:'北欧温馨小屋',en:'Cozy Nordic House',category:['北欧小屋','Nordic Cabin'],price:'$950,000',location:'Aspen, CO',image:'house-3.jpg',video:'property-3.mp4'},
 {zh:'日落海岸庄园',en:'Premium Sunset Villa',category:['海滨庄园','Beachfront Estate'],price:'$3,800,000',location:'Miami, FL',image:'house-4.jpg',video:'property-1.mp4'},
] as const;
export const listingNames=[['极简栖居别墅','Minimalist Haven House'],['日落大道住宅','Sunset Boulevard Residence'],['马里布海滨庄园','Malibu Oceanfront Mansion']] as const;
export const stages=[['规划与场地准备','Planning & Site Prep',0],['地基施工','Foundation',15],['结构施工','Structure',35],['墙体与楼板','Walls & Slab',55],['外立面','Exterior',72],['室内精装','Interior Finishing',85],['细节完善','Finishing Touches',92],['景观营造','Landscaping',98],['项目竣工','Completed',100]] as const;
export const services=[
 ['房产买卖','Property Buying & Selling','以专业建议、智能筛选和个性化房源推荐，找到契合生活方式、理想地段与预算的家。','Find the perfect home with expert help, smart filters, and personalized listings that suit your lifestyle, location preferences, and financial goals.'],
 ['租赁解决方案','Rental Solutions','从丰富的住宅与公寓中，按租期、地段、生活需求和月度预算筛选理想居所。','Browse a variety of rental homes and apartments using intelligent filters tailored to your needs, lease terms, location, lifestyle, and monthly rental budget.'],
 ['物业管理','Property Management','租客服务、日常维护与租金管理一站完成，让物业经营更安心、更高效。','Hassle-free management with tenant care, maintenance, and rent collection—so your property stays profitable and secure.'],
 ['房产咨询','Real Estate Consulting','基于市场洞察，为买卖与投资提供清晰建议和符合个人目标的专属策略。','Get expert guidance on buying, selling, or investing—backed by market insights and tailored strategies.'],
] as const;
export const faqs=[
 ['你们提供哪些类型的房产？','What types of properties do you offer?','我们精选现代住宅、豪华别墅与高品质公寓，关注设计品质、地段及长期价值。','We offer a curated selection of modern residences, luxury villas, and premium apartments, each chosen for design quality, location, and long-term value.'],
 ['购房流程是怎样的？','How does the buying process work?','从挑选房源、法律核验、融资安排到最终签约，我们提供清晰透明的全程指引。','Our buying process is structured and transparent. We assist you through selection, legal validation, securing financing, and final contract completion.'],
 ['可以预约实地看房吗？','Can I schedule a property visit?','可以。选择房源卡片上的“预约看房”，填写演示表单即可体验预约流程；演示不会发送或保存信息。','Yes. Select Schedule Tour on a property card to try the booking form. This demo validates locally and does not send or save information.'],
 ['你们提供咨询与专业指导吗？','Do you provide consultation and guidance?','我们的房产顾问提供个性化建议、空间规划咨询和交易流程指导，帮助你作出充分知情的选择。','Absolutely. Our seasoned real estate experts provide personalized advisory services, spatial consulting, and complete legal guidance throughout.'],
] as const;
export const reviewTranslations=[
 ['别墅住户','从最初的户型咨询到最终验收，团队对结构细节的重视令人印象深刻。现在，我们拥有了一个引以为傲的宁静之家。'],
 ['住宅业主','我们原以为小空间无法改变，但结果超乎想象。拥挤的房子变得明亮、开放又实用。这不仅是一次焕新，更是生活方式的升级。'],
 ['顶层公寓业主','能找到真正理解建筑美感和个性化空间的团队并不容易。他们不仅找到了漂亮的别墅，更准确呈现了我们的生活愿景。'],
 ['湾区客户','定制户型和极简设计远超预期。专业周到的服务让我们在加州高端房产市场的选择过程轻松而清晰。'],
 ['现代建筑爱好者','自然光、材料质感与空间动线在每个房间里恰到好处。这是一次兼顾现代建筑理念与精细执行的美好体验。'],
 ['联排住宅买家','团队的专业与空间审美令人信赖。他们把令人紧张的置业过程，变成了一段充满灵感的探索旅程。'],
 ['庄园业主','他们将历史建筑的韵味与现代生活的便利巧妙结合。量身定制的体验，让我们的日常生活焕然一新。'],
 ['庄园客户','建筑规划与工艺细节都十分出色。家里的每一处空间都有明确的用意，精致而富有个人特色。'],
 ['海滨别墅业主','专业团队从容推进建造过程，将海滨地块变成一栋光线充足、造型出众的现代别墅，超出了我们的期待。'],
 ['高端住宅买家','从第一次沟通到最后交付，每一步都清晰、细致而周到。我们终于找到了契合生活方式的理想居所。'],
] as const;
