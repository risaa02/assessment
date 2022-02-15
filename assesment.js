'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリアの作成
  resultDivided.innerText = "";
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

 // ツイートエリアの作成
tweetDivided.innerText = "";
const anchor = document.createElement('a');
const hrefValue =
  'https://twitter.com/intent/tweet?button_hashtag=' +
  encodeURIComponent('オススメの旅行先') +
  '&ref_src=twsrc%5Etfw';
 
anchor.setAttribute('href', hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-text', result);
anchor.innerText = 'Tweet #オススメの旅行先';
tweetDivided.appendChild(anchor);

//widjets.js の設定
const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);
}
const answers = [
    '{userName}にオススメの旅行先は札幌です。すすきの・狸小路でシメパフェを食べるのがオススメです。',
    '{userName}にオススメの旅行先は函館です。',
    '{userName}にオススメの旅行先は仙台です。牛タンは必ず食べて帰ってください。',
    '{userName}にオススメの旅行先は佐賀です。武雄市にある図書館がオススメです。',
    '{userName}にオススメの旅行先は横浜です。最近Instagramで話題のしょうゆきゃふぇにも行ってみてください。',
    '{userName}にオススメの旅行先は金沢です。千里浜なぎさドライブウェイは日本で唯一、車で砂浜を走ることができます。',
    '{userName}にオススメの旅行先は箱根です。POLA美術館にも訪れてみてください。',
    '{userName}にオススメの旅行先は鳥取です。鳥取砂丘で前転をしてみることが夢です。',
    '{userName}にオススメの旅行先は名古屋です。岩盤浴もついている温泉施設、キャナルリゾートもオススメです。',
    '{userName}にオススメの旅行先は京都です。京都BALに入っているオシャレなStarbucksにもぜひ足を運んでみてください。',
    '{userName}にオススメの旅行先は神戸です。アンパンマンミュージアムに行くのもオススメです。',
    '{userName}にオススメの旅行先は大阪です。USJの年パスを買いましょう。',
    '{userName}にオススメの旅行先は香川です。最近話題のデートスポット、四国水族館もオススメです。',
    '{userName}にオススメの旅行先は福岡です。ももち浜がデートにオススメです。',
    '{userName}にオススメの旅行先は別府です。観光客に人気の温泉ひょうたん温泉もオススメです。',
    '{userName}にオススメの旅行先は沖縄です。うるま市にあるN高本校にも行ってみてください。'
  ];
  /**
   * 名前の文字列を渡すと診断結果を返す関数
   * @param {string} userName ユーザーの名前
   * @return {string} 診断結果
   */
  function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
  
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
  
    result = result.replaceAll('{userName}', userName);
    return result;
  }
  
  
  // テストコード
  console.assert(
      assessment('太郎') ===
        '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );
    console.assert(
      assessment('太郎') === assessment('太郎'),
      '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
  