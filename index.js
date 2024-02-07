let text = "Touch the entity that begins to pulsate more rapidly and passionately upon catching a glimpse of you.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('myDiv').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();


document.getElementById('heartContainer').addEventListener('click', function() {
    // Open the rose.html page
    window.location.href = 'rose.html';
});