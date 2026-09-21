herepfrom pathlib import Path
import zipfile

base = Path("/mnt/data/bcs_qbank_ready")
base.mkdir(parents=True, exist_ok=True)

nums = list(range(50, 9, -1))
exams = []
for n in nums:
    exams.append(f'''  {{
    id: "bcs{n}",
    name: "{n}তম BCS",
    description: "প্রিলিমিনারি প্রশ্ন ও সমাধান",
    questions: []
  }}''')

qbank = """/*
 * BCS QUESTION BANK
 * ৫০তম → ১০ম BCS
 *
 * এই ফাইলটি সরাসরি qbank.js হিসেবে ব্যবহার করা যাবে।
 * answer: 0 = ক, 1 = খ, 2 = গ, 3 = ঘ
 */

const bcsExams = [
""" + ",\n".join(exams) + """
];

/* একই প্রশ্ন + একই অপশন একাধিকবার থাকলে বাদ দেওয়ার ব্যবস্থা */
function normalizeQuestion(q) {
  return [
    q.question || "",
    ...(q.options || [])
  ].join("|").replace(/\\s+/g, " ").trim().toLowerCase();
}

function getUniqueQuestions(questions) {
  const seen = new Set();
  return questions.filter(q => {
    const key = normalizeQuestion(q);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getBCSQuestions(examId) {
  const exam = bcsExams.find(item => item.id === examId);
  return exam ? getUniqueQuestions(exam.questions) : [];
}

/*
প্রশ্ন যোগ করার format:

addBCSQuestions("bcs50", [
  {
    id: "bcs50-001",
    question: "প্রশ্ন এখানে",
    options: [
      "ক) প্রথম উত্তর",
      "খ) দ্বিতীয় উত্তর",
      "গ) তৃতীয় উত্তর",
      "ঘ) চতুর্থ উত্তর"
    ],
    answer: 0,
    explanation: "ব্যাখ্যা এখানে।",
    source: "অনুমোদিত উৎস"
  }
]);
*/

function addBCSQuestions(examId, questions) {
  const exam = bcsExams.find(item => item.id === examId);
  if (!exam || !Array.isArray(questions)) return;
  exam.questions.push(...questions);
}
"""

(base / "qbank.js").write_text(qbank, encoding="utf-8")

readme = """BCS qbank.js — ৫০তম → ১০ম

1. বর্তমান index.html delete করবেন না।
2. GitHub-এর পুরোনো qbank.js-এর code মুছে এই qbank.js-এর code বসাবেন।
3. Commit changes করবেন।
4. ৫০তম থেকে ১০ম পর্যন্ত সব BCS card-এর structure থাকবে।
5. Duplicate protection রাখা হয়েছে।
6. এই ফাইলে প্রশ্নের structure আছে; সম্পূর্ণ ১০ম–৫০তম প্রশ্ন এখনো যোগ করা হয়নি।
"""
(base / "README.txt").write_text(readme, encoding="utf-8")

zip_path = Path("/mnt/data/BCS_qbank_READY_to_upload.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(base / "qbank.js", "qbank.js")
    z.write(base / "README.txt", "README.txt")

print(str(zip_path))
