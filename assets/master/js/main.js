const $content = document.querySelector('#elements-content-gsweb');
var $items = document.querySelectorAll('.item');
var $item;

$items.forEach($item => {
    $item.addEventListener('dragstart', dragStart);
    $item.addEventListener('dragend', dragEnd);
});


$content.addEventListener('dragover', dragOver);
$content.addEventListener('dragenter', dragEnter);
$content.addEventListener('dragleave', dragLeave);
$content.addEventListener('drop', dragDrop);

function dragStart() {
    this.className += ' hold';
    $item = this;
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
    if($item.classList.contains('item-paragraph')){
        var CodeContent = this.innerHTML;
        var Ele = paragraph;
        this.innerHTML = CodeContent + Ele;
    }
}