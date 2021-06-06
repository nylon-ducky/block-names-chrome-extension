let badName = prompt("Please enter the name you would like to replace:");
let BN = new RegExp(badName);
let txt = "POOPY HEAD";


replaceName(document.body);

function replaceName(element) {


    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceName);
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(BN)) {
            const newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(BN, txt);
            element.replaceWith(newElement);
        }
    }
}
    /* element.textContent = element.textContent.replace(BN, txt); */
