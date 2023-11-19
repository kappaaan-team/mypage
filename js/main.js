const imageContainer = document.getElementById('imageContainer');

// 画像の数とパスを定義
const numberOfImages = 37;  //画像数に合わせて数値を変更
const imagePath = './img/portfolio_ayane/IMG (%number%).PNG';

// 画像要素を作成して追加
for (let i = 1; i <= numberOfImages; i++) {
    const imgBox = document.createElement('div');
    imgBox.classList.add('img_box');

    const img = document.createElement('img');
    img.classList.add('ayane_img');
    img.src = imagePath.replace('%number%', i);
    img.alt = '';

    imgBox.appendChild(img);
    imageContainer.appendChild(imgBox);
}