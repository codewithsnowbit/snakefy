const txt = document.getElementById('txt');

const snakefy = () => {
    const text = txt.value;
    const snake = text.replace(/\s/g, '_');
    txt.value = snake;
}

const camelfy = () => {
    const text = txt.value;
    const camel = text.replace(/\s/g, '');
    txt.value = camel;
}