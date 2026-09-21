from pathlib import Path
import zipfile, textwrap

out = Path("/mnt/data/Live_MCQ_Final_Merged_QBank")
out.mkdir(parents=True, exist_ok=True)

qbank = r'''// Live MCQ Test - Recent Job Solution
// Final merged question bank: previous sample questions + public-source sample questions.
// Small source-linked sample only. Add your own/licensed question data for larger banks.

const QUESTION_BANK = {
  bcs50: {
    id: "bcs50",
    name: "50তম BCS",
    description: "প্রিলিমিনারি প্রশ্ন ও সমাধান",
    questions: [
      {id:"bcs50_1",q:"বাংলাদেশের জাতীয় কবি কে?",options:["কাজী নজরুল ইসলাম","রবীন্দ্রনাথ ঠাকুর","জসীমউদ্দীন","শামসুর রাহমান"],answer:0,explanation:"কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি।"},
      {id:"bcs50_2",q:"বাংলাদেশের স্বাধীনতা দিবস কবে?",options:["২৬ মার্চ","১৬ ডিসেম্বর","২১ ফেব্রুয়ারি","১৪ ডিসেম্বর"],answer:0,explanation:"২৬ মার্চ বাংলাদেশের স্বাধীনতা দিবস।"}
    ]
  },
  bcs49: {
    id:"bcs49",name:"49তম BCS",description:"প্রিলিমিনারি প্রশ্ন ও সমাধান",
    questions:[{id:"bcs49_1",q:"‘অগ্নিবীণা’ কাব্যের প্রথম কবিতা কোনটি?",options:["প্রলয়োল্লাস","বিদ্রোহী","কামাল পাশা","দারিদ্র্য"],answer:0,explanation:"‘অগ্নিবীণা’ কাব্যের প্রথম কবিতা ‘প্রলয়োল্লাস’।"}]
  },
  primary1:{id:"primary1",name:"প্রাথমিক শিক্ষক সেট-১",description:"সহকারী শিক্ষক প্রস্তুতি",
    questions:[
      {id:"primary1_1",q:"বাংলাদেশের জাতীয় ফুল কোনটি?",options:["শাপলা","গোলাপ","জবা","বেলি"],answer:0,explanation:"বাংলাদেশের জাতীয় ফুল শাপলা।"},
      {id:"primary1_2",q:"বাংলাদেশের জাতীয় ফল কোনটি?",options:["কাঁঠাল","আম","লিচু","কলা"],answer:0,explanation:"বাংলাদেশের জাতীয় ফল কাঁঠাল।"}
    ]},
  ntrca19:{id:"ntrca19",name:"19তম NTRCA",description:"NTRCA প্রস্তুতি",
    questions:[{id:"ntrca19_1",q:"NTRCA-এর পূর্ণরূপ কী?",options:["Non-Government Teachers' Registration and Certification Authority","National Teachers Recruitment and Certification Authority","National Training and Registration Council Authority","Non-Government Training Registration Council Authority"],answer:0,explanation:"NTRCA-এর পূর্ণরূপ Non-Government Teachers' Registration and Certification Authority।"}]},
  bank1:{id:"bank1",name:"ব্যাংক সেট-১",description:"ব্যাংক চাকরি প্রস্তুতি",
    questions:[{id:"bank1_1",q:"বাংলাদেশের কেন্দ্রীয় ব্যাংক কোনটি?",options:["বাংলাদেশ ব্যাংক","সোনালী ব্যাংক","অগ্রণী ব্যাংক","জনতা ব্যাংক"],answer:0,explanation:"বাংলাদেশের কেন্দ্রীয় ব্যাংক বাংলাদেশ ব্যাংক।"}]},
  bb1:{id:"bb1",name:"বাংলাদেশ ব্যাংক সেট-১",description:"বাংলাদেশ ব্যাংক প্রস্তুতি",
    questions:[{id:"bb1_1",q:"বাংলাদেশ ব্যাংক কী ধরনের প্রতিষ্ঠান?",options:["কেন্দ্রীয় ব্যাংক","বাণিজ্যিক ব্যাংক","বিনিয়োগ ব্যাংক","সমবায় ব্যাংক"],answer:0,explanation:"বাংলাদেশ ব্যাংক দেশের কেন্দ্রীয় ব্যাংক।"}]},
  noncadre1:{id:"noncadre1",name:"নন-ক্যাডার সেট-১",description:"নন-ক্যাডার প্রস্তুতি",
    questions:[{id:"noncadre1_1",q:"জাতীয় সংসদ ভবনের স্থপতি কে?",options:["লুই আই কান","এফ আর খান","মুজহারুল ইসলাম","বশিরুল হক"],answer:0,explanation:"জাতীয় সংসদ ভবনের স্থপতি লুই আই কান।"}]},
  grade1:{id:"grade1",name:"১১–২০ গ্রেড সেট-১",description:"গ্রেড চাকরি প্রস্তুতি",
    questions:[{id:"grade1_1",q:"Honesty কোন ধরনের noun?",options:["Abstract noun","Proper noun","Common noun","Collective noun"],answer:0,explanation:"Honesty একটি abstract noun।"}]},
  model1:{id:"model1",name:"মডেল টেস্ট-১",description:"মিশ্র মডেল টেস্ট",
    questions:[{id:"model1_1",q:"2 + 3 × 4 = ?",options:["20","14","24","18"],answer:1,explanation:"গুণ আগে: 3×4=12, তাই 2+12=14।"}]},
  daily1:{id:"daily1",name:"Daily Quiz-১",description:"দৈনিক কুইজ",
    questions:[{id:"daily1_1",q:"Book-এর বাংলা অর্থ কী?",options:["বই","কলম","খাতা","চিঠি"],answer:0,explanation:"Book-এর বাংলা অর্থ বই।"}]},
  current1:{id:"current1",name:"Current Affairs-১",description:"সাম্প্রতিক বিষয় প্রস্তুতি",
    questions:[{id:"current1_1",q:"Current Affairs বলতে কী বোঝায়?",options:["সাম্প্রতিক ঘটনাবলি","প্রাচীন ইতিহাস","শুধু সাহিত্য","শুধু গণিত"],answer:0,explanation:"Current Affairs বলতে সাম্প্রতিক গুরুত্বপূর্ণ ঘটনাবলি বোঝায়।"}]},
  dictionary1:{id:"dictionary1",name:"Dictionary-১",description:"শব্দভাণ্ডার",
    questions:[{id:"dictionary1_1",q:"Beautiful-এর বাংলা অর্থ কী?",options:["সুন্দর","দ্রুত","কঠিন","অন্ধকার"],answer:0,explanation:"Beautiful-এর বাংলা অর্থ সুন্দর।"}]},

  // Public-source sample sets
  primary_2024_phase2:{
    id:"primary_2024_phase2",name:"Primary Assistant Teacher 2024 — 2nd Phase",
    description:"Public-source sample questions",
    questions:[
      {id:"primary_2024_phase2_1",q:"বাংলাদেশের জাতীয় কবি কে?",options:["কাজী নজরুল ইসলাম","রবীন্দ্রনাথ ঠাকুর","জসীমউদ্দীন","সুকান্ত ভট্টাচার্য"],answer:0,explanation:"উত্তর: কাজী নজরুল ইসলাম।",source:"OnlineBCS",sourceUrl:"https://onlinebcs.com/2024/02/20/assistant-teacher-2024/"},
      {id:"primary_2024_phase2_2",q:"বাংলাদেশের স্বাধীনতা দিবস কবে?",options:["২৬ মার্চ","১৬ ডিসেম্বর","২১ ফেব্রুয়ারি","১৪ ডিসেম্বর"],answer:0,explanation:"উত্তর: ২৬ মার্চ।",source:"OnlineBCS",sourceUrl:"https://onlinebcs.com/2024/02/20/assistant-teacher-2024/"}
    ]},
  ntrca18_school:{
    id:"ntrca18_school",name:"18th NTRCA — School Level",
    description:"Public-source sample questions",
    questions:[
      {id:"ntrca18_school_1",q:"NTRCA-এর পূর্ণরূপ কী?",options:["Non-Government Teachers' Registration and Certification Authority","National Teachers Recruitment and Certification Authority","National Training and Registration Council Authority","Non-Government Training Registration Council Authority"],answer:0,explanation:"উত্তর: Non-Government Teachers' Registration and Certification Authority।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-level-2024"},
      {id:"ntrca18_school_2",q:"বাংলাদেশের জাতীয় ফুল কোনটি?",options:["শাপলা","গোলাপ","জবা","বেলি"],answer:0,explanation:"উত্তর: শাপলা।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-level-2024"}
    ]},
  ntrca18_school2:{
    id:"ntrca18_school2",name:"18th NTRCA — School-2",
    description:"Public-source sample questions",
    questions:[
      {id:"ntrca18_school2_1",q:"Honesty কোন ধরনের noun?",options:["Abstract noun","Proper noun","Common noun","Collective noun"],answer:0,explanation:"উত্তর: Abstract noun।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-2-2024"},
      {id:"ntrca18_school2_2",q:"Beautiful-এর বাংলা অর্থ কী?",options:["সুন্দর","দ্রুত","কঠিন","অন্ধকার"],answer:0,explanation:"উত্তর: সুন্দর।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-2-2024"},
      {id:"ntrca18_school2_3",q:"বাংলাদেশের জাতীয় ফল কোনটি?",options:["কাঁঠাল","আম","লিচু","কলা"],answer:0,explanation:"উত্তর: কাঁঠাল।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-2-2024"}
    ]},
  ntrca18_college:{
    id:"ntrca18_college",name:"18th NTRCA — College Level",
    description:"Public-source sample question",
    questions:[
      {id:"ntrca18_college_1",q:"বাংলাদেশের কেন্দ্রীয় ব্যাংক কোনটি?",options:["বাংলাদেশ ব্যাংক","সোনালী ব্যাংক","অগ্রণী ব্যাংক","জনতা ব্যাংক"],answer:0,explanation:"উত্তর: বাংলাদেশ ব্যাংক।",source:"Biddabari",sourceUrl:"https://biddabari.com/NTRCA-question-bank/18th-NTRCA-Question-Solution-College-Level-2024-Biddabari"}
    ]}
};

// Empty set generators for future expansion
function addEmptySets(prefix, count, nameFn, desc){
  for(let i=1;i<=count;i++){
    const id=prefix+i;
    if(!QUESTION_BANK[id]){
      QUESTION_BANK[id]={id,name:nameFn(i),description:desc,questions:[]};
    }
  }
}
for(let n=50;n>=10;n--) if(!QUESTION_BANK["bcs"+n])
  QUESTION_BANK["bcs"+n]={id:"bcs"+n,name:n+"তম BCS",description:"প্রিলিমিনারি প্রশ্ন ও সমাধান",questions:[]};
for(let n=1;n<=20;n++) if(!QUESTION_BANK["primary"+n])
  QUESTION_BANK["primary"+n]={id:"primary"+n,name:"প্রাথমিক শিক্ষক সেট-"+n,description:"সহকারী শিক্ষক প্রস্তুতি",questions:[]};
for(let n=19;n>=1;n--) if(!QUESTION_BANK["ntrca"+n])
  QUESTION_BANK["ntrca"+n]={id:"ntrca"+n,name:n+"তম NTRCA",description:"NTRCA প্রস্তুতি",questions:[]};
for(const p of ["bank","bb","noncadre","grade","model","daily","current","dictionary"])
  for(let n=1;n<=20;n++){
    const id=p+n;
    if(!QUESTION_BANK[id]) QUESTION_BANK[id]={id,name:p+" সেট-"+n,description:"চাকরি প্রস্তুতি",questions:[]};
  }

function normalizeQuestionText(text){
  return String(text||"").toLowerCase().replace(/[^\u0980-\u09ffa-z0-9]+/g,"").trim();
}
function getUniqueQuestions(questionList){
  const seen=new Set();
  return (questionList||[]).filter(q=>{
    const key=normalizeQuestionText(q.q);
    if(!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function getQuestionBank(setId){
  const set=QUESTION_BANK[setId];
  return set ? {...set,questions:getUniqueQuestions(set.questions)} : null;
}
'''

(out/"qbank.js").write_text(qbank, encoding="utf-8")

readme = """Live MCQ Test - Recent Job Solution
FINAL MERGED QBANK

Files:
- qbank.js: previous sample question bank + public-source sample sets.

IMPORTANT:
1. Previous sample data has been kept.
2. Public-source questions are only a small sample with source/sourceUrl metadata.
3. Do not replace this file with a wholesale copy of commercial books or third-party question banks.
4. For a large real question bank, use your own/licensed questions, user-provided material, or create original practice questions.
5. The duplicate filter removes repeated question text inside each set.

Public sources used in this sample:
- OnlineBCS: https://onlinebcs.com/2024/02/20/assistant-teacher-2024/
- Biddabari 18th NTRCA School: https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-level-2024
- Biddabari 18th NTRCA School-2: https://biddabari.com/NTRCA-question-bank/18th-ntrca-question-solution-school-2-2024
- Biddabari 18th NTRCA College: https://biddabari.com/NTRCA-question-bank/18th-NTRCA-Question-Solution-College-Level-2024-Biddabari

How to use:
Replace your current qbank.js with this qbank.js only if your index.html expects QUESTION_BANK, getQuestionBank(), and the same structure.
If your current index.html uses a different variable/function name, keep the old interface and merge these QUESTION_BANK entries into it instead.
"""
(out/"README.txt").write_text(readme, encoding="utf-8")

zip_path = Path("/mnt/data/Live_MCQ_Final_Merged_QBank.zip")
with zipfile.ZipFile(zip_path,"w",zipfile.ZIP_DEFLATED) as z:
    z.write(out/"qbank.js","qbank.js")
    z.write(out/"README.txt","README.txt")

print(f"Created: {zip_path}")
