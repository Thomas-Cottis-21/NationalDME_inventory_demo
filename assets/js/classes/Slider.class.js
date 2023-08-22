class Slider {

    constructor(track) {

        this.track = track;
        this.translateX = 0;

    }

    slideLeft = (button) => {

        button.addEventListener("click", () => {

            this.translateX -= 100;
            this.track.style.transform = "translateX(" + this.translateX + "%)";

        });

    }

}

export default Slider;