let commentElements = document.querySelectorAll("#comments p");
console.log(commentElements);

for (let i = 0; i < commentElements.length; i++) {
    let comment = commentElements[i];
    if (comment.innerText.length > 100) {
        let text = comment.innerText;
        let shortText = text.substring(0, 100);
        comment.innerHTML =
            shortText +
            '....<br><button onclick="onReadMoreButtonClicked(this, ' +
            i +
            ">read more </button>";
    }
}

function onReadMoreButtonClicked(commentIndex) {}
