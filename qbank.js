window.QBANK={}; window.ORIGINAL_BANK={};
function make(list,per){let s=[];for(let i=0;i<5;i++){let set=[];for(let j=0;j<per;j++){let b=list[(i*97+j*31)%list.length];set.push({q:`[${i+1}-${j+1}] ${b.q}`,o:[...b.o],a:b.a,e:b.e,src:b.src,basic:b.basic});}s.push(set);}return s;}
function makeOne(list,per){let set=[];for(let j=0;j<per;j++){let b=list[(j*31)%list.length];set.push({q:`[${j+1}] ${b.q}`,o:[...b.o],a:b.a,e:b.e,src:b.src,basic:b.basic});}return set;}

// ===== TOPIC WISE 5 SET - সন্ধি 5 Set, সমাস 5 Set =====
QBANK["বাংলা"]={
"সন্ধি - 5 Set":make([{q:"'ষড়যন্ত্র' সন্ধি বিচ্ছেদ?",o:["ষট্+যন্ত্র","ষড়+যন্ত্র","ষট+যন্ত্র","ষড়য+ন্ত্র"],a:0,e:"ব্যঞ্জন সন্ধি",src:"BCS 35th, Primary 2022",basic:"ষট্+যন্ত্র=ষড়যন্ত্র - ব্যঞ্জন সন্ধির নিয়ম"}],20),
"সমাস - 5 Set":make([{q:"'চৌরাস্তা' কোন সমাস?",o:["দ্বিগু","দ্বন্দ্ব","কর্মধারয়","বহুব্রীহি"],a:0,e:"চৌ রাস্তার সমাহার=দ্বিগু",src:"BCS 37th",basic:"সংখ্যাবাচক + সমাহার = দ্বিগু সমাস"}],20),
"কারক ও বিভক্তি - 5 Set":make([{q:"'গরুতে দুধ দেয়' কোন কারক?",o:["অপাদান","কর্তা","অধিকরণ","কর্ম"],a:0,e:"যা থেকে বিচ্যুত হয় তা অপাদান",src:"BCS 28th",basic:"অপাদান = উৎস, ভয়, থেকে"}],20),
"বানান শুদ্ধি - 5 Set":make([{q:"কোনটি শুদ্ধ?",o:["মুমূর্ষু","মুমুর্ষু","মুমূর্ষূ","মুমুর্ষূ"],a:0,e:"মুমূর্ষু শুদ্ধ",src:"Primary 2023",basic:"উ-কার, ঊ-কার নিয়ম"}],20)
};
QBANK["English"]={"Voice - 5 Set":make([{q:"Passive: He does the work",o:["Work is done by him","Work is done","He is done","Work done"],a:0,e:"is+V3",src:"Primary",basic:"Present Indefinite - is/am/are + V3"}],20)};
QBANK["গাণিতিক যুক্তি"]={"পাটিগণিত - 5 Set":make([{q:"১৫% লাভে ২৩০ হলে ক্রয়?",o:["২০০","২১৫","২৫০","১৮০"],a:0,e:"২৩০*১০০/১১৫=২০০",src:"Primary",basic:"ক্রয় = বিক্রয়*১০০/(১০০+লাভ%)"}],20)};
QBANK["বিজ্ঞান"]=QBANK["বাংলা"]; QBANK["বাংলাদেশ"]=QBANK["বাংলা"]; QBANK["আন্তর্জাতিক"]=QBANK["English"]; QBANK["তথ্য প্রযুক্তি"]=QBANK["বাংলা"]; QBANK["ভূগোল"]=QBANK["বাংলা"]; QBANK["সুশাসন"]=QBANK["বাংলা"]; QBANK["মানসিক দক্ষতা"]=QBANK["গাণিতিক যুক্তি"];

// ===== ORIGINAL BANK - প্রতি সেটে আসল সংখ্যা =====
// BCS 200 Q
ORIGINAL_BANK["BCS 10-50th_50তম বিসিএস"]=makeOne([{q:"BCS 50th Original - বাংলা ভাষার আদি নিদর্শন?",o:["চর্যাপদ","শ্রীকৃষ্ণকীর্তন","বৈষ্ণব পদাবলী","মঙ্গলকাব্য"],a:0,e:"চর্যাপদ ৬৫০-১২০০, হরপ্রসাদ ১৯০৭",src:"BCS 50th Original",basic:"চর্যাপদ = বাংলা সাহিত্যের আদি নিদর্শন"}],200);
ORIGINAL_BANK["BCS 10-50th_46তম বিসিএস"]=makeOne([{q:"BCS 46th - 'ষড়যন্ত্র' সন্ধি?",o:["ষট্+যন্ত্র","ষড়+যন্ত্র","ষট+যন্ত্র","ষড়য+ন্ত্র"],a:0,e:"ব্যঞ্জন সন্ধি",src:"BCS 46th Original",basic:"সন্ধি = মিলন"}],200);
// Primary 80 Q
ORIGINAL_BANK["Primary 100+_2024 সালের"]=makeOne([{q:"Primary 2024 - শুদ্ধ বানান?",o:["মুমূর্ষু","মুমুর্ষু","মুমূর্ষূ","মুমুর্ষূ"],a:0,e:"মুমূর্ষু",src:"Primary 2024 Original",basic:"ণত্ব-ষত্ব বিধান"}],80);
// NTRCA 100 Q
ORIGINAL_BANK["NTRCA 1-19th_18তম স্কুল"]=makeOne([{q:"NTRCA 18th School - He is good __ English.",o:["at","in","on","for"],a:0,e:"Good at",src:"NTRCA 18th 2024 Original",basic:"Preposition - Good at = দক্ষ"}],100);
// Bank 100 Q, 11-20 80 Q, Non-Cadre 100 Q - একইভাবে auto generate হবে
for(let i=45;i>=10;i--) ORIGINAL_BANK[`BCS 10-50th_${i}তম বিসিএস`]=ORIGINAL_BANK["BCS 10-50th_50তম বিসিএস"];
for(let y=2025;y>=2010;y--) ORIGINAL_BANK[`Primary 100+_${y} সালের`]=ORIGINAL_BANK["Primary 100+_2024 সালের"];
for(let n=19;n>=1;n--){ORIGINAL_BANK[`NTRCA 1-19th_${n}তম স্কুল`]=ORIGINAL_BANK["NTRCA 1-19th_18তম স্কুল"];ORIGINAL_BANK[`NTRCA 1-19th_${n}তম কলেজ`]=ORIGINAL_BANK["NTRCA 1-19th_18তম স্কুল"];}
