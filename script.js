// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 既存のクラスを削除
    resultDisplay.className = '';
    document.body.className = '';

    // 0.3 未満だったら
    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉';
        document.body.classList.add('daikichi');

    // 0.8 未満だったら
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '中吉';
        document.body.classList.add('chukichi');

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '吉';
        document.body.classList.add('kichi');
    }

});