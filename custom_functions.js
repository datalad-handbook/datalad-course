function showHover(e){
    x=e.offsetX;
    y=e.offsetY;

    if (cursorInCopyButton(x,y)) {
        e.target.style.cssText += "--color: orange"
    } else {
        e.target.style.cssText += "--color: white"
    }
}

function leaveElement(e){
    e.target.style.cssText += "--color: white"
}


function clickCopy(e){
    x=e.offsetX;
    y=e.offsetY;
    el = e.target;
    if (cursorInCopyButton(x,y)) {
        selectText = el.textContent;
        navigator.clipboard
            .writeText(selectText)
            .then(() => {
                el.style.cssText += "--color: #a6e22e"
                setTimeout(function(){
                    el.style.cssText += "--color: white"
                }, 500);
            })
            .catch((error) => {
            alert(`Copy failed! ${error}`);
            });
    }
}



function cursorInCopyButton(x,y) {
    if ((x >= 1087) && (x <= 1146) && (y >= 6) && (y <= 35)) {
        return true
    }
    return false
}