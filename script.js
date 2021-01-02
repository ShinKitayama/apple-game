'use strict';
/*--------------------
おかしなりんごゲーム
--------------------*/
const num = 8; //りんごの数
const winner = Math.floor(Math.random() * num); //0 - 8

//8このりんごのうち、1つをおかしなりんごにする
for (let i = 0; i < num; i++) {
    const appleImg = document.createElement('div');
    appleImg.classList.add('appleImg');


    appleImg.addEventListener('click', () => {

        if (i === winner) {
            appleImg.textContent = 'おかしなりんご';
            appleImg.classList.add('Win');
        } else {
            appleImg.textContent = '普通のりんご';
            appleImg.classList.add('Lose');  
        }
        });

        document.body.appendChild(appleImg);
    };

/*--------------------
How TOのモーダル
--------------------*/
const HowToBtn = document.getElementById('HowTo');
const modalContainer = document.getElementById('modalContainer');
const modalBtn = document.getElementById('modalBtn');

//How toボタンを押したときにモーダルを表示する
HowToBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container');
});

//閉じるボタンを押したときにモーダルを閉じる
modalBtn.addEventListener('click', () => {
    modalContainer.classList.add('modal-container');
});

    