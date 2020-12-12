var blocks = document.querySelectorAll('.block');
var boxes = document.querySelectorAll('.box');
var btns = document.querySelectorAll('.btn');
var solve_btn = document.querySelector('.solve_btn')

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
            BoxNumber();
            checkWin();
        })

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
            BoxNumber();
            checkWin();
        })

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
            BoxNumber();
            checkWin()
        })

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
            BoxNumber();
            checkWin()
        })

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
            BoxNumber();
            checkWin();
        })

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
            BoxNumber();
            checkWin();
        })

    }
}

function checkWin() {
    var temp = document.querySelector('.block2');
    if (temp.children.length == 8) {
        alert("WIN");
    } else {

    }
}

function BoxNumber() {
    for (let i = 0; i < boxes.length; i++) {
        let temp = document.querySelector(`.box${i + 1}`);
        temp.innerHTML = i + 1;
    }
}
BoxNumber();
var result = [];
function Hanoi1(n, x, y, z) {

    if (n <= 0)
        return;
    Hanoi1(n - 1, x, z, y);
    let a = x + ' -&gt; ' + y
    result.push(a);

    Hanoi1(n - 1, z, y, x);

    return;
}
Hanoi1(8, 1, 2, 3);
function solution() {
    var length = result.length;
    var i = 0;
    for (let i = 0; i < length; i++) {
        setTimeout(() => {
            for (let j = 0; j < btns.length; j++) {
                if (btns[j].innerHTML == result[i]) {
                    btns[j].click();
                }
            }
        }, 200 * (i + 1));
    }

}
for (let j = 0; j < btns.length; j++) {
    btns[j].addEventListener('mousedown', () => {
        btns[j].style.background = 'red';
    })
    btns[j].addEventListener('mouseup', () => {
        btns[j].style.background = 'grey';
    })
}

solve_btn.addEventListener('click', function () {

    solve_btn.disabled = true;
    solution();



})