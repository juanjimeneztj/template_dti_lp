import { paragraph } from './general/paragraph.component.js';

const $content = document.querySelector('#elements-content-gsweb');
var $code = $content.innerHTML;
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
    // this.className = 'item item-paragraph';
}
  
function dragOver(e) {
    e.preventDefault();
}
  
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
  
function dragLeave() {
    this.className = '';
}
  
function dragDrop() {
    this.className = '';
    if($item.classList.contains('item-paragraph')){
        let p = new paragraph('Test');
        embedCode(p.create());
    }
}

function embedCode($newItem){
    $code = $content.innerHTML;
    $content.innerHTML = $code + $newItem;
}