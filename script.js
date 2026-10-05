// 問題データ（一次試験7科目からバランス良く出題）
const questions = [
  // 経済学・経済政策
  {
    subject: "経済学・経済政策",
    question: "需要の価格弾力性が1より大きい財について、価格を引き下げたときの販売総収入はどうなるか。",
    choices: ["増加する", "減少する", "変わらない", "必ずゼロになる"],
    answer: 0,
    explanation: "弾力性が1より大きい（弾力的な）財は、価格の下落率以上に需要量が増えるため、総収入は増加します。"
  },
  {
    subject: "経済学・経済政策",
    question: "完全競争市場において、企業が利潤を最大化する生産量の条件はどれか。",
    choices: ["価格＝平均費用", "価格＝限界費用", "価格＝平均可変費用", "限界収入＝平均費用"],
    answer: 1,
    explanation: "完全競争企業はプライステイカーのため限界収入＝価格となり、価格＝限界費用となる点で利潤が最大になります。"
  },
  {
    subject: "経済学・経済政策",
    question: "日本のGDP（国内総生産）に計上されないものはどれか。",
    choices: ["新築住宅の建設", "持ち家の帰属家賃", "中古車の売買代金", "公務員の給与"],
    answer: 2,
    explanation: "中古品の売買は過去に生産されたものの所有権移転にすぎず、GDPには含まれません（仲介手数料は含まれます）。"
  },
  {
    subject: "経済学・経済政策",
    question: "通常の無差別曲線の性質として、誤っているものはどれか。",
    choices: [
      "右下がりである",
      "原点に対して凸である",
      "原点から遠いほど効用が高い",
      "異なる無差別曲線どうしが交わることがある"
    ],
    answer: 3,
    explanation: "無差別曲線は互いに交わりません。交わると、同じ組み合わせが異なる効用水準を持つことになり矛盾します。"
  },
  {
    subject: "経済学・経済政策",
    question: "価格が下落すると、かえって需要量が減少する財はどれか。",
    choices: ["上級財", "ギッフェン財", "代替財", "公共財"],
    answer: 1,
    explanation: "ギッフェン財は劣等財の一種で、所得効果が代替効果を上回るため、価格が下がると需要量が減少します。"
  },
  {
    subject: "経済学・経済政策",
    question: "公共財が持つ2つの性質の組み合わせとして正しいものはどれか。",
    choices: [
      "競合性と排除性",
      "非競合性と非排除性",
      "競合性と非排除性",
      "非競合性と排除性"
    ],
    answer: 1,
    explanation: "公共財は、多くの人が同時に消費できる「非競合性」と、対価を払わない人を排除できない「非排除性」を持ちます。"
  },
  {
    subject: "経済学・経済政策",
    question: "中央銀行が国債の買いオペレーションを行ったときの一般的な効果はどれか。",
    choices: [
      "市中の資金量が減り、金利が上昇する",
      "市中の資金量が増え、金利が低下する",
      "市中の資金量が増え、金利が上昇する",
      "政府の税収が直接増加する"
    ],
    answer: 1,
    explanation: "買いオペでは中央銀行が国債を買って資金を供給するため、市中の資金量が増え、金利は低下する方向に働きます。"
  },
  {
    subject: "経済学・経済政策",
    question: "限界消費性向が0.8のとき、政府支出を10兆円増やすと、単純な乗数モデルでGDPはいくら増加するか。",
    choices: ["8兆円", "10兆円", "18兆円", "50兆円"],
    answer: 3,
    explanation: "政府支出乗数＝1÷（1－限界消費性向）＝1÷0.2＝5。10兆円×5＝50兆円増加します。"
  },
  {
    subject: "経済学・経済政策",
    question: "独占企業が利潤を最大化する生産量の条件はどれか。",
    choices: ["価格＝限界費用", "限界収入＝限界費用", "価格＝平均費用", "平均収入＝平均費用"],
    answer: 1,
    explanation: "独占企業は限界収入＝限界費用となる生産量を選び、その量に対応する需要曲線上の高い価格を設定します。"
  },
  {
    subject: "経済学・経済政策",
    question: "フィリップス曲線が示す関係として正しいものはどれか。",
    choices: [
      "失業率とインフレ率（賃金上昇率）のトレードオフ",
      "利子率と投資のトレードオフ",
      "税率と税収の関係",
      "所得と消費の関係"
    ],
    answer: 0,
    explanation: "フィリップス曲線は、失業率が低いほど賃金上昇率（インフレ率）が高くなるという右下がりの関係を示します。"
  },

  // 財務・会計
  {
    subject: "財務・会計",
    question: "短期的な支払能力を示す「流動比率」の計算式はどれか。",
    choices: [
      "流動資産 ÷ 流動負債 × 100",
      "流動負債 ÷ 流動資産 × 100",
      "自己資本 ÷ 総資本 × 100",
      "固定資産 ÷ 自己資本 × 100"
    ],
    answer: 0,
    explanation: "流動比率＝流動資産÷流動負債×100。一般に高いほど短期の支払能力が高いとされます。"
  },
  {
    subject: "財務・会計",
    question: "固定費が400万円、変動費率が60％の企業の損益分岐点売上高はいくらか。",
    choices: ["240万円", "667万円", "1,000万円", "1,600万円"],
    answer: 2,
    explanation: "損益分岐点売上高＝固定費÷（1－変動費率）＝400万円÷0.4＝1,000万円です。"
  },
  {
    subject: "財務・会計",
    question: "減価償却費の説明として最も適切なものはどれか。",
    choices: [
      "支払時に全額を費用として計上する",
      "現金の支出を伴わない費用である",
      "貸借対照表の負債の部に計上される",
      "土地にも毎期計上される"
    ],
    answer: 1,
    explanation: "減価償却費は非資金費用です。そのため間接法のキャッシュフロー計算書では税引前当期純利益に加算されます。土地は減価償却しません。"
  },
  {
    subject: "財務・会計",
    question: "ROE（自己資本利益率）の計算式はどれか。",
    choices: [
      "当期純利益 ÷ 自己資本 × 100",
      "営業利益 ÷ 総資本 × 100",
      "当期純利益 ÷ 売上高 × 100",
      "自己資本 ÷ 総資本 × 100"
    ],
    answer: 0,
    explanation: "ROE＝当期純利益÷自己資本×100。株主が出資した資本でどれだけ利益を上げたかを示します。"
  },
  {
    subject: "財務・会計",
    question: "企業の財務的な安全性（長期）を示す「自己資本比率」の計算式はどれか。",
    choices: [
      "自己資本 ÷ 総資本 × 100",
      "自己資本 ÷ 固定資産 × 100",
      "負債 ÷ 自己資本 × 100",
      "自己資本 ÷ 売上高 × 100"
    ],
    answer: 0,
    explanation: "自己資本比率＝自己資本÷総資本（負債＋純資産）×100。高いほど返済不要の資金の割合が大きく、安全性が高いとされます。"
  },
  {
    subject: "財務・会計",
    question: "割引率10％のとき、1年後に受け取る110万円の現在価値はいくらか。",
    choices: ["99万円", "100万円", "110万円", "121万円"],
    answer: 1,
    explanation: "現在価値＝110万円÷（1＋0.1）＝100万円です。"
  },
  {
    subject: "財務・会計",
    question: "正味現在価値法（NPV法）による投資判断として正しいものはどれか。",
    choices: [
      "NPVがマイナスなら投資を採択する",
      "NPVがプラスなら投資を採択する",
      "NPVは回収期間の長さを表す",
      "NPVは割引率に影響されない"
    ],
    answer: 1,
    explanation: "NPV＝将来キャッシュフローの現在価値合計－投資額。プラスであれば企業価値を高めるため採択します。"
  },
  {
    subject: "財務・会計",
    question: "棚卸資産の評価方法に該当しないものはどれか。",
    choices: ["先入先出法", "移動平均法", "総平均法", "定率法"],
    answer: 3,
    explanation: "定率法は有形固定資産の減価償却方法です。先入先出法・移動平均法・総平均法は棚卸資産の評価方法です。"
  },
  {
    subject: "財務・会計",
    question: "貸借対照表において、流動資産に含まれないものはどれか。",
    choices: ["現金預金", "売掛金", "商品", "建物"],
    answer: 3,
    explanation: "建物は長期にわたって使用する有形固定資産です。現金預金・売掛金・商品は流動資産です。"
  },
  {
    subject: "財務・会計",
    question: "間接法で営業キャッシュフローを計算するとき、売上債権の増加はどのように扱うか。",
    choices: ["加算する", "減算する", "計算に含めない", "投資キャッシュフローに含める"],
    answer: 1,
    explanation: "売上債権が増えると、売上として計上しても現金は回収できていないため、営業キャッシュフローの減算項目になります。"
  },
  {
    subject: "財務・会計",
    question: "売上高が1,000万円、損益分岐点売上高が800万円の企業の安全余裕率はいくらか。",
    choices: ["20％", "25％", "80％", "125％"],
    answer: 0,
    explanation: "安全余裕率＝（売上高－損益分岐点売上高）÷売上高×100＝200万円÷1,000万円×100＝20％です。"
  },

  // 企業経営理論
  {
    subject: "企業経営理論",
    question: "PPM（プロダクト・ポートフォリオ・マネジメント）で「市場成長率が高く、相対的市場シェアが低い」事業はどれか。",
    choices: ["花形", "金のなる木", "問題児", "負け犬"],
    answer: 2,
    explanation: "問題児は成長市場でシェアが低く、多くの投資が必要な事業です。シェアを高めれば花形になり得ます。"
  },
  {
    subject: "企業経営理論",
    question: "マズローの欲求5段階説において、最上位に位置する欲求はどれか。",
    choices: ["承認欲求", "社会的欲求", "安全欲求", "自己実現欲求"],
    answer: 3,
    explanation: "下から生理的欲求・安全欲求・社会的欲求・承認欲求・自己実現欲求の順に位置づけられます。"
  },
  {
    subject: "企業経営理論",
    question: "ポーターの「5つの競争要因（ファイブフォース）」に含まれないものはどれか。",
    choices: ["新規参入の脅威", "代替品の脅威", "買い手の交渉力", "政府による規制"],
    answer: 3,
    explanation: "5つの要因は、既存企業間の競争、新規参入の脅威、代替品の脅威、売り手の交渉力、買い手の交渉力です。"
  },
  {
    subject: "企業経営理論",
    question: "アンゾフの成長ベクトルで、「既存の製品」を「新しい市場」に投入する戦略はどれか。",
    choices: ["市場浸透戦略", "市場開拓戦略", "製品開発戦略", "多角化戦略"],
    answer: 1,
    explanation: "既存製品×新市場は市場開拓戦略です。既存×既存は市場浸透、新製品×既存市場は製品開発、新×新は多角化です。"
  },

  // 運営管理
  {
    subject: "運営管理",
    question: "作業改善の「ECRSの原則」で、最初に検討すべきものはどれか。",
    choices: ["排除（Eliminate）", "結合（Combine）", "交換（Rearrange）", "簡素化（Simplify）"],
    answer: 0,
    explanation: "まず「その作業をなくせないか（排除）」を考え、次に結合、交換、簡素化の順に検討します。"
  },
  {
    subject: "運営管理",
    question: "在庫品目を売上高などの重要度で分類し、重点的に管理する手法はどれか。",
    choices: ["ABC分析", "SWOT分析", "PERT", "ラインバランシング"],
    answer: 0,
    explanation: "ABC分析はパレート図を用いて品目をA・B・Cに分け、Aグループを重点管理する手法です。"
  },
  {
    subject: "運営管理",
    question: "小売業の「商品回転率」の一般的な計算式はどれか。",
    choices: [
      "売上高 ÷ 平均在庫高",
      "平均在庫高 ÷ 売上高",
      "粗利益 ÷ 売上高",
      "売上高 ÷ 売場面積"
    ],
    answer: 0,
    explanation: "商品回転率＝売上高÷平均在庫高。数値が高いほど在庫が効率よく売れていることを示します。"
  },
  {
    subject: "運営管理",
    question: "在庫量があらかじめ決めた発注点まで減ったときに、一定量を発注する方式はどれか。",
    choices: ["定期発注方式", "定量発注方式", "かんばん方式", "MRP（資材所要量計画）"],
    answer: 1,
    explanation: "定量発注方式は、発注点を下回ったら決まった量を発注する方式です。管理が簡単で、単価の安い品目に向いています。"
  },

  // 経営法務
  {
    subject: "経営法務",
    question: "現行の会社法における株式会社の設立時の資本金について、正しいものはどれか。",
    choices: [
      "1,000万円以上が必要",
      "300万円以上が必要",
      "1円からでも設立できる",
      "業種ごとに最低額が定められている"
    ],
    answer: 2,
    explanation: "会社法の施行により最低資本金制度は廃止され、資本金1円からでも株式会社を設立できます。"
  },
  {
    subject: "経営法務",
    question: "特許権の存続期間（原則）はどれか。",
    choices: ["設定登録日から10年", "出願日から20年", "出願日から25年", "創作者の死後70年"],
    answer: 1,
    explanation: "特許権の存続期間は原則として出願日から20年です（医薬品等は延長登録制度あり）。"
  },
  {
    subject: "経営法務",
    question: "商標権について正しいものはどれか。",
    choices: [
      "存続期間は出願日から20年で更新できない",
      "存続期間は設定登録日から10年で更新できる",
      "登録しなくても権利が発生する",
      "存続期間は永久である"
    ],
    answer: 1,
    explanation: "商標権は設定登録日から10年で、更新登録を繰り返すことで長期間権利を維持できます。"
  },
  {
    subject: "経営法務",
    question: "会社法上、取締役会設置会社に必要な取締役の人数はどれか。",
    choices: ["1人以上", "2人以上", "3人以上", "5人以上"],
    answer: 2,
    explanation: "取締役会設置会社では取締役を3人以上置く必要があります。取締役会を置かない会社は1人以上で足ります。"
  },

  // 経営情報システム
  {
    subject: "経営情報システム",
    question: "2進数の「1010」を10進数で表したものはどれか。",
    choices: ["8", "10", "12", "1010"],
    answer: 1,
    explanation: "1×8＋0×4＋1×2＋0×1＝10です。"
  },
  {
    subject: "経営情報システム",
    question: "同じデータを2台のディスクに同時に書き込み、冗長性を確保するRAIDの方式はどれか。",
    choices: ["RAID0（ストライピング）", "RAID1（ミラーリング）", "RAID5", "JBOD"],
    answer: 1,
    explanation: "RAID1はミラーリングとも呼ばれ、1台が故障してももう1台でデータを保持できます。"
  },
  {
    subject: "経営情報システム",
    question: "実在の企業などを装った偽のメールやWebサイトで、ID・パスワード等を盗み取る手口はどれか。",
    choices: ["DoS攻撃", "フィッシング", "SQLインジェクション", "バッファオーバーフロー"],
    answer: 1,
    explanation: "フィッシングは利用者をだまして偽サイトに誘導し、認証情報やカード情報を入力させる手口です。"
  },
  {
    subject: "経営情報システム",
    question: "電源を切ると記憶内容が失われる（揮発性の）記憶装置はどれか。",
    choices: ["ROM", "RAM", "SSD", "HDD"],
    answer: 1,
    explanation: "主記憶装置に使われるRAMは揮発性で、電源を切るとデータが消えます。ROM・SSD・HDDは不揮発性です。"
  },

  // 中小企業経営・政策
  {
    subject: "中小企業経営・政策",
    question: "中小企業基本法において、製造業の中小企業者の定義はどれか。",
    choices: [
      "資本金3億円以下 または 従業員300人以下",
      "資本金1億円以下 または 従業員100人以下",
      "資本金5,000万円以下 または 従業員100人以下",
      "資本金5,000万円以下 または 従業員50人以下"
    ],
    answer: 0,
    explanation: "製造業その他は3億円以下または300人以下。卸売業は1億円・100人、サービス業は5,000万円・100人、小売業は5,000万円・50人です。"
  },
  {
    subject: "中小企業経営・政策",
    question: "中小企業基本法において、商業・サービス業の「小規模企業者」の従業員数の基準はどれか。",
    choices: ["3人以下", "5人以下", "10人以下", "20人以下"],
    answer: 1,
    explanation: "小規模企業者は、製造業その他が従業員20人以下、商業・サービス業が5人以下です。"
  },
  {
    subject: "中小企業経営・政策",
    question: "中小企業白書によると、日本の企業数（会社数＋個人事業者数）に占める中小企業の割合はおよそどれくらいか。",
    choices: ["約70％", "約85％", "約95％", "約99.7％"],
    answer: 3,
    explanation: "日本の企業の約99.7％が中小企業です。一方、従業者数では約7割を中小企業が占めています。"
  }
];

// 要素の取得
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const subjectEl = document.getElementById("subject");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const feedbackResult = document.getElementById("feedback-result");
const feedbackExplanation = document.getElementById("feedback-explanation");
const scoreText = document.getElementById("score-text");
const resultMessage = document.getElementById("result-message");
const subjectResults = document.getElementById("subject-results");

let currentIndex = 0;
let score = 0;
let subjectScores = {};

// 画面切り替え
function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((s) => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// クイズ開始
function startQuiz() {
  currentIndex = 0;
  score = 0;
  subjectScores = {};
  questions.forEach((q) => {
    if (!subjectScores[q.subject]) {
      subjectScores[q.subject] = { correct: 0, total: 0 };
    }
    subjectScores[q.subject].total++;
  });
  showScreen(quizScreen);
  showQuestion();
}

// 問題の表示
function showQuestion() {
  const q = questions[currentIndex];
  progressText.textContent = `第${currentIndex + 1}問 / ${questions.length}問`;
  progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
  subjectEl.textContent = q.subject;
  questionEl.textContent = q.question;

  choicesEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-num">${i + 1}</span><span></span>`;
    btn.lastElementChild.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });

  feedbackEl.classList.add("hidden");
  feedbackEl.classList.remove("is-wrong");
  nextBtn.classList.add("hidden");
}

// 回答の判定とフィードバック表示
function selectAnswer(selected) {
  const q = questions[currentIndex];
  const buttons = choicesEl.querySelectorAll(".choice-btn");
  const isCorrect = selected === q.answer;

  buttons.forEach((btn) => (btn.disabled = true));
  buttons[q.answer].classList.add("correct");

  if (isCorrect) {
    score++;
    subjectScores[q.subject].correct++;
    feedbackResult.textContent = "◯ 正解！";
    feedbackResult.className = "feedback-result correct-text";
  } else {
    buttons[selected].classList.add("wrong");
    feedbackResult.textContent = `✕ 不正解… 正解は「${q.answer + 1}. ${q.choices[q.answer]}」`;
    feedbackResult.className = "feedback-result wrong-text";
    feedbackEl.classList.add("is-wrong");
  }

  feedbackExplanation.textContent = q.explanation;
  feedbackEl.classList.remove("hidden");

  nextBtn.textContent = currentIndex === questions.length - 1 ? "結果を見る" : "次の問題へ";
  nextBtn.classList.remove("hidden");
}

// 次の問題へ
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
    window.scrollTo(0, 0);
  } else {
    showResult();
  }
}

// 結果の表示
function showResult() {
  scoreText.textContent = `${questions.length}問中 ${score}問正解`;

  const rate = score / questions.length;
  if (rate >= 0.8) {
    resultMessage.textContent = "素晴らしい！合格ラインを十分に超える実力です。";
  } else if (rate >= 0.6) {
    resultMessage.textContent = "合格ライン（6割）に到達！この調子で頑張りましょう。";
  } else if (rate >= 0.4) {
    resultMessage.textContent = "あと一歩です。苦手な科目を復習しましょう。";
  } else {
    resultMessage.textContent = "まずは基礎から。解説を読み直して再挑戦しましょう。";
  }

  subjectResults.innerHTML = "";
  Object.entries(subjectScores).forEach(([subject, s]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td></td><td>${s.correct} / ${s.total}</td>`;
    tr.firstElementChild.textContent = subject;
    subjectResults.appendChild(tr);
  });

  showScreen(resultScreen);
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", startQuiz);
