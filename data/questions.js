const questions = [
  {
    question: '__のことばの読み方として最もよいものを、一つえらびなさい。\n\n会場には大勢の観客がいた。',
    underlineWords: ['観客'],
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
    correctAnswer: 4,
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
    question: '__ のことばを漢字で書くとき、最もよいものを、一つえらびなさい。\n\nしばらく、きれいな波を見ていた。',
    underlineWords: ['波'],
    options: [
      { id: 1, text: '池' },
      { id: 2, text: '湖' },
      { id: 3, text: '港' },
      { id: 4, text: '波' },
    ],
    correctAnswer: 4,
  },
  {
    question: 'もう少し速く歩きましょう。',
    underlineWords: ['速く'],
    options: [
      { id: 1, text: '軽く' },
      { id: 2, text: '急く' },
      { id: 3, text: '速く' },
      { id: 4, text: '進く' },
    ],
    correctAnswer: 3,
  },
  {
    question: 'わたしは今の生活に満足している。',
    underlineWords: ['満足'],
    options: [
      { id: 1, text: '満続' },
      { id: 2, text: '万続' },
      { id: 3, text: '満足' },
      { id: 4, text: '万足' },
    ],
    correctAnswer: 3,
  },
  {
    question: '父は腕を組んで何か考えていた。',
    underlineWords: ['組んで'],
    options: [
      { id: 1, text: '接んで' },
      { id: 2, text: '組んで' },
      { id: 3, text: '折んで' },
      { id: 4, text: '結んで' },
    ],
    correctAnswer: 2,
  },
  {
    question: 'この国は主に米を輸出している。',
    underlineWords: ['輸出'],
    options: [
      { id: 1, text: '輸出' },
      { id: 2, text: '諭出' },
      { id: 3, text: '輪出' },
      { id: 4, text: '論出' },
    ],
    correctAnswer: 1,
  },
  {
    question: '赤ちゃんが母親に抱かれて眠っています。',
    underlineWords: ['眠って'],
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
    underlineWords: ['かがやいて'],
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
    underlineWords: ['がっかりした'],
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
    underlineWords: ['当然'],
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
    underlineWords: ['あまりました'],
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
    underlineWords: ['横断禁止です'],
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
  {
    question: 'つぎの文の（ ）に入れるのに最もよいものを、一つえらびなさい。\n\n彼は小説家（ ）有名になったが、普段は小さな病院で働く医者だ。',
    options: [
      { id: 1, text: 'について' },
      { id: 2, text: 'として' },
      { id: 3, text: 'にしたがって'},
      { id: 4, text: 'と比べて' },
    ],
    correctAnswer: 2,
  },
  {
    question: '先週、会社の面接で「もし自分を色で表す（ ） 、何色ですか。 」と聞かれ、オレンジ色と答えた。「元気」や「健康」のイメージがあるからだ。',
    options: [
      { id: 1, text: 'ことから' },
      { id: 2, text: 'という点で' },
      { id: 3, text: 'ように'},
      { id: 4, text: 'としたら' },
    ],
    correctAnswer: 4,
  },
  {
    question: '昨日の夜、寝る前に（ ）ヨーグルトが食べたくなって、夜中なのにコンビニに買いに行ってしまった。',
    options: [
      { id: 1, text: 'どうか' },
      { id: 2, text: 'せっかく' },
      { id: 3, text: 'どうしても'},
      { id: 4, text: 'きっと' },
    ],
    correctAnswer: 3,
  },
  {
    question: 'このケーキは材料を混ぜて焼く（ ）から、誰でも失敗せずにおいしく作れる。',
    options: [
      { id: 1, text: 'だけだ' },
      { id: 2, text: 'ことだ' },
      { id: 3, text: 'せいだ'},
      { id: 4, text: 'ときだ' },
    ],
    correctAnswer: 1,
  },
  {
    question: '私の町では毎年８月最後の日曜日に夏祭りが（ ） 。',
    options: [
      { id: 1, text: '行います' },
      { id: 2, text: '行わせます' },
      { id: 3, text: '行っています'},
      { id: 4, text: '行われます' },
    ],
    correctAnswer: 4,
  },
  {
    question: '（靴屋で）\n\n客 「すみません。この靴のもう一つ大きいサイズはありますか。」\n\n店員「あ、はい、確認しますので、少々（ ） 。」',
    options: [
      { id: 1, text: 'お待ちしております' },
      { id: 2, text: 'お待ちください' },
      { id: 3, text: 'お待ちできます'},
      { id: 4, text: 'お待ちしましょう' },
    ],
    correctAnswer: 2,
  },
  {
    question: '（電話で）\n\nＸ建設の社員「はい、Ｘ建設営業部です。 」\n\n中田 「あ、私、ABC銀行の中田と（ ）が、山石さんをお願いします。」',
    options: [
      { id: 1, text: 'ございます' },
      { id: 2, text: 'いたします' },
      { id: 3, text: '申します'},
      { id: 4, text: '申し上げます' },
    ],
    correctAnswer: 3,
  },
  {
    question: '息子が通う高校では、お昼にパンや飲み物が買える場所もあるが、基本的には全員がお弁当を（ ） 。',
    options: [
      { id: 1, text: '持っていったばかりだ' },
      { id: 2, text: '持っていくことになっている' },
      { id: 3, text: '持っていきたい'},
      { id: 4, text: '持っていきたい' },
    ],
    correctAnswer: 2,
  },
  {
    question: "登校をするのは気持ちがいいが、夜（　）悩るので、いつも15分ぐらいで起きる。",
    options: [
      { id: 1, text: "寝なくて" },
      { id: 2, text: "寝られると思って" },
      { id: 3, text: "寝られないと" },
      { id: 4, text: "寝ると思うと" }
    ],
    correctAnswer: 3
  },
  {
    question: "A市は、保育園の数が少なく、保育園を（　）利用できない人がいることが問題になっている。",
    options: [
      { id: 1, text: "利用したくても" },
      { id: 2, text: "利用しそうになって" },
      { id: 3, text: "利用しているのに" },
      { id: 4, text: "利用できたら" }
    ],
    correctAnswer: 1
  },
  {
    question: "妻「ねえ、ちょっと買い物に行ってくるから、今夜はレストランの予約をお願いできる？」\n夫「うん、わかった。（　）。19時からで大丈夫？」\n妻「ええ、ありがとう。」",
    options: [
      { id: 1, text: "予約してね" },
      { id: 2, text: "予約しておくよ" },
      { id: 3, text: "予約しようよ" },
      { id: 4, text: "予約してあるね" }
    ],
    correctAnswer: 2
  },
  {
    question: "（畑で）\n子「ねえ、このトマト、もう食べられる？ 赤くなっているよ。」\n父「うん。そろそろ（　）ね。」",
    options: [
      { id: 1, text: "食べやすそうだ" },
      { id: 2, text: "食べていそうだ" },
      { id: 3, text: "食べごろだろうだ" },
      { id: 4, text: "食べてもよさそうだ" }
    ],
    correctAnswer: 4
  },
  {
    question: "（改札で）\n南 「山下さん、来ませんね。携帯に電話をしても出ないし、どうしますか。 」\n中川「これ以上待つと私たちも間に合わないから、先に（ ） 。」\n南 「そうですね。行きますか。」",
    options: [
      { id: 1, text: "行ってしまいましょうか" },
      { id: 2, text: "行ってしまうのでしょう" },
      { id: 3, text: "行ってしまいましたか" },
      { id: 4, text: "行ってしまっていました" }
    ],
    correctAnswer: 1
  },
  {
    question: "この写真の鳥はとても珍しくて、この鳥の __ ★ __ __そうだ。",
    underlineWords: ["★"],
    options: [
      { id: 1, text: "見る機会がない" },
      { id: 2, text: "専門家でも" },
      { id: 3, text: "なかなか" },
      { id: 4, text: "研究をしている" }
    ],
    correctAnswer: 2
  },
  {
    question: "春から大学生になる娘には、__ ★ __ できない経験をいろいろしてほしい。",
    underlineWords: ["★"],
    options: [
      { id: 1, text: "にも" },
      { id: 2, text: "にしか" },
      { id: 3, text: "勉強以外" },
      { id: 4, text: "大学時代" }
    ],
    correctAnswer: 3
  },
  {
    question: "土曜日は買い物をしたり友人と食事をしたりし、日曜日は __ ★ __ 私の好きな週末の過ごし方だ。",
    underlineWords: ["★"],
    options: [
      { id: 1, text: "のが" },
      { id: 2, text: "という" },
      { id: 3, text: "家で過ごす" },
      { id: 4, text: "どこにも出かけずに" }
    ],
    correctAnswer: 4
  },
  {
    question: "（レストランで）\n客「すみません。15分ぐらい前に案内をお願いして、しばらくここで待ってて __ ★ __ 。まだですか。」\n店員「大変申し訳ありません。」",
    underlineWords: ["★"],
    options: [
      { id: 1, text: "待っているんです" },
      { id: 2, text: "言われた" },
      { id: 3, text: "から" },
      { id: 4, text: "けど" }
    ],
    correctAnswer: 3
  },
  {
    question: "塾を __ ★ __ 進学を決めた。",
    underlineWords: ["★"],
    options: [
      { id: 1, text: "勉強すればするほど" },
      { id: 2, text: "塾と学校への" },
      { id: 3, text: "と思うようになって" },
      { id: 4, text: "もっと学びたい" }
    ],
    correctAnswer: 1
  },
  {
    question: "19",
    image: require("../assets/readingimages/readingimage0.png"),
    options: [
      { id: 1, text: "そのうえ" },
      { id: 2, text: "つまり" },
      { id: 3, text: "けれども" },
      { id: 4, text: "すると" }
    ],
    correctAnswer: 3
  },
  {
    question: "20",
    image: require("../assets/readingimages/readingimage0.png"),
    options: [
      { id: 1, text: "言われていました" },
      { id: 2, text: "言ってもらいました" },
      { id: 3, text: "言わせてみました" },
      { id: 4, text: "言ってしまいました" }
    ],
    correctAnswer: 2
  },
  {
    question: "21",
    image: require("../assets/readingimages/readingimage0.png"),
    options: [
      { id: 1, text: "広がって" },
      { id: 2, text: "広がるより" },
      { id: 3, text: "広がるように" },
      { id: 4, text: "広がったそうで" }
    ],
    correctAnswer: 4
  },
  {
    question: "22",
    image: require("../assets/readingimages/readingimage0.png"),
    options: [
      { id: 1, text: "持ったはずがありません" },
      { id: 2, text: "持ちたがりません" },
      { id: 3, text: "持つのかもしれません" },
      { id: 4, text: "持とうとしません" }
    ],
    correctAnswer: 4
  },
  {
    question: "23",
    image: require("../assets/readingimages/readingimage0.png"),
    options: [
      { id: 1, text: "どれ" },
      { id: 2, text: "これ" },
      { id: 3, text: "あれら" },
      { id: 4, text: "それら" }
    ],
    correctAnswer: 4
  },
  {
    question: "このメールからわかることは何か。",
    image: require("../assets/readingimages/readingimage1.png"),
    options: [
      { id: 1, text: "今日の午前の授業は、10時から始まる。" },
      { id: 2, text: "午前も午後も、今日はクラブ活動を中止しなければならない。" },
      { id: 3, text: "今日の午後の授業があるかどうか、10時に事務室からメールが届く。" },
      { id: 4, text: "10時に事務室からメールが届いたら、今日の午後の授業はある。" }
    ],
    correctAnswer: 3
  },
  {
    question: "携帯電話について、「私」はどのように考えているか。",
    image: require("../assets/readingimages/readingimage2.png"),
    options: [
      { id: 1, text: "便利だと言う人もいるが、自分はそう思わないので、今は持つつもりはない。" },
      { id: 2, text: "便利だと思うが、いつも電話を気にする生活は嫌なので、今は持つつもりはない。" },
      { id: 3, text: "持っていると便利だし、最近は料金が安くなったので、もう一度持つつもりだ。" },
      { id: 4, text: "持ちたくはなかったが、ないと不便なので、もう一度持つつもりだ。" }
    ],
    correctAnswer: 2
  },
  {
    question: "今の販売機が作られることになったのは、どうしてか。",
    underlineWords: ["今の販売機"],
    image: require("../assets/readingimages/readingimage3.png"),
    options: [
      { id: 1, text: "冬に販売機で冷たい物を買って飲んだ飲料会社の社長が、客が気の毒だと感じたから" },
      { id: 2, text: "冷たい物が買える販売機があれば便利だろうと、飲料会社の社長が考えたから" },
      { id: 3, text: "温かい物が買える販売機が欲しいと、飲料会社の社長が運転手たちに言われたから" },
      { id: 4, text: "温かい物も買える販売機があれば喜ばれるだろうと、飲料会社の社長が考えたから" }
    ],
    correctAnswer: 4
  },
  {
    question: "このメモを読んで、パクさんがしなければならないことは何か。",
    image: require("../assets/readingimages/readingimage4.png"),
    options: [
      { id: 1, text: "11時ごろまでに、説明会に参加した企業のリストを準備しておく。" },
      { id: 2, text: "午後の会議までに、説明会の報告資料をわかりやすく書き直す。" },
      { id: 3, text: "午後の会議までに報告資料を直し、会議で説明会について報告する。" },
      { id: 4, text: "黒田課長がモリムラ工業に行くまでに、説明会の報告資料を完成させる。" }
    ],
    correctAnswer: 1
  },
  {
    question: "①失敗とあるが、どのようなことか。",
    underlineWords: ["失敗"],
    image: require("../assets/readingimages/readingimage5.png"),
    options: [
      { id: 1, text: "買ってばかりの本を本棚に入れたまま、読むのを忘れてしまったこと" },
      { id: 2, text: "前に読んだことを忘れて、同じ本をまた買ってしまったこと" },
      { id: 3, text: "持っていない本なのに、本棚にあるはずだと思って探してしまったこと" },
      { id: 4, text: "初めて読む本なのに、前に読んだことがあると思ってしまったこと" }
    ],
    correctAnswer: 2
  },
  {
    question: "②自分が嫌になりますとあるが、それはなぜか。",
    underlineWords: ["自分が嫌になります"],
    image: require("../assets/readingimages/readingimage5.png"),
    options: [
      { id: 1, text: "前に読んで面白いと思った本なのに、もう一度読んだら、つまらないと感じたから" },
      { id: 2, text: "前に読んでつまらないと思った本なのに、もう一度読んだら、面白いと感じたから" },
      { id: 3, text: "一度読んで面白いと思った本なのに、その本のことを覚えていなかったから" },
      { id: 4, text: "一度読んでつまらないと思った本なのに、二度も金を払ってしまったから" }
    ],
    correctAnswer: 3
  },
  {
    question: "本を買うことについて、「私」はどう思っているか。",
    image: require("../assets/readingimages/readingimage5.png"),
    options: [
      { id: 1, text: "これからは失敗しないように、よく調べてから本を買うようにならだろう。" },
      { id: 2, text: "同じ失敗を繰り返さないために、なるべく本棚に通わないようにするだろう。" },
      { id: 3, text: "本を好きになるために、これからも失敗を気にせずに本読みをするだろう。" },
      { id: 4, text: "失敗することもあるかもしれないが、これからも自分は本を買い続けるだろう。" }
    ],
    correctAnswer: 4
  },
  {
    question: "それとあるが、何か。",
    underlineWords: ["それ"],
    image: require("../assets/readingimages/readingimage6.png"),
    options: [
      { id: 1, text: "英語湯が降った時に、すぐに傘を買うこと" },
      { id: 2, text: "買っても使わなかった傘を、店に返すこと" },
      { id: 3, text: "使いたい時にだけ、傘を借りて使うこと" },
      { id: 4, text: "雨の日に、傘をささずに観光をすること" }
    ],
    correctAnswer: 3
  },
  {
    question: "「貸し傘」についての説明で、合っているものはどれか。",
    image: require("../assets/readingimages/readingimage6.png"),
    options: [
      { id: 1, text: "この町に来た観光客だけが利用できる。" },
      { id: 2, text: "「貸し傘」のグループのメンバーだけが利用できる。" },
      { id: 3, text: "観光客なら、利用した傘を記念にも持って帰れる。" },
      { id: 4, text: "利用した後は、「貸し傘」用の傘立てのどれかに返せばいい。" }
    ],
    correctAnswer: 4
  },
  {
    question: "「貸し傘」を始めたグループが、利用する人にしてほしいと言っていることは何か。",
    image: require("../assets/readingimages/readingimage6.png"),
    options: [
      { id: 1, text: "傘を大事に扱い、「貸し傘」の活動がうまくいくように協力してほしい。" },
      { id: 2, text: "傘をどんどん借りて、「貸し傘」の利用者が増えるように協力してほしい。" },
      { id: 3, text: "「貸し傘」の傘が不足しないように、不要な傘を集めるのに協力してほしい。" },
      { id: 4, text: "「貸し傘」の傘が壊れやすくなるように、傘立てを増やすことに協力してほしい。" }
    ],
    correctAnswer: 1
  },
  {
    question: "このタクシー会社が調査をして、わかったことはどのようなことか。",
    image: require("../assets/readingimages/readingimage7.png"),
    options: [
      { id: 1, text: "急ぐことが利用者へのサービスになると思っている運転手が多い。" },
      { id: 2, text: "スピードを急に上げたり、前の車を追い越したりする運転手が多い。" },
      { id: 3, text: "運転手は丁寧な運転をしてくれていると考えている利用者が多い。" },
      { id: 4, text: "ゆっくり運転してもらいたいと思ったことがある利用者が多い。" }
    ],
    correctAnswer: 4
  },
  {
    question: "①驚きましたとあるが、なぜ驚いたのか。",
    underlineWords: ["驚きました"],
    image: require("../assets/readingimages/readingimage7.png"),
    options: [
      { id: 1, text: "アンケートで、満足している利用者が思った以上に多いことがわかったから" },
      { id: 2, text: "アンケートに答えてくれた利用者が、期待したよりずっと多かったから" },
      { id: 3, text: "アンケートを行っても、利用者の本当の希望はわからなかったから" },
      { id: 4, text: "アンケートでわかった利用者の希望が、予想と違っていたから" }
    ],
    correctAnswer: 4
  },
  {
    question: "このタクシー会社が、ボタンを使って利用者の希望を聞けるようにしたのはなぜか。",
    image: require("../assets/readingimages/readingimage7.png"),
    options: [
      { id: 1, text: "運転手に直接希望を言いにくいと感じている利用者が多いようだから" },
      { id: 2, text: "運転中に利用者の声が上く聞こえない運転手が多いようだから" },
      { id: 3, text: "ボタンをつけてほしいという希望を持つ利用者が多いようだから" },
      { id: 4, text: "利用者とあまり話をしたくないと考える運転手が多いようだから" }
    ],
    correctAnswer: 1
  },
  {
    question: "②流行らしいアイデアとあるが、この文章を書いた人は、なぜそのように言っているのか。",
    underlineWords: ["流行らしい"],
    image: require("../assets/readingimages/readingimage7.png"),
    options: [
      { id: 1, text: "利用者は多少減ってしまうが、環境に優しいサービスだから" },
      { id: 2, text: "会社と利用者がいっしょに考えた、環境に優しいサービスだから" },
      { id: 3, text: "利用者、会社の両方にいいがあり、環境にも優しいサービスだから" },
      { id: 4, text: "会社の支出は増えるが、利用者や環境に優しいサービスだから" }
    ],
    correctAnswer: 3
  },
  {
    question: "今日は日曜日である。ソフィさんは14時に入園し、このポスターを見た。動物園が昼間に行っている実内や教室の中で、今から参加できるものはどれか。",
    image: require("../assets/readingimages/readingimage8.png"),
    options: [
      { id: 1, text: "Aだけ" },
      { id: 2, text: "AとB" },
      { id: 3, text: "AとBとC" },
      { id: 4, text: "BとD" }
    ],
    correctAnswer: 2
  },
  {
    question: "カクさんは8月9日の昼に動物園に来て、園内でポスターを見て、その日の「夜の動物園」を見たくなった。「夜の動物園」を見るために、カクさんがしなければならないことはどれか。",
    image: require("../assets/readingimages/readingimage8.png"),
    options: [
      { id: 1, text: "17時半までに、もう一度入園する。" },
      { id: 2, text: "昼とは別に入園料を払って、もう一度入園する。" },
      { id: 3, text: "東口から、もう一度入園する。" },
      { id: 4, text: "外で食事をすませてから、もう一度入園する。" }
    ],
    correctAnswer: 2
  }
];

export default questions;

//image: require('../assets/readingimages/readingimage0.png'),