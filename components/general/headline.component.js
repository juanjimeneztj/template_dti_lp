"use strict";

export class headline{
    options = {
        'class' : null,
        'id'    : null,
        'text'  : null,
        'type'  : 'h1'
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
            $element.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
        }
        return $element.outerHTML;
    }
}