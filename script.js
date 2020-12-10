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
            if (blocks[0].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[0].children[0].getAttribute('class');
                if (blocks[1].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[1].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[0].children[0].remove();
                        blocks[1].prepend(temp);
                    }
                } else {
                    blocks[0].children[0].remove();
                    blocks[1].prepend(temp);
                }
            }
        })
        checkWin()
    }
    if (i == 1) {
        btns[i].addEventListener('click', () => {
            if (blocks[0].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[0].children[0].getAttribute('class');
                if (blocks[2].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[2].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[0].children[0].remove();
                        blocks[2].prepend(temp);

                    }
                } else {
                    blocks[0].children[0].remove();
                    blocks[2].prepend(temp);
                }
            }
        })
        checkWin()
    }
    if (i == 2) {
        btns[i].addEventListener('click', () => {
            if (blocks[1].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[1].children[0].getAttribute('class');
                if (blocks[0].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[0].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[1].children[0].remove();
                        blocks[0].prepend(temp);
                    }
                } else {
                    blocks[1].children[0].remove();
                    blocks[0].prepend(temp);
                }


            }
        })
        checkWin()
    }
    if (i == 3) {
        btns[i].addEventListener('click', () => {
            if (blocks[1].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[1].children[0].getAttribute('class');

                if (blocks[2].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[2].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[1].children[0].remove();
                        blocks[2].prepend(temp);
                    }
                } else {
                    blocks[1].children[0].remove();
                    blocks[2].prepend(temp);
                }

            }
        })
        checkWin()
    }
    if (i == 4) {
        btns[i].addEventListener('click', () => {
            if (blocks[2].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[2].children[0].getAttribute('class');
                if (blocks[0].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[0].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[2].children[0].remove();
                        blocks[0].prepend(temp);
                    }
                } else {
                    blocks[2].children[0].remove();
                    blocks[0].prepend(temp);
                }

            }
        })
        checkWin()
    }
    if (i == 5) {
        btns[i].addEventListener('click', () => {
            if (blocks[2].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[2].children[0].getAttribute('class');

                if (blocks[1].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[1].children[0].getAttribute('class')) {
                        alert('Нельзя ложить большой элемент на меньший');
                    } else {
                        blocks[2].children[0].remove();
                        blocks[1].prepend(temp);
                    }
                } else {
                    blocks[2].children[0].remove();
                    blocks[1].prepend(temp);
                }

            }
        })
        checkWin()
    }
}

function checkWin() {
    var temp = document.querySelector('.block2');
    if (temp.children.length == 8) {
        alert("WIN");
    } else {

    }
} 