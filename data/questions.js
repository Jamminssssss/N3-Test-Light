const questions = [
  {
    question: '__のことばの読み方として最もよいものを、一つえらびなさい。\n\n会場には大勢の観客がいた。',
    underlineWords: ['観客'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: 'けんぎゃく' },
      { id: 2, text: 'かんぎゃく' },
      { id: 3, text: 'けんきゃく' },
      { id: 4, text: 'かんきゃく' },
    ],
    correctAnswer: 4,
  },
  {
    question: '田村さんが払ってくれました。',
    underlineWords: ['払って'],
    options: [
      { id: 1, text: 'くばって' },
      { id: 2, text: 'はらって' },
      { id: 3, text: 'かざって' },
      { id: 4, text: 'ひろって' },
    ],
    correctAnswer: 2,
  },
  {
    question: 'ホテルには３時ごろ到着します。',
    underlineWords: ['到着'],
    options: [
      { id: 1, text: 'とうちゃく' },
      { id: 2, text: 'とうつく' },
      { id: 3, text: 'とちゃく' },
      { id: 4, text: 'とつく' },
    ],
    correctAnswer: 1,
  },
  {
    question: '山下さんが説明を加えました。',
    underlineWords: ['加えました'],
    options: [
      { id: 1, text: 'つたえました' },
      { id: 2, text: 'おえました' },
      { id: 3, text: 'くわえました' },
      { id: 4, text: 'かえました' },
    ],
    correctAnswer: 3,
  },
  {
    question: '今から訓練を行います。',
    underlineWords: ['訓練'],
    options: [
      { id: 1, text: 'くんれい' },
      { id: 2, text: 'くんれん' },
      { id: 3, text: 'ぐんれい' },
      { id: 4, text: 'ぐんれん' },
    ],
    correctAnswer: 2,
  },
  {
    question: 'この豆はスープに使うといいですよ。',
    underlineWords: ['豆'],
    options: [
      { id: 1, text: 'こな' },
      { id: 2, text: 'いも' },
      { id: 3, text: 'かい' },
      { id: 4, text: 'まめ' },
    ],
    correctAnswer: 2,
  },
  {
    question: '社会には共通のルールがあります。',
    underlineWords: ['共通'],
    options: [
      { id: 1, text: 'きょうつ' },
      { id: 2, text: 'こうつう' },
      { id: 3, text: 'きょうつう' },
      { id: 4, text: 'こうつ' },
    ],
    correctAnswer: 3,
  },
  {
    question: '来年から税金が上がるそうだ。',
    underlineWords: ['税金'],
    options: [
      { id: 1, text: 'ぜいきん' },
      { id: 2, text: 'ぜっきん' },
      { id: 3, text: 'せいきん' },
      { id: 4, text: 'せっきん' },
    ],
    correctAnswer: 1,
  },
  {
    question: '__ のことばを漢字で書くとき、最もよいものを、一つえらびなさい。\n\nしばらく、きれいななみを見ていた。',
    underlineWords: ['なみ'],
    options: [
      { id: 1, text: '池' },
      { id: 2, text: '湖' },
      { id: 3, text: '港' },
      { id: 4, text: '波' },
    ],
    correctAnswer: 4,
  },
  {
    question: 'もう少しはやく歩きましょう。',
    underlineWords: ['はやく'],
    options: [
      { id: 1, text: '軽く' },
      { id: 2, text: '急く' },
      { id: 3, text: '速く' },
      { id: 4, text: '進く' },
    ],
    correctAnswer: 3,
  },
  {
    question: 'わたしは今の生活にまんぞくしている。',
    underlineWords: ['まんぞく'],
    options: [
      { id: 1, text: '満続' },
      { id: 2, text: '万続' },
      { id: 3, text: '満足' },
      { id: 4, text: '万足' },
    ],
    correctAnswer: 3,
  },
  {
    question: '父は腕をくんで何か考えていた。',
    underlineWords: ['くんで'],
    options: [
      { id: 1, text: '接んで' },
      { id: 2, text: '組んで' },
      { id: 3, text: '折んで' },
      { id: 4, text: '結んで' },
    ],
    correctAnswer: 2,
  },
  {
    question: 'この国は主に米をゆしゅつしている。',
    underlineWords: ['ゆしゅつ'],
    options: [
      { id: 1, text: '輸出' },
      { id: 2, text: '諭出' },
      { id: 3, text: '輪出' },
      { id: 4, text: '論出' },
    ],
    correctAnswer: 1,
  },
  {
    question: '赤ちゃんが母親に抱かれてねむっています。',
    underlineWords: ['ねむって'],
    options: [
      { id: 1, text: '寝って' },
      { id: 2, text: '宿って' },
      { id: 3, text: '眼って' },
      { id: 4, text: '眠って' },
    ],
    correctAnswer: 4,
  },
  {
    question: '（ ）に入れるのに最もよいものを、一つえらびなさい。\n\nこの紙は、ぬれても破れにくいという（ ）があります。',
    options: [
      { id: 1, text: '実力' },
      { id: 2, text: '特長' },
      { id: 3, text: '専門' },
      { id: 4, text: '主張' },
    ],
    correctAnswer: 2,
  },
  {
    question: '佐藤さんには、おとなしい（ ）があるが、本当は活動的な人らしい。',
    options: [
      { id: 1, text: 'ヒント' },
      { id: 2, text: 'タイトル' },
      { id: 3, text: 'アイディア' },
      { id: 4, text: 'イメージ' },
    ],
    correctAnswer: 4,
  },
  {
    question: '正月には親戚が集まって、みんなでテーブルを（ ） 、楽しく食事をした。',
    options: [
      { id: 1, text: '囲み' },
      { id: 2, text: '通し' },
      { id: 3, text: '包み' },
      { id: 4, text: '越え' },
    ],
    correctAnswer: 1,
  },
  {
    question: 'このレストランの料理はおいしくないので、店内はいつも（ ）だ。',
    options: [
      { id: 1, text: 'ふらふら' },
      { id: 2, text: 'ぐっすり' },
      { id: 3, text: 'がらがら' },
      { id: 4, text: 'うっかり' },
    ],
    correctAnswer: 3,
  },
  {
    question: '高田さんが引っ越すという（ ）を聞いたが、本当かどうか気になる。',
    options: [
      { id: 1, text: 'うわさ' },
      { id: 2, text: '宣伝' },
      { id: 3, text: 'うそ' },
      { id: 4, text: '冗談' },
    ],
    correctAnswer: 1,
  },
  {
    question: '父から借りた本をなくしてしまったので謝ったら、父はすぐに（ ）くれた。',
    options: [
      { id: 1, text: '従って' },
      { id: 2, text: '守って' },
      { id: 3, text: '許して' },
      { id: 4, text: '抑えて' },
    ],
    correctAnswer: 3,
  },
  {
    question: 'パソコンの前でずっと同じ（ ）でいたので、体が痛くなった。',
    options: [
      { id: 1, text: '様子' },
      { id: 2, text: '姿勢' },
      { id: 3, text: '印象' },
      { id: 4, text: '間隔' },
    ],
    correctAnswer: 2,
  },
  {
    question: '申込書に間違いがないか、よく（ ）から受付に出した。',
    options: [
      { id: 1, text: 'くりかえして' },
      { id: 2, text: '気にして' },
      { id: 3, text: '見つめて' },
      { id: 4, text: 'たしかめて' },
    ],
    correctAnswer: 4,
  },
  {
    question: 'わたしのふるさとは（ ）が盛んで、米や野菜をたくさん作っています。',
    options: [
      { id: 1, text: '自然' },
      { id: 2, text: '資源' },
      { id: 3, text: '作物' },
      { id: 4, text: '農業' },
    ],
    correctAnswer: 4,
  },
  {
    question: '水に浮いていた木の葉が、しばらくすると水の中に（ ）しまった。',
    options: [
      { id: 1, text: 'しずんで' },
      { id: 2, text: 'ころんで' },
      { id: 3, text: 'たおれて' },
      { id: 4, text: 'おぼれて' },
    ],
    correctAnswer: 1,
  },
  {
    question: 'この話は誰にも言わずに、ずっと（ ）にしていた。',
    options: [
      { id: 1, text: '裏側' },
      { id: 2, text: '内緒' },
      { id: 3, text: '後方' },
      { id: 4, text: '中身' },
    ],
    correctAnswer: 2,
  },
  {
    question: '__に意味が最も近いものを、一つえらびなさい。\n\n水の表面がかがやいています。',
    underlineWords: ['かがやいて'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: '止まって' },
      { id: 2, text: '揺れて' },
      { id: 3, text: '汚れて' },
      { id: 4, text: '光って' },
    ],
    correctAnswer: 4,
  },
  {
    question: 'その知らせを聞いたとき、わたしはとてもがっかりした。',
    underlineWords: ['がっかりした'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: '残念だと思った' },
      { id: 2, text: 'うれしかった' },
      { id: 3, text: '驚いた' },
      { id: 4, text: '安心した' },
    ],
    correctAnswer: 1,
  },
  {
    question: '留学生活に不安は当然ありました。',
    underlineWords: ['当然'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: 'いろいろ' },
      { id: 2, text: '少し' },
      { id: 3, text: 'もちろん' },
      { id: 4, text: 'いつも' },
    ],
    correctAnswer: 3,
  },
  {
    question: 'パーティーの料理があまりました。',
    underlineWords: ['あまりました'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: 'あまりました' },
      { id: 2, text: '少し足りませんでした' },
      { id: 3, text: 'とてもおいしかったです' },
      { id: 4, text: 'そんなにおいしくなかったです' },
    ],
    correctAnswer: 1,
  },
  {
    question: 'ここは横断禁止です。',
    underlineWords: ['横断禁止です'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: '座ってはいけません' },
      { id: 2, text: '渡ってはいけません' },
      { id: 3, text: '走ってはいけません' },
      { id: 4, text: '入ってはいけません' },
    ],
    correctAnswer: 2,
  },
  {
    question: 'つぎのことばの使い方として最もよいものを、一つえらびなさい。\n\n急',
    options: [
      { id: 1, text: "この料理は電子レンジを使って急にできるので、とても簡単だ。",highlightWords: ["急"] },
      { id: 2, text: "あと１０分で電車が出発してしまうので、急に駅に向かった。",highlightWords: ["急"] },
      { id: 3, text: "部屋から急に人が飛び出してきたので、ぶつかりそうになった。",highlightWords: ["急"]},
      { id: 4, text: "新しいゲームを買ったので、家に帰って急にやってみた。",highlightWords: ["急"] },
    ],
    correctAnswer: 3,
  },
  {
    question: '沸騰',
    options: [
      { id: 1, text: "今日は朝からどんどん暑くなり、昼には気温が沸騰した。",highlightWords: ["沸騰"] },
      { id: 2, text: "鍋のお湯が沸騰したら、とうふを入れて火を少し弱くしてください。",highlightWords: ["沸騰"] },
      { id: 3, text: "昼ごろから具合が悪くなり、夕方熱が沸騰したので病院へ行った。",highlightWords: ["沸騰"]},
      { id: 4, text: "このストーブは沸騰するのが早いので、すぐに部屋が暖かくなる。",highlightWords: ["沸騰"] },
    ],
    correctAnswer: 2,
  },
  {
    question: 'まげる',
    options: [
      { id: 1, text: "今朝は寒かったので、マフラーを首にまげて出かけた。",highlightWords: ["まげて"] },
      { id: 2, text: "けがは良くなったが、腕を伸ばしたりまげたりすると、まだ少し痛む。",highlightWords: ["まげたり"] },
      { id: 3, text: "一つのパンを半分にまげて、二人で分けて食べた。",highlightWords: ["まげて"]},
      { id: 4, text: "シャツをきちんとまげたら、たんすの引き出しにしまってください。",highlightWords: ["まげたら"] },
    ],
    correctAnswer: 2,
  },
  {
    question: '出張',
    options: [
      { id: 1, text: "営業のため、来週一週間、課長とアメリカに出張します。",highlightWords: ["出張"] },
      { id: 2, text: "仕事を辞めたら、家族とゆっくり海外に出張したいと思う。",highlightWords: ["出張"] },
      { id: 3, text: "わたしは毎朝９時に会社に出張し、残業はしないで家に帰る。",highlightWords: ["出張"]},
      { id: 4, text: "あしたは子どもの運動会に出張するので、仕事を休みます。",highlightWords: ["出張"] },
    ],
    correctAnswer: 1,
  },
  {
    question: '慰める',
    options: [
      { id: 1, text: "祖母は古い物でも捨てないで、長い間慰めて使っている。",highlightWords: ["慰めて"] },
      { id: 2, text: "試合を見ながら、優勝を願って一生懸命選手を慰めた。",highlightWords: ["慰めた"] },
      { id: 3, text: "仕事で失敗してしまったが、友人が慰めてくれたので元気が出た。",highlightWords: ["慰めて"]},
      { id: 4, text: "弟が希望の大学に合格したので、家族で外食をして慰めた。",highlightWords: ["慰めた"] },
    ],
    correctAnswer: 3,
  },
];

export default questions;
