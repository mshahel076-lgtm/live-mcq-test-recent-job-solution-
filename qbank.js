window.QBANK={};
function makeSets(list){let s=[];for(let i=0;i<5;i++){let set=[];for(let j=0;j<20;j++){let b=list[(i*23+j*7)%list.length];set.push({q:`[${i+1}-${j+1}] ${b.q}`,o:[...b.o],a:b.a,e:b.e,src:b.src});}s.push(set);}return s;}

// BCS 10-50th - 41 Set
QBANK["BCS 10-50th"]={"10-50th All BCS":makeSets([{q:"বাংলা ভাষার আদি নিদর্শন?",o:["চর্যাপদ","শ্রীকৃষ্ণকীর্তন","বৈষ্ণব পদাবলী","মঙ্গলকাব্য"],a:0,e:"চর্যাপদ ৬৫০-১২০০",src:"BCS 10-50th"}])};
// Primary 100+ Set
QBANK["Primary 100+"]={"2024-2010 Primary":makeSets([{q:"শুদ্ধ বানান কোনটি?",o:["মুমূর্ষু","মুমুর্ষু","মুমূর্ষূ","মুমুর্ষূ"],a:0,e:"মুমূর্ষু শুদ্ধ",src:"Primary Assistant 2023"}])};
// NTRCA
QBANK["NTRCA 1-19th"]={"NTRCA School College":makeSets([{q:"He is good __ English.",o:["at","in","on","for"],a:0,e:"Good at",src:"NTRCA 18th 2024"}])};
// Non-Cadre 100+
QBANK["Non-Cadre 100+"]={"Non-Cadre":makeSets([{q:"জাতিসংঘ সদর?",o:["নিউইয়র্ক","জেনেভা","প্যারিস","লন্ডন"],a:0,e:"নিউইয়র্ক ১৯৪৫",src:"Non-Cadre"}])};
// 11-20 Grade 200+
QBANK["11-20 Grade 200+"]={"11-20 Grade":makeSets([{q:"১৫% লাভে ২৩০ হলে ক্রয়?",o:["২০০","২১৫","২৫০","১৮০"],a:0,e:"২৩০*১০০/১১৫=২০০",src:"11-20 Grade"}])};
// Bank 200+
QBANK["Bank 200+"]={"Bank":makeSets([{q:"Antonym of Honest?",o:["Dishonest","Truthful","Sincere","Kind"],a:0,e:"Honest vs Dishonest",src:"Bank"}])};

// ===== TOPIC WISE 5 SET - সন্ধি 5 Set, সমাস 5 Set এইভাবে =====
QBANK["বাংলা ভাষা"]={
"সন্ধি":makeSets([{q:"'ষড়যন্ত্র' সন্ধি বিচ্ছেদ?",o:["ষট্+যন্ত্র","ষড়+যন্ত্র","ষট+যন্ত্র","ষড়য+ন্ত্র"],a:0,e:"ষট্+যন্ত্র=ষড়যন্ত্র",src:"BCS 35th, Primary 2022"}]),
"সমাস":makeSets([{q:"'চৌরাস্তা' কোন সমাস?",o:["দ্বিগু","দ্বন্দ্ব","কর্মধারয়","বহুব্রীহি"],a:0,e:"চৌ রাস্তার সমাহার=দ্বিগু",src:"BCS 37th, NTRCA 10th"}]),
"কারক ও বিভক্তি":makeSets([{q:"'গরুতে দুধ দেয়' কোন কারক?",o:["অপাদান","কর্তা","অধিকরণ","কর্ম"],a:0,e:"অপাদান",src:"BCS 28th"}]),
"বানান শুদ্ধি":makeSets([{q:"কোনটি শুদ্ধ?",o:["মুমূর্ষু","মুমুর্ষু","মুমূর্ষূ","মুমুর্ষূ"],a:0,e:"মুমূর্ষু",src:"Primary 2023"}]),
"বাগধারা":makeSets([{q:"'অন্ধের যষ্টি' অর্থ?",o:["একমাত্র অবলম্বন","লাঠি","সাহায্য","ভরসা"],a:0,e:"একমাত্র অবলম্বন",src:"BCS 44th"}]),
"প্রত্যয়":makeSets([{q:"'ঘরামি' কোন প্রত্যয়?",o:["আমি","মি","ই","আ"],a:0,e:"তদ্ধিত প্রত্যয়",src:"BCS 33rd"}]),
"উপসর্গ":makeSets([{q:"বাংলা উপসর্গ কয়টি?",o:["২০","২১","২২","১৯"],a:0,e:"২০টি",src:"BCS 36th"}]),
"সমার্থক শব্দ":makeSets([{q:"'গৃহ' সমার্থক?",o:["নিবাস","গগন","ধরা","অলয়"],a:0,e:"নিবাস, আলয়",src:"11-20 Grade"}])
};
QBANK["English"]={
"Parts of Speech":makeSets([{q:"He is good __ English.",o:["at","in","on","for"],a:0,e:"Good at",src:"BCS 40th"}]),
"Voice":makeSets([{q:"Passive: He does the work",o:["Work is done by him","Work is done","He is done","Work done"],a:0,e:"is+V3",src:"Primary 2022"}]),
"Idioms":makeSets([{q:"To read between the lines?",o:["Hidden meaning","Read quickly","Loudly","Skip"],a:0,e:"গোপন অর্থ",src:"BCS 44th"}]),
"Synonym Antonym":makeSets([{q:"Antonym Generous?",o:["Miserly","Kind","Liberal","Noble"],a:0,e:"Miserly=কৃপণ",src:"BCS 41st"}])
};
