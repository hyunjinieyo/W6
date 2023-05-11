function drawStar() {
    for (let i = 1; i <= 5; i++) {
        let str = '';
        for (let j = 1; j <= 5 - i; j++) {
            str += ' ';
        }
        for (let k = 1; k <= i; k++) {
            str += '*';
        }
        document.write(str + '<br>');
    }
}

drawStar(5)