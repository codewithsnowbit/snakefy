const txt = document.getElementById('txt');

const snakefy = () => {
    const text = txt.value;
    const snake = text.replace(/\s/g, '_');
    txt.value = snake;
}

const star = () => {
    window.location.href = 'https://github.com/codewithsnowbit/snakefy'
}