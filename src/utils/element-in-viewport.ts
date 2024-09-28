const isElementInViewPort = (element:HTMLElement)=>{

var rect = element.getBoundingClientRect();

return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
);

}

export default isElementInViewPort