const $content = document.querySelector('#elements-content-gsweb');
var $item = document.querySelector('.item');

$item.addEventListener('dragstart', dragStart);
$item.addEventListener('dragend', dragEnd);


$content.addEventListener('dragover', dragOver);
$content.addEventListener('dragenter', dragEnter);
$content.addEventListener('dragleave', dragLeave);
$content.addEventListener('drop', dragDrop);

function dragStart() {
    this.className += ' hold';
}
  
function dragEnd() {
    this.className = 'item';
}
  
function dragOver(e) {
    e.preventDefault();
}
  
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
  
function dragLeave() {
    this.className = 'test';
}
  
function dragDrop() {
    this.className = 'test';
    this.append($item);
}