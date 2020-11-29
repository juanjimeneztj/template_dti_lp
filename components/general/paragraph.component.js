"use strict";

export class paragraph{
    options = {
        'class' : null,
        'id'    : null,
        'text'  : null,
        'type'  : 'p'
    }
    constructor($text = null,$class = null, $id = null){
        this.options.class = $class;
        this.options.text = $text;
        this.options.id = $id;
    }
    create = () => {
        let $element = document.createElement(this.options.type);
        if(this.options.id != null){
            $element.setAttribute('id',this.options.id);
        }
        if(this.options.class != null){
            $element.className = this.options.class;
        }
        if(this.options.text != null){
            $element.textContent = this.options.text;
        }else{
            $element.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde placeat cum accusantium tempore, sed iusto nisi ullam magnam molestias maiores veniam laboriosam recusandae quo id libero voluptas illum necessitatibus eos.';
        }
        return $element.outerHTML;
    }
}