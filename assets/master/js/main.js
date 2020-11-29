$('body').on('mouseover','#elements-content-gsweb p',function(e){
    $(this).addClass('item-hovered');
    const fragment = document.createDocumentFragment();
    const templateProducts = document.querySelector('#gsweb-tools-elements').content;
    const clone = templateProducts.cloneNode(true);
    fragment.appendChild(clone);
    $(this).append(fragment);
}).on('mouseleave','#elements-content-gsweb p',function(e){
    $(this).removeClass('item-hovered');
    $(this).find('.tools-gsweb').remove();
});