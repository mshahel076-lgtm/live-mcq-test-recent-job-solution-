from pathlib import Path
import json, zipfile

out = Path("/mnt/data/bcs_mcq_complete_structure")
out.mkdir(exist_ok=True)

exams = []
for n in range(50, 9, -1):
    exams.append({
        "id": f"bcs{n}",
        "name": f"{n}তম BCS",
        "description": "প্রিলিমিনারি প্রশ্ন ও সমাধান",
        "questions": []
    })

qbank_js = """/*
=========================================================
BCS QUESTION BANK
৫০তম → ১০ম BCS
=========================================================

প্রতিটি প্রশ্নের format:

{
  id: "50-001",
  question: "প্রশ্নটি এখানে লিখুন",
  options: [
    "ক) প্রথম অপশন",
    "খ) দ্বিতীয় অপশন",
    "গ) তৃতীয় অপশন",
    "ঘ) চতুর্থ অপশন"
  ],
  answer: 0,
  explanation: "সঠিক উত্তরের ব্যাখ্যা এখানে লিখুন",
  source: "অনুমোদিত/প্রকাশ্য উৎস"
}

answer:
0 = ক
1 = খ
2 = গ
3 = ঘ

একই প্রশ্ন দুইবার থাকলে app-এর duplicate filter সেটি বাদ দেবে।
=========================================================
*/

const bcsExams = """ + json.dumps(exams, ensure_ascii=False, indent=2) + """;

/*
---------------------------------------------------------
উদাহরণ:
নিচের মতো করে questions array-তে প্রশ্ন যোগ করবেন।

bcsExams.find(x => x.id === "bcs50").questions.push(
  {
    id: "50-001",
    question: "প্রশ্ন এখানে",
    options: [
      "ক) উত্তর ১",
      "খ) উত্তর ২",
      "গ) উত্তর ৩",
      "ঘ) উত্তর ৪"
    ],
    answer: 2,
    explanation: "ব্যাখ্যা এখানে।",
    source: "Source"
  }
);

একইভাবে bcs49, bcs48 ... bcs10।
---------------------------------------------------------
*/

// দ্রুত প্রশ্ন যোগ করার helper
function addQuestions(examId, questions) {
  const exam = bcsExams.find(x => x.id === examId);
  if (!exam) return;
  exam.questions.push(...questions);
}

// সব BCS মিলিয়ে duplicate question বাদ দেওয়ার function
function getUniqueQuestions(questions) {
  const seen = new Set();

  return questions.filter(q => {
    const key = [
      q.question || "",
      ...(q.options || [])
    ]
      .join("|")
      .replace(/\\s+/g, " ")
      .trim()
      .toLowerCase();

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// BCS-wise প্রশ্ন নিতে
function getBCSQuestions(examId) {
  const exam = bcsExams.find(x => x.id === examId);
  return exam ? getUniqueQuestions(exam.questions) : [];
}

// সব BCS-এর প্রশ্ন একসাথে নিতে
function getAllBCSQuestions() {
  const all = bcsExams.flatMap(exam =>
    exam.questions.map(q => ({
      ...q,
      exam: exam.name
    }))
  );

  return getUniqueQuestions(all);
}
"""

(out / "qbank.js").write_text(qbank_js, encoding="utf-8")

readme = """BCS qbank.js structure
======================

ক্রম:
৫০তম BCS
৪৯তম BCS
...
১১তম BCS
১০ম BCS

প্রতিটি exam-এর questions array-তে আপনার অনুমোদিত/নিজস্বভাবে ব্যবহারের অধিকার থাকা প্রশ্ন যোগ করবেন।

প্রশ্নের answer:
0 = ক
1 = খ
2 = গ
3 = ঘ

index.html-এ আগের removeDuplicates() থাকলেও qbank.js-এর getUniqueQuestions() আলাদাভাবে duplicate ঠেকায়।

qbank.js-কে আপনার index.html-এর একই folder-এ রাখুন।
"""
(out / "README.txt").write_text(readme, encoding="utf-8")

zip_path = Path("/mnt/data/BCS_qbank_50th_to_10th_structure.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(out / "qbank.js", "qbank.js")
    z.write(out / "README.txt", "README.txt")

print(zip_path)
