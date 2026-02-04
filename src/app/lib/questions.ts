import { Question, PracticeMode, PassageQuestion, AllQuestionsData, UnitQuestions } from "../types";

// Module-level debug - this will run when the module is loaded
console.log('=== questions.ts module loaded ===');

const allQuestionsData: AllQuestionsData = {
  unit1: {
    module1:  [
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
  }
],
module2:[
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
],
module3:[
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
  }
],module4:[
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
  }
],
module5:[
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
  }
],
module6:[
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

]
,

module7:[
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

],
    assignment:[
  
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
    passage_based_questions: {

  "passage_1": {
    "title": "Marketing Funnel Optimization Using Data",
    "passage": "A digital marketing team launched a campaign for a new fitness subscription app. They used Instagram ads to create awareness, a landing page to collect sign-ups, and follow-up email sequences to nurture leads. After two weeks, analytics showed high click-through rates on ads, but sign-ups remained low. Heatmap tools revealed that most users scrolled only halfway down the landing page and exited. The team also found that mobile users had a much higher bounce rate than desktop users. To improve results, the team decided to simplify the landing page layout, add a clearer call-to-action button above the fold, and reduce the number of form fields. They also planned to run A/B tests on different headlines and visuals. The goal of these optimizations was to reduce friction, improve conversions, and increase customer acquisition while keeping ad spending efficient.",
    "questions": [
      {
        "question": "High click-through rates but low sign-ups most strongly suggest which issue?",
        "options": [
          "The ads are not reaching the audience",
          "The landing page experience is weak or confusing",
          "The product is already too popular",
          "Email marketing is reducing impressions"
        ],
        "explanation": "High CTR shows ads are working, but low sign-ups indicate landing page or form issues.",
        "correctAnswer": [1]
      },
      {
        "question": "Which tool mentioned in the passage helps identify how far users scroll before leaving?",
        "options": [
          "SEO analyzer tool",
          "Heatmap tool",
          "Influencer tracker",
          "Content scheduler"
        ],
        "explanation": "Heatmaps show scrolling and click behavior patterns of users.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is placing a call-to-action button above the fold an effective strategy?",
        "options": [
          "It increases follower count automatically",
          "It forces users to scroll less before taking action",
          "It guarantees viral reach",
          "It reduces the need for email marketing"
        ],
        "explanation": "Above-the-fold CTA ensures users can take action immediately without scrolling.",
        "correctAnswer": [1]
      },
      {
        "question": "Reducing the number of form fields is most likely to improve which KPI?",
        "options": [
          "Conversion rate",
          "Impressions",
          "Reach",
          "Follower growth"
        ],
        "explanation": "Fewer form fields reduce friction, increasing sign-up completion rate.",
        "correctAnswer": [0]
      },
      {
        "question": "Running A/B tests on headlines and visuals mainly helps the team do what?",
        "options": [
          "Compare different variations to find what converts best",
          "Reduce product development time",
          "Increase influencer engagement",
          "Eliminate the need for analytics"
        ],
        "explanation": "A/B testing compares variations to identify which performs better for conversions.",
        "correctAnswer": [0]
      }
    ]
  },
  
  "passage_2": {
    "title": "Influencer Marketing and Authentic Brand Messaging",
    "passage": "A skincare brand partnered with a micro-influencer to promote its new vitamin C serum. The influencer’s audience matched the brand’s target market, and the brand provided campaign guidelines about product benefits, required hashtags, and disclosure rules. However, the brand also gave the influencer a fully written script and asked them to read it word-for-word. After posting, followers commented that the content felt unnatural and overly promotional. Engagement was much lower than the influencer’s usual posts. The brand realized that while guidelines are important, influencer collaborations work best when creators can communicate in their own authentic voice. For the next campaign, the brand planned to allow flexibility in tone and storytelling while still maintaining accurate product information.",
    "questions": [
      {
        "question": "What was the main reason the influencer post performed poorly?",
        "options": [
          "The influencer used too many hashtags",
          "The brand over-scripted the content, reducing authenticity",
          "The influencer’s audience was not relevant",
          "The product price was too low"
        ],
        "explanation": "Over-scripting makes content feel fake and reduces trust, lowering engagement.",
        "correctAnswer": [1]
      },
      {
        "question": "Which type of influencer is mentioned in the passage?",
        "options": [
          "Celebrity influencer",
          "Macro-influencer",
          "Micro-influencer",
          "Virtual influencer"
        ],
        "explanation": "The passage clearly states the brand partnered with a micro-influencer.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the best way to balance authenticity and brand control in influencer marketing?",
        "options": [
          "Provide guidelines but allow creators to speak in their own voice",
          "Force creators to use identical talking points in every post",
          "Avoid giving any instructions to influencers",
          "Use only paid ads instead of influencer marketing"
        ],
        "explanation": "Guidelines ensure accuracy, while creative freedom maintains authenticity.",
        "correctAnswer": [0]
      },
      {
        "question": "Which metric is most directly affected when influencer engagement drops?",
        "options": [
          "Bounce rate",
          "Engagement rate",
          "Customer lifetime value",
          "SEO score"
        ],
        "explanation": "Low comments/likes/shares reflect a drop in engagement rate.",
        "correctAnswer": [1]
      },
      {
        "question": "Why are disclosure rules important in influencer campaigns?",
        "options": [
          "They guarantee higher sales instantly",
          "They improve video quality",
          "They build transparency and trust with the audience",
          "They reduce the number of followers"
        ],
        "explanation": "Disclosures ensure ethical marketing and transparency for sponsored content.",
        "correctAnswer": [2]
      }
    ]
  },
  
  "passage_3": {
    "title": "AI Personalization and Ethical Responsibility",
    "passage": "An e-commerce platform used an AI recommendation engine to suggest products based on user browsing history and purchase behavior. The goal was to increase conversions through personalized offers. After a month, the company noticed complaints from users who were receiving irrelevant or inappropriate recommendations. Some customers also reported that the suggestions seemed biased and did not match their preferences. The marketing team decided to audit the AI model to identify bias, review training data quality, and adjust recommendation rules. They also introduced monitoring systems to regularly check outputs and ensure ethical and accurate personalization. The company understood that personalization should improve customer experience, not harm trust.",
    "questions": [
      {
        "question": "What was the main issue with the AI recommendation engine?",
        "options": [
          "It reduced website traffic",
          "It produced irrelevant and biased recommendations",
          "It improved conversions too quickly",
          "It increased customer lifetime value automatically"
        ],
        "explanation": "Users complained about irrelevant and biased product suggestions.",
        "correctAnswer": [1]
      },
      {
        "question": "What should the company do first to address the AI problem?",
        "options": [
          "Ignore complaints until legal action happens",
          "Audit the AI system for bias and unintended consequences",
          "Disable all marketing campaigns permanently",
          "Increase discounts to distract users"
        ],
        "explanation": "The correct first step is auditing the AI model for bias and issues.",
        "correctAnswer": [1]
      },
      {
        "question": "Which marketing benefit was the AI system originally designed to improve?",
        "options": [
          "Conversion rate through personalization",
          "Brand logo consistency",
          "Offline store sales only",
          "Hashtag performance"
        ],
        "explanation": "The passage states the goal was to increase conversions using personalized offers.",
        "correctAnswer": [0]
      },
      {
        "question": "Why is monitoring AI outputs an ethical responsibility?",
        "options": [
          "Because AI never makes mistakes",
          "Because inappropriate recommendations can damage trust",
          "Because monitoring increases bounce rate",
          "Because it reduces influencer reach"
        ],
        "explanation": "Bad AI recommendations harm customer trust and brand credibility.",
        "correctAnswer": [1]
      },
      {
        "question": "What data was the AI primarily using to recommend products?",
        "options": [
          "Website color themes",
          "User browsing and purchase behavior",
          "Random product selection",
          "Competitor advertisements"
        ],
        "explanation": "The passage states AI recommendations were based on browsing history and purchase behavior.",
        "correctAnswer": [1]
      }
    ]
  },
  
  "passage_4": {
    "title": "Omnichannel Strategy and Customer Experience",
    "passage": "A retail clothing brand launched a seasonal campaign using Instagram ads, email newsletters, and in-store promotions. Customers who clicked Instagram ads were later retargeted through email with product recommendations based on what they viewed. When customers visited the store, sales staff could access the customer’s online browsing preferences and suggest matching items. This created a connected shopping journey across digital and physical channels. The brand noticed higher customer satisfaction and increased repeat purchases. The marketing team concluded that a connected experience across all touchpoints builds loyalty and improves long-term revenue.",
    "questions": [
      {
        "question": "Which marketing approach is best represented in the passage?",
        "options": [
          "Multichannel marketing",
          "Omnichannel marketing",
          "Affiliate marketing",
          "Cold calling strategy"
        ],
        "explanation": "Customer data is connected across online and offline channels, which defines omnichannel marketing.",
        "correctAnswer": [1]
      },
      {
        "question": "What action in the passage shows the strongest omnichannel integration?",
        "options": [
          "Running Instagram ads",
          "Sending newsletters to all users",
          "Store staff using online browsing preferences to suggest items",
          "Posting seasonal content weekly"
        ],
        "explanation": "Using online behavior data inside the physical store shows a seamless connected experience.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the primary benefit of omnichannel marketing mentioned in the passage?",
        "options": [
          "Higher product manufacturing speed",
          "Higher customer satisfaction and repeat purchases",
          "Lower internet speed requirements",
          "Fewer creative assets needed"
        ],
        "explanation": "The passage states omnichannel created higher satisfaction and increased repeat purchases.",
        "correctAnswer": [1]
      },
      {
        "question": "Email recommendations based on what customers viewed online is an example of what tactic?",
        "options": [
          "Dynamic personalization",
          "Static segmentation",
          "Offline marketing only",
          "Manual outreach"
        ],
        "explanation": "Recommendations based on browsing behavior represent dynamic personalization.",
        "correctAnswer": [0]
      },
      {
        "question": "Increased repeat purchases in the passage most directly relate to which KPI?",
        "options": [
          "Retention rate",
          "Bounce rate",
          "Click-through rate",
          "Impressions"
        ],
        "explanation": "Repeat purchases indicate better customer retention.",
        "correctAnswer": [0]
      }
    ]
  },
  
  "passage_5": {
    "title": "Marketing Funnel and Customer Journey",
    "passage": "A marketing funnel describes how customers move from awareness to purchase. In the awareness stage, customers first learn about a brand through ads, social media, or search. In the consideration stage, they compare options, read reviews, and explore features. In the purchase stage, customers make the final decision, where smooth checkout and clear pricing are important. After purchase, brands focus on loyalty through follow-ups, support, and rewards. A good funnel strategy delivers the right message at the right stage to avoid losing potential customers.",
    "questions": [
      {
        "question": "What is the main goal of the awareness stage in a marketing funnel?",
        "options": [
          "To collect payments immediately",
          "To make customers aware of the brand",
          "To provide customer support",
          "To reduce product pricing"
        ],
        "explanation": "Awareness stage ka goal hota hai brand ko introduce karna aur visibility badhana.",
        "correctAnswer": [1]
      },
      {
        "question": "Which activity best fits the consideration stage?",
        "options": [
          "Watching product comparison videos",
          "Submitting payment instantly",
          "Ignoring all ads",
          "Unsubscribing from newsletters"
        ],
        "explanation": "Consideration stage me customer compare karta hai, reviews dekhta hai aur options analyze karta hai.",
        "correctAnswer": [0]
      },
      {
        "question": "What is most important in the purchase stage?",
        "options": [
          "Long blog articles only",
          "Smooth checkout and clear pricing",
          "Posting memes daily",
          "Avoiding CTAs"
        ],
        "explanation": "Purchase stage me friction kam hona chahiye, checkout easy hona chahiye aur pricing transparent.",
        "correctAnswer": [1]
      },
      {
        "question": "Which action supports post-purchase loyalty?",
        "options": [
          "Providing rewards and follow-up support",
          "Stopping communication completely",
          "Increasing checkout steps",
          "Removing customer service"
        ],
        "explanation": "Loyalty stage me follow-up emails, rewards aur support customers ko repeat purchase ke liye encourage karta hai.",
        "correctAnswer": [0]
      },
      {
        "question": "Why should messages be different at each funnel stage?",
        "options": [
          "Because customers want confusion",
          "Because each stage needs different information",
          "Because ads are always expensive",
          "Because customers never compare products"
        ],
        "explanation": "Different stages me customer mindset different hota hai, isliye content aur message stage-wise hona chahiye.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_6": {
    "title": "Segmentation and Target Audience",
    "passage": "Segmentation is the process of dividing a market into smaller groups of customers with similar characteristics. Demographic segmentation is based on age, gender, income, or education. Geographic segmentation focuses on location such as city or climate. Psychographic segmentation is based on lifestyle, values, and interests. Behavioral segmentation focuses on customer actions like purchase frequency, loyalty, and product usage. Proper segmentation helps brands create more relevant marketing campaigns and increase conversions.",
    "questions": [
      {
        "question": "What is segmentation in marketing?",
        "options": [
          "Selling the same product to everyone",
          "Dividing customers into smaller groups",
          "Increasing product price every month",
          "Reducing the number of customers"
        ],
        "explanation": "Segmentation ka meaning hota hai market ko similar groups me divide karna.",
        "correctAnswer": [1]
      },
      {
        "question": "Age-based customer grouping is an example of which segmentation?",
        "options": [
          "Behavioral segmentation",
          "Geographic segmentation",
          "Demographic segmentation",
          "Psychographic segmentation"
        ],
        "explanation": "Age demographic factor hai, isliye demographic segmentation hota hai.",
        "correctAnswer": [2]
      },
      {
        "question": "Grouping customers based on city or region is called?",
        "options": [
          "Psychographic segmentation",
          "Geographic segmentation",
          "Demographic segmentation",
          "Behavioral segmentation"
        ],
        "explanation": "Location-based grouping geographic segmentation hota hai.",
        "correctAnswer": [1]
      },
      {
        "question": "Customers grouped by lifestyle and values represent which segmentation?",
        "options": [
          "Psychographic segmentation",
          "Geographic segmentation",
          "Demographic segmentation",
          "Behavioral segmentation"
        ],
        "explanation": "Lifestyle, values, interest = psychographic segmentation.",
        "correctAnswer": [0]
      },
      {
        "question": "Grouping customers based on purchase frequency is which segmentation?",
        "options": [
          "Behavioral segmentation",
          "Demographic segmentation",
          "Geographic segmentation",
          "Psychographic segmentation"
        ],
        "explanation": "Purchase habits aur actions behavioral segmentation me aate hain.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_7": {
    "title": "Brand Identity and Visual Consistency",
    "passage": "Brand identity is how a business presents itself visually and emotionally to customers. It includes logo, colors, fonts, tone of voice, and design style. Visual consistency is important because it helps customers recognize the brand quickly across platforms like Instagram, websites, and email campaigns. Tools like moodboards and brand style guides help maintain the same look and feel. Consistency builds trust and makes the brand appear professional and reliable.",
    "questions": [
      {
        "question": "What does brand identity include?",
        "options": [
          "Only product pricing",
          "Logo, colors, fonts, and tone",
          "Only customer complaints",
          "Only delivery methods"
        ],
        "explanation": "Brand identity includes visual + emotional elements like logo, colors, fonts, and tone.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is visual consistency important?",
        "options": [
          "It confuses customers",
          "It helps customers recognize the brand quickly",
          "It reduces the need for marketing",
          "It increases product defects"
        ],
        "explanation": "Consistent visuals se brand recognition strong hoti hai.",
        "correctAnswer": [1]
      },
      {
        "question": "Which tool helps organize visual references for a campaign?",
        "options": [
          "Moodboard",
          "Bounce rate",
          "CTR report",
          "KPI dashboard"
        ],
        "explanation": "Moodboard visuals ko organize karne ke liye use hota hai.",
        "correctAnswer": [0]
      },
      {
        "question": "What does a brand style guide mainly provide?",
        "options": [
          "Rules for design elements like colors and fonts",
          "Product discount codes",
          "Customer phone numbers",
          "Competitor pricing details"
        ],
        "explanation": "Style guide design rules define karta hai so visuals consistent rahe.",
        "correctAnswer": [0]
      },
      {
        "question": "What is the main benefit of consistent branding?",
        "options": [
          "It reduces customer trust",
          "It builds trust and professionalism",
          "It increases customer confusion",
          "It eliminates competition"
        ],
        "explanation": "Consistency trust build karti hai aur brand professional lagta hai.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_8": {
    "title": "SEO and Keyword Optimization",
    "passage": "Search Engine Optimization (SEO) helps websites rank higher on search engines like Google. One key SEO method is keyword optimization, where businesses use relevant keywords in page titles, headings, and content. For example, if customers search for 'best running shoes', the website should include these keywords naturally. SEO also improves user experience through fast loading pages, mobile-friendly design, and clear navigation. Better SEO increases organic traffic without paid ads.",
    "questions": [
      {
        "question": "What is the main purpose of SEO?",
        "options": [
          "To reduce website speed",
          "To rank higher in search engines",
          "To increase product manufacturing cost",
          "To remove keywords from websites"
        ],
        "explanation": "SEO ka main goal search engines me higher ranking achieve karna hota hai.",
        "correctAnswer": [1]
      },
      {
        "question": "Keyword optimization means?",
        "options": [
          "Using random hashtags on a website",
          "Using relevant search words in content",
          "Removing headings from web pages",
          "Hiding content inside images only"
        ],
        "explanation": "Relevant keywords content me naturally use karna keyword optimization hota hai.",
        "correctAnswer": [1]
      },
      {
        "question": "Which of these improves SEO indirectly?",
        "options": [
          "Slow loading pages",
          "Mobile-friendly design",
          "Hidden product details",
          "Too many pop-ups"
        ],
        "explanation": "Mobile-friendly website user experience improve karta hai jo SEO ranking ko help karta hai.",
        "correctAnswer": [1]
      },
      {
        "question": "What is organic traffic?",
        "options": [
          "Visitors coming through paid ads only",
          "Visitors coming naturally from search engines",
          "Visitors coming only from emails",
          "Visitors coming only from offline posters"
        ],
        "explanation": "Organic traffic means unpaid visitors from search engines.",
        "correctAnswer": [1]
      },
      {
        "question": "Why should keywords be used naturally in content?",
        "options": [
          "Because keyword stuffing reduces quality",
          "Because keywords should be hidden",
          "Because SEO does not need keywords",
          "Because search engines block keyword use"
        ],
        "explanation": "Natural keyword use better ranking deta hai, keyword stuffing penalty cause kar sakta hai.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_9": {
    "title": "Social Media Engagement and Community Building",
    "passage": "Social media engagement includes likes, comments, shares, saves, and direct messages. Engagement is important because it shows how much the audience connects with content. Brands can increase engagement by asking questions, using clear CTAs, replying to comments, and sharing user-generated content (UGC). Posting consistently and using platform features like Reels, Stories, and polls can also boost visibility. Building a community means creating two-way interaction, not just posting promotional content.",
    "questions": [
      {
        "question": "Which is an example of social media engagement?",
        "options": [
          "Likes and comments",
          "Website server crash",
          "Product manufacturing",
          "Offline newspaper printing"
        ],
        "explanation": "Engagement me likes, comments, shares, saves, DMs aate hain.",
        "correctAnswer": [0]
      },
      {
        "question": "What is a good way to increase engagement?",
        "options": [
          "Ignore comments completely",
          "Ask questions and reply to comments",
          "Post only product prices",
          "Stop using hashtags forever"
        ],
        "explanation": "Audience interaction increase karne ke liye questions aur replies effective hote hain.",
        "correctAnswer": [1]
      },
      {
        "question": "What does UGC mean?",
        "options": [
          "User Generated Content",
          "Unlimited Growth Campaign",
          "Universal Graphic Code",
          "User Growth Conversion"
        ],
        "explanation": "UGC ka full form User Generated Content hota hai.",
        "correctAnswer": [0]
      },
      {
        "question": "Why is replying to comments important?",
        "options": [
          "It reduces customer trust",
          "It builds two-way community interaction",
          "It blocks social media reach",
          "It decreases visibility"
        ],
        "explanation": "Replying creates connection and community feel.",
        "correctAnswer": [1]
      },
      {
        "question": "Which platform feature can boost visibility?",
        "options": [
          "Reels and Stories",
          "Ignoring algorithms",
          "Deleting all posts",
          "Posting once a year"
        ],
        "explanation": "Platform features like Reels/Stories usually algorithm support deti hain.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_10": {
    "title": "AI in Marketing and Ethical Responsibility",
    "passage": "AI is widely used in marketing for personalization, content creation, and customer support automation. AI can recommend products based on browsing behavior, send automated emails, and predict customer needs. However, AI systems may sometimes show bias or suggest irrelevant products. Ethical AI marketing requires transparency, user consent, and regular auditing of AI outputs. Brands should provide opt-in and opt-out choices for data tracking and ensure human oversight for sensitive decisions. Responsible AI use builds trust and prevents long-term reputation damage.",
    "questions": [
      {
        "question": "Which is a common use of AI in marketing?",
        "options": [
          "Product recommendation based on browsing",
          "Printing newspaper manually",
          "Building roads for delivery",
          "Increasing product weight"
        ],
        "explanation": "AI marketing me personalization aur recommendations commonly use hote hain.",
        "correctAnswer": [0]
      },
      {
        "question": "What is a major risk of AI-driven personalization?",
        "options": [
          "AI always reduces costs",
          "AI can create biased or unfair recommendations",
          "AI stops customers from buying",
          "AI eliminates the need for marketing"
        ],
        "explanation": "AI systems bias show kar sakte hain jo unfair recommendations cause karta hai.",
        "correctAnswer": [1]
      },
      {
        "question": "What is one ethical requirement for responsible AI marketing?",
        "options": [
          "Collect as much data as possible without permission",
          "Provide opt-in and opt-out choices for tracking",
          "Hide all algorithm outputs from users",
          "Avoid customer feedback completely"
        ],
        "explanation": "User consent aur control ethical AI marketing ka key part hai.",
        "correctAnswer": [1]
      },
      {
        "question": "Why should brands audit AI outputs regularly?",
        "options": [
          "To increase bias intentionally",
          "To ensure fairness and reduce errors",
          "To remove all personalization",
          "To stop customer engagement"
        ],
        "explanation": "Auditing helps detect bias, mistakes, and irrelevant recommendations.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main benefit of responsible AI use in marketing?",
        "options": [
          "It reduces brand trust",
          "It builds trust and protects reputation",
          "It guarantees viral marketing always",
          "It eliminates competition instantly"
        ],
        "explanation": "Responsible AI transparency aur fairness se trust build hota hai aur brand reputation safe hoti hai.",
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
      ...unit1.assignment
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
