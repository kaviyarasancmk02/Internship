window.addEventListener('load', () => {

    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = [
        "green",
        "red",
        "orange",
        "yellow",
        "blue",
        "cyan",
    ]
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sound[index].currentTime = 0;
            sound[index].play();
            createBubble(index);
        });
    });
    const createBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.background = color[index];
        bubble.style.animation = "jump 1s ease";
    }
});