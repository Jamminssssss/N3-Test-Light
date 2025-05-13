const listeningQuestions = [
  {
    question: '1ばん',
    image: require('../assets/audioimages/audioimage0.png'),
    audio: 'n3q1.mp3',
    options: [
      { id: 1, text: 'アウ' },
      { id: 2, text: 'アエ' },
      { id: 3, text: 'イウ' },
      { id: 4, text: 'イエ' },
    ],
    correctAnswer: 2,
  },
  {
    question: '2ばん',
    audio: 'n3q2.mp3',
    options: [
      { id: 1, text: '水曜日' },
      { id: 2, text: '木曜日' },
      { id: 3, text: '金曜日' },
      { id: 4, text: '土曜日' },
    ],
    correctAnswer: 3,
  },
  {
    question: '3ばん',
    audio: 'n3q3.mp3',
    options: [
      { id: 1, text: 'さんかしゃを かくにんする' },
      { id: 2, text: '店に電話する' },
      { id: 3, text: 'メールをかくにんする' },
      { id: 4, text: 'ないようを決める' },
    ],
    correctAnswer: 1,
  },
  {
    question: '4ばん',
    audio: 'n3q4.mp3',
    options: [
      { id: 1, text: 'セミナーにもうしこむ' },
      { id: 2, text: 'テストをうける' },
      { id: 3, text: 'けいじばんを見る' },
      { id: 4, text: 'さんかひをふりこむ' },
    ],
    correctAnswer: 2,
  },
  {
    question: '5ばん',
    audio: 'n3q5.mp3',
    options: [
      { id: 1, text: 'ちょうさけっかを入力する' },
      { id: 2, text: 'サンプルをしてんに送る' },
      { id: 3, text: 'かいぎのじゅんびをする' },
      { id: 4, text: '大野さんに仕事をたのむ' },
    ],
    correctAnswer: 1,
  },
  {
    question: '6ばん',
    audio: 'n3q6.mp3',
    options: [
      { id: 1, text: 'たいそう教室にもうしこむ' },
      { id: 2, text: 'DVD を買う' },
      { id: 3, text: 'びょういんに行く' },
      { id: 4, text: 'スポーツクラブに行く' },
    ],
    correctAnswer: 2,
  },
  {
    question: '7ばん',
    audio: 'n3q7.mp3',
    options: [
      { id: 1, text: '気に入ったのがなかったから' },
      { id: 2, text: '今すぐ買うひつようが なくなったから' },
      { id: 3, text: 'ねだんが高かったから' },
      { id: 4, text: 'おっとといっしょに えらびたかったから' },
    ],
    correctAnswer: 2,
  },
  {
    question: '8ばん',
    audio: 'n3q8.mp3',
    options: [
      { id: 1, text: '年をとってからの生活のため' },
      { id: 2, text: '家を買うため' },
      { id: 3, text: '海外旅行をするため' },
      { id: 4, text: 'りゅうがくするため' },
    ],
    correctAnswer: 4,
  },
  {
    question: '9ばん',
    audio: 'n3q9.mp3',
    options: [
      { id: 1, text: 'ペットをびょういんにつれて行くから' },
      { id: 2, text: '母がけがをしたから' },
      { id: 3, text: 'アルバイトに行くから' },
      { id: 4, text: 'クラブの話し合いがあるから' },
    ],
    correctAnswer: 1,
  },
  {
    question: '10ばん',
    audio: 'n3q10.mp3',
    options: [
      { id: 1, text: 'サラさんの友人に教えてもらう' },
      { id: 2, text: 'テレビを見て自分で勉強する' },
      { id: 3, text: 'インターネットでレッスンをうける' },
      { id: 4, text: '外国語の学校に通う' },
    ],
    correctAnswer: 1,
  },
  {
    question: '11ばん',
    audio: 'n3q11.mp3',
    options: [
      { id: 1, text: '朝食のメニューが売れていない' },
      { id: 2, text: '近所の人があまり来てくれない' },
      { id: 3, text: 'こんでいてもせきを空けないきゃくがいる' },
      { id: 4, text: 'ことばづかいがよくない店員がいる' },
    ],
    correctAnswer: 3,
  },
  {
    question: '12ばん',
    audio: 'n3q12.mp3',
    options: [
      { id: 1, text: 'せんぱいにしりょうを見せる' },
      { id: 2, text: 'ちょうさをしなおす' },
      { id: 3, text: 'しりょうにグラフをくわえる' },
      { id: 4, text: 'はっぴょうのながれを かえる' },
    ],
    correctAnswer: 4,
  },
  {
    question: '13ばん',
    audio: 'n3q13.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
    ],
    correctAnswer: 3,
  },
  {
    question: '14ばん',
    audio: 'n3q14.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
    ],
    correctAnswer: 4,
  },
  {
    question: '15ばん',
    audio: 'n3q15.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
      { id: 4, text: '4' },
    ],
    correctAnswer: 2,
  },
  {
    question: '16ばん',
    image: require('../assets/audioimages/audioimage1.png'),
    audio: 'n3q16.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 1,
  },
  {
    question: '17ばん',
    image: require('../assets/audioimages/audioimage2.png'),
    audio: 'n3q17.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 2,
  },
  {
    question: '18ばん',
    image: require('../assets/audioimages/audioimage3.png'),
    audio: 'n3q18.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 3,
  },
  {
    question: '19ばん',
    image: require('../assets/audioimages/audioimage4.png'),
    audio: 'n3q19.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 3,
  },
  {
    question: '20ばん',
    audio: 'n3q20.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 1,
  },
  {
    question: '21ばん',
    audio: 'n3q21.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 3,
  },
  {
    question: '22ばん',
    audio: 'n3q22.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 2,
  },
  {
    question: '23ばん',
    audio: 'n3q23.mp3',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: '2' },
      { id: 3, text: '3' },
    ],
    correctAnswer: 1,
  }
];

export default listeningQuestions;