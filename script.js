// var block1 = document.querySelector('.block1');
// var block2 = document.querySelector('.block2');
// var block3 = document.querySelector('.block3');
var blocks = document.querySelectorAll('.block');
// var box1 = document.querySelector('.box1');
// var box2 = document.querySelector('.box2');
// var box3 = document.querySelector('.box3');
// var box4 = document.querySelector('.box4');
// var box5 = document.querySelector('.box5');
// var box6 = document.querySelector('.box6');
// var box7 = document.querySelector('.box7');
// var box8 = document.querySelector('.box8');
var boxes = document.querySelectorAll('.box');


var btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
    if (i == 0) {
        btns[i].addEventListener('click', () => {
            if (blocks[0].children.length > 2) {
                var temp = document.createElement('div');
                temp.className = blocks[0].children[0].getAttribute('class');
                // blocks[1].children[0].appendChild(document.createElement('div'));
                // blocks[1].setAttribute('class', blocks[0].children[0].getAttribute('class'));
                blocks[0].children[0].remove();
                blocks[1].prepend(temp);
            }
        })
    }
}