import { Question, PracticeMode, PassageQuestion, AllQuestionsData, UnitQuestions } from "../types";

// Module-level debug - this will run when the module is loaded
console.log('=== questions.ts module loaded ===');

const allQuestionsData: AllQuestionsData = {
  unit1: {
    module1:  [
    {
      "question": "Digital marketing mainly refers to marketing through which medium?",
      "options": [
        "Radio and TV only",
        "Newspapers only",
        "Digital channels like websites and social media",
        "Posters and banners"
      ],
      "explanation": "Digital marketing uses online platforms like websites, social media, and email.",
      "correctAnswer": [2]
    },
    {
      "question": "Which of the following is a digital marketing platform?",
      "options": [
        "Instagram",
        "Newspaper",
        "Billboard",
        "Pamphlet"
      ],
      "explanation": "Instagram is an online social media platform used for digital marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main advantage of digital marketing?",
      "options": [
        "It cannot be measured",
        "It provides measurable results",
        "It works only offline",
        "It is always more expensive"
      ],
      "explanation": "Digital marketing can be tracked using analytics tools.",
      "correctAnswer": [1]
    },
    {
      "question": "Which is an example of traditional marketing?",
      "options": [
        "Email marketing",
        "SEO",
        "TV advertisement",
        "Instagram reels"
      ],
      "explanation": "TV advertisement is a traditional marketing method.",
      "correctAnswer": [2]
    },
    {
      "question": "What does SEO stand for?",
      "options": [
        "Social Engagement Optimization",
        "Search Engine Optimization",
        "Sales Expansion Operation",
        "Search Email Output"
      ],
      "explanation": "SEO means Search Engine Optimization.",
      "correctAnswer": [1]
    },
    {
      "question": "Which marketing type involves unpaid promotion?",
      "options": [
        "Paid marketing",
        "Organic marketing",
        "Television marketing",
        "SMS marketing"
      ],
      "explanation": "Organic marketing does not require direct payment for ads.",
      "correctAnswer": [1]
    },
    {
      "question": "Which is an example of paid marketing?",
      "options": [
        "Word-of-mouth",
        "Google Ads",
        "SEO blog content",
        "Free social media posts"
      ],
      "explanation": "Google Ads is a paid marketing strategy.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the purpose of digital marketing analytics?",
      "options": [
        "To design logos",
        "To measure campaign performance",
        "To create posters",
        "To print newspapers"
      ],
      "explanation": "Analytics measures clicks, engagement, conversions, and traffic.",
      "correctAnswer": [1]
    },
    {
      "question": "Which metric measures the percentage of users who click on an ad?",
      "options": [
        "CTR",
        "ROI",
        "SEO",
        "Bounce Rate"
      ],
      "explanation": "CTR (Click Through Rate) measures ad clicks compared to impressions.",
      "correctAnswer": [0]
    },
    {
      "question": "A brand uses storytelling to create an emotional connection. This is called?",
      "options": [
        "Paid marketing",
        "Emotional marketing",
        "Affiliate marketing",
        "Direct selling"
      ],
      "explanation": "Emotional marketing focuses on feelings and storytelling.",
      "correctAnswer": [1]
    },
    {
      "question": "Which color is most commonly associated with trust and security?",
      "options": [
        "Red",
        "Blue",
        "Green",
        "Orange"
      ],
      "explanation": "Blue is linked with trust and security in branding.",
      "correctAnswer": [1]
    },
    {
      "question": "Which color is often associated with urgency and excitement?",
      "options": [
        "Blue",
        "Red",
        "Green",
        "Black"
      ],
      "explanation": "Red is linked with urgency and excitement.",
      "correctAnswer": [1]
    },
    {
      "question": "Which color is mostly used for eco-friendly and nature-based branding?",
      "options": [
        "Green",
        "Black",
        "Purple",
        "Grey"
      ],
      "explanation": "Green represents nature, health, and sustainability.",
      "correctAnswer": [0]
    },
    {
      "question": "What does ROI stand for in digital marketing?",
      "options": [
        "Rate of Internet",
        "Return on Investment",
        "Reach of Influence",
        "Ranking of Index"
      ],
      "explanation": "ROI means Return on Investment.",
      "correctAnswer": [1]
    },
    {
      "question": "Which platform is best for professional business marketing?",
      "options": [
        "LinkedIn",
        "Snapchat",
        "Pinterest",
        "Telegram"
      ],
      "explanation": "LinkedIn is mainly used for professional networking and business marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "Email marketing is mainly used for?",
      "options": [
        "Sending newsletters and promotional offers",
        "Printing banners",
        "Offline advertisements",
        "Radio marketing"
      ],
      "explanation": "Email marketing is used for newsletters, offers, and customer communication.",
      "correctAnswer": [0]
    },
    {
      "question": "What is a major benefit of social media marketing?",
      "options": [
        "It reduces customer engagement",
        "It increases brand awareness and interaction",
        "It avoids customer feedback",
        "It works only for offline customers"
      ],
      "explanation": "Social media increases awareness and allows direct engagement with customers.",
      "correctAnswer": [1]
    },
    {
      "question": "Which of the following is an example of content marketing?",
      "options": [
        "Writing blog posts for customers",
        "Printing posters daily",
        "Calling customers directly",
        "Increasing product price"
      ],
      "explanation": "Content marketing includes blogs, videos, guides, etc.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is a key benefit of organic marketing?",
      "options": [
        "Instant sales in one hour",
        "Long-term brand trust and loyalty",
        "Always requires high budget",
        "No need of content"
      ],
      "explanation": "Organic marketing builds long-term trust and brand authority.",
      "correctAnswer": [1]
    },
    {
      "question": "Digital marketing helps businesses because it allows them to?",
      "options": [
        "Target specific audiences",
        "Avoid online customers",
        "Stop using analytics",
        "Only sell in stores"
      ],
      "explanation": "Targeting specific audiences is a major advantage of digital marketing.",
      "correctAnswer": [0]
    }
  ],
module2:[
  {
      "question": "Which of the following is NOT a digital marketing channel?",
      "options": [
        "Search engines",
        "Email",
        "Social media",
        "Newspaper classifieds"
      ],
      "explanation": "Newspaper classifieds traditional marketing me aata hai, digital marketing channel nahi hai.",
      "correctAnswer": [3]
    },
    {
      "question": "What is the main goal of marketing?",
      "options": [
        "To confuse customers",
        "To connect product/service with customers",
        "To increase product defects",
        "To stop business growth"
      ],
      "explanation": "Marketing ka main goal customer tak product/service ko effectively pahuchana hota hai.",
      "correctAnswer": [1]
    },
    {
      "question": "Which platform is best for short video content marketing?",
      "options": [
        "TikTok",
        "LinkedIn",
        "Gmail",
        "Wikipedia"
      ],
      "explanation": "TikTok short-form video content ke liye popular platform hai.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an example of inbound marketing?",
      "options": [
        "Cold calling customers",
        "Running billboard ads",
        "Publishing helpful blogs and guides",
        "Distributing pamphlets"
      ],
      "explanation": "Inbound marketing me valuable content create karke customers ko attract kiya jata hai.",
      "correctAnswer": [2]
    },
    {
      "question": "A brand uses Google Ads to appear on top of search results. This is called?",
      "options": [
        "Organic marketing",
        "Search Engine Marketing (SEM)",
        "Word-of-mouth marketing",
        "Print marketing"
      ],
      "explanation": "Paid ads on search engines ko SEM kehte hain.",
      "correctAnswer": [1]
    },
    {
      "question": "Which marketing type gives faster results?",
      "options": [
        "Organic marketing",
        "Paid marketing",
        "Word-of-mouth only",
        "Referral marketing only"
      ],
      "explanation": "Paid marketing quick visibility aur fast results deta hai.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the key disadvantage of organic marketing?",
      "options": [
        "It takes time to show results",
        "It requires no effort",
        "It works instantly",
        "It is always illegal"
      ],
      "explanation": "Organic marketing ka growth slow hota hai aur time lagta hai.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of these is a key benefit of paid advertising?",
      "options": [
        "Long-term free traffic",
        "Instant visibility and reach",
        "No need of budget",
        "No targeting option"
      ],
      "explanation": "Paid advertising se instant reach aur visibility milti hai.",
      "correctAnswer": [1]
    },
    {
      "question": "What is a major use of digital marketing platforms like Facebook and Instagram?",
      "options": [
        "To send printed brochures",
        "To engage and interact with customers",
        "To replace customer service completely",
        "To avoid brand awareness"
      ],
      "explanation": "Social media platforms audience engagement ke liye best hote hain.",
      "correctAnswer": [1]
    },
    {
      "question": "Which is an example of emotional marketing?",
      "options": [
        "Showing only technical specs of product",
        "Using storytelling to inspire customers",
        "Only showing discount prices",
        "Posting product codes only"
      ],
      "explanation": "Emotional marketing emotions trigger karta hai through storytelling.",
      "correctAnswer": [1]
    },
    {
      "question": "Which emotion is often used in charity donation campaigns?",
      "options": [
        "Empathy and compassion",
        "Boredom",
        "Confusion",
        "Indifference"
      ],
      "explanation": "Charity campaigns mostly empathy/compassion trigger karti hain.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is most associated with luxury branding?",
      "options": [
        "Green",
        "Black",
        "Yellow",
        "Pink"
      ],
      "explanation": "Black luxury, elegance, power show karta hai.",
      "correctAnswer": [1]
    },
    {
      "question": "Which color is commonly linked with energy and excitement?",
      "options": [
        "Red",
        "Grey",
        "Blue",
        "White"
      ],
      "explanation": "Red excitement aur urgency represent karta hai.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is often used by health and organic food brands?",
      "options": [
        "Green",
        "Black",
        "Purple",
        "Dark grey"
      ],
      "explanation": "Green health, nature, eco-friendly branding represent karta hai.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of these is a digital marketing metric?",
      "options": [
        "CTR",
        "Poster size",
        "Paper quality",
        "TV channel number"
      ],
      "explanation": "CTR (Click Through Rate) digital marketing KPI hai.",
      "correctAnswer": [0]
    },
    {
      "question": "What does conversion mean in digital marketing?",
      "options": [
        "When users ignore ads",
        "When users complete a desired action (purchase/sign-up)",
        "When website crashes",
        "When traffic decreases"
      ],
      "explanation": "Conversion means desired action complete hona (buy, sign-up, download).",
      "correctAnswer": [1]
    },
    {
      "question": "Which of these is a digital marketing platform for video content?",
      "options": [
        "YouTube",
        "Newspaper",
        "Hoarding board",
        "Magazine"
      ],
      "explanation": "YouTube ek major video marketing platform hai.",
      "correctAnswer": [0]
    },
    {
      "question": "A company sends weekly offers through email. This is called?",
      "options": [
        "Email marketing",
        "Telemarketing",
        "Billboard marketing",
        "Print marketing"
      ],
      "explanation": "Email ke through promotions send karna email marketing hai.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing approach focuses on creating valuable content to attract customers?",
      "options": [
        "Inbound marketing",
        "Outbound marketing",
        "Door-to-door marketing",
        "Offline marketing"
      ],
      "explanation": "Inbound marketing customers ko valuable content se attract karta hai.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main purpose of using branding colors consistently?",
      "options": [
        "To confuse customers",
        "To build brand recognition",
        "To reduce marketing cost instantly",
        "To avoid product sales"
      ],
      "explanation": "Consistent colors brand identity aur recognition build karte hain.",
      "correctAnswer": [1]
    }
  
],
module3:[
    
    {
      "question": "Which of the following best defines digital marketing?",
      "options": [
        "Marketing done only through television",
        "Marketing done using internet and digital technologies",
        "Marketing done only through newspapers",
        "Marketing done only in shopping malls"
      ],
      "explanation": "Digital marketing uses online/digital technologies like internet, websites, social media etc.",
      "correctAnswer": [1]
    },
    {
      "question": "Which platform is mainly used for photo-based content marketing?",
      "options": [
        "Instagram",
        "Google Maps",
        "WhatsApp",
        "Quora"
      ],
      "explanation": "Instagram is popular for image and visual-based marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the role of a website in digital marketing?",
      "options": [
        "To act as a digital store and information source",
        "To replace customer service",
        "To stop online traffic",
        "To avoid product promotion"
      ],
      "explanation": "Website is the main digital platform for product details, sales, and conversions.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an example of organic social media marketing?",
      "options": [
        "Posting reels without paying for promotion",
        "Running sponsored Instagram ads",
        "Buying YouTube ads",
        "Paying influencers for every post"
      ],
      "explanation": "Unpaid posting and engagement is organic marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "Paid marketing is also known as?",
      "options": [
        "Advertising",
        "Word-of-mouth",
        "Customer support",
        "Brand loyalty"
      ],
      "explanation": "Paid marketing involves advertising where money is spent for promotion.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main objective of SEO?",
      "options": [
        "To increase organic traffic through higher ranking",
        "To decrease website visitors",
        "To increase product price",
        "To stop content creation"
      ],
      "explanation": "SEO improves website ranking and increases organic visitors.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing method is best for long-term brand growth?",
      "options": [
        "Organic marketing",
        "Only paid marketing",
        "Only TV marketing",
        "Only print marketing"
      ],
      "explanation": "Organic marketing builds trust and long-term growth.",
      "correctAnswer": [0]
    },
    {
      "question": "What is a major benefit of paid ads compared to organic marketing?",
      "options": [
        "Paid ads provide quick results",
        "Paid ads take years to work",
        "Paid ads cannot be targeted",
        "Paid ads are always free"
      ],
      "explanation": "Paid ads provide immediate visibility and reach.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of a digital marketing KPI?",
      "options": [
        "CTR",
        "Font size",
        "Poster material",
        "Billboard length"
      ],
      "explanation": "CTR is a measurable performance metric in digital marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What does CTR measure?",
      "options": [
        "How many users clicked after seeing an ad",
        "How many posters were printed",
        "How many stores opened",
        "How many products were manufactured"
      ],
      "explanation": "CTR = Click Through Rate, shows percentage of ad clicks.",
      "correctAnswer": [0]
    },
    {
      "question": "Which platform is best for search-based marketing?",
      "options": [
        "Google",
        "Instagram",
        "Snapchat",
        "Pinterest"
      ],
      "explanation": "Google is the most common search engine for search-based marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "A company wants to reach customers quickly using ads. Which marketing should it choose?",
      "options": [
        "Paid marketing",
        "Organic marketing",
        "Word-of-mouth only",
        "Referral only"
      ],
      "explanation": "Paid marketing gives fast results through ads.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of display advertising?",
      "options": [
        "Banner ads on websites",
        "Blog posts on website",
        "Customer referrals",
        "SEO ranking"
      ],
      "explanation": "Display ads include banner/image ads shown on websites/apps.",
      "correctAnswer": [0]
    },
    {
      "question": "Which digital marketing platform is mainly used for professional articles and networking?",
      "options": [
        "LinkedIn",
        "TikTok",
        "Snapchat",
        "Instagram"
      ],
      "explanation": "LinkedIn is used for business/professional marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What is a key feature of digital marketing compared to traditional marketing?",
      "options": [
        "Real-time tracking and analytics",
        "No targeting possible",
        "No online audience",
        "Only offline promotions"
      ],
      "explanation": "Digital marketing provides real-time performance tracking through analytics.",
      "correctAnswer": [0]
    },
    {
      "question": "Which type of marketing mainly focuses on feelings like trust, happiness, and nostalgia?",
      "options": [
        "Emotional marketing",
        "Paid marketing",
        "Direct selling",
        "Telemarketing"
      ],
      "explanation": "Emotional marketing uses emotions to connect with customers.",
      "correctAnswer": [0]
    },
    {
      "question": "A brand shows family moments in ads to create warmth and connection. This is an example of?",
      "options": [
        "Emotional marketing",
        "SEO marketing",
        "Paid search marketing",
        "Product pricing strategy"
      ],
      "explanation": "Family storytelling creates emotional connection, so it's emotional marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is often associated with happiness and optimism?",
      "options": [
        "Yellow",
        "Black",
        "Brown",
        "Dark blue"
      ],
      "explanation": "Yellow is linked with positivity and optimism.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is commonly used for urgency in sales and discount banners?",
      "options": [
        "Red",
        "Green",
        "Blue",
        "White"
      ],
      "explanation": "Red creates urgency and is widely used in sale promotions.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main benefit of using color psychology in branding?",
      "options": [
        "It influences customer emotions and decisions",
        "It reduces website speed",
        "It removes the need for ads",
        "It stops customers from buying"
      ],
      "explanation": "Colors influence emotions and can affect purchase decisions.",
      "correctAnswer": [0]
    }
  
],module4:[
  
    {
      "question": "Which of the following is a major objective of digital marketing?",
      "options": [
        "To reduce customer interaction",
        "To increase online visibility and reach customers",
        "To stop content creation",
        "To avoid using analytics"
      ],
      "explanation": "Digital marketing ka main objective online visibility aur customer reach badhana hota hai.",
      "correctAnswer": [1]
    },
    {
      "question": "What does a digital marketing campaign mainly require?",
      "options": [
        "Only a printer",
        "Only offline posters",
        "A digital platform and target audience",
        "Only newspapers"
      ],
      "explanation": "Digital marketing campaign ke liye online platform aur target audience define karna zaroori hai.",
      "correctAnswer": [2]
    },
    {
      "question": "Which is the best example of content marketing?",
      "options": [
        "Creating a blog explaining product benefits",
        "Running only discount ads",
        "Printing flyers daily",
        "Cold calling customers"
      ],
      "explanation": "Blogs, videos, guides are examples of content marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "A company wants free traffic from Google. Which method is best?",
      "options": [
        "SEO",
        "TV advertisements",
        "Billboards",
        "Direct mail"
      ],
      "explanation": "SEO helps in getting organic (free) traffic from search engines.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of a social media marketing platform?",
      "options": [
        "Instagram",
        "Google Drive",
        "MS Excel",
        "Windows OS"
      ],
      "explanation": "Instagram is a popular social media platform for marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the key advantage of paid ads on social media?",
      "options": [
        "Ads cannot target users",
        "Ads can reach specific target audience quickly",
        "Ads are always free",
        "Ads cannot be tracked"
      ],
      "explanation": "Paid ads allow targeting based on interests, age, and location.",
      "correctAnswer": [1]
    },
    {
      "question": "What is a major benefit of digital marketing compared to print marketing?",
      "options": [
        "It cannot reach global customers",
        "It is measurable and trackable",
        "It is always offline",
        "It is limited to newspapers"
      ],
      "explanation": "Digital marketing results can be measured easily using analytics tools.",
      "correctAnswer": [1]
    },
    {
      "question": "Which marketing strategy focuses on getting customers through useful content instead of direct selling?",
      "options": [
        "Inbound marketing",
        "Outbound marketing",
        "Offline marketing",
        "Door-to-door marketing"
      ],
      "explanation": "Inbound marketing attracts customers through valuable content.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing type includes direct promotion through ads and calls?",
      "options": [
        "Inbound marketing",
        "Outbound marketing",
        "Organic marketing",
        "Community marketing"
      ],
      "explanation": "Outbound marketing includes direct promotional methods like ads, calls, and cold emails.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the meaning of a target audience?",
      "options": [
        "Everyone in the world",
        "A specific group of customers a brand wants to reach",
        "Only company employees",
        "Only competitors"
      ],
      "explanation": "Target audience refers to the group of people most likely to buy the product.",
      "correctAnswer": [1]
    },
    {
      "question": "Which platform is most suitable for video marketing and tutorials?",
      "options": [
        "YouTube",
        "Telegram",
        "Google Docs",
        "Bing Maps"
      ],
      "explanation": "YouTube is a major platform for videos, tutorials, and ads.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing method is best for building long-term customer trust?",
      "options": [
        "Organic marketing",
        "Only paid ads",
        "Only cold calling",
        "Only discount marketing"
      ],
      "explanation": "Organic marketing builds trust over time through valuable content and engagement.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of email marketing?",
      "options": [
        "Sending product offers through newsletters",
        "Posting posters on walls",
        "Running radio ads",
        "Selling through offline shops only"
      ],
      "explanation": "Email newsletters and offers are part of email marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "A brand uses emotional marketing mainly to?",
      "options": [
        "Create emotional connection with customers",
        "Increase product defects",
        "Avoid customer trust",
        "Remove brand identity"
      ],
      "explanation": "Emotional marketing helps customers feel connected to the brand.",
      "correctAnswer": [0]
    },
    {
      "question": "Which emotion is commonly used in travel advertisements?",
      "options": [
        "Adventure and excitement",
        "Confusion",
        "Fear only",
        "Anger only"
      ],
      "explanation": "Travel ads often use adventure and excitement to attract customers.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is commonly associated with nature and eco-friendly products?",
      "options": [
        "Green",
        "Red",
        "Black",
        "Grey"
      ],
      "explanation": "Green represents nature, health, and eco-friendly branding.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is associated with luxury and premium brands?",
      "options": [
        "Black",
        "Yellow",
        "Light green",
        "Pink"
      ],
      "explanation": "Black represents luxury, power, and elegance.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main use of Google Analytics?",
      "options": [
        "To print advertisements",
        "To track website traffic and user behavior",
        "To create logos",
        "To edit videos"
      ],
      "explanation": "Google Analytics is used to track traffic, conversions, and user activity.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the meaning of engagement in social media marketing?",
      "options": [
        "Likes, shares, comments, and saves",
        "Only product pricing",
        "Only followers count",
        "Only printing posters"
      ],
      "explanation": "Engagement includes likes, comments, shares, saves, and interactions.",
      "correctAnswer": [0]
    },
    {
      "question": "Why is social media important for businesses?",
      "options": [
        "It reduces online sales",
        "It helps in brand awareness and customer interaction",
        "It stops audience growth",
        "It avoids promotions"
      ],
      "explanation": "Social media helps brands connect with customers and build awareness.",
      "correctAnswer": [1]
    }
  
],
module5:[

    {
      "question": "Which of the following is a paid marketing example?",
      "options": [
        "Google Search Ads",
        "SEO blog ranking",
        "Word-of-mouth referrals",
        "Organic Instagram reach"
      ],
      "explanation": "Google Search Ads are paid advertisements shown on search results.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an organic marketing example?",
      "options": [
        "Instagram reels gaining views naturally",
        "Facebook paid ads",
        "YouTube paid promotions",
        "Sponsored influencer post"
      ],
      "explanation": "Organic marketing means free reach without paid promotion.",
      "correctAnswer": [0]
    },
    {
      "question": "What is SEO mainly used for?",
      "options": [
        "To rank a website higher in search engines",
        "To increase printing speed",
        "To create posters",
        "To make emails spam"
      ],
      "explanation": "SEO improves website visibility in search engine results.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is a digital marketing platform?",
      "options": [
        "Google",
        "Newspaper",
        "Pamphlet",
        "Radio"
      ],
      "explanation": "Google is a digital platform used for search marketing and ads.",
      "correctAnswer": [0]
    },
    {
      "question": "Which type of marketing uses emotional connection to influence buyers?",
      "options": [
        "Emotional marketing",
        "Technical marketing",
        "Mechanical marketing",
        "Random marketing"
      ],
      "explanation": "Emotional marketing focuses on feelings like trust, happiness, and excitement.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is commonly linked with trust and professionalism?",
      "options": [
        "Blue",
        "Orange",
        "Red",
        "Purple"
      ],
      "explanation": "Blue represents trust, security, and professionalism.",
      "correctAnswer": [0]
    },
    {
      "question": "Which color is most associated with energy and urgency?",
      "options": [
        "Red",
        "Green",
        "Brown",
        "Grey"
      ],
      "explanation": "Red is used to create urgency and excitement.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing channel is best for reaching users through search intent?",
      "options": [
        "Search engine marketing",
        "Billboard marketing",
        "TV marketing",
        "Flyer marketing"
      ],
      "explanation": "Search engine marketing targets users searching specific keywords.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of display advertising?",
      "options": [
        "Banner ads on websites",
        "SEO blog post ranking",
        "WhatsApp personal chat",
        "Offline store posters"
      ],
      "explanation": "Display ads include banner and image-based ads shown on websites/apps.",
      "correctAnswer": [0]
    },
    {
      "question": "What does CPC stand for in digital marketing?",
      "options": [
        "Cost Per Click",
        "Customer Paid Campaign",
        "Clicks Per Customer",
        "Cost Per Conversion"
      ],
      "explanation": "CPC means Cost Per Click, i.e., cost paid for each click on an ad.",
      "correctAnswer": [0]
    },
    {
      "question": "What does CTR stand for?",
      "options": [
        "Click Through Rate",
        "Customer Tracking Report",
        "Cost To Reach",
        "Click Target Ranking"
      ],
      "explanation": "CTR is Click Through Rate = clicks divided by impressions.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of a digital marketing KPI?",
      "options": [
        "Conversion rate",
        "Printer ink level",
        "Store rent cost",
        "Employee attendance"
      ],
      "explanation": "Conversion rate is a KPI used to measure campaign performance.",
      "correctAnswer": [0]
    },
    {
      "question": "Which digital marketing platform is best for professional networking?",
      "options": [
        "LinkedIn",
        "Snapchat",
        "Pinterest",
        "Telegram"
      ],
      "explanation": "LinkedIn is used for professional networking and B2B marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "Which platform is most effective for short-form viral video marketing?",
      "options": [
        "TikTok",
        "Gmail",
        "Google Sheets",
        "Wikipedia"
      ],
      "explanation": "TikTok is known for short-form viral content and trend marketing.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the purpose of a landing page in digital marketing?",
      "options": [
        "To convert visitors into leads or customers",
        "To store company employees data",
        "To show random videos",
        "To display only company logo"
      ],
      "explanation": "Landing pages are designed for conversion actions like signups or purchases.",
      "correctAnswer": [0]
    },
    {
      "question": "What is a common goal of awareness stage in marketing funnel?",
      "options": [
        "To make customers know about the brand",
        "To force customers to buy instantly",
        "To stop advertising",
        "To remove brand identity"
      ],
      "explanation": "Awareness stage focuses on reach and visibility.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing stage focuses on convincing customers to buy?",
      "options": [
        "Purchase stage",
        "Awareness stage",
        "Research stage",
        "Forget stage"
      ],
      "explanation": "Purchase stage is where the customer finally makes a buying decision.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is an example of influencer marketing?",
      "options": [
        "A YouTuber promoting a smartphone in a video",
        "A company printing posters",
        "A radio station playing songs",
        "A newspaper publishing news"
      ],
      "explanation": "Influencer marketing uses popular creators to promote products.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the biggest advantage of digital marketing over traditional marketing?",
      "options": [
        "It can be tracked and optimized using data",
        "It is always expensive",
        "It works only in one city",
        "It does not use customer targeting"
      ],
      "explanation": "Digital marketing allows tracking, targeting, and optimization in real-time.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is a major factor in emotional marketing?",
      "options": [
        "Customer feelings and emotions",
        "Machine speed",
        "Office location",
        "Printer quality"
      ],
      "explanation": "Emotional marketing is based on connecting with customer emotions.",
      "correctAnswer": [0]
    }
  
],
module6:[

    {
      "question": "What is the main purpose of market segmentation?",
      "options": [
        "To divide customers into groups for targeted marketing",
        "To reduce product quality",
        "To stop advertising",
        "To increase printing cost"
      ],
      "explanation": "Segmentation helps marketers target specific customer groups effectively.",
      "correctAnswer": [0]
    },
    {
      "question": "Grouping customers based on age and gender is called?",
      "options": [
        "Demographic segmentation",
        "Behavioral segmentation",
        "Geographic segmentation",
        "Psychographic segmentation"
      ],
      "explanation": "Demographic segmentation includes age, gender, income, education etc.",
      "correctAnswer": [0]
    },
    {
      "question": "Grouping customers based on location like city or country is called?",
      "options": [
        "Geographic segmentation",
        "Behavioral segmentation",
        "Demographic segmentation",
        "Psychographic segmentation"
      ],
      "explanation": "Geographic segmentation is based on region, climate, and location.",
      "correctAnswer": [0]
    },
    {
      "question": "Grouping customers based on lifestyle, personality, and values is called?",
      "options": [
        "Psychographic segmentation",
        "Demographic segmentation",
        "Geographic segmentation",
        "Product segmentation"
      ],
      "explanation": "Psychographic segmentation focuses on values, interests, and lifestyle.",
      "correctAnswer": [0]
    },
    {
      "question": "Grouping customers based on purchase behavior and usage is called?",
      "options": [
        "Behavioral segmentation",
        "Geographic segmentation",
        "Demographic segmentation",
        "Psychographic segmentation"
      ],
      "explanation": "Behavioral segmentation is based on buying habits, loyalty, usage frequency.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an example of B2C marketing?",
      "options": [
        "Amazon selling products to customers",
        "A manufacturer selling raw material to factory",
        "A company selling software to another company",
        "A business selling machines to industries"
      ],
      "explanation": "B2C means Business to Consumer (direct customer selling).",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an example of B2B marketing?",
      "options": [
        "Microsoft selling cloud services to companies",
        "A person buying shoes online",
        "A student buying books",
        "A customer ordering pizza"
      ],
      "explanation": "B2B means Business to Business selling (company-to-company).",
      "correctAnswer": [0]
    },
    {
      "question": "What does C2C business model mean?",
      "options": [
        "Customer selling to another customer",
        "Company selling to customers",
        "Company selling to company",
        "Customer selling to business"
      ],
      "explanation": "C2C platforms like OLX allow customers to sell directly to other customers.",
      "correctAnswer": [0]
    },
    {
      "question": "What does C2B business model mean?",
      "options": [
        "Customer providing services/products to business",
        "Company selling products to customer",
        "Customer selling to another customer",
        "Company selling to company"
      ],
      "explanation": "C2B includes freelancers selling services to companies.",
      "correctAnswer": [0]
    },
    {
      "question": "Which platform is best suited for visual discovery and inspiration?",
      "options": [
        "Pinterest",
        "LinkedIn",
        "X (Twitter)",
        "WhatsApp"
      ],
      "explanation": "Pinterest is designed for visual inspiration and discovery boards.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is the best example of omnichannel marketing?",
      "options": [
        "Customer sees ad online, receives email, and gets store discount linked to same profile",
        "Brand posts on Instagram only",
        "Brand runs Google Ads only",
        "Brand uses email only"
      ],
      "explanation": "Omnichannel provides a connected experience across platforms using customer data.",
      "correctAnswer": [0]
    },
    {
      "question": "What is multichannel marketing?",
      "options": [
        "Using multiple platforms but without seamless integration",
        "Using only one platform",
        "Avoiding social media completely",
        "Using only offline marketing"
      ],
      "explanation": "Multichannel uses many channels but not necessarily connected experience.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is an example of content atomization?",
      "options": [
        "Turning one blog into reels, quotes, and email snippets",
        "Posting only memes daily",
        "Creating one ad and running it forever",
        "Deleting old content monthly"
      ],
      "explanation": "Content atomization means breaking one long content into multiple smaller pieces.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main benefit of influencer marketing?",
      "options": [
        "It builds trust through creator credibility",
        "It removes the need for product quality",
        "It guarantees sales instantly",
        "It works only in newspapers"
      ],
      "explanation": "Influencers provide social proof and trust through their audience relationship.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is a good CTA (Call to Action)?",
      "options": [
        "Sign up now",
        "Maybe click here",
        "Nothing special",
        "Ignore this"
      ],
      "explanation": "A CTA should be direct and action-oriented.",
      "correctAnswer": [0]
    },
    {
      "question": "Which KPI measures the percentage of users who complete a purchase?",
      "options": [
        "Conversion rate",
        "Retention rate",
        "Bounce rate",
        "Impressions"
      ],
      "explanation": "Conversion rate shows how many visitors take desired actions like purchase.",
      "correctAnswer": [0]
    },
    {
      "question": "What does bounce rate mean?",
      "options": [
        "Visitors leaving after viewing only one page",
        "Visitors buying product instantly",
        "Visitors sharing posts",
        "Visitors clicking multiple ads"
      ],
      "explanation": "Bounce rate indicates how many users exit after visiting one page only.",
      "correctAnswer": [0]
    },
    {
      "question": "Which metric is most useful for measuring long-term customer value?",
      "options": [
        "Customer Lifetime Value (CLV)",
        "CTR",
        "Bounce rate",
        "Impressions"
      ],
      "explanation": "CLV estimates total revenue generated by a customer over time.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main purpose of A/B testing?",
      "options": [
        "To compare two versions and see which performs better",
        "To stop marketing campaigns",
        "To increase product price",
        "To reduce website traffic"
      ],
      "explanation": "A/B testing compares two versions to identify which gives better results.",
      "correctAnswer": [0]
    },
    {
      "question": "Which strategy is best to improve low click-through rate (CTR) in ads?",
      "options": [
        "Test new headlines and visuals",
        "Remove the CTA button",
        "Stop tracking analytics",
        "Increase product price"
      ],
      "explanation": "Low CTR often means creative is weak, so testing headlines and visuals helps.",
      "correctAnswer": [0]
    }
  
]
,

module7:[

    {
      "question": "What is the main purpose of a marketing funnel?",
      "options": [
        "To track customer journey from awareness to purchase",
        "To reduce customer engagement",
        "To stop content creation",
        "To increase printing costs"
      ],
      "explanation": "A marketing funnel shows stages customers go through before purchasing.",
      "correctAnswer": [0]
    },
    {
      "question": "Which funnel stage focuses on making people aware of a brand?",
      "options": [
        "Awareness",
        "Purchase",
        "Retention",
        "Loyalty"
      ],
      "explanation": "Awareness stage is the first stage where customers discover the brand.",
      "correctAnswer": [0]
    },
    {
      "question": "Which funnel stage happens when customers compare options?",
      "options": [
        "Consideration",
        "Awareness",
        "Purchase",
        "Retention"
      ],
      "explanation": "In consideration stage customers research and compare products.",
      "correctAnswer": [0]
    },
    {
      "question": "Which stage happens when customers finally buy the product?",
      "options": [
        "Purchase",
        "Awareness",
        "Interest",
        "Consideration"
      ],
      "explanation": "Purchase stage is when the conversion happens.",
      "correctAnswer": [0]
    },
    {
      "question": "Which stage focuses on repeat customers and loyalty?",
      "options": [
        "Retention",
        "Awareness",
        "Interest",
        "Intent"
      ],
      "explanation": "Retention keeps customers engaged after purchase to buy again.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the main purpose of retargeting ads?",
      "options": [
        "To target users who visited but didn’t convert",
        "To reduce traffic",
        "To block competitors",
        "To stop users from visiting the site"
      ],
      "explanation": "Retargeting focuses on people who already showed interest.",
      "correctAnswer": [0]
    },
    {
      "question": "Which of the following is the best example of a lead magnet?",
      "options": [
        "Free checklist in exchange for email",
        "Paid billboard ad",
        "Expensive subscription plan",
        "TV commercial"
      ],
      "explanation": "Lead magnets provide value to collect customer contact information.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is the best way to build trust in digital marketing?",
      "options": [
        "Sharing testimonials and reviews",
        "Using fake followers",
        "Posting random ads daily",
        "Ignoring customer feedback"
      ],
      "explanation": "Reviews and testimonials create credibility and social proof.",
      "correctAnswer": [0]
    },
    {
      "question": "What is social proof in marketing?",
      "options": [
        "Evidence like reviews, testimonials, and user feedback",
        "Random hashtags",
        "Product packaging",
        "Company internal reports"
      ],
      "explanation": "Social proof is proof that others trust or use the product.",
      "correctAnswer": [0]
    },
    {
      "question": "Which marketing strategy focuses on improving website ranking organically?",
      "options": [
        "SEO",
        "Paid Ads",
        "SMS marketing",
        "Cold calling"
      ],
      "explanation": "SEO improves ranking in search engines without paid ads.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is the best example of display advertising?",
      "options": [
        "Banner ad on a website",
        "Organic Instagram post",
        "Customer testimonial email",
        "SEO blog article"
      ],
      "explanation": "Display ads are visual ads shown on websites/apps.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is the best example of search advertising?",
      "options": [
        "Google Ads shown when searching a keyword",
        "Instagram story post",
        "YouTube vlog",
        "Pinterest pin"
      ],
      "explanation": "Search ads appear on search engines based on keyword intent.",
      "correctAnswer": [0]
    },
    {
      "question": "What does CTR stand for?",
      "options": [
        "Click Through Rate",
        "Customer Traffic Return",
        "Cost to Revenue",
        "Conversion Tracking Rate"
      ],
      "explanation": "CTR is Click Through Rate.",
      "correctAnswer": [0]
    },
    {
      "question": "Which KPI shows how many people saw your content?",
      "options": [
        "Impressions",
        "Conversion rate",
        "CLV",
        "Bounce rate"
      ],
      "explanation": "Impressions measure how many times content is displayed.",
      "correctAnswer": [0]
    },
    {
      "question": "Which KPI shows how many users liked, commented, or shared?",
      "options": [
        "Engagement",
        "Bounce rate",
        "ROI",
        "SEO score"
      ],
      "explanation": "Engagement measures user interactions with content.",
      "correctAnswer": [0]
    },
    {
      "question": "What is the benefit of using Content Credentials?",
      "options": [
        "It provides authenticity and creator attribution metadata",
        "It increases hashtag count",
        "It blocks ads automatically",
        "It removes copyright rules"
      ],
      "explanation": "Content Credentials ensure transparency about creator and edits.",
      "correctAnswer": [0]
    },
    {
      "question": "Which Adobe tool is used for AI image generation in Adobe Express ecosystem?",
      "options": [
        "Adobe Firefly",
        "Adobe Reader",
        "Adobe Acrobat",
        "Adobe Bridge"
      ],
      "explanation": "Adobe Firefly is the AI tool for generating visuals and creative assets.",
      "correctAnswer": [0]
    },
    {
      "question": "Which is the best practice for ethical AI marketing?",
      "options": [
        "Provide transparency and monitor bias",
        "Collect data without consent",
        "Hide AI usage from customers",
        "Ignore customer complaints"
      ],
      "explanation": "Ethical AI requires transparency, consent, and bias monitoring.",
      "correctAnswer": [0]
    },
    {
      "question": "Which license is needed for high-volume paid ad usage of stock images?",
      "options": [
        "Enhanced License",
        "Creative Commons",
        "Free License",
        "Personal License"
      ],
      "explanation": "Enhanced license is required for large paid campaigns and extended usage rights.",
      "correctAnswer": [0]
    },
    {
      "question": "Which strategy ensures brand consistency across social media, email, and website?",
      "options": [
        "Integrated content strategy",
        "Random posting",
        "Only trend marketing",
        "Ignoring brand guidelines"
      ],
      "explanation": "Integrated content strategy keeps messaging cohesive across all platforms.",
      "correctAnswer": [0]
    }
  
],
    assignment:[
       {
    "question": "A new intern writing social media posts asks how to sound more relatable. What should they focus on?",
    "options": [
      "Keep all posts under five words.",
      "Skip the copy and focus only on images.",
      "Avoid third-person and write in a conversational tone.",
      "Use technical language to sound professional."
    ],
    "explanation": "Conversational tone audience ko relatable aur friendly feel deta hai. Third-person formal lagta hai aur connection kam hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A social media coordinator notices that their Instagram captions aren't generating clicks or comments, even though the visuals are high quality. What should they do to improve engagement?",
    "options": [
      "Include a clear call to action in each caption.",
      "Switch to posting longer captions on every platform.",
      "Start referring to the brand in third person for consistency.",
      "Use extra emojis to increase post visibility."
    ],
    "explanation": "CTA audience ko directly guide karta hai ki unhe kya action lena hai (comment/click/share).",
    "correctAnswer": [0]
  },
  {
    "question": "A creator is designing Instagram Reels and wants to avoid having important text covered by interface elements. What should they do?",
    "options": [
      "Add more text to the top and bottom edges.",
      "Avoid using any text onscreen.",
      "Place key text near the center of the screen.",
      "Rely on voiceover alone to convey all information."
    ],
    "explanation": "Instagram UI top/bottom cover kar sakta hai, isliye safe zone center hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A team is preparing a series of posts for Instagram and wants to optimize reach without appearing spammy. What is the recommended number of hashtags to include per post?",
    "options": [
      "Around three hashtags per post for maximum clarity.",
      "Around 11, though fewer can still be effective.",
      "20 or more hashtags to appear in more searches.",
      "Avoid hashtags altogether to maintain a clean aesthetic."
    ],
    "explanation": "Instagram me around 11 hashtags recommended hota hai. Ye reach optimize karta hai without spammy look.",
    "correctAnswer": [1]
  },
  {
    "question": "A social media manager wants to showcase real-world use of their products in a way that builds trust. What’s a practical approach?",
    "options": [
      "Generate visuals with AI to simulate customer activity.",
      "Share staff selfies to represent customer experiences.",
      "Repost user-generated content after asking for permission.",
      "Use anonymous reviews without any visuals."
    ],
    "explanation": "User-generated content authentic hota hai aur trust build karta hai, especially permission ke saath repost karne par.",
    "correctAnswer": [2]
  },
  {
    "question": "A business is hosting a launch event and wants to encourage followers to attend. Which type of post would best support this goal?",
    "options": [
      "Infographic with event data",
      "Story meme with countdown sticker",
      "Testimonial quote card",
      "Branded invitation"
    ],
    "explanation": "Branded invitation event details clearly communicate karta hai aur professional invite feel deta hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A team wants to create branded promotional content quickly for an upcoming flash sale. What’s an efficient first step in Adobe Express?",
    "options": [
      "Start with a platform-specific template that features photography.",
      "Add audio narration before finalizing the design.",
      "Use a document template to repurpose a company report.",
      "Begin from scratch using blank canvas mode."
    ],
    "explanation": "Templates fastest way hote hain branded promo content create karne ke liye, especially platform-specific.",
    "correctAnswer": [0]
  },
  {
    "question": "A designer wants to make the environmental consequences of overconsumption feel more personal and emotional. What design technique would support that goal?",
    "options": [
      "Include everyday clothing items in the image to spark viewer reflection.",
      "Focus on bold typography without visual metaphors.",
      "Avoid using human elements to keep the image neutral.",
      "Use abstract textures to create artistic distance from the subject."
    ],
    "explanation": "Everyday objects audience ko relate karne dete hain, jisse emotional impact zyada hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A creator is developing a promo video for a new product and plans to post it on Facebook, where many users view videos without sound. They want to ensure that viewers still understand the message clearly. What’s the best strategy?",
    "options": [
      "Skip captions and rely on voiceover instead.",
      "Add clear subtitles or captions to each video.",
      "Avoid all text overlays to keep visuals clean.",
      "Keep the video under 10 seconds to reduce effort."
    ],
    "explanation": "Facebook users often mute videos, so subtitles/captions message clearly deliver karte hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A small business owner posts regularly on Instagram, but a friend points out several spelling errors and missing punctuation in their captions. What impact can this have?",
    "options": [
      "It can reduce credibility and make the posts harder to read.",
      "It makes the captions feel more casual and human.",
      "It boosts follower growth through curiosity.",
      "It increases post visibility through algorithm hacks."
    ],
    "explanation": "Spelling/punctuation mistakes professionalism aur trust ko harm karte hain, aur readability reduce karte hain.",
    "correctAnswer": [0]
  },
  
  {
    "question": "A clothing retailer groups customers by purchase habits, such as frequent sales shoppers versus premium buyers. Which option would most likely describe this segmentation approach?",
    "options": [
      "Demographic segmentation.",
      "Behavioral segmentation.",
      "Psychographic segmentation."
    ],
    "explanation": "Grouping customers based on buying habits, shopping frequency, and purchase behavior is called behavioral segmentation.",
    "correctAnswer": [1]
  },
  {
    "question": "A skincare brand markets different sunscreen products to customers in their 20s, 40s, and 60s. What type of segmentation does this illustrate?",
    "options": [
      "Demographic segmentation.",
      "Geographic segmentation.",
      "Behavioral segmentation."
    ],
    "explanation": "Segmenting customers based on age groups is demographic segmentation.",
    "correctAnswer": [0]
  },
  {
    "question": "A sports retailer is preparing a campaign for a persona it calls Weekend Warrior Will, who enjoys outdoor activities but shops only during big sales. Which tactic would most effectively connect with Will?",
    "options": [
      "Promote unrelated fitness apps.",
      "Offer limited-time discounts on outdoor gear.",
      "Run ads highlighting luxury gear at premium prices."
    ],
    "explanation": "Since the persona shops mainly during sales, limited-time discounts match his shopping behavior and motivation.",
    "correctAnswer": [1]
  },
  {
    "question": "A sports brand wants its ads to resonate with Active Andy, the brand’s most engaged customer type. What’s the first step to ensure that the messaging connects?",
    "options": [
      "Review Andy’s persona profile to align messaging with his interests and needs.",
      "Launch a new campaign without research.",
      "Guess what Andy might like based on trends."
    ],
    "explanation": "The best way to create relevant messaging is to review the persona profile and align the campaign with their needs and interests.",
    "correctAnswer": [0]
  },
  {
    "question": "An online clothing store’s style advice articles draw more clicks than sales announcements. Which action would help them make the most of this insight?",
    "options": [
      "Stop publishing style advice entirely.",
      "Publish more style advice articles with links to related products.",
      "Focus only on sales announcements."
    ],
    "explanation": "Doubling down on high-performing content (style advice) while linking products naturally increases engagement and potential conversions.",
    "correctAnswer": [1]
  },
  {
    "question": "A mobile app team sees that new users often drop off during onboarding. Which step would most likely help improve completion rates?",
    "options": [
      "Leave the onboarding process exactly as it is.",
      "Extend the onboarding process with more detailed tutorials.",
      "Streamline onboarding into short, interactive steps."
    ],
    "explanation": "Shorter, interactive onboarding reduces friction and keeps users engaged, improving completion rates.",
    "correctAnswer": [2]
  },
  {
    "question": "A graphic design marketplace allows freelancers to offer their services to companies. Which category best fits this business model?",
    "options": [
      "C2B.",
      "C2C.",
      "B2B."
    ],
    "explanation": "In this model, individual freelancers (consumers) provide services to businesses, which is Consumer-to-Business (C2B).",
    "correctAnswer": [0]
  },
  {
    "question": "A photographer sells stock images directly to a large media company. Which business model is at work?",
    "options": [
      "B2B.",
      "C2B.",
      "C2C."
    ],
    "explanation": "An individual (consumer/creator) selling services or products to a business is C2B marketing.",
    "correctAnswer": [1]
  },
  {
    "question": "An apparel company wants to appeal to indigenous communities. Which approach would build the strongest relationships?",
    "options": [
      "Avoid acknowledging cultural traditions entirely.",
      "Copy traditional designs without permission.",
      "Collaborate with community members in product design."
    ],
    "explanation": "Collaboration and respectful co-creation builds trust and long-term relationships with indigenous communities.",
    "correctAnswer": [2]
  },
  {
    "question": "A fashion brand is criticized online for an ad that unintentionally stereotypes a cultural group. What’s the best first step?",
    "options": [
      "Issue a public apology and outline corrective actions.",
      "Delete the ad quietly and ignore questions.",
      "Continue running the ad until the campaign ends."
    ],
    "explanation": "A public apology with corrective actions shows accountability and helps rebuild trust after a cultural mistake.",
    "correctAnswer": [0]
  }
,
       {
    "question": "A creator begins tracking their analytics weekly and notices that user comments have decreased over the past month. What is the best use of this insight?",
    "options": [
      "Review which types of posts previously encouraged comments.",
      "Increase posting frequency to regain lost visibility.",
      "Shift focus entirely to follower count instead.",
      "Pause all posting to reset their engagement baseline."
    ],
    "explanation": "Analytics ka purpose ye samajhna hota hai ki pehle kya kaam kar raha tha. Past high-comment posts review karna best next step hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A small business creator sees that posts with customer testimonials perform significantly better than promotional content. What adjustment would best support their social strategy?",
    "options": [
      "Increase promotional content to match testimonial frequency.",
      "Ignore testimonial results since they aren’t product-focused.",
      "Incorporate more user stories and testimonials into future posts.",
      "Focus only on platform aesthetics and layout changes."
    ],
    "explanation": "Testimonials social proof dete hain. Jo content perform kar raha hai, usko scale karna smart strategy hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A wellness creator wants to understand how well their posts resonate with their audience. Which metric should they focus on?",
    "options": [
      "Follower growth",
      "Reach",
      "Engagement",
      "Conversion rate"
    ],
    "explanation": "Engagement batata hai ki audience content ke saath interact kar rahi hai ya nahi.",
    "correctAnswer": [2]
  },
  {
    "question": "A beauty creator wants to show that their brand is modern and culturally aware. How can participating in social media trends support this goal?",
    "options": [
      "It allows them to reduce time spent responding to comments.",
      "It shows that their brand is in tune with current conversations and culture.",
      "It helps their audience ignore older content that no longer reflects the brand.",
      "It guarantees viral reach among younger demographics."
    ],
    "explanation": "Relevant trends me participate karna brand ko culturally updated aur relatable dikhata hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A dog toy brand wants to make sure its new Valentine’s Day post will display correctly on Instagram, Facebook, and Pinterest. What feature in Content Scheduler should they use to check how the post will appear across platforms?",
    "options": [
      "Preview tool that shows post appearance on multiple platforms",
      "Link shortener",
      "AI caption generator",
      "Analytics report"
    ],
    "explanation": "Preview tool se creators dekh sakte hain ki post har platform par kaisa dikhega.",
    "correctAnswer": [0]
  },
  {
    "question": "A brand posts regularly but notices low engagement. The marketing team rarely replies to comments or interacts with followers. What action is most likely to improve results?",
    "options": [
      "Focus entirely on product videos.",
      "Turn off comments to avoid negative feedback.",
      "Respond to comments and DMs to build stronger audience connections.",
      "Post more often using paid ads for each post."
    ],
    "explanation": "Social media two-way hota hai. Replies aur interaction engagement ko naturally badhate hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A career coach wants to promote their services by sharing polls, blog links, and professional tips. Which platform would best suit this strategy?",
    "options": [
      "TikTok",
      "Instagram",
      "Pinterest",
      "LinkedIn"
    ],
    "explanation": "Professional content, blogs aur career tips ke liye LinkedIn best platform hai.",
    "correctAnswer": [3]
  },
  {
    "question": "An author wants to build awareness by sharing short, punchy takes on trending topics. What platform best supports this strategy?",
    "options": [
      "X (formerly Twitter)",
      "Instagram",
      "LinkedIn",
      "Pinterest"
    ],
    "explanation": "Short, fast-moving opinions aur trends ke liye X (Twitter) ideal platform hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A mental health advocate wants to participate in a trending meme challenge but wonders whether it’s a good fit. What’s the most important first step before jumping in?",
    "options": [
      "Choose a random variation to stand out from the crowd.",
      "Consider whether the trend aligns with their brand’s values and message.",
      "Wait to see if the trend stays popular for at least two weeks.",
      "Focus on copying exactly how top creators used the trend."
    ],
    "explanation": "Sensitive domains me brand values aur message alignment sabse important hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A travel creator wants to improve their posting strategy but isn’t sure how to measure progress. What’s the best way to begin?",
    "options": [
      "Start benchmarking by reviewing current performance levels.",
      "Only review analytics after reaching major follower milestones.",
      "Post new content consistently without measuring results.",
      "Wait for audience feedback before analyzing post performance."
    ],
    "explanation": "Benchmarking se baseline milta hai jisse future improvement measure ki ja sakti hai.",
    "correctAnswer": [0]
  }
  ,
  
  {
    "question": "A small business owner wants to create social media copy that connects with their audience. They’re unsure how to describe their tone. What’s the best first step they should take?",
    "options": [
      "Research the top-performing memes in their market",
      "Ask close friends or colleagues to describe their brand in 3–5 words.",
      "Choose a few trending hashtags that match their industry."
    ],
    "explanation": "Brand tone define karne ke liye pehle brand perception samajhna zaroori hota hai. Close friends/colleagues ke words authentic feedback dete hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A software startup wants visitors to keep coming back to its site even before buying anything. What should the company do to achieve this?",
    "options": [
      "Create a free resource center with tutorials and troubleshooting tips that meet customer needs.",
      "Focus only on social media ads with purchase links.",
      "Stop posting content until their product launches."
    ],
    "explanation": "Free valuable resources trust build karte hain aur repeat visits increase karte hain, jo long-term loyalty me help karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A local pet supply store needs to attract new followers on Facebook. The owners have a blog post called 10 Healthy Treats Your Dog Will Love. What’s the best way to use this content to meet their goal?",
    "options": [
      "Email it only to their most loyal customers.",
      "Share it on Facebook with an engaging caption that encourages clicks.",
      "Use it as a loyalty reward for existing customers."
    ],
    "explanation": "Facebook followers badhane ke liye blog post ko engaging caption ke saath share karna best strategy hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A tech gadget company wants to inspire customers while showcasing product capabilities. What’s the best way to achieve both goals?",
    "options": [
      "Create only in-house promotional videos with scripted actors.",
      "Feature customer-submitted videos using the products in creative or adventurous ways.",
      "Publish a weekly blog post about company policies."
    ],
    "explanation": "Customer-submitted content authentic hota hai aur real-world use cases show karta hai, jo inspiration aur product showcase dono achieve karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A nonprofit’s campaign page has the headline Join Us, but donations are low. What change is most likely to improve results?",
    "options": [
      "Keep the headline vague to create curiosity.",
      "Replace the headline with a large logo.",
      "Rewrite the headline to include a specific benefit, like Join Us to Protect 1,000 Acres of Rainforest."
    ],
    "explanation": "Specific benefit-driven headline clear impact dikhata hai aur donation motivation increase karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A coffee subscription service wants more customers to sign up. Which approach should they use in their email subject line?",
    "options": [
      "Use a generic statement about coffee trends.",
      "Write a long paragraph explaining the subscription details.",
      "Create a call to action (CTA) that sparks curiosity and action, such as Discover Your Perfect Roast."
    ],
    "explanation": "Strong CTA curiosity create karta hai aur users ko action lene ke liye push karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A camera company wants to build community and authenticity. What should it do?",
    "options": [
      "Create an internal newsletter for employees only.",
      "Feature customer-shot adventure videos on the company Instagram page.",
      "Hire only professional photographers for campaigns."
    ],
    "explanation": "Customer content community build karta hai aur authenticity increase karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A skincare brand wants to encourage immediate purchases during a short campaign. What should they do?",
    "options": [
      "Run a 48-hour “Buy One, Get One Free” deal",
      "Publish weekly skincare tips on social media only",
      "Launch a year-long loyalty points program"
    ],
    "explanation": "Short campaign me urgency create karne ke liye limited-time offer best hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A marketing consultant wants to grow their email list. What should they do?",
    "options": [
      "Post only on social media without a sign-up link.",
      "Run paid ads with only a phone number listed.",
      "Offer a downloadable Social Media Strategy Checklist in exchange for an email address."
    ],
    "explanation": "Lead magnet (downloadable checklist) email list growth ke liye effective strategy hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A bakery wants to grow its customer base through word-of-mouth marketing. Which approach would be most effective?",
    "options": [
      "Only advertise inside the store with posters.",
      "Give customers a free pastry for every new customer they refer.",
      "Increase prices for loyal customers to boost revenue."
    ],
    "explanation": "Referral rewards word-of-mouth ko boost karte hain aur customer base grow karte hain.",
    "correctAnswer": [1]
  }
,
        {
    "question": "A fitness app uses automation to recommend workout plans. However, some users report receiving biased suggestions that don’t match their goals. What should the company do first?",
    "options": [
      "Limit the personalization to only premium users.",
      "Audit their AI system for bias and unintended consequences.",
      "Expand the range of workout templates available.",
      "Disable the recommendation engine entirely."
    ],
    "explanation": "Biased recommendations ka first step AI audit hota hai, taaki bias aur unintended issues identify aur fix kiye ja sake.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand is launching a campaign with an influencer whose audience perfectly aligns with the target market. What should the brand avoid to ensure that the collaboration feels authentic?",
    "options": [
      "Allowing the influencer to express their opinion within guidelines.",
      "Encouraging the influencer to reflect their natural communication style.",
      "Over-scripting the content to control messaging.",
      "Offering the influencer flexibility in tone and delivery."
    ],
    "explanation": "Over-scripting content authenticity ko damage karta hai aur audience ko fake collaboration feel hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A travel company wants to improve its return on marketing investment. Which approach uses personalization most effectively?",
    "options": [
      "Offering the same vacation package to all mailing list subscribers",
      "Sending destination offers based on past booking behavior",
      "Promoting luxury trips during peak travel seasons to all users",
      "Relying solely on social media influencers to generate leads"
    ],
    "explanation": "Past booking behavior ke basis par personalized offers ROI improve karte hain kyunki relevance zyada hoti hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A fashion brand wants to ensure that influencers follow campaign guidelines without damaging the authenticity of the content. What is the best strategy?",
    "options": [
      "Ban influencers from modifying any approved content.",
      "Allow influencers to express their opinions freely within brand guidelines.",
      "Avoid giving any guidance to protect influencer independence.",
      "Ask influencers to deliver identical talking points."
    ],
    "explanation": "Guidelines ke andar influencer ko flexibility dena authenticity aur brand consistency dono maintain karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketing manager wants to launch an influencer campaign to increase brand awareness. What should they define first to measure success?",
    "options": [
      "The number of followers the influencer gained last year",
      "Whether the influencer has used similar brand colors before",
      "The ideal number of hashtags to include in each post",
      "Clear goals and key performance indicators"
    ],
    "explanation": "Campaign success measure karne ke liye pehle clear goals aur KPIs define karna zaroori hota hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A brand wants to tailor its home page to show relevant offers to each visitor. What type of personalization strategy would best support this?",
    "options": [
      "Showing the same promotional banner to all site visitors",
      "Reposting trending content to increase general visibility",
      "Sending follow-up surveys after each site visit",
      "Real-time personalization using contextual and behavioral data"
    ],
    "explanation": "Real-time contextual + behavioral data use karke personalized homepage offers show karna best strategy hoti hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A startup wants to build trust with a new audience using influencer marketing. Which approach is most likely to support this goal?",
    "options": [
      "Paying influencers to use generic brand messaging in all posts",
      "Choosing influencers based on the number of sponsored posts they’ve done",
      "Partnering with influencers who have strong credibility in their niche",
      "Selecting influencers with the most visually polished content"
    ],
    "explanation": "Niche credibility wale influencers audience trust build karte hain aur brand ko authentic support milta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A business wants to connect with consumers who prioritize social values. What strategy aligns best with this goal?",
    "options": [
      "Support causes that align with audience values and communicate efforts transparently.",
      "Stay neutral on all public issues to avoid backlash.",
      "Focus entirely on promoting product discounts.",
      "Use influencer partnerships to mask social responsibility efforts."
    ],
    "explanation": "Audience values ke aligned causes ko support karna aur transparent communication trust aur loyalty build karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A real estate company wants to let buyers explore homes without visiting in person. Which technology would best support this initiative?",
    "options": [
      "Send PDF brochures with floorplans and prices.",
      "Use chatbots to describe home features via text.",
      "Create immersive home tours using VR.",
      "Require clients to schedule in-person appointments before seeing listings."
    ],
    "explanation": "VR immersive experience provide karta hai jisse buyers remotely homes explore kar sakte hain.",
    "correctAnswer": [2]
  },
  {
    "question": "An AI-driven marketing tool starts recommending inappropriate products to users. What’s the company’s ethical responsibility in this situation?",
    "options": [
      "Monitor outputs and make algorithmic adjustments as needed.",
      "Reduce personalization features to a bare minimum.",
      "Rebrand the recommendation engine to shift user perception.",
      "Ignore complaints unless they violate legal policies."
    ],
    "explanation": "AI recommendations ko continuously monitor karna aur issues fix karna company ki ethical responsibility hoti hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A content strategist wants to ensure that their new series of tutorials has a consistent tone and feel. How can a moodboard help support that goal?",
    "options": [
      "By offering keyword research and SEO suggestions.",
      "By recommending the best time of day to post content.",
      "By helping them organize design references that guide the overall look and atmosphere of the series.",
      "By creating dynamic subtitles in multiple languages."
    ],
    "explanation": "Moodboard visual elements, colors, fonts aur styles ko organize karta hai jo consistent tone aur feel banane me help karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A fashion brand is active on multiple platforms with different formats and audiences. What’s the best way to maintain a clear visual brand identity across all of them?",
    "options": [
      "Eliminate logos and branded elements to blend into each feed.",
      "Adapt content to each platform while keeping consistent core visual elements.",
      "Use completely different visuals on each platform to match trends.",
      "Let each platform develop its own identity over time."
    ],
    "explanation": "Platform ke hisaab se adapt karna zaroori hai, lekin core visual identity consistent rehni chahiye.",
    "correctAnswer": [1]
  },
  {
    "question": "A content creator wants to ensure their original work can be identified even if it gets shared widely. What can they do to promote ethical sharing and attribution?",
    "options": [
      "Avoid posting finished content on public platforms.",
      "Add a vague caption asking viewers not to steal content.",
      "Let others repost as long as they tag the creator.",
      "Enable Content Credentials to include creator name and attribution data in the file."
    ],
    "explanation": "Content Credentials file ke andar hi creator aur attribution data embed kar deta hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A nonprofit is posting regularly on social media but notices little engagement. What’s the most likely reason their content isn’t resonating?",
    "options": [
      "They haven’t clearly defined who their audience is or what matters to them.",
      "They’re posting too often for a nonprofit organization.",
      "They’re limiting their posts to one platform.",
      "They’re using too many audience insights in each post."
    ],
    "explanation": "Clear audience definition ke bina content relevant nahi lagta, isliye engagement low hoti hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A creator wants to improve their content strategy by analyzing what types of posts their followers engage with most. What’s the best way to use audience feedback for this purpose?",
    "options": [
      "Avoid checking performance data to stay creatively uninfluenced.",
      "Focus solely on the content that was most fun to make.",
      "Study past posts to identify what types of content, visuals, or messages perform best.",
      "Change the content weekly to avoid repetition, regardless of performance."
    ],
    "explanation": "Past performance data se ye pata chalta hai kaunsa content audience ko pasand aa raha hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A growing wellness brand wants to connect with an audience that values transparency and purpose. What strategy would best support authentic messaging?",
    "options": [
      "Align the brand’s content with shared audience values and speak in a natural, human voice.",
      "Hire a content agency to craft highly promotional posts.",
      "Use technical jargon to sound more expert and serious.",
      "Keep messaging neutral to avoid alienating potential customers."
    ],
    "explanation": "Authenticity tab aati hai jab brand audience ke values se align karta hai aur natural tone use karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A startup wants to boost its social media engagement. What’s the best way to align their posting strategy with user behavior?",
    "options": [
      "Share long captions instead of using platform features like Reels or Stories.",
      "Analyze when their audience is most active and post content to fit into their daily routines.",
      "Focus on frequent posts without considering audience preferences.",
      "Post all content during traditional business hours for consistency."
    ],
    "explanation": "Audience jab active hoti hai tab post karna engagement maximize karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A photojournalist is preparing a series of images for publication and wants to support transparency about their work. What feature of Content Credentials helps achieve this?",
    "options": [
      "Auto-generated captions designed to match audience preferences",
      "Publishing images in low resolution to prevent scrutiny",
      "A filter that automatically hides sensitive image data",
      "Verifiable content history, including capture details and edit history"
    ],
    "explanation": "Content Credentials ka verifiable history transparency aur trust build karta hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A barista wants to build a personal brand by sharing their passion for coffee online. What’s a helpful strategy to grow this into a side hustle?",
    "options": [
      "Keep content unrelated to coffee to stay flexible.",
      "Avoid posting until they launch a website.",
      "Mostly repost coffee memes from other accounts.",
      "Post videos or tutorials that showcase their expertise."
    ],
    "explanation": "Expertise dikhane se authority aur audience trust build hota hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A creator is using AI-generated visuals and voiceovers in their content but wants to maintain credibility with their audience. What’s the best practice in this case?",
    "options": [
      "Use deepfakes to generate engagement without disclosing them.",
      "Rely only on virtual influencers to represent their brand.",
      "Avoid discussing AI to prevent distracting the audience.",
      "Focus on authenticity and be transparent about AI use when appropriate."
    ],
    "explanation": "Transparency audience ke trust aur credibility ko maintain karti hai.",
    "correctAnswer": [3]
  },
      {
    "question": "A new skincare brand wants to increase visibility before launch. Which action would most likely capture the attention of the brand’s target audience?",
    "options": [
      "Send personalized follow-up emails to past customers.",
      "Offer a loyalty program to repeat buyers.",
      "Partner with influencers to create shareable content on social media."
    ],
    "explanation": "Awareness stage me influencers brand visibility aur reach increase karte hain, jo attention capture karne ka best way hai.",
    "correctAnswer": [2]
  },
  {
    "question": "An online fitness platform experiences high traffic to its workout library page but few sign-ups. What should the company do to strengthen interest?",
    "options": [
      "Post only product announcements on social media.",
      "Limit free content to one workout per month.",
      "Add personalized workout recommendations based on browsing."
    ],
    "explanation": "Interest stage me personalization users ko engaged rakhta hai aur sign-up ke chances badhata hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A software company offers free webinars to compare solutions and answer questions. How does this support the consideration stage?",
    "options": [
      "It shortens onboarding without explaining benefits.",
      "It provides value and builds trust while showcasing expertise.",
      "It focuses on impulse buying rather than informed decisions."
    ],
    "explanation": "Consideration stage me customers compare karte hain, webinars trust aur value provide karke decision-making me help karte hain.",
    "correctAnswer": [1]
  },
  {
    "question": "An electronics store has customers who are comparing prices and features but haven’t purchased yet. What’s the best way to move them to intent?",
    "options": [
      "Offer a limited-time bundle with added value.",
      "Focus only on unrelated blog content.",
      "Remove product details to create urgency."
    ],
    "explanation": "Intent stage me urgency + extra value customers ko purchase ke liye ready karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "An online retailer wants to increase conversions at checkout. Which action would have the greatest impact in the purchase stage?",
    "options": [
      "Add pop-ups promoting unrelated blog posts.",
      "Simplify the checkout process to reduce clicks.",
      "Delay showing shipping costs until after payment."
    ],
    "explanation": "Purchase stage me friction reduce karna sabse important hota hai. Simple checkout conversions badhata hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A clothing retailer wants to increase repeat purchases. Which approach best supports post-purchase engagement?",
    "options": [
      "Send personalized style suggestions based on past purchases.",
      "Send only generic ads unrelated to purchase history.",
      "Ignore customers until the next seasonal sale."
    ],
    "explanation": "Post-purchase stage me personalized recommendations loyalty aur repeat purchases increase karte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "An eco-friendly cleaning brand wants customers to keep buying and promoting the brand. Which program would help most?",
    "options": [
      "Offer one-time discounts without follow-up.",
      "Introduce a points-based loyalty program with exclusive perks.",
      "Randomly change reward structures each month."
    ],
    "explanation": "Loyalty programs customers ko retain karte hain aur advocacy/referrals encourage karte hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A nonprofit wants supporters to connect emotionally with its mission. Which content type would best create emotional ROI?",
    "options": [
      "Stories of individuals whose lives were changed by donations.",
      "Generic thank-you messages without personalization.",
      "Detailed spreadsheets showing donations."
    ],
    "explanation": "Emotional ROI ke liye storytelling sabse effective hoti hai, jo emotional connection create karti hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A retailer is running ads but not seeing conversions. What’s the most likely funnel issue?",
    "options": [
      "The retailer avoids any engagement after purchase.",
      "Awareness stage content is too focused on closing the sale.",
      "The retailer provides too much educational content in the interest stage."
    ],
    "explanation": "Awareness stage me direct selling push karna audience ko repel kar deta hai. Har stage ka proper messaging zaroori hai.",
    "correctAnswer": [1]
  },
  {
    "question": "Your marketing team uses a generative AI funnel analysis to detect that customers are disengaging at the consideration stage. Which action would best use these AI insights to improve conversions?",
    "options": [
      "Ignore the AI findings and continue with the current generic strategy.",
      "Show unrelated promotions to capture attention.",
      "Personalize product recommendations and address objections through targeted content."
    ],
    "explanation": "AI insights ka best use personalization aur objection handling me hota hai, jo consideration stage drop-off reduce karta hai.",
    "correctAnswer": [2]
  },
   {
    "question": "After running an A/B test on two landing page versions, the team sees higher click-through rates but no improvement in conversions. What should they do next?",
    "options": [
      "Evaluate and revise the landing page content.",
      "Rerun the test with the same design.",
      "Change the campaign’s KPI targets.",
      "Focus solely on increasing email open rates."
    ],
    "explanation": "High CTR but low conversions usually means landing page content ya UX issue hai, jise optimize karna next logical step hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A food delivery company wants to offer free delivery to users near their restaurant during peak hours. What strategy should they use to deliver this personalized, timely offer?",
    "options": [
      "General email campaigns",
      "Seasonal blog content",
      "Geolocated marketing",
      "Influencer endorsements"
    ],
    "explanation": "Location aur time ke basis par offers dena geolocated marketing ka use case hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A brand wants to improve accessibility and SEO by making its images more understandable to both users and search engines. What should the marketing team do?",
    "options": [
      "Add descriptive alt tags to all images.",
      "Replace all images with large text blocks.",
      "Use filenames like_image1.jpg_for faster loading.",
      "Remove all images to reduce distractions."
    ],
    "explanation": "Alt tags accessibility aur SEO dono ke liye essential hote hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A team reviews their latest data report and notices that video posts consistently outperform text posts in terms of audience interaction. What should they do based on this insight?",
    "options": [
      "Replace all video content with static images.",
      "Shift resources toward creating more video content.",
      "Stop all text content production immediately.",
      "Remove performance tracking to simplify content planning."
    ],
    "explanation": "Data-driven decision ka matlab hai jo format perform kar raha hai usme investment badhana.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketing analyst notices that while their campaign generates many visitors, most of them leave the website after viewing only one page. Which KPI should the analyst examine to assess this issue?",
    "options": [
      "Conversion rate",
      "Customer lifetime value",
      "Bounce rate",
      "Click-through rate"
    ],
    "explanation": "Single-page visit ke baad exit ko bounce rate measure karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A stakeholder asks for proof that the marketing campaign delivered strong results. Which benefit of using KPIs does this situation reflect?",
    "options": [
      "KPIs eliminate the need for stakeholder updates.",
      "KPIs identify new campaign topics.",
      "KPIs help personalize the customer journey.",
      "KPIs provide a quantifiable way to demonstrate the success of marketing efforts."
    ],
    "explanation": "KPIs measurable numbers provide karte hain jo campaign success ko clearly show karte hain.",
    "correctAnswer": [3]
  },
  {
    "question": "A marketing team wants to increase conversions by tailoring messages to different audience groups based on their behaviors and preferences. Which strategy should they use?",
    "options": [
      "Scheduling identical posts at random times",
      "Running the same message across all demographics",
      "Increasing the campaign budget across all platforms",
      "Audience segmentation and personalization"
    ],
    "explanation": "Behavior aur preference ke basis par messaging tailor karna personalization strategy hoti hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A campaign manager wants to make sure their advertising budget is spent on the most effective channels. What should they use data for in this case?",
    "options": [
      "Use audience polls instead of behavioral data.",
      "Identify high-converting audiences and focus spend accordingly.",
      "Distribute budget evenly across all platforms by default.",
      "Choose the cheapest platforms regardless of performance."
    ],
    "explanation": "Performance data se pata chalta hai kaunse audiences aur channels best convert kar rahe hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A digital marketing manager needs to evaluate the long-term financial value a customer brings to the business. Which KPI should they use?",
    "options": [
      "Bounce rate",
      "Click-through rate (CTR)",
      "Customer lifetime value (CLV)",
      "Conversion rate"
    ],
    "explanation": "Customer ke long-term revenue contribution ko CLV measure karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A campaign is driving traffic to the site, but analytics reveal a high bounce rate and minimal time spent on landing pages. What’s the best next step for the team to take?",
    "options": [
      "Add urgency to the email subject lines.",
      "Improve landing page content and design.",
      "Launch a retargeting campaign immediately.",
      "Adjust targeting parameters in ad sets."
    ],
    "explanation": "High bounce aur low time ka matlab landing page experience weak hai, jise improve karna zaroori hai.",
    "correctAnswer": [1]
  },
      {
    "question": "Which of the following best explains a key difference between search ads and display ads?",
    "options": [
      "Display ads don’t require a call-to-action.",
      "Search ads rely on keyword intent, while display ads rely on visual appeal.",
      "Search ads appear in videos, while display ads show in emails.",
      "Display ads have higher click-through rates than search ads."
    ],
    "explanation": "Search ads user ke intent (keywords) par based hote hain, jabki display ads visual appeal aur awareness ke liye hote hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketer segments leads by how engaged they are with previous emails and website visits. What’s the goal of this strategy?",
    "options": [
      "To qualify leads for influencer partnerships.",
      "To eliminate inactive users from the list.",
      "To tailor content delivery and improve conversion chances.",
      "To reduce bounce rate from landing pages."
    ],
    "explanation": "Engagement-based segmentation ka goal personalized content deliver karke conversion improve karna hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A brand tracks how many visitors come back to their site repeatedly. Which metric are they measuring?",
    "options": [
      "SEO score.",
      "ROI.",
      "Retention rate.",
      "Conversion rate."
    ],
    "explanation": "Repeat visitors ko measure karna retention rate ke under aata hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A brand’s global campaign is misunderstood in a specific region due to poor translation and tone. What should it have done differently?",
    "options": [
      "Invested in a celebrity endorsement.",
      "Tested messages across cultures before launch.",
      "Posted the same message across all channels without adjustments.",
      "Used slang to feel more authentic."
    ],
    "explanation": "Cultural testing se pehle hi tone aur translation issues catch ho jaate hain.",
    "correctAnswer": [1]
  },
  {
    "question": "What does the SMART framework help marketers do?",
    "options": [
      "Write blog posts that rank well.",
      "Determine target audience emotions.",
      "Set goals that are specific, measurable, achievable, relevant, and time-bound.",
      "Launch ads across multiple channels."
    ],
    "explanation": "SMART framework ka use clear aur achievable goals set karne ke liye hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A marketer wants to deliver lead-generation ads that allow users to submit contact info directly inside a platform like Facebook. What strategy should they use?",
    "options": [
      "SMS opt-ins.",
      "Display ads with external landing pages.",
      "Organic blog content.",
      "Facebook lead-gen ads."
    ],
    "explanation": "Facebook lead-gen ads in-platform form fill karne ka option dete hain.",
    "correctAnswer": [3]
  },
  {
    "question": "Why is a multichannel marketing approach more effective than using a single platform?",
    "options": [
      "It increases content cost efficiency by default.",
      "It eliminates the need for goal-setting.",
      "It increases reach by engaging audiences across more digital touchpoints.",
      "It requires fewer creative assets."
    ],
    "explanation": "Multiple touchpoints par audience ko reach karna multichannel ka biggest advantage hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A brand reviews Google Ads performance and discovers one ad is converting at a much higher rate than the others. What’s the next best step?",
    "options": [
      "Pause all other ads immediately.",
      "Increase the bid amount across the board.",
      "Replace visual assets with generic graphics.",
      "Use A/B testing to compare creative elements and optimize results."
    ],
    "explanation": "A/B testing se pata chalta hai kaunsa creative element better perform kar raha hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A marketer sends emails with product suggestions based on a user’s browsing history. What tactic are they using?",
    "options": [
      "Dynamic content.",
      "Manual scheduling.",
      "Static segmentation.",
      "Cold outreach."
    ],
    "explanation": "User behavior ke basis par content change hona dynamic content kehlata hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A brand publishes a blog post, which gets shared on social media and then promoted via a paid ad. What strategy is this an example of?",
    "options": [
      "Integrating owned, earned, and paid media.",
      "Segmenting display and search media.",
      "Relying solely on earned outreach.",
      "Creating UGC campaigns only."
    ],
    "explanation": "Blog (owned), shares (earned), aur ads (paid) — teeno ka integration ho raha hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A smartphone brand designs ads for customers aged 18–25, highlighting gaming features. Which segmentation type would best fit this approach?",
    "options": [
      "Behavioral segmentation.",
      "Demographic segmentation.",
      "Psychographic segmentation."
    ],
    "explanation": "Yahan segmentation age group (18–25) ke basis par ho rahi hai, jo demographic variable hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A skincare brand markets different sunscreen products to customers in their 20s, 40s, and 60s. What type of segmentation does this illustrate?",
    "options": [
      "Behavioral segmentation.",
      "Geographic segmentation.",
      "Demographic segmentation."
    ],
    "explanation": "Age-based product targeting demographic segmentation ka example hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A software company is reviewing its Remote-working Rachel persona before launching a new product. What’s the best first step to ensure that the persona is still accurate?",
    "options": [
      "Update the persona with recent customer research.",
      "Ignore the persona and focus on the product’s features.",
      "Base the persona only on one team member’s opinion."
    ],
    "explanation": "Personas ko hamesha updated customer research ke saath validate karna chahiye.",
    "correctAnswer": [0]
  },
  {
    "question": "A sports brand wants its ads to resonate with Active Andy, the brand’s most engaged customer type. What’s the first step to ensure that the messaging connects?",
    "options": [
      "Launch a new campaign without research.",
      "Guess what Andy might like based on trends.",
      "Review Andy’s persona profile to align messaging with his interests and needs."
    ],
    "explanation": "Effective messaging ke liye persona ke interests, needs aur motivations samajhna zaroori hota hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A restaurant owner sees that behind-the-scenes stories get more responses than menu specials. What change would most likely increase engagement?",
    "options": [
      "Post the same type of specials without changes.",
      "Eliminate all behind-the-scenes posts.",
      "Share more behind-the-scenes content while integrating specials naturally."
    ],
    "explanation": "Jo content audience ko engage karta hai, usko zyada use karna best strategy hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A mobile app team sees that new users often drop off during onboarding. Which step would most likely help improve completion rates?",
    "options": [
      "Streamline onboarding into short, interactive steps.",
      "Extend the onboarding process with more detailed tutorials.",
      "Leave the onboarding process exactly as it is."
    ],
    "explanation": "Simple aur interactive onboarding user drop-off kam karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A clothing retailer sells directly to individual shoppers online and in-store. What’s the correct marketing type for this scenario?",
    "options": [
      "C2B.",
      "B2C.",
      "B2B."
    ],
    "explanation": "Business directly consumers ko sell kar raha hai, jo B2C model hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "An online resale marketplace enables customers to buy and sell clothing directly with one another. Which model is this an example of?",
    "options": [
      "C2C.",
      "B2C.",
      "B2B."
    ],
    "explanation": "Customers ke beech direct buying aur selling C2C model hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "An apparel company wants to appeal to indigenous communities. Which approach would build the strongest relationships?",
    "options": [
      "Collaborate with community members in product design.",
      "Avoid acknowledging cultural traditions entirely.",
      "Copy traditional designs without permission."
    ],
    "explanation": "Collaboration aur respect trust aur long-term relationship build karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A fashion brand is criticized online for an ad that unintentionally stereotypes a cultural group. What’s the best first step?",
    "options": [
      "Delete the ad quietly and ignore questions.",
      "Continue running the ad until the campaign ends.",
      "Issue a public apology and outline corrective actions."
    ],
    "explanation": "Transparency aur accountability culturally sensitive situations me sabse zaroori hoti hai.",
    "correctAnswer": [2]
  },
 {
    "question": "A shopper clicks an Instagram ad, receives a follow-up email, and later visits the store. The brand uses their data to deliver a continuous, connected experience. What marketing approach does this represent?",
    "options": [
      "Multichannel marketing.",
      "Omnichannel marketing.",
      "Influencer strategy.",
      "Event-based automation."
    ],
    "explanation": "Customer data ko use karke multiple touchpoints par seamless experience dena omnichannel marketing hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A wellness brand develops a long-form blog on stress management. They later break it into Instagram quotes, a TikTok tip video, and an email summary. What technique are they using?",
    "options": [
      "Content atomization.",
      "Persona mapping.",
      "Direct response marketing.",
      "Vertical integration."
    ],
    "explanation": "Ek long content ko multiple smaller platform-specific pieces me todna content atomization kehlata hai.",
    "correctAnswer": [0]
  },
  {
    "question": "Market research reveals that a fitness brand’s audience is increasingly focused on mental health. How can the company use this insight effectively?",
    "options": [
      "Rebrand to eliminate wellness content.",
      "Integrate messaging around holistic wellness.",
      "Focus messaging only on physical strength.",
      "Increase ad frequency on unrelated channels."
    ],
    "explanation": "Audience insight ko follow karte hue holistic wellness messaging add karna sabse effective response hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand planning a multichannel campaign wants to ensure that messaging stays consistent across social media, email, and their website. Which strategy supports this goal?",
    "options": [
      "Integrated content strategy.",
      "Retargeting automation.",
      "Funnel segmentation.",
      "Inbound content stacking."
    ],
    "explanation": "Integrated content strategy ensure karti hai ki messaging sab channels par consistent rahe.",
    "correctAnswer": [0]
  },
  {
    "question": "A marketer notices that their company’s competitor thrives on Instagram but rarely posts on LinkedIn. How can the marketer turn this into an advantage?",
    "options": [
      "Pause all competitive analysis and wait for new trends.",
      "Use the same visuals with updated captions.",
      "Promote only one channel aggressively.",
      "Build a content strategy that fills the LinkedIn gap."
    ],
    "explanation": "Competitor ke weak channel ko target karna strategic advantage deta hai.",
    "correctAnswer": [3]
  },
  {
    "question": "What’s the main benefit of using market research tools like BuzzSumo or SEMrush in competitive analysis?",
    "options": [
      "They automatically create ads.",
      "They block competitor ads from search results.",
      "They replace the need for surveys.",
      "They reveal competitor content performance and audience engagement."
    ],
    "explanation": "Ye tools competitors ke content performance aur audience engagement ke insights dete hain.",
    "correctAnswer": [3]
  },
  {
    "question": "What is one major risk of not collaborating across content, design, and product teams?",
    "options": [
      "Fragmented messaging across platforms.",
      "Duplicate posts on a single platform.",
      "Limited campaign budget usage.",
      "Too much brand consistency."
    ],
    "explanation": "Teams ke beech collaboration na hone se messaging fragmented ho jati hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A clothing brand launches email and social campaigns with tailored content, but customers don’t experience a unified brand journey. What type of marketing is this?",
    "options": [
      "Omnichannel marketing.",
      "Multichannel marketing.",
      "Experiential marketing.",
      "Sequential messaging."
    ],
    "explanation": "Multiple channels use ho rahe hain par unified journey nahi hai — ye multichannel marketing hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand creates surveys to gather direct input and uses Google Trends for broader insights. What research methods are they combining?",
    "options": [
      "Funnel-based and algorithmic.",
      "Primary and secondary.",
      "Segmented and behavioral.",
      "Paid and organic."
    ],
    "explanation": "Surveys = primary research, Google Trends = secondary research.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketing team finds that their blog content generates strong engagement, but they aren’t sure which parts are most effective. What should they do next?",
    "options": [
      "Use analytics to measure what’s working and then iterate based on performance.",
      "Repost old content without changes.",
      "Replace blogs with paid ad campaigns.",
      "Publish only on trending platforms."
    ],
    "explanation": "Analytics ke through performance measure karke content optimize karna best next step hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A startup is launching a new eco-friendly water bottle. The marketing team wants it to stand out in a crowded market. Which step should they take first to set the product up for success?",
    "options": [
      "Conduct customer research to understand the design, features, and benefits the audience values most.",
      "Copy the design of the best-selling competitor bottle.",
      "Release the product without research to save time."
    ],
    "explanation": "Product success ka pehla step hota hai customer research. Ye ensure karta hai ki product real audience needs se aligned ho.",
    "correctAnswer": [0]
  },
  {
    "question": "A company wants its new app to gain users quickly in a competitive space. What pricing approach would help the company build a strong early customer base?",
    "options": [
      "Penetration pricing with low or free introductory offers.",
      "Match competitor prices exactly.",
      "Skimming pricing to maximize early profits."
    ],
    "explanation": "Penetration pricing entry barrier kam karta hai aur fast user adoption me help karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A farm-to-table restaurant needs to reach more customers who can’t dine in. Which distribution change could help the restaurant serve a wider audience?",
    "options": [
      "Only serve food in their physical location.",
      "Partner with local delivery apps to reach customers at home.",
      "Offer delivery only on weekends."
    ],
    "explanation": "Delivery apps ke saath partnership distribution (Place) ko expand karti hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A small theater wants to boost ticket sales for an upcoming play. Which promotional effort would most likely increase audience turnout?",
    "options": [
      "Avoid marketing to keep costs down.",
      "Release behind-the-scenes videos and cast interviews on social media.",
      "Place a single ad in a local newspaper."
    ],
    "explanation": "Behind-the-scenes content emotional engagement aur excitement build karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A gym wants to sign up more members during January. Which marketing tactic could help the marketing team take advantage of New Year’s resolutions?",
    "options": [
      "Post one generic ad with no time limit.",
      "Offer a New Year’s special and promote it heavily on social media and locally.",
      "Avoid promotions to maintain exclusivity."
    ],
    "explanation": "Seasonal urgency + targeted promotion New Year resolutions ka best use karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A toy company wants to release a holiday special edition. How could it increase the chances of high seasonal sales?",
    "options": [
      "Launch the product after the holiday season.",
      "Research popular trends and design toys that match seasonal interests.",
      "Avoid advertising to save costs."
    ],
    "explanation": "Seasonal trends ke according product design demand ko directly impact karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A bakery wants to sell more during slow afternoons. Which change to pricing could help move more products during off-peak hours?",
    "options": [
      "Increase prices in the afternoon.",
      "Offer afternoon-only discounts on pastries.",
      "Keep prices the same and hope for more sales."
    ],
    "explanation": "Off-peak discounts demand ko stimulate karte hain without affecting peak hours.",
    "correctAnswer": [1]
  },
  {
    "question": "A clothing brand wants to reach college students directly. Which placement method would make it easiest for students to buy the products?",
    "options": [
      "Set up pop-up shops on campus during student events.",
      "Rely on students finding their main store downtown.",
      "Only sell through luxury malls far from campus."
    ],
    "explanation": "Campus pop-ups convenience aur visibility dono provide karte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A local festival organizer wants to increase attendance at next year’s event. How could they encourage more people to commit early?",
    "options": [
      "Announce the event only one week before it starts.",
      "Keep all event details vague until opening day.",
      "Start early promotion with highlights from past events and early ticket discounts."
    ],
    "explanation": "Early promotion + social proof + discounts early commitment badhate hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A travel agency is launching a summer vacation promotion. Which promotional asset would best convey its adventurous, premium brand across social media, email, and print ads?",
    "options": [
      "A text-only social media post listing trip prices",
      "A short video montage of luxury destinations with the tagline Adventure Awaits, used in both digital and print materials",
      "A local classified ad with no images or branding"
    ],
    "explanation": "Visual storytelling premium aur adventurous brand image ko strongly communicate karta hai.",
    "correctAnswer": [1]
  }
,

{
    "question": "A small business owner wants to create social media copy that connects with their audience. They’re unsure how to describe their tone. What’s the best first step they should take?",
    "options": [
      "Ask close friends or colleagues to describe their brand in 3–5 words.",
      "Choose a few trending hashtags that match their industry.",
      "Research the top-performing memes in their market"
    ],
    "explanation": "Brand tone define karne ke liye sabse pehla step hota hai brand perception samajhna. Close log authentic feedback de sakte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A wellness coach wants to grow her audience by publishing weekly blog posts. She doesn’t want them to feel like sales pitches, but she still wants to strengthen her business over time. What should she focus on to achieve this?",
    "options": [
      "Post more often than her competitors, regardless of quality.",
      "Create valuable content that builds trust and loyalty by offering value beyond selling.",
      "Avoid all paid marketing efforts."
    ],
    "explanation": "Content marketing ka core idea hai pehle value dena, trust build karna, phir business grow hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A travel agency launches an interactive What’s Your Perfect Adventure? quiz. The owners want to keep potential customers engaged until they’re ready to book. What’s the best next step?",
    "options": [
      "Offer a 50% discount to all quiz participants immediately.",
      "Email personalized trip ideas to participants based on their quiz results.",
      "Send a generic brochure with all available trips."
    ],
    "explanation": "Personalized follow-ups engagement badhate hain aur customers ko naturally funnel me aage le jaate hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A software company wants to be recognized as a go-to authority in its field. Which approach would best achieve this?",
    "options": [
      "Limit online content to product pricing pages.",
      "Offer free webinars, guides, and templates that solve customer challenges.",
      "Run daily flash sales on all products."
    ],
    "explanation": "Authority tab banti hai jab brand logon ki real problems solve karta hai through educational content.",
    "correctAnswer": [1]
  },
  {
    "question": "A personal finance blog notices that readers rarely click on articles. The writer wants to increase engagement. What’s the best action to take?",
    "options": [
      "Keep headlines as short as possible without giving details.",
      "Use all capital letters to grab attention.",
      "Write specific, relatable headlines that promise a solution."
    ],
    "explanation": "Clear aur benefit-driven headlines users ko click karne ke liye motivate karte hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A fitness app wants to increase free trial sign-ups. Which CTA should they use?",
    "options": [
      "Start Your 7-Day Personal Training Plan Now",
      "Learn More",
      "Click Here"
    ],
    "explanation": "Strong CTA specific, action-oriented aur value clearly batata hai.",
    "correctAnswer": [0]
  },
  {
    "question": "An outdoor gear brand wants to create deeper emotional connections with its audience. What should the marketing team do?",
    "options": [
      "Publish only technical product manuals.",
      "Run a limited-time flash sale on tents.",
      "Produce a documentary on the lives of mountain guides who use their gear."
    ],
    "explanation": "Storytelling emotional connection build karta hai jo sirf discounts ya manuals nahi kar sakte.",
    "correctAnswer": [2]
  },
  {
    "question": "A software company wants potential customers to try its premium plan before committing. What’s the best promotion for the company to use?",
    "options": [
      "Send a survey asking why people haven’t purchased.",
      "Offer a free one-month trial so customers can experience value risk-free.",
      "Post blog content about the product’s features."
    ],
    "explanation": "Free trials risk kam karte hain aur users ko real value experience karne dete hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A tech brand wants to position itself as an authority in cybersecurity while building trust. What should the marketing team do?",
    "options": [
      "Publish blogs, videos, and webinars on cybersecurity best practices.",
      "Mail printed brochures to random households.",
      "Offer a flash sale on security software."
    ],
    "explanation": "Educational content trust aur authority dono build karta hai, especially cybersecurity jaise field me.",
    "correctAnswer": [0]
  },
  {
    "question": "A local bookstore wants to increase sales of a new novel by a popular author. What’s the best promotional tactic to use?",
    "options": [
      "Send a generic monthly newsletter mentioning the book in passing.",
      "Post a single photo of the book on social media without context.",
      "Host an in-store signing event and offer a limited-time discount on the book."
    ],
    "explanation": "Experience + urgency + promotion milke sabse strong impact create karte hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A content creator wants to use a stock photo in a paid ad campaign that will reach over 1 million impressions. Which license do they need to ensure proper use?",
    "options": [
      "Limited License — Adobe Express",
      "Creative Commons License",
      "Standard License",
      "Enhanced License"
    ],
    "explanation": "High-reach paid campaigns ke liye enhanced license required hota hai, especially large-scale distribution ke cases me.",
    "correctAnswer": [3]
  },
  {
    "question": "A customer repeatedly messages a brand account about a complex billing issue. What’s the best approach for resolution?",
    "options": [
      "Post a generic FAQ in response.",
      "Continue responding in public threads.",
      "Stop responding after one reply.",
      "Transition the conversation to direct messages or email."
    ],
    "explanation": "Complex aur sensitive issues private channel (DM/email) me handle karna best practice hoti hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A social media intern is unsure whether they can reuse a trending image found online. What should they do first?",
    "options": [
      "Use the image and credit the creator later.",
      "Crop and filter the image to change its appearance.",
      "Confirm the licensing rights or get permission from the source.",
      "Assume social media content is fair use."
    ],
    "explanation": "Image reuse se pehle licensing ya permission confirm karna legal aur ethical dono ke liye zaroori hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A social media creator is working on a high-volume campaign and wants to streamline bulk asset creation using AI tools. What's the best way to approach this in Adobe Express?",
    "options": [
      "Use the Adobe Firefly Bulk Create feature by uploading a spreadsheet with variables.",
      "Use Adobe Photoshop and paste assets into each frame.",
      "Manually duplicate and edit each design variation.",
      "Rebuild templates daily from scratch."
    ],
    "explanation": "Firefly Bulk Create automation ke through large-scale variations fast generate karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A brand manager notices a meme circulating that misrepresents one of their posts, potentially harming the brand’s reputation. How should they respond?",
    "options": [
      "Acknowledge the issue and clarify the intended message.",
      "Immediately block all users sharing the meme.",
      "Ignore the meme and hope it dies down.",
      "Post aggressively to counter the backlash."
    ],
    "explanation": "Clear, calm clarification trust rebuild karta hai aur reputation damage control me help karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A freelancer working on client content is unsure whether an image from a stock library can be used to sell merchandise. How should they proceed?",
    "options": [
      "Review the stock license type and ensure that it allows merchandise use.",
      "Include a disclaimer noting that the image is stock.",
      "Apply a filter to make the image appear original.",
      "Use the image as long as the client approves."
    ],
    "explanation": "Merchandise use often restricted hota hai, isliye license terms carefully review karna mandatory hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A content strategist is building a campaign using AI-generated content. They want to make sure their audience knows what was AI-assisted. What can help them communicate this clearly?",
    "options": [
      "Watermark every image with “AI.”",
      "Avoid telling the audience to maintain consistency.",
      "Mention it casually in the caption.",
      "Use Content Credentials to tag posts with AI usage metadata."
    ],
    "explanation": "Content Credentials AI usage ko transparent aur verifiable way me communicate karta hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A junior designer asks how Adobe Firefly knows how to create specific aesthetics based on user inputs. What foundational component enables this?",
    "options": [
      "AI training datasets",
      "Public-facing content",
      "Plugin interfaces",
      "User licenses"
    ],
    "explanation": "Firefly ko aesthetics samajhne ki ability AI training datasets se aati hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A campaign manager wants to design platform-specific content faster without starting from scratch each time. What can help streamline this?",
    "options": [
      "Schedule only one post and repost it daily.",
      "Download static ad designs and crop them for each platform.",
      "Use the Remix tool to duplicate competitor content.",
      "Use AI-generated templates and tweak them to match voice and visuals."
    ],
    "explanation": "AI templates fast creation allow karte hain while keeping brand consistency.",
    "correctAnswer": [3]
  },
  {
    "question": "A content manager wants to create quick visuals for early feedback before launching a campaign. How can AI help?",
    "options": [
      "Wait until professional photos are finalized before pitching.",
      "Design layouts by hand and scan them as PDFs.",
      "Use AI to generate mockups or concept images for internal review.",
      "Use stock images from old campaigns without changes."
    ],
    "explanation": "AI-generated mockups early-stage ideation aur feedback ke liye perfect hote hain.",
    "correctAnswer": [2]
  },





  
  {
    "question": "A company uses AI-driven personalization to recommend products, but wants to avoid ethical missteps while maintaining innovation. Which approach best reflects responsible marketing innovation?",
    "options": [
      "Offering clear opt-in and opt-out choices for data tracking",
      "Keeping personalization algorithms private to maintain competitive advantage",
      "Collecting as much data as possible to refine user profiles",
      "Automating every decision-making process without manual oversight"
    ],
    "explanation": "Responsible AI marketing ka base transparency aur user consent hota hai. Opt-in/opt-out options dena ethical personalization ko support karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A wellness influencer receives a partnership offer from a fast-food brand. Which best explains why this collaboration could harm both parties?",
    "options": [
      "The brand has a smaller marketing budget than expected.",
      "The influencer uses multiple social platforms.",
      "The brand and influencer audiences are misaligned.",
      "The influencer hasn’t posted sponsored content before."
    ],
    "explanation": "Influencer marketing me authenticity important hoti hai. Agar influencer aur brand ka audience match nahi karta, trust aur engagement dono damage ho sakte hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A travel company wants to improve its return on marketing investment. Which approach uses personalization most effectively?",
    "options": [
      "Sending destination offers based on past booking behavior",
      "Promoting luxury trips during peak travel seasons to all users",
      "Relying solely on social media influencers to generate leads",
      "Offering the same vacation package to all mailing list subscribers"
    ],
    "explanation": "Past booking behavior ke basis pe offers dena highly relevant personalization hai, jo ROI improve karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A fitness brand is choosing influencers for an upcoming campaign. What approach best supports authenticity and ethical collaboration?",
    "options": [
      "Choose influencers based only on follower count.",
      "Script influencer content word-for-word to ensure brand control.",
      "Select influencers with consistent messaging and values aligned to the brand.",
      "Hire influencers based on recent viral posts, regardless of topic."
    ],
    "explanation": "Brand aur influencer values aligned honi chahiye. Ye collaboration ko authentic banata hai aur audience trust maintain karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A marketing manager wants to launch an influencer campaign to increase brand awareness. What should they define first to measure success?",
    "options": [
      "Whether the influencer has used similar brand colors before",
      "Clear goals and key performance indicators",
      "The ideal number of hashtags to include in each post",
      "The number of followers the influencer gained last year"
    ],
    "explanation": "Campaign success measure karne ke liye pehle objectives aur KPIs define karna zaroori hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A retail brand wants to launch a segmented email campaign to improve engagement. What type of data should they use to group customers meaningfully?",
    "options": [
      "Demographic or behavioral data such as age or browsing habits",
      "General data trends found in competitor email campaigns",
      "The average length of customer reviews across all products",
      "How often the customer uses promo codes during checkout"
    ],
    "explanation": "Email segmentation ka best base demographic aur behavioral data hota hai, kyunki ye customer needs aur interest reflect karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A startup wants to build trust with a new audience using influencer marketing. Which approach is most likely to support this goal?",
    "options": [
      "Selecting influencers with the most visually polished content",
      "Paying influencers to use generic brand messaging in all posts",
      "Partnering with influencers who have strong credibility in their niche",
      "Choosing influencers based on the number of sponsored posts they’ve done"
    ],
    "explanation": "Niche credibility wale influencers trust build karte hain, kyunki unki audience unhe expert maan chuki hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A business wants to connect with consumers who prioritize social values. What strategy aligns best with this goal?",
    "options": [
      "Stay neutral on all public issues to avoid backlash.",
      "Support causes that align with audience values and communicate efforts transparently.",
      "Focus entirely on promoting product discounts.",
      "Use influencer partnerships to mask social responsibility efforts."
    ],
    "explanation": "Socially conscious audience transparency aur real action ko value karti hai. Cause support + clear communication trust build karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A clothing brand wants to let customers buy items directly from a livestream event. Which feature should the marketing team implement to support this goal?",
    "options": [
      "Share discount codes without linking to product pages.",
      "Enable shoppable content with real-time purchasing links.",
      "Launch a campaign encouraging customers to visit physical stores.",
      "Email purchase instructions to customers after each event."
    ],
    "explanation": "Livestream commerce ka main feature shoppable links hote hain jo users ko instantly purchase karne dete hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A retail app updates its algorithm but notices an increase in customer complaints about unfair product suggestions. What should the company do to maintain ethical standards?",
    "options": [
      "Evaluate the algorithm for potential bias and adjust accordingly.",
      "Increase automation to reduce the need for human oversight.",
      "Disable the personalization feature permanently.",
      "Ask customers to submit complaints through an online form only."
    ],
    "explanation": "Ethical AI marketing me bias detection aur correction necessary hota hai. Algorithm auditing fairness aur trust maintain karta hai.",
    "correctAnswer": [0]
  }
,
  {
    "question": "A campaign team wants to evaluate how different combinations of headlines, images, and CTA buttons affect conversions. What testing approach should they use?",
    "options": [
      "A/B testing",
      "Multivariate testing",
      "Automated personalization",
      "Segmentation testing"
    ],
    "explanation": "Multivariate testing multiple variables (headline, image, CTA) ko ek saath test karta hai, taaki best combination identify kiya ja sake.",
    "correctAnswer": [1]
  },
  {
    "question": "A retail app wants to notify users of a flash sale happening for the next two hours. Which real-time marketing strategy is most appropriate?",
    "options": [
      "Push notifications",
      "Monthly newsletter",
      "Blog article updates",
      "Printed direct mail flyers"
    ],
    "explanation": "Flash sale time-sensitive hoti hai, isliye push notifications real-time engagement ke liye best strategy hai.",
    "correctAnswer": [0]
  }
,
  {
    "question": "Which of the following is an example of a behavioral trigger in a lead nurturing campaign?",
    "options": [
      "Running search ads continuously.",
      "Sending an email after a lead clicks a pricing link but doesn’t convert.",
      "Highlighting trending content on the homepage.",
      "Posting to social media every Friday."
    ],
    "explanation": "Behavioral trigger ka matlab hota hai user ke action ke basis par automated response. Pricing link click karne ke baad email send karna action-based trigger hai.",
    "correctAnswer": [1]
  }
,
  {
    "question": "A customer posts a complaint on a brand’s Instagram story. The team doesn’t have a solution yet. What’s the best initial response?",
    "options": [
      "Acknowledge the concern and let the customer know you’re working on it.",
      "Ignore the message to avoid drawing attention.",
      "Wait until the issue is fully resolved before replying.",
      "Move the conversation offline without responding publicly."
    ],
    "explanation": "Best practice ye hoti hai ki complaint ko immediately acknowledge kiya jaye. Isse trust build hota hai aur customer ko lagta hai ki brand serious hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A brand manager is responding to customer comments on social media. A few are negative, but the responses need to reflect the company’s values. What’s the best practice in this situation?",
    "options": [
      "Remove all critical comments immediately.",
      "Respond sarcastically to highlight customer bias.",
      "Stay positive and represent the brand voice clearly.",
      "Use automation to send generic replies."
    ],
    "explanation": "Negative comments ka response calm, professional aur brand voice ke according hona chahiye. Ye trust aur credibility maintain karta hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A brand schedules a campaign post ahead of time. However, a tragic event in the news occurs on the same day the post is set to go live. What's the most appropriate action?",
    "options": [
      "Review and adjust the content before posting to ensure sensitivity.",
      "Proceed with the post to avoid interrupting the schedule.",
      "Rely on audience understanding of automation.",
      "Delete the entire campaign to avoid any risk."
    ],
    "explanation": "Current events ke according scheduled posts ko review karna zaroori hota hai. Sensitive situations me brand ko respectful aur aware rehna chahiye.",
    "correctAnswer": [0]
  }
,
  {
    "question": "A content creator wants their social media posts to feel more direct and personal to build stronger audience connections. What adjustment should they make to the caption style?",
    "options": [
      "Switch to first- or second-person voice instead of third-person voice.",
      "Add more hashtags and remove emojis for clarity.",
      "Keep captions impersonal and avoid storytelling.",
      "Use formal industry language to establish professionalism."
    ],
    "explanation": "First-person (I/we) aur second-person (you) tone audience ko direct feel hota hai, jis se connection aur relatability increase hoti hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A social media specialist wants their content to appear in more relevant search results on TikTok. What tactic would help improve its visibility?",
    "options": [
      "Limit caption length to fewer than ten words.",
      "Focus on adding filters and effects instead of text.",
      "Remove all onscreen text to keep the video clean.",
      "Use keyword-rich captions and trending hashtags."
    ],
    "explanation": "TikTok search SEO keywords aur hashtags par depend karta hai. Keyword-rich captions aur trending hashtags visibility improve karte hain.",
    "correctAnswer": [3]
  },
  {
    "question": "A business posting videos on TikTok wants to stay within recommended best practices. How many hashtags should it use per post?",
    "options": [
      "At least eight hashtags to improve search visibility",
      "No more than five",
      "Two hashtags — one branded, one random",
      "10 to 15 hashtags, evenly split between trending and niche"
    ],
    "explanation": "Best practice ke according TikTok par limited hashtags (usually 3-5) better relevance aur reach provide karte hain. Too many hashtags dilute relevance.",
    "correctAnswer": [1]
  }
,
  {
    "question": "A fashion creator finds that Reels consistently generate more engagement than Stories or photo posts. What is a strategic next step?",
    "options": [
      "Shift focus toward creating more Reels-style content.",
      "Delete all past Stories and photos from their archive.",
      "Create identical content on every platform without changes.",
      "Reduce overall posting frequency to avoid audience fatigue."
    ],
    "explanation": "Agar Reels consistently best engagement de rahe hain, toh strategy ye honi chahiye ki Reels-type content zyada banaya jaye because it matches audience preference.",
    "correctAnswer": [0]
  },
  {
    "question": "A small business owner is considering using trending audio to promote a seasonal product. What’s the potential benefit of using trends in this situation?",
    "options": [
      "Trends can lead to higher conversions and increased product sales.",
      "Trends allow for longer videos that give more detail about the product.",
      "Trends reduce the need for separate ad campaigns across platforms.",
      "Trends guarantee positive reviews on promoted content."
    ],
    "explanation": "Trending audio visibility aur reach badhata hai, jisse engagement aur conversions improve ho sakte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A nonprofit that promotes recycling wants to repost a high-performing Earth Day message from earlier in the year without recreating it. What’s the best way to do this using Adobe Express?",
    "options": [
      "Share the original post’s link in their next newsletter.",
      "Duplicate the post in Content Scheduler and set it for a future date.",
      "Screenshot the old post and upload it as an image.",
      "Rewrite the post manually and use AI for new images."
    ],
    "explanation": "Adobe Express Content Scheduler ka duplicate feature use karke post ko reuse aur reschedule karna best aur professional approach hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A food creator wants to participate in a viral audio trend that’s taking off quickly. What should they consider before jumping in?",
    "options": [
      "Whether they can create and share content quickly enough to stay relevant",
      "Whether they can use the trend without any branding",
      "Whether the trend originated from a verified account",
      "Whether the trend allows for long-form content"
    ],
    "explanation": "Trends time-sensitive hote hain, isliye fast execution zaroori hai warna trend expire ho jata hai.",
    "correctAnswer": [0]
  }
,
  {
    "question": "A content creator wants to align their visuals across multiple platforms. How can using a moodboard in Adobe Express help with this goal?",
    "options": [
      "It provides audience analytics to guide post timing.",
      "It generates captions for each piece of visual content.",
      "It automatically schedules posts to multiple platforms.",
      "It helps establish consistent visual themes and color palettes across projects."
    ],
    "explanation": "Moodboards ka main purpose visual consistency create karna hota hai, jaise color palette, typography, style, aur overall theme ko align karna.",
    "correctAnswer": [3]
  },
  {
    "question": "A marketing team is creating content for a product launch but struggles to make their visuals feel cohesive. What is the most effective way to ensure consistency across the campaign?",
    "options": [
      "Develop a brand style guide that includes clear rules for design elements.",
      "Ask each designer to focus on their personal style.",
      "Let visuals evolve organically over time without structure.",
      "Use random templates for each platform to increase variety."
    ],
    "explanation": "Brand style guide clear design rules define karta hai (colors, fonts, layout) jisse campaign ke visuals cohesive aur consistent bante hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A content creator wants to ensure their original work can be identified even if it gets shared widely. What can they do to promote ethical sharing and attribution?",
    "options": [
      "Let others repost as long as they tag the creator.",
      "Enable Content Credentials to include creator name and attribution data in the file.",
      "Avoid posting finished content on public platforms.",
      "Add a vague caption asking viewers not to steal content."
    ],
    "explanation": "Content Credentials metadata ke through creator name aur attribution info embed karta hai, jo ethical sharing aur transparency ensure karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A wellness startup wants to grow its brand online but has limited funding. What’s the most effective way for them to reach an engaged audience through social media?",
    "options": [
      "Start by identifying a specific niche audience whose values and problems align with the brand.",
      "Launch broadly with content designed to appeal to as many users as possible.",
      "Wait until they have budget for paid ads before defining their audience.",
      "Promote the product without linking it to broader audience values or routines."
    ],
    "explanation": "Limited budget me niche audience target karna best hota hai kyunki engagement high hota hai aur marketing efficient ban jati hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A creator wants to improve their content strategy by analyzing what types of posts their followers engage with most. What’s the best way to use audience feedback for this purpose?",
    "options": [
      "Avoid checking performance data to stay creatively uninfluenced.",
      "Study past posts to identify what types of content, visuals, or messages perform best.",
      "Change the content weekly to avoid repetition, regardless of performance.",
      "Focus solely on the content that was most fun to make."
    ],
    "explanation": "Past post analytics study karke best-performing content identify karna audience feedback ka best use hai.",
    "correctAnswer": [1]
  },
  {
    "question": "An independent artist wants to create more relatable content while documenting their creative journey. What’s the best way to build authenticity and trust?",
    "options": [
      "Stick to curated highlight reels to maintain a professional look.",
      "Share behind-the-scenes videos, including moments when things don’t go as planned.",
      "Avoid showing unfinished work to protect your image.",
      "Let AI generate captions to save time and improve clarity."
    ],
    "explanation": "Behind-the-scenes content real journey dikhata hai, jo authenticity aur trust build karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A startup wants to boost its social media engagement. What’s the best way to align their posting strategy with user behavior?",
    "options": [
      "Share long captions instead of using platform features like Reels or Stories.",
      "Post all content during traditional business hours for consistency.",
      "Focus on frequent posts without considering audience preferences.",
      "Analyze when their audience is most active and post content to fit into their daily routines."
    ],
    "explanation": "Audience activity time analyze karke post karna engagement improve karta hai aur strategy user behavior ke according align hoti hai.",
    "correctAnswer": [3]
  },
  {
    "question": "A content creator wants to maintain the trust of their audience when experimenting with new AI tools for editing. What’s a responsible way to ensure content authenticity?",
    "options": [
      "Prioritize trend-based edits even if it alters the original context.",
      "Avoid using any metadata to protect creative privacy.",
      "Preserve metadata that shows when, where, and how content was created and edited.",
      "Publish content anonymously to avoid questions about edits."
    ],
    "explanation": "Metadata preserve karna transparency provide karta hai aur audience trust maintain karta hai, especially AI edits ke case me.",
    "correctAnswer": [2]
  },
  {
    "question": "A barista wants to build a personal brand by sharing their passion for coffee online. What’s a helpful strategy to grow this into a side hustle?",
    "options": [
      "Post videos or tutorials that showcase their expertise.",
      "Keep content unrelated to coffee to stay flexible.",
      "Mostly repost coffee memes from other accounts.",
      "Avoid posting until they launch a website."
    ],
    "explanation": "Tutorials aur expertise-based videos audience ko value dete hain aur personal brand ko grow karte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A creator wants to improve the quality of their social media content but doesn’t have a background in design or editing. How can AI-powered tools like Adobe Express best support their creative process?",
    "options": [
      "Use features like auto-captioning, image enhancement, and animation tools to simplify creation.",
      "Rely on influencers to design their content for them.",
      "Avoid AI tools to preserve a fully manual editing workflow.",
      "Use AI tools only for scheduling, not creation."
    ],
    "explanation": "Adobe Express AI tools beginners ke liye content creation easy banate hain by auto captions, enhancement, animations, etc.",
    "correctAnswer": [0]
  }
,
  {
    "question": "A tech startup is entering a crowded market. What’s the first step it should take to stand out during the awareness stage?",
    "options": [
      "Launch a limited-time discount for loyal customers.",
      "Develop a compelling brand story and distribute it through high-reach channels.",
      "Focus only on upselling existing customers."
    ],
    "explanation": "Awareness stage ka main goal reach aur attention gain karna hota hai. Strong brand story ko high-reach channels par distribute karna best strategy hai.",
    "correctAnswer": [1]
  },
  {
    "question": "An online fitness platform experiences high traffic to its workout library page but few sign-ups. What should the company do to strengthen interest?",
    "options": [
      "Post only product announcements on social media.",
      "Add personalized workout recommendations based on browsing.",
      "Limit free content to one workout per month."
    ],
    "explanation": "Personalized recommendations user interest badhati hain aur engagement improve karti hain, jisse sign-ups increase ho sakte hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A tutoring service wants to position itself as the most reliable choice. Which tactic would best support this goal during consideration?",
    "options": [
      "Publish detailed testimonials and measurable results from past students.",
      "Run flash sales without explaining the service’s value.",
      "Limit information to just pricing tables."
    ],
    "explanation": "Consideration stage me trust build karna important hota hai. Testimonials aur measurable results credibility increase karte hain.",
    "correctAnswer": [0]
  },
  {
    "question": "An electronics store has customers who are comparing prices and features but haven’t purchased yet. What’s the best way to move them to intent?",
    "options": [
      "Remove product details to create urgency.",
      "Offer a limited-time bundle with added value.",
      "Focus only on unrelated blog content."
    ],
    "explanation": "Limited-time bundle urgency + extra value create karta hai, jo customers ko intent stage tak push karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "An online retailer wants to increase conversions at checkout. Which action would have the greatest impact in the purchase stage?",
    "options": [
      "Simplify the checkout process to reduce clicks.",
      "Delay showing shipping costs until after payment.",
      "Add pop-ups promoting unrelated blog posts."
    ],
    "explanation": "Checkout process ko simple banana friction reduce karta hai aur purchase completion improve karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A SaaS company wants to reduce cancellations after customers sign up. Which step should the company take right after onboarding?",
    "options": [
      "Offer tutorials and highlight underused features.",
      "Wait until renewal to check in.",
      "Send sales pitches for unrelated services."
    ],
    "explanation": "Post-onboarding support aur feature education customer value increase karta hai aur churn reduce karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "An eco-friendly cleaning brand wants customers to keep buying and promoting the brand. Which program would help most?",
    "options": [
      "Introduce a points-based loyalty program with exclusive perks.",
      "Offer one-time discounts without follow-up.",
      "Randomly change reward structures each month."
    ],
    "explanation": "Points-based loyalty program repeat purchases aur brand advocacy dono ko encourage karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A pet adoption agency wants to build trust with potential adopters. Which content choice would be most effective?",
    "options": [
      "Only post about upcoming fundraisers.",
      "Share unverified news about animal care.",
      "Feature detailed profiles with photos and happy ending stories."
    ],
    "explanation": "Detailed profiles aur success stories emotional trust build karte hain aur adoption decision support karte hain.",
    "correctAnswer": [2]
  },
  {
    "question": "A startup’s funnel loses most leads between interest and consideration. What’s the first step to fix this?",
    "options": [
      "Add targeted content addressing questions and concerns.",
      "Remove all educational content to simplify messaging.",
      "Skip the consideration stage entirely."
    ],
    "explanation": "Interest to consideration move karne ke liye objections clear karna aur targeted informative content dena best approach hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A clothing brand wants to ensure consistency across all funnel stages. What’s the first step?",
    "options": [
      "Only focus on the awareness stage and hope customers convert.",
      "Use separate teams with no shared communication.",
      "Develop a unified brand message that flows through each stage."
    ],
    "explanation": "Funnel consistency ke liye unified messaging zaroori hoti hai jo awareness se purchase tak flow kare.",
    "correctAnswer": [2]
  }
,
  {
    "question": "A smartphone company wants to release a model targeting gamers. What should the company focus on before moving into production?",
    "options": [
      "Reduce production costs by removing extra features.",
      "Offer only one storage option to simplify inventory.",
      "Research gaming consumers’ needs for battery life, speed, and display quality."
    ],
    "explanation": "Before production, customer research is necessary to understand what gamers value most such as performance, battery life, and display quality. This ensures the product matches market demand.",
    "correctAnswer": [2]
  },
  {
    "question": "Owners of a local bookstore want to increase attendance at their monthly author events while reinforcing the store’s image as the city’s hub for local literature. How could they promote these events to meet both goals?",
    "options": [
      "Post a single flyer inside the store.",
      "Promote each event individually on social media with author interviews and stories about the shop’s role in the community.",
      "Send a generic email about all upcoming events at once."
    ],
    "explanation": "Promoting each event with storytelling and author highlights builds excitement and strengthens the bookstore’s brand identity, increasing both attendance and community image.",
    "correctAnswer": [1]
  },
  {
    "question": "A tech brand wants to generate buzz for a product launch. How could it build excitement before the release date?",
    "options": [
      "Run paid ads after the launch is over.",
      "Use teaser campaigns and influencer partnerships before the launch.",
      "Keep the launch a secret until release day."
    ],
    "explanation": "Teaser campaigns and influencers create anticipation and awareness before launch, which is a strong promotional strategy for generating buzz.",
    "correctAnswer": [1]
  },
  {
    "question": "A streaming service wants to attract price-sensitive customers without hurting profits. Which pricing adjustment would make the service accessible to more people?",
    "options": [
      "Keep one flat price for all services.",
      "Offer a free subscription to all customers.",
      "Introduce a lower-cost plan with ads while keeping premium ad-free options."
    ],
    "explanation": "Offering a lower-cost ad-supported plan attracts price-sensitive customers while maintaining profitability through ads and premium subscription tiers.",
    "correctAnswer": [2]
  },
  {
    "question": "A local ice cream shop wants to sell more during winter. How could it adapt its sales channels to keep revenue flowing year-round?",
    "options": [
      "Only sell in-store and reduce winter hours.",
      "Advertise summer flavors all winter.",
      "Partner with grocery stores to sell packaged pints year-round."
    ],
    "explanation": "Selling packaged pints through grocery stores expands distribution channels (Place strategy) and helps generate revenue even in off-season periods.",
    "correctAnswer": [2]
  },
  {
    "question": "A clothing brand is launching a back-to-school campaign. Which promotional asset would most effectively communicate its youthful, fun image across social media and email channels?",
    "options": [
      "A single coupon flyer posted on a bulletin board in the store",
      "A colorful graphic with students wearing the clothes, paired with a playful slogan used in both emails and Instagram posts",
      "A plain-text email listing discounts with no visuals"
    ],
    "explanation": "A colorful graphic with consistent branding across platforms supports a fun youthful image and works effectively for both email and social media marketing.",
    "correctAnswer": [1]
  }
,
  {
    "question": "A brand runs ads on Instagram, sends email follow-ups, and uses in-store purchase data to personalize future offers. Which marketing approach is this?",
    "options": [
      "Multichannel marketing",
      "Omnichannel marketing",
      "Affiliate marketing",
      "Cold outreach marketing"
    ],
    "explanation": "Customer data ko connect karke seamless experience across channels dena omnichannel marketing hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketer wants to know how many people clicked an ad after seeing it. Which KPI measures this best?",
    "options": [
      "Customer Lifetime Value (CLV)",
      "Click-Through Rate (CTR)",
      "Bounce Rate",
      "Retention Rate"
    ],
    "explanation": "CTR measure karta hai impressions ke against kitne clicks aaye.",
    "correctAnswer": [1]
  },
  {
    "question": "A website gets high traffic but users leave quickly without taking action. Which metric best highlights this problem?",
    "options": [
      "Bounce rate",
      "ROI",
      "Follower growth",
      "Cost per impression"
    ],
    "explanation": "Bounce rate batata hai kitne users ek page dekhkar exit kar gaye.",
    "correctAnswer": [0]
  },
  {
    "question": "A company wants to test two different email subject lines to see which gets more opens. What method should they use?",
    "options": [
      "SEO optimization",
      "A/B testing",
      "Influencer marketing",
      "Content atomization"
    ],
    "explanation": "A/B testing me two variations compare karke best performing option choose kiya jata hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A travel brand uses a long YouTube video and converts it into Instagram Reels, Pinterest pins, and an email newsletter. What strategy is this?",
    "options": [
      "Content atomization",
      "Funnel segmentation",
      "Retargeting automation",
      "Direct selling"
    ],
    "explanation": "Long content ko multiple platform-specific formats me break karna content atomization hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "Which stage of the marketing funnel focuses most on building awareness and attracting attention?",
    "options": [
      "Awareness",
      "Purchase",
      "Retention",
      "Advocacy"
    ],
    "explanation": "Awareness stage ka goal audience ko brand ke baare me aware karna hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A customer adds a product to cart but does not complete checkout. Which tactic best targets this user?",
    "options": [
      "Brand awareness campaign",
      "Cart abandonment email reminder",
      "Long-form blog SEO strategy",
      "Changing company logo"
    ],
    "explanation": "Cart abandonment email user ko purchase complete karne ke liye push karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand wants to reach people searching 'best running shoes' on Google. Which ad type is most suitable?",
    "options": [
      "Display ads",
      "Search ads",
      "Print ads",
      "Billboard ads"
    ],
    "explanation": "Search ads keyword intent based hote hain, jo active search users ko target karte hain.",
    "correctAnswer": [1]
  },
  {
    "question": "A company shows banner ads on news websites to build awareness. Which ad type is this?",
    "options": [
      "Search ads",
      "Display ads",
      "Referral ads",
      "Affiliate ads"
    ],
    "explanation": "Banner-based visual ads display advertising ka example hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand sends personalized product recommendations based on browsing history. What is this called?",
    "options": [
      "Static content",
      "Dynamic content",
      "Cold messaging",
      "Generic marketing"
    ],
    "explanation": "User behavior ke basis par content change hona dynamic content kehlata hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A marketer wants to measure the long-term revenue value of one customer. Which KPI is best?",
    "options": [
      "Customer Lifetime Value (CLV)",
      "Click-Through Rate (CTR)",
      "Bounce rate",
      "Reach"
    ],
    "explanation": "CLV customer ke long-term financial contribution ko measure karta hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A campaign goal is to increase email subscribers by 500 within 30 days. This is an example of which goal framework?",
    "options": [
      "SWOT",
      "SMART",
      "STP",
      "4Ps"
    ],
    "explanation": "Specific, measurable aur time-bound goal SMART framework follow karta hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand targets users aged 18–25 for a product launch. What segmentation type is this?",
    "options": [
      "Geographic segmentation",
      "Demographic segmentation",
      "Behavioral segmentation",
      "Psychographic segmentation"
    ],
    "explanation": "Age demographic variable hota hai, isliye demographic segmentation hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A brand targets users who frequently buy luxury products and value premium lifestyle. Which segmentation type is this?",
    "options": [
      "Psychographic segmentation",
      "Geographic segmentation",
      "Demographic segmentation",
      "Seasonal segmentation"
    ],
    "explanation": "Lifestyle aur values psychographic segmentation ke under aate hain.",
    "correctAnswer": [0]
  },
  {
    "question": "A marketer uses Google Trends and SEMrush to analyze market demand. Which research type is this mostly considered?",
    "options": [
      "Primary research",
      "Secondary research",
      "Field experiment research",
      "Offline research"
    ],
    "explanation": "Google Trends aur SEMrush existing data sources hain, isliye secondary research hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A company creates surveys and interviews to collect new customer opinions. This is an example of what type of research?",
    "options": [
      "Secondary research",
      "Primary research",
      "Competitor research",
      "Automation research"
    ],
    "explanation": "Surveys/interviews direct data collection hai, jo primary research hota hai.",
    "correctAnswer": [1]
  },
  {
    "question": "A social media manager wants to ensure that a post appears correctly on Instagram, Facebook, and LinkedIn before publishing. Which feature is most helpful?",
    "options": [
      "Preview tool",
      "Link shortener",
      "Ad budget optimizer",
      "SEO analyzer"
    ],
    "explanation": "Preview tool multi-platform appearance check karne ke liye use hota hai.",
    "correctAnswer": [0]
  },
  {
    "question": "A company wants to run an influencer campaign but keep it authentic. What should they avoid?",
    "options": [
      "Giving clear brand guidelines",
      "Allowing influencer creative freedom",
      "Over-scripting the influencer content",
      "Encouraging natural communication style"
    ],
    "explanation": "Over-scripting se influencer content unnatural lagta hai aur authenticity break hoti hai.",
    "correctAnswer": [2]
  },
  {
    "question": "A marketing AI tool is found recommending biased content to users. What is the most ethical first step?",
    "options": [
      "Ignore the complaints",
      "Audit the AI system for bias and improve it",
      "Reduce marketing budget",
      "Remove all personalization forever"
    ],
    "explanation": "Ethical responsibility hai AI audit karna aur bias remove karna.",
    "correctAnswer": [1]
  },
  {
    "question": "A content creator wants to ensure their work is credited even after being shared widely. Which feature helps most?",
    "options": [
      "Adding random hashtags",
      "Content Credentials metadata",
      "Using only low-resolution images",
      "Posting without a caption"
    ],
    "explanation": "Content Credentials file ke andar creator attribution aur edit history store karta hai.",
    "correctAnswer": [1]
  }

],
    passage_based_questions:{

      
  "passage_1": {
    "title": "Marketing Funnel Basics",
    "passage": "A marketing funnel represents the journey customers take before making a purchase. It usually begins with awareness, where customers first discover a brand. Then they move to interest and consideration, where they explore the brand and compare options. After that comes intent and purchase, where the customer decides to buy. Finally, retention focuses on keeping customers engaged after purchase through loyalty programs, support, and personalized offers.",
    "questions": [
      {
        "question": "What is the first stage of a marketing funnel?",
        "options": ["Purchase", "Awareness", "Retention", "Intent"],
        "explanation": "Awareness is the first stage where customers discover the brand.",
        "correctAnswer": [1]
      },
      {
        "question": "Which stage focuses on comparing options before buying?",
        "options": ["Awareness", "Consideration", "Purchase", "Retention"],
        "explanation": "Consideration is when customers compare brands and products.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main goal of the purchase stage?",
        "options": ["Build brand identity", "Customer buys the product", "Collect impressions", "Reduce bounce rate"],
        "explanation": "Purchase stage is when conversion happens and customer buys.",
        "correctAnswer": [1]
      },
      {
        "question": "Which stage happens after purchase to keep customers loyal?",
        "options": ["Interest", "Awareness", "Retention", "Intent"],
        "explanation": "Retention focuses on repeat purchases and loyalty.",
        "correctAnswer": [2]
      },
      {
        "question": "Which method is best for retention?",
        "options": ["Loyalty programs", "Ignoring customers", "Only paid ads", "Reducing product quality"],
        "explanation": "Loyalty programs help retain customers and increase repeat purchases.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_2": {
    "title": "SEO and Website Optimization",
    "passage": "Search Engine Optimization (SEO) is the process of improving a website so that it ranks higher in search engine results. SEO includes using relevant keywords in content, writing descriptive meta titles, improving website speed, and adding alt text to images. SEO is important because it helps attract organic traffic without paying for ads. A well-optimized website improves visibility and increases trust.",
    "questions": [
      {
        "question": "What does SEO stand for?",
        "options": ["Search Engine Optimization", "Social Engagement Output", "Sales Enhancement Operation", "Search Email Optimization"],
        "explanation": "SEO means Search Engine Optimization.",
        "correctAnswer": [0]
      },
      {
        "question": "Why is SEO important?",
        "options": ["It increases organic traffic", "It stops ads completely", "It reduces website visitors", "It removes content need"],
        "explanation": "SEO improves ranking and increases organic visitors.",
        "correctAnswer": [0]
      },
      {
        "question": "What is the purpose of alt text in SEO?",
        "options": ["To add background music", "To help search engines understand images", "To block users", "To reduce page size"],
        "explanation": "Alt text helps accessibility and search engines understand image content.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is a good SEO practice?",
        "options": ["Using relevant keywords", "Using random hashtags", "Hiding content", "Removing headings"],
        "explanation": "Using relevant keywords improves search ranking.",
        "correctAnswer": [0]
      },
      {
        "question": "Which type of traffic is gained from SEO?",
        "options": ["Paid traffic", "Organic traffic", "Offline traffic", "TV traffic"],
        "explanation": "SEO attracts organic traffic from search engines.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_3": {
    "title": "Influencer Marketing and Authenticity",
    "passage": "Influencer marketing involves collaborating with creators who have a loyal audience. Brands use influencers to build trust and reach specific target groups. For influencer marketing to be successful, the influencer’s values and audience should align with the brand. Over-scripting content reduces authenticity. Giving influencers flexibility while following guidelines creates natural and believable promotions.",
    "questions": [
      {
        "question": "What is influencer marketing mainly used for?",
        "options": ["Building trust and awareness", "Reducing product quality", "Stopping digital marketing", "Avoiding audience engagement"],
        "explanation": "Influencers help brands build trust and increase reach.",
        "correctAnswer": [0]
      },
      {
        "question": "What is the most important factor for influencer collaboration?",
        "options": ["Follower count only", "Audience alignment", "Posting memes daily", "Using only paid ads"],
        "explanation": "Audience and values alignment is key for authenticity.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is over-scripting influencer content harmful?",
        "options": ["It reduces authenticity", "It increases SEO", "It increases reach always", "It creates better memes"],
        "explanation": "Over-scripting makes content feel unnatural and less trusted.",
        "correctAnswer": [0]
      },
      {
        "question": "What is the best strategy for authenticity?",
        "options": ["Allow flexibility within guidelines", "Force identical scripts", "Avoid influencer opinion", "Stop influencer marketing"],
        "explanation": "Flexibility keeps content natural and believable.",
        "correctAnswer": [0]
      },
      {
        "question": "Influencer marketing works best because of?",
        "options": ["Customer trust", "Random promotion", "High printing cost", "Offline distribution"],
        "explanation": "Influencers already have trust of their audience.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_4": {
    "title": "Paid Ads and Campaign Measurement",
    "passage": "Paid advertising includes platforms like Google Ads, Instagram Ads, and Facebook Ads. Marketers use paid ads to quickly reach a targeted audience. Important metrics include impressions (how many people saw the ad), CTR (how many clicked), and conversion rate (how many completed the desired action). A/B testing helps compare two versions of an ad to see which performs better.",
    "questions": [
      {
        "question": "Which is an example of paid advertising?",
        "options": ["Google Ads", "SEO blog post", "Word-of-mouth", "Free Instagram post"],
        "explanation": "Google Ads is a paid advertising platform.",
        "correctAnswer": [0]
      },
      {
        "question": "What does CTR measure?",
        "options": ["Number of sales", "Number of clicks compared to impressions", "Number of followers", "Website loading speed"],
        "explanation": "CTR = Click Through Rate measures ad clicks relative to impressions.",
        "correctAnswer": [1]
      },
      {
        "question": "What does conversion rate measure?",
        "options": ["How many users complete desired action", "How many ads are created", "How many hashtags used", "How many people saw the ad"],
        "explanation": "Conversion rate measures how many users take desired action like purchase or signup.",
        "correctAnswer": [0]
      },
      {
        "question": "What does impressions mean?",
        "options": ["How many people bought product", "How many times ad was shown", "How many people unsubscribed", "How many videos uploaded"],
        "explanation": "Impressions measure how many times an ad is displayed.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the purpose of A/B testing?",
        "options": ["To compare two versions", "To block competitors", "To remove ads", "To increase printing cost"],
        "explanation": "A/B testing compares two versions to see which performs better.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_5": {
    "title": "Brand Identity and Visual Consistency",
    "passage": "Brand identity includes a company’s logo, colors, fonts, tone, and messaging. A strong brand identity builds trust and makes a business recognizable. To maintain consistency, businesses often use moodboards and style guides. A moodboard collects visual inspiration like colors, photos, and layouts. A style guide provides rules to ensure all marketing materials look and feel consistent across platforms.",
    "questions": [
      {
        "question": "What does brand identity include?",
        "options": ["Only pricing", "Logo, colors, fonts and tone", "Only hashtags", "Only paid ads"],
        "explanation": "Brand identity includes logo, colors, fonts, and messaging style.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is brand consistency important?",
        "options": ["It reduces trust", "It increases confusion", "It builds recognition and trust", "It avoids marketing"],
        "explanation": "Consistency makes a brand recognizable and trusted.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the main purpose of a moodboard?",
        "options": ["To schedule posts", "To collect visual inspiration", "To calculate ROI", "To send emails"],
        "explanation": "Moodboards organize visual references for consistent design.",
        "correctAnswer": [1]
      },
      {
        "question": "What does a style guide help with?",
        "options": ["Keeping design consistent", "Removing branding", "Avoiding SEO", "Stopping content creation"],
        "explanation": "Style guides set rules for consistent visuals and tone.",
        "correctAnswer": [0]
      },
      {
        "question": "Which tool is best for maintaining cohesive campaign visuals?",
        "options": ["Random templates", "Brand style guide", "Unrelated memes", "No planning"],
        "explanation": "A style guide ensures cohesive and consistent visuals.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_6": {
    "title": "Ethical Marketing and AI Transparency",
    "passage": "AI tools are widely used in marketing for personalization, content generation, and automation. However, ethical marketing requires transparency and fairness. Brands should avoid biased recommendations and should audit AI systems regularly. Customers should be informed if content is AI-generated. Features like Content Credentials help by providing metadata about the creator, edits, and AI assistance. Responsible marketing builds trust and long-term loyalty.",
    "questions": [
      {
        "question": "Why should AI systems be audited in marketing?",
        "options": ["To increase bias", "To detect bias and unintended issues", "To remove customers", "To stop personalization"],
        "explanation": "Auditing helps ensure AI is fair and does not create biased outcomes.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the key requirement of ethical marketing?",
        "options": ["Hiding data usage", "Transparency and fairness", "Using only paid ads", "Avoiding analytics"],
        "explanation": "Ethical marketing requires transparency and fair treatment.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the purpose of Content Credentials?",
        "options": ["To add filters", "To show creator attribution and edit history", "To increase hashtag count", "To remove copyright"],
        "explanation": "Content Credentials provide metadata for authenticity and transparency.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is a responsible practice when using AI-generated content?",
        "options": ["Disclose AI assistance", "Hide AI usage", "Ignore bias complaints", "Collect unlimited data"],
        "explanation": "Disclosure builds trust and maintains credibility.",
        "correctAnswer": [0]
      },
      {
        "question": "Ethical marketing helps businesses mainly by?",
        "options": ["Increasing customer trust", "Reducing engagement", "Blocking competitors", "Removing branding"],
        "explanation": "Ethical practices increase trust and long-term loyalty.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_7": {
    "title": "Customer Engagement and Social Media Strategy",
    "passage": "Customer engagement includes likes, shares, comments, and direct messages. A brand that responds to its audience builds stronger relationships and loyalty. Posting regularly is important, but interacting with followers is equally important. Tracking analytics helps marketers understand which content performs best. Brands should focus on creating valuable and relatable content rather than only promotional posts.",
    "questions": [
      {
        "question": "What is customer engagement?",
        "options": ["Ignoring followers", "Likes, comments, shares and DMs", "Only paid ads", "Offline posters"],
        "explanation": "Engagement includes interactions like likes, shares, comments, and messages.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the best way to improve low engagement?",
        "options": ["Turn off comments", "Respond to comments and DMs", "Post only ads", "Stop posting content"],
        "explanation": "Interaction builds stronger connections and improves engagement.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is analytics tracking important?",
        "options": ["To remove branding", "To understand what content performs best", "To avoid customers", "To reduce visibility"],
        "explanation": "Analytics helps measure performance and optimize strategy.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of content builds long-term trust?",
        "options": ["Only promotional posts", "Valuable and relatable content", "Fake giveaways", "Random spam posts"],
        "explanation": "Value-driven content builds trust and loyalty.",
        "correctAnswer": [1]
      },
      {
        "question": "What happens if a brand posts but never replies?",
        "options": ["Engagement increases automatically", "Audience feels disconnected", "Trust increases instantly", "SEO improves"],
        "explanation": "Lack of interaction reduces connection and audience loyalty.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_8": {
    "title": "Licensing and Copyright in Digital Content",
    "passage": "Digital marketers often use stock photos, videos, and templates. However, copyright laws require proper licensing. A standard license may cover normal digital usage, but large-scale paid campaigns or merchandise may require an enhanced license. Before using images from the internet, marketers should confirm permission or license terms. Ethical content use prevents legal issues and protects brand reputation.",
    "questions": [
      {
        "question": "Why is licensing important in digital marketing?",
        "options": ["To increase spam posts", "To avoid legal problems", "To reduce quality", "To stop SEO"],
        "explanation": "Licensing ensures legal permission and prevents copyright violations.",
        "correctAnswer": [1]
      },
      {
        "question": "Which license is usually required for high-volume paid ad campaigns?",
        "options": ["Enhanced license", "Free license", "No license needed", "Random license"],
        "explanation": "Enhanced licenses cover high-reach paid ads and extended use cases.",
        "correctAnswer": [0]
      },
      {
        "question": "What should marketers do before using an image found online?",
        "options": ["Crop and use it", "Confirm permission or license terms", "Remove watermark", "Assume it is free"],
        "explanation": "Always confirm rights and licensing before using content.",
        "correctAnswer": [1]
      },
      {
        "question": "Using copyrighted content without permission can lead to?",
        "options": ["Higher engagement always", "Legal issues and reputation damage", "SEO boost", "Free promotions"],
        "explanation": "Copyright violations can cause legal action and harm brand image.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the best ethical practice for stock media usage?",
        "options": ["Use any image freely", "Follow license rules strictly", "Hide image credits", "Remove copyright tags"],
        "explanation": "Following license rules ensures ethical and legal content usage.",
        "correctAnswer": [1]
      }
    ]
  }
,

  "passage_9": {
    "title": "Adobe Express Templates and Remix Workflow",
    "passage": "Adobe Express helps creators design social media posts quickly using templates. Templates are platform-specific, meaning they are already optimized for Instagram posts, stories, Facebook ads, YouTube thumbnails, etc. Instead of starting from scratch, creators can select a template and customize it using brand colors, fonts, logos, and images. Adobe Express also provides tools like Remix, which allows resizing and adapting the same design for different platforms while keeping the brand identity consistent.",
    "questions": [
      {
        "question": "What is the biggest advantage of using templates in Adobe Express?",
        "options": [
          "They require no internet connection",
          "They save time and provide ready-made layouts",
          "They remove the need for branding",
          "They work only for print ads"
        ],
        "explanation": "Templates save time by providing ready-made designs optimized for platforms.",
        "correctAnswer": [1]
      },
      {
        "question": "Why are platform-specific templates useful?",
        "options": [
          "They automatically increase followers",
          "They are optimized for correct size and format of platforms",
          "They block copyright issues",
          "They remove the need for captions"
        ],
        "explanation": "Platform templates ensure correct sizing for Instagram, Facebook, YouTube etc.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main purpose of using the Remix feature?",
        "options": [
          "To copy competitor content",
          "To resize and adapt content for multiple platforms",
          "To delete all designs quickly",
          "To generate only hashtags"
        ],
        "explanation": "Remix helps adapt a design into different formats for different platforms.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following best supports consistent branding?",
        "options": [
          "Using random fonts in every post",
          "Using brand colors, fonts, and logos consistently",
          "Avoiding logos completely",
          "Using only trending templates without customization"
        ],
        "explanation": "Brand identity stays consistent with same colors, fonts, and logo.",
        "correctAnswer": [1]
      },
      {
        "question": "Starting from a template is better than starting from scratch because?",
        "options": [
          "Templates are always free",
          "Templates reduce design effort and speed up creation",
          "Templates increase SEO ranking directly",
          "Templates avoid analytics tracking"
        ],
        "explanation": "Templates reduce effort and make content creation faster.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_10": {
    "title": "Content Scheduler and Posting Strategy",
    "passage": "Content Scheduler is a feature used to plan and publish social media posts in advance. It helps brands maintain consistent posting schedules without manual daily effort. Using Content Scheduler, marketers can preview how a post will look across platforms, set publishing dates, and reschedule content when needed. If a major event or sensitive news occurs, marketers should review scheduled posts to ensure they remain appropriate. Scheduling tools improve productivity and help brands post at the best times based on audience activity.",
    "questions": [
      {
        "question": "What is the main purpose of Content Scheduler?",
        "options": [
          "To generate AI videos automatically",
          "To schedule and publish posts in advance",
          "To block customer comments",
          "To remove hashtags from posts"
        ],
        "explanation": "Content Scheduler helps plan and publish posts automatically in the future.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is scheduling posts useful for brands?",
        "options": [
          "It ensures random posting patterns",
          "It helps maintain consistency and saves time",
          "It removes the need for branding",
          "It guarantees viral success"
        ],
        "explanation": "Scheduling ensures consistent posting and saves manual effort.",
        "correctAnswer": [1]
      },
      {
        "question": "Which feature helps check how a post will appear across platforms?",
        "options": [
          "Preview tool",
          "Hashtag generator",
          "SEO analyzer",
          "Bulk delete option"
        ],
        "explanation": "Preview tool shows how content will look on different platforms.",
        "correctAnswer": [0]
      },
      {
        "question": "If sensitive news happens on the day a post is scheduled, what should the team do?",
        "options": [
          "Post it anyway",
          "Review and adjust the post for sensitivity",
          "Delete the entire account",
          "Ignore the news completely"
        ],
        "explanation": "Brands must ensure content is appropriate in real-world context.",
        "correctAnswer": [1]
      },
      {
        "question": "Posting at the best time is mainly based on?",
        "options": [
          "Competitor posting time",
          "Audience activity data and analytics",
          "Random guesses",
          "Only business hours"
        ],
        "explanation": "Analytics helps identify when audience is most active.",
        "correctAnswer": [1]
      }
    ]
  }
,
  "passage_11": {
    "title": "Digital Marketing Basics",
    "passage": "Digital marketing refers to promoting products and services using digital channels such as websites, social media, email, and search engines. Unlike traditional marketing, digital marketing allows businesses to reach targeted audiences, track campaign performance, and adjust strategies quickly. It is widely used because it is cost-effective and provides measurable results through tools like analytics.",
    "questions": [
      {
        "question": "What is digital marketing mainly used for?",
        "options": [
          "Promoting products using newspapers only",
          "Promoting products using digital channels",
          "Selling products only in stores",
          "Avoiding online platforms"
        ],
        "explanation": "Digital marketing uses online/digital channels like websites, social media, and email.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of the following is a digital marketing channel?",
        "options": [
          "Radio",
          "Billboards",
          "Email",
          "Pamphlets"
        ],
        "explanation": "Email is a digital marketing channel.",
        "correctAnswer": [2]
      },
      {
        "question": "What is a major advantage of digital marketing over traditional marketing?",
        "options": [
          "It cannot be measured",
          "It provides measurable results",
          "It is always more expensive",
          "It works only for big companies"
        ],
        "explanation": "Digital marketing campaigns can be tracked using analytics tools.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is digital marketing considered cost-effective?",
        "options": [
          "It requires printing materials",
          "It allows targeting specific audiences",
          "It avoids online communication",
          "It depends only on TV ads"
        ],
        "explanation": "Digital marketing targets specific users, reducing wasted advertising cost.",
        "correctAnswer": [1]
      },
      {
        "question": "Which tool is commonly used to track digital marketing performance?",
        "options": [
          "Analytics tools",
          "Paper receipts",
          "Manual surveys only",
          "Television ratings"
        ],
        "explanation": "Analytics tools help track clicks, visits, conversions, and engagement.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_12": {
    "title": "Digital Marketing Platforms",
    "passage": "Digital marketing platforms are online spaces where businesses can promote their products. Social media platforms like Instagram, Facebook, and LinkedIn allow brands to interact directly with users. Search engines like Google help customers find products through search results and paid ads. Email marketing platforms are used to send newsletters and offers. Choosing the right platform depends on the target audience and business goals.",
    "questions": [
      {
        "question": "What are digital marketing platforms?",
        "options": [
          "Only offline marketplaces",
          "Online spaces used for promotion",
          "Physical advertising boards",
          "Newspaper publishing agencies"
        ],
        "explanation": "Digital marketing platforms are online channels where brands promote products.",
        "correctAnswer": [1]
      },
      {
        "question": "Which platform is best for professional networking?",
        "options": [
          "LinkedIn",
          "TikTok",
          "Snapchat",
          "Pinterest"
        ],
        "explanation": "LinkedIn is designed for professional connections and business content.",
        "correctAnswer": [0]
      },
      {
        "question": "Which platform helps customers find products through search results?",
        "options": [
          "Instagram",
          "Google",
          "WhatsApp",
          "Telegram"
        ],
        "explanation": "Google search engine helps users discover products through search results.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main use of email marketing platforms?",
        "options": [
          "Posting reels",
          "Sending newsletters and offers",
          "Running TV ads",
          "Creating billboards"
        ],
        "explanation": "Email marketing is used to send promotional messages to customers.",
        "correctAnswer": [1]
      },
      {
        "question": "Choosing the right platform depends on?",
        "options": [
          "Brand logo color only",
          "Target audience and business goals",
          "Competitor’s personal choice",
          "Random trending memes"
        ],
        "explanation": "Platform selection depends on audience location and marketing objectives.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_13": {
    "title": "Organic Marketing",
    "passage": "Organic marketing refers to promoting a brand naturally without paying directly for ads. Examples include SEO, social media engagement, blog posts, and word-of-mouth promotion. Organic marketing builds long-term trust and brand authority. Although results take time, it can create a loyal audience and steady traffic without continuous advertising costs.",
    "questions": [
      {
        "question": "What is organic marketing?",
        "options": [
          "Marketing that uses only paid ads",
          "Marketing done naturally without direct ad payment",
          "Marketing through billboards only",
          "Marketing without using the internet"
        ],
        "explanation": "Organic marketing focuses on unpaid growth through content and engagement.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is an example of organic marketing?",
        "options": [
          "Google paid ads",
          "Instagram sponsored ads",
          "SEO optimization",
          "TV commercials"
        ],
        "explanation": "SEO improves ranking naturally, so it is organic marketing.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the biggest benefit of organic marketing?",
        "options": [
          "Instant results in one day",
          "Long-term trust and authority",
          "Always higher cost",
          "No need for content creation"
        ],
        "explanation": "Organic marketing builds trust and brand reputation over time.",
        "correctAnswer": [1]
      },
      {
        "question": "Why does organic marketing take time?",
        "options": [
          "Because it depends on long-term engagement and ranking",
          "Because it uses only newspapers",
          "Because it cannot reach customers",
          "Because it avoids social media"
        ],
        "explanation": "Organic growth depends on consistent effort and audience trust.",
        "correctAnswer": [0]
      },
      {
        "question": "Which method supports word-of-mouth promotion?",
        "options": [
          "Customer referrals",
          "TV ads only",
          "Paid influencer spam",
          "Ignoring reviews"
        ],
        "explanation": "Referrals help spread brand awareness organically through customers.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_14": {
    "title": "Paid Marketing",
    "passage": "Paid marketing involves promoting products through paid advertisements on digital platforms. Examples include Google search ads, display ads, social media ads, and sponsored influencer posts. Paid marketing helps brands reach a large audience quickly and generate faster results. However, it requires a budget and careful monitoring to ensure good ROI.",
    "questions": [
      {
        "question": "What is paid marketing?",
        "options": [
          "Promoting products without spending money",
          "Promoting products using paid advertisements",
          "Promoting products using referrals only",
          "Promoting products without any platform"
        ],
        "explanation": "Paid marketing involves spending money on ads to promote products.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is an example of paid marketing?",
        "options": [
          "SEO ranking",
          "Google Ads",
          "Word-of-mouth",
          "Free blogging"
        ],
        "explanation": "Google Ads is a paid marketing method.",
        "correctAnswer": [1]
      },
      {
        "question": "What is a key advantage of paid marketing?",
        "options": [
          "Slow results",
          "Quick reach and faster results",
          "No need for budget",
          "Only works offline"
        ],
        "explanation": "Paid marketing helps brands reach customers quickly through ads.",
        "correctAnswer": [1]
      },
      {
        "question": "What is a disadvantage of paid marketing?",
        "options": [
          "It needs a budget",
          "It builds trust instantly",
          "It has no tracking tools",
          "It cannot target users"
        ],
        "explanation": "Paid marketing requires money to run ads continuously.",
        "correctAnswer": [0]
      },
      {
        "question": "Why should paid campaigns be monitored regularly?",
        "options": [
          "To stop customer service",
          "To improve ROI and performance",
          "To remove ads permanently",
          "To avoid analytics tools"
        ],
        "explanation": "Monitoring helps optimize ads for better conversions and ROI.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_15": {
    "title": "Emotional Marketing",
    "passage": "Emotional marketing is a strategy where brands connect with customers by triggering emotions such as happiness, trust, fear, excitement, or nostalgia. Instead of focusing only on product features, emotional marketing focuses on storytelling and meaningful messages. It helps customers feel connected to the brand, increasing loyalty and engagement. Strong emotional campaigns often go viral because people like sharing content that makes them feel something.",
    "questions": [
      {
        "question": "What is emotional marketing?",
        "options": [
          "Marketing based only on price discounts",
          "Marketing that focuses on emotions and storytelling",
          "Marketing that avoids customer feelings",
          "Marketing using only technical product details"
        ],
        "explanation": "Emotional marketing connects customers through feelings and stories.",
        "correctAnswer": [1]
      },
      {
        "question": "Which emotion is commonly used in emotional marketing?",
        "options": [
          "Trust",
          "Confusion",
          "Boredom",
          "Anger only"
        ],
        "explanation": "Trust is a powerful emotion used in branding and emotional marketing.",
        "correctAnswer": [0]
      },
      {
        "question": "Why does emotional marketing increase loyalty?",
        "options": [
          "Because customers forget the brand",
          "Because customers feel connected to the brand",
          "Because it avoids storytelling",
          "Because it always reduces prices"
        ],
        "explanation": "Emotional connection makes customers stay loyal.",
        "correctAnswer": [1]
      },
      {
        "question": "Which method is best for emotional marketing?",
        "options": [
          "Storytelling videos",
          "Only product manuals",
          "Only legal documents",
          "Only technical charts"
        ],
        "explanation": "Storytelling helps create emotional connection.",
        "correctAnswer": [0]
      },
      {
        "question": "Why do emotional campaigns often go viral?",
        "options": [
          "Because people share content that makes them feel something",
          "Because they contain only numbers",
          "Because they avoid visuals",
          "Because they are always expensive"
        ],
        "explanation": "Emotional content is shareable, leading to viral reach.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_16": {
    "title": "Colour Psychology in Branding",
    "passage": "Colour psychology is the study of how colors influence human emotions and decisions. In branding, colors are chosen carefully to create specific feelings. For example, blue often represents trust and security, red represents excitement and urgency, green represents nature and health, and black represents luxury and power. Brands use consistent colors in logos, websites, and ads to build recognition and influence customer behavior.",
    "questions": [
      {
        "question": "What is colour psychology?",
        "options": [
          "Study of how colors affect emotions and decisions",
          "Study of product manufacturing",
          "Study of customer complaints",
          "Study of website coding only"
        ],
        "explanation": "Colour psychology explains how colors influence feelings and choices.",
        "correctAnswer": [0]
      },
      {
        "question": "Which color is commonly linked with trust and security?",
        "options": [
          "Red",
          "Blue",
          "Yellow",
          "Pink"
        ],
        "explanation": "Blue is often used by banks and tech brands for trust and safety.",
        "correctAnswer": [1]
      },
      {
        "question": "Which color often represents nature and health?",
        "options": [
          "Green",
          "Black",
          "Purple",
          "Orange"
        ],
        "explanation": "Green is linked to nature, health, and eco-friendly branding.",
        "correctAnswer": [0]
      },
      {
        "question": "What does black color usually represent in branding?",
        "options": [
          "Luxury and power",
          "Nature and eco-friendliness",
          "Fear and danger",
          "Cheap pricing"
        ],
        "explanation": "Black is used by luxury brands to show premium and power.",
        "correctAnswer": [0]
      },
      {
        "question": "Why do brands use consistent colors?",
        "options": [
          "To confuse customers",
          "To build recognition and influence behavior",
          "To avoid brand identity",
          "To reduce product quality"
        ],
        "explanation": "Consistent color use builds strong brand identity and recognition.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_17": {
    "title": "Digital Marketing vs Traditional Marketing",
    "passage": "Traditional marketing uses offline methods such as TV, radio, newspapers, and billboards. Digital marketing uses online channels like websites, email, and social media. Digital marketing provides real-time tracking, audience targeting, and faster optimization. Traditional marketing has limited tracking and is usually more expensive. Businesses today often combine both methods to reach customers effectively.",
    "questions": [
      {
        "question": "Which is an example of traditional marketing?",
        "options": [
          "Email campaign",
          "Instagram reels",
          "Newspaper advertisement",
          "SEO optimization"
        ],
        "explanation": "Newspaper advertisement is an offline traditional marketing method.",
        "correctAnswer": [2]
      },
      {
        "question": "Which is an example of digital marketing?",
        "options": [
          "Billboards",
          "Radio ads",
          "Email marketing",
          "Pamphlets"
        ],
        "explanation": "Email marketing is a digital marketing method.",
        "correctAnswer": [2]
      },
      {
        "question": "What is a major advantage of digital marketing?",
        "options": [
          "Limited audience targeting",
          "Real-time tracking and optimization",
          "No internet required",
          "Only offline reach"
        ],
        "explanation": "Digital marketing allows tracking clicks, conversions, and performance instantly.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is traditional marketing harder to measure?",
        "options": [
          "Because it has limited tracking tools",
          "Because it uses social media",
          "Because it has no customers",
          "Because it is always free"
        ],
        "explanation": "Traditional marketing lacks accurate performance measurement tools.",
        "correctAnswer": [0]
      },
      {
        "question": "What do businesses often do today?",
        "options": [
          "Use only billboards",
          "Avoid digital marketing completely",
          "Combine digital and traditional marketing",
          "Stop promoting products"
        ],
        "explanation": "Many businesses use both methods to maximize reach.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_18": {
    "title": "Role of Social Media in Digital Marketing",
    "passage": "Social media marketing uses platforms like Instagram, Facebook, and YouTube to promote products. Brands post content such as images, videos, reels, and stories to engage audiences. Social media helps build community and trust by allowing direct interaction through comments and messages. Influencer marketing is also a part of social media marketing, where influencers promote products to their followers. Social media is important because it increases brand awareness and drives traffic to websites.",
    "questions": [
      {
        "question": "What is social media marketing?",
        "options": [
          "Marketing through only newspapers",
          "Marketing through platforms like Instagram and Facebook",
          "Marketing through radio ads only",
          "Marketing without content"
        ],
        "explanation": "Social media marketing uses online social platforms for promotion.",
        "correctAnswer": [1]
      },
      {
        "question": "Which content type is common on social media?",
        "options": [
          "Reels and stories",
          "Printed flyers",
          "Roadside posters",
          "Telephone directories"
        ],
        "explanation": "Reels and stories are popular content formats on social media.",
        "correctAnswer": [0]
      },
      {
        "question": "How does social media build trust?",
        "options": [
          "By blocking customer messages",
          "By direct interaction through comments and messages",
          "By avoiding feedback",
          "By hiding product information"
        ],
        "explanation": "Social media allows brands to connect and respond directly to customers.",
        "correctAnswer": [1]
      },
      {
        "question": "What is influencer marketing?",
        "options": [
          "Brands promoting products through influencers",
          "Customers buying without reviews",
          "Marketing through only TV channels",
          "Email marketing campaigns"
        ],
        "explanation": "Influencer marketing means influencers promote products to their audience.",
        "correctAnswer": [0]
      },
      {
        "question": "Why is social media important in digital marketing?",
        "options": [
          "It decreases brand awareness",
          "It increases brand awareness and drives traffic",
          "It stops online sales",
          "It avoids customer engagement"
        ],
        "explanation": "Social media increases reach and sends users to websites or product pages.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_19": {
    "title": "Search Engine Marketing (SEM)",
    "passage": "Search Engine Marketing (SEM) is a paid digital marketing strategy used to increase visibility on search engines like Google. SEM includes paid search ads where businesses bid on keywords. When users search for those keywords, the ads appear at the top of the search results. SEM provides fast results and is useful for businesses that want quick traffic. However, it requires proper keyword selection and budget management to avoid high costs.",
    "questions": [
      {
        "question": "What does SEM stand for?",
        "options": [
          "Social Engagement Marketing",
          "Search Engine Marketing",
          "Sales Expansion Method",
          "Smart Email Marketing"
        ],
        "explanation": "SEM means Search Engine Marketing.",
        "correctAnswer": [1]
      },
      {
        "question": "SEM is mainly a ______ strategy.",
        "options": [
          "Paid marketing",
          "Offline marketing",
          "Free marketing",
          "Traditional marketing"
        ],
        "explanation": "SEM involves paid ads on search engines.",
        "correctAnswer": [0]
      },
      {
        "question": "How do SEM ads appear in search results?",
        "options": [
          "By guessing user interest",
          "By bidding on keywords",
          "By printing brochures",
          "By using offline posters"
        ],
        "explanation": "Businesses bid on keywords to show ads on Google search results.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is SEM useful?",
        "options": [
          "It gives fast visibility and traffic",
          "It works only after 2 years",
          "It reduces website traffic",
          "It avoids keywords"
        ],
        "explanation": "SEM helps in getting fast traffic through paid ads.",
        "correctAnswer": [0]
      },
      {
        "question": "What is important for SEM success?",
        "options": [
          "Random keyword selection",
          "Proper keyword selection and budget control",
          "Avoiding analytics",
          "Ignoring audience intent"
        ],
        "explanation": "Keyword relevance and budget management decide SEM performance.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_20": {
    "title": "Digital Marketing Analytics",
    "passage": "Digital marketing analytics refers to measuring and analyzing online marketing performance. Metrics like click-through rate (CTR), conversion rate, engagement, and website traffic help marketers understand what works. Analytics tools allow brands to identify top-performing campaigns and improve weak areas. Data-driven marketing helps companies make better decisions, reduce wasted spending, and increase ROI. Tracking performance regularly is essential for successful marketing strategies.",
    "questions": [
      {
        "question": "What is digital marketing analytics?",
        "options": [
          "A method of printing ads",
          "Measuring and analyzing marketing performance",
          "A way to avoid data collection",
          "A type of traditional marketing"
        ],
        "explanation": "Analytics means tracking and analyzing marketing results.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is a common digital marketing metric?",
        "options": [
          "CTR",
          "Paper quality",
          "Radio frequency",
          "Billboard size"
        ],
        "explanation": "CTR (Click Through Rate) is a common digital marketing KPI.",
        "correctAnswer": [0]
      },
      {
        "question": "Why are analytics tools useful?",
        "options": [
          "They hide performance results",
          "They help identify what works and what doesn't",
          "They stop conversions",
          "They reduce website visitors"
        ],
        "explanation": "Analytics tools show campaign performance so marketers can optimize.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main benefit of data-driven marketing?",
        "options": [
          "Wasting ad budget",
          "Making better decisions using data",
          "Ignoring audience behavior",
          "Stopping marketing campaigns"
        ],
        "explanation": "Data-driven marketing improves strategy decisions based on performance data.",
        "correctAnswer": [1]
      },
      {
        "question": "Why should performance be tracked regularly?",
        "options": [
          "To avoid optimization",
          "To improve weak areas and increase ROI",
          "To stop customer engagement",
          "To reduce online presence"
        ],
        "explanation": "Regular tracking helps optimize campaigns and improve ROI.",
        "correctAnswer": [1]
      }
    ]
  }
}

  },
  unit2: {
    // Placeholder - copy of unit1 for now
    module1: [
 

],
    module2: [

     ],
    module3: [],
    module4: [],
    module5: [],
    module6: [],
    module7: [],
    assignment: [

   



    ],
    passage_based_questions: {
 


}

  },
  unit3: {

    module1: [
 

],
    module2: [
 

],
    module3: [
  

],
    module4: [
  
],
    module5: [
   

    ],
     module6: [
 

]
,
   
    module7: [
 

]
,
    assignment: [

  


]
,
    passage_based_questions: {
        
  
    }
  }
};

// Simple adapter functions for backward compatibility with your original structure
export function debugQuestionsData() {
  console.log('=== DEBUG QUESTIONS DATA ===');
  console.log('allQuestionsData keys:', Object.keys(allQuestionsData));
  console.log('Unit1 modules:', Object.keys(allQuestionsData.unit1));
  console.log('=== END DEBUG ===');
}

// Test function to verify unit1 passages
export function testUnit1Passages(): {
  totalPassages: number;
  totalQuestions: number;
  passages: Array<{ title: string; questionCount: number }>;
  firstPassage: { title: string; questionCount: number } | null;
  passageKeys: string[];
} {
  const unit1 = allQuestionsData.unit1;
  const allPassages = Object.values(unit1.passage_based_questions);
  
  return {
    totalPassages: allPassages.length,
    totalQuestions: allPassages.reduce((total, passage) => total + (passage.questions ? passage.questions.length : 0), 0),
    passages: allPassages.map(passage => ({
      title: passage.title,
      questionCount: passage.questions ? passage.questions.length : 0
    })),
    firstPassage: allPassages[0] ? {
      title: allPassages[0].title,
      questionCount: allPassages[0].questions ? allPassages[0].questions.length : 0
    } : null,
    passageKeys: Object.keys(unit1.passage_based_questions)
  };
}

export function getAllQuestions(mode?: PracticeMode): Question[] {
  console.log('=== getAllQuestions called with mode:', mode, '===');
  
  const unit1 = allQuestionsData.unit1;
  const unit2 = allQuestionsData.unit2;
  const unit3 = allQuestionsData.unit3;
  
  if (!mode || mode === 'all') {
    return [
      ...unit1.module1,
      ...unit1.module2, 
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      ...unit1.assignment,
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment,
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];
  }

  // Unit-specific modes
  if (mode === 'unit1') {
    return [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7
    ];
  }

  if (mode === 'unit2') {
    return [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7
    ];
  }

  if (mode === 'unit3') {
    return [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7
    ];
  }

  // Assignment questions from all units
  if (mode === 'assignment') {
    return [
      ...unit1.assignment,
      ...unit2.assignment,
      ...unit3.assignment
    ];
  }

  // Unit-specific assignment modes
  if (mode === 'unit1_assignment') {
    return unit1.assignment;
  }
  if (mode === 'unit2_assignment') {
    return unit2.assignment;
  }
  if (mode === 'unit3_assignment') {
    return unit3.assignment;
  }
  
  if (mode === 'passage') {
    const questions: Question[] = [];
    // Collect passage questions from all units
    Object.values(unit1.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    Object.values(unit2.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    Object.values(unit3.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    return questions;
  }

  // Unit-specific passage modes
  if (mode === 'unit1_passage') {
    console.log('=== UNIT1_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit1 and shuffle them
    const allPassages = Object.values(unit1.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit1 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit1 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit1 passage questions count:', questions.length);
    return questions;
  }
  
  if (mode === 'unit2_passage') {
    console.log('=== UNIT2_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit2 and shuffle them
    const allPassages = Object.values(unit2.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit2 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit2 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit2 passage questions count:', questions.length);
    return questions;
  }
  
  if (mode === 'unit3_passage') {
    console.log('=== UNIT3_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit3 and shuffle them
    const allPassages = Object.values(unit3.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit3 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit3 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit3 passage questions count:', questions.length);
    return questions;
  }

  // Unit-specific demo exam modes
  if (mode === 'unit1_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Get all MCQ questions from modules and assignments (randomly)
    const allMCQQuestions = [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      // ...unit1.assignment
    ];

    // Randomly select 20 MCQ questions
    const mcqQuestions = shuffleArray(allMCQQuestions).slice(0, 20);

    // Get passage groups for unit1
    const passageGroups = getUnitPassageGroups(unit1);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages
    return [...mcqQuestions, ...passageQuestions];
  }
  if (mode === 'unit2_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Collect all MCQ questions from unit2 modules and assignments
    const allMcqQuestions: Question[] = [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment
    ];

    // Randomly select 20 MCQ questions
    const shuffledMcq = shuffleArray([...allMcqQuestions]);
    const mcqQuestions = shuffledMcq.slice(0, 20);

    // Get passage groups for unit2
    const passageGroups = getUnitPassageGroups(unit2);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages (all from unit2)
    return [...mcqQuestions, ...passageQuestions];
  }

  if (mode === 'unit3_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Collect all MCQ questions from unit3 modules and assignments
    const allMcqQuestions: Question[] = [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];

    // Randomly select 20 MCQ questions
    const shuffledMcq = shuffleArray([...allMcqQuestions]);
    const mcqQuestions = shuffledMcq.slice(0, 20);

    // Get passage groups for unit3
    const passageGroups = getUnitPassageGroups(unit3);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages (all from unit3)
    return [...mcqQuestions, ...passageQuestions];
  }

  // Unit-specific all questions modes
  if (mode === 'unit1_all') {
    return [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      ...unit1.assignment
    ];
  }
  if (mode === 'unit2_all') {
    return [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment
    ];
  }
  if (mode === 'unit3_all') {
    return [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];
  }
  
  // Return specific module from unit1 (backward compatibility)
  if (mode === 'module1') return unit1.module1;
  if (mode === 'module2') return unit1.module2;
  if (mode === 'module3') return unit1.module3;
  if (mode === 'module4') return unit1.module4;
  if (mode === 'module5') return unit1.module5;
  if (mode === 'module6') return unit1.module6;
  if (mode === 'module7') return unit1.module7;
  
  // Unit 2 specific modules
  if (mode === 'unit2_module1') return unit2.module1;
  if (mode === 'unit2_module2') return unit2.module2;
  if (mode === 'unit2_module3') return unit2.module3;
  if (mode === 'unit2_module4') return unit2.module4;
  if (mode === 'unit2_module5') return unit2.module5;
  if (mode === 'unit2_module6') return unit2.module6;
  if (mode === 'unit2_module7') return unit2.module7;
  
  // Unit 3 specific modules  
  if (mode === 'unit3_module1') return unit3.module1;
  if (mode === 'unit3_module2') return unit3.module2;
  if (mode === 'unit3_module3') return unit3.module3;
  if (mode === 'unit3_module4') return unit3.module4;
  if (mode === 'unit3_module5') return unit3.module5;
  if (mode === 'unit3_module6') return unit3.module6;
  if (mode === 'unit3_module7') return unit3.module7;
  
  return [];
}

// Function to check if a practice mode has questions available
export function hasQuestionsForMode(mode: PracticeMode): boolean {
  const questions = getAllQuestions(mode);
  return questions.length > 0;
}

// Function to get available modules for a unit
export function getAvailableModules(unit: 'unit1' | 'unit2' | 'unit3'): number[] {
  const availableModules: number[] = [];
  
  for (let moduleNum = 1; moduleNum <= 7; moduleNum++) {
    const mode = unit === 'unit1' 
      ? `module${moduleNum}` as PracticeMode
      : `${unit}_module${moduleNum}` as PracticeMode;
    
    if (hasQuestionsForMode(mode)) {
      availableModules.push(moduleNum);
    }
  }
  
  return availableModules;
}

export function getAllPassageQuestions(): PassageQuestion[] {
  return [
    ...Object.values(allQuestionsData.unit1.passage_based_questions),
    ...Object.values(allQuestionsData.unit2.passage_based_questions),
    ...Object.values(allQuestionsData.unit3.passage_based_questions)
  ];
}

export function getPassageQuestions(): Question[] {
  return getAllQuestions('passage');
}

export function getDemoExamQuestions(): { mcqQuestions: Question[], passageQuestions: PassageQuestion[] } {
  // Function to shuffle array randomly
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Collect all MCQ questions from all units with fair distribution
  const allMcqQuestions: Question[] = [
    ...allQuestionsData.unit1.module1,
    ...allQuestionsData.unit1.module2,
    ...allQuestionsData.unit1.module3,
    ...allQuestionsData.unit1.module4,
    ...allQuestionsData.unit1.module5,
    ...allQuestionsData.unit1.module6,
    ...allQuestionsData.unit1.module7,
    ...allQuestionsData.unit1.assignment,
    ...allQuestionsData.unit2.module1,
    ...allQuestionsData.unit2.module2,
    ...allQuestionsData.unit2.module3,
    ...allQuestionsData.unit2.module4,
    ...allQuestionsData.unit2.module5,
    ...allQuestionsData.unit2.module6,
    ...allQuestionsData.unit2.module7,
    ...allQuestionsData.unit2.assignment,
    ...allQuestionsData.unit3.module1,
    ...allQuestionsData.unit3.module2,
    ...allQuestionsData.unit3.module3,
    ...allQuestionsData.unit3.module4,
    ...allQuestionsData.unit3.module5,
    ...allQuestionsData.unit3.module6,
    ...allQuestionsData.unit3.module7,
    ...allQuestionsData.unit3.assignment
  ];

  // Shuffle all MCQ questions and select 40
  const shuffledMcq = shuffleArray(allMcqQuestions);
  const mcqQuestions = shuffledMcq.slice(0, 40);

  // Collect all passages from all units
  const allPassages: PassageQuestion[] = [
    ...Object.values(allQuestionsData.unit1.passage_based_questions),
    ...Object.values(allQuestionsData.unit2.passage_based_questions),
    ...Object.values(allQuestionsData.unit3.passage_based_questions)
  ];

  // Shuffle all passages and select 8
  const shuffledPassages = shuffleArray(allPassages);
  const passageQuestions = shuffledPassages.slice(0, 8);

  console.log(`Global demo exam: Selected ${mcqQuestions.length} MCQ questions and ${passageQuestions.length} passages`);

  return {
    mcqQuestions,
    passageQuestions
  };
}

export default allQuestionsData;
