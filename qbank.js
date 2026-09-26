const qbank = {
  "Layer1_BCS": { total: 5500, loaded: 0, subs: { Bangla: [], English: [], Math: [], GK: [] } },
  "Layer2_Primary": {
    total: 9000, loaded: 1200,
    subs: {
      Bangla: [
        {id:1, q:"বাংলা বর্ণমালায় মাত্রাহীন বর্ণ কয়টি?", options:["৮","৯","১০","১১"], ans:2, source:"Primary 2019 Page1"},
        {id:2, q:"কোনটি শুদ্ধ বানান?", options:["মুমূর্ষু","মুমুর্ষু","মুমূর্ষূ","মূমূর্ষু"], ans:0, source:"Primary 2019 Page1"},
        //... আপনার দেওয়া 1200 টা প্রশ্ন এখানে Auto বসবে
      ],
      English: [], Math: [], GK: []
    }
  },
  "Layer3_NTRCA": { total: 3300, loaded: 0, subs: { Bangla: [], English: [], Math: [], GK: [] } },
  "Layer4_Recent": {
    total: 9000, loaded: 1045,
    subs: {
      Bangla: [
        {id:1, q:"পররাষ্ট্র মন্ত্রণালয় - সহকারী সাইফার অফিসার - 17.08.2026", options:["A","B","C","D"], ans:0, source:"Foreign Ministry"},
        //... আপনার দেওয়া 1045 টা Recent + Navy + Health Ministry এখানে
      ],
      English: [], Math: [], GK: []
    }
  }
};
