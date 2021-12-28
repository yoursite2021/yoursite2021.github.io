var block = document.querySelector('.condition-title');

block.addEventListener('mouseenter', function () {
    block.classList.add('color1');
});
block.addEventListener('mouseleave', function () {
    block.classList.remove('color1');
});

