var blocks = document.querySelectorAll('.block');
var boxes = document.querySelectorAll('.box');

var btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
    if (i == 0) {
        btns[i].addEventListener('click', () => {
            if (blocks[0].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[0].children[0].getAttribute('class');
                if (blocks[1].children.length > 0) {
                    if (temp.getAttribute('class') > blocks[1].lastChild) {
                        alert('Нельзя ложить большой элемент на меньший');
                    }
                }
                else {
                    blocks[0].children[0].remove();
                    blocks[1].prepend(temp);
                }
            }
        })
    }
    if (i == 1) {
        btns[i].addEventListener('click', () => {
            if (blocks[0].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[0].children[0].getAttribute('class');

                
                blocks[0].children[0].remove();
                blocks[2].prepend(temp);
            }
        })
    }
    if (i == 2) {
        btns[i].addEventListener('click', () => {
            if (blocks[1].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[1].children[0].getAttribute('class');
                blocks[1].children[0].remove();
                blocks[0].prepend(temp);
            }
        })
    }
    if (i == 3) {
        btns[i].addEventListener('click', () => {
            if (blocks[1].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[1].children[0].getAttribute('class');
                blocks[1].children[0].remove();
                blocks[2].prepend(temp);
            }
        })
    }
    if (i == 4) {
        btns[i].addEventListener('click', () => {
            if (blocks[2].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[2].children[0].getAttribute('class');
                blocks[2].children[0].remove();
                blocks[0].prepend(temp);
            }
        })
    }
    if (i == 5) {
        btns[i].addEventListener('click', () => {
            if (blocks[2].children.length > 0) {
                var temp = document.createElement('div');
                temp.className = blocks[2].children[0].getAttribute('class');
                blocks[2].children[0].remove();
                blocks[1].prepend(temp);
            }
        })
    }
}