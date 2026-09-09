const questionBank = [

{
id:"bcs-001",
category:"bcs",
question:"বাংলাদেশের জাতীয় ফুল কোনটি?",
options:["গোলাপ","শাপলা","জবা","বেলি"],
answer:1,
explanation:"শাপলা বাংলাদেশের জাতীয় ফুল।"
},

{
id:"bcs-002",
category:"bcs",
question:"বাংলাদেশের জাতীয় ফল কোনটি?",
options:["আম","কাঁঠাল","লিচু","কলা"],
answer:1,
explanation:"কাঁঠাল বাংলাদেশের জাতীয় ফল।"
},

{
id:"bcs-003",
category:"bcs",
question:"বাংলাদেশের জাতীয় পাখি কোনটি?",
options:["দোয়েল","কাক","ময়ূর","শালিক"],
answer:0,
explanation:"দোয়েল বাংলাদেশের জাতীয় পাখি।"
},

{
id:"ntrca-001",
category:"ntrca",
question:"NTRCA-এর পূর্ণরূপ কী?",
options:[
"National Teachers Registration and Certification Authority",
"National Teacher Recruitment Council Authority",
"National Training Registration Council Authority",
"National Teaching Registration Committee Authority"
],
answer:0,
explanation:"NTRCA-এর পূর্ণরূপ National Teachers Registration and Certification Authority."
},

{
id:"bank-001",
category:"bank",
question:"বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম কী?",
options:[
"সোনালী ব্যাংক",
"বাংলাদেশ ব্যাংক",
"জনতা ব্যাংক",
"অগ্রণী ব্যাংক"
],
answer:1,
explanation:"বাংলাদেশের কেন্দ্রীয় ব্যাংক হলো বাংলাদেশ ব্যাংক।"
},

{
id:"primary-001",
category:"primary",
question:"প্রাথমিক শিক্ষার মূল উদ্দেশ্য কী?",
options:[
"শিক্ষার্থীর মৌলিক জ্ঞান ও দক্ষতা অর্জন",
"শুধু পরীক্ষায় ভালো ফল",
"শুধু খেলাধুলা",
"শুধু মুখস্থ শিক্ষা"
],
answer:0,
explanation:"প্রাথমিক শিক্ষার অন্যতম প্রধান উদ্দেশ্য হলো শিশুর মৌলিক জ্ঞান, দক্ষতা ও মূল্যবোধের বিকাশ।"
},

{
id:"bangla-001",
category:"bangla",
question:"বাংলা বর্ণমালায় মোট বর্ণ কয়টি?",
options:["৪৮টি","৫০টি","৫২টি","৫৪টি"],
answer:1,
explanation:"প্রচলিত বাংলা বর্ণমালায় মোট ৫০টি বর্ণ রয়েছে।"
},

{
id:"bangla-002",
category:"bangla",
question:"'আকাশ' শব্দের সমার্থক শব্দ কোনটি?",
options:["গগন","পাতাল","মাটি","সাগর"],
answer:0,
explanation:"আকাশের সমার্থক শব্দ গগন।"
},

{
id:"english-001",
category:"english",
question:"What is the plural form of 'Child'?",
options:[
"Childs",
"Childes",
"Children",
"Childrens"
],
answer:2,
explanation:"The plural form of Child is Children."
},

{
id:"english-002",
category:"english",
question:"Choose the correct sentence.",
options:[
"He go to school.",
"He goes to school.",
"He going to school.",
"He gone to school."
],
answer:1,
explanation:"With He/She/It in the Present Indefinite affirmative, the verb normally takes s/es."
},

{
id:"math-001",
category:"math",
question:"১২ × ৮ = কত?",
options:["৮৬","৯৬","১০৬","১১৬"],
answer:1,
explanation:"১২ × ৮ = ৯৬।"
},

{
id:"math-002",
category:"math",
question:"১০০-এর ২৫% কত?",
options:["২০","২৫","৩০","৩৫"],
answer:1,
explanation:"১০০ × ২৫/১০০ = ২৫।"
},

{
id:"gk-001",
category:"gk",
question:"বাংলাদেশের রাজধানী কোনটি?",
options:["চট্টগ্রাম","ঢাকা","খুলনা","রাজশাহী"],
answer:1,
explanation:"বাংলাদেশের রাজধানী ঢাকা।"
},

{
id:"gk-002",
category:"gk",
question:"বাংলাদেশের স্বাধীনতা দিবস কবে?",
options:[
"২১ ফেব্রুয়ারি",
"২৬ মার্চ",
"১৬ ডিসেম্বর",
"১৪ এপ্রিল"
],
answer:1,
explanation:"২৬ মার্চ বাংলাদেশের স্বাধীনতা দিবস।"
},

{
id:"ict-001",
category:"ict",
question:"CPU-এর পূর্ণরূপ কী?",
options:[
"Central Processing Unit",
"Computer Processing Unit",
"Central Program Unit",
"Computer Program Unit"
],
answer:0,
explanation:"CPU-এর পূর্ণরূপ Central Processing Unit."
},

{
id:"ict-002",
category:"ict",
question:"HTML-এর পূর্ণরূপ কী?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Markup Language",
"Home Text Markup Language"
],
answer:0,
explanation:"HTML-এর পূর্ণরূপ Hyper Text Markup Language."
},

{
id:"current-001",
category:"current",
question:"Current Affairs-এর নতুন প্রশ্নগুলো এই বিভাগে যুক্ত করা হবে।",
options:[
"সঠিক",
"ভুল",
"কোনোটিই নয়",
"সবগুলো"
],
answer:0,
explanation:"এই বিভাগটি পরবর্তীতে নতুন সাম্প্রতিক প্রশ্ন দিয়ে নিয়মিত আপডেট করা যাবে।"
},

{
id:"recent-001",
category:"recent",
question:"Recent Job Solution বিভাগে কী থাকবে?",
options:[
"চাকরির পরীক্ষার প্রশ্ন ও সমাধান",
"শুধু গল্প",
"শুধু কবিতা",
"শুধু ছবি"
],
answer:0,
explanation:"Recent Job Solution বিভাগে চাকরির পরীক্ষার প্রশ্ন, উত্তর ও ব্যাখ্যা রাখা হবে।"
},

{
id:"recent-002",
category:"recent",
question:"MCQ পরীক্ষায় ভুল করা প্রশ্ন কোথায় সংরক্ষণ করা হবে?",
options:[
"Wrong Questions",
"Home",
"Current Affairs",
"Settings"
],
answer:0,
explanation:"ভুল করা প্রশ্ন Wrong Questions বিভাগে সংরক্ষণ করা হবে।"
}

];
