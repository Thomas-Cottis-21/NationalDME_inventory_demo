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

    slideRight = (button) => {

        button.addEventListener("click", () => {

            this.translateX += 100;
            this.track.style.transform = "translateX(" + this.translateX + "%)";

        });

    }

    customSlideLeft = (button, percentage) => {

        button.addEventListener("click", () => {

            this.translateX += percentage;
            this.track.style.transform = "translateX(" + this.translateX + "%)";

        })

    }

    customSlideRight = (button, percentage) => {

        button.addEventListener("click", () => {

            this.translateX -= percentage;
            this.track.style.transform = "translateX(" + this.translateX + "%)";
        })

    }

}

export default Slider;