class Time {

    countdown = (setTime, container) => {

        setInterval(() => {

            let currentTime = new Date();
    
            let targetTime = new Date();
            targetTime.setHours(setTime);
            targetTime.setMinutes(0);
            targetTime.setSeconds(0);
    
            let difference = targetTime - currentTime;
            let hoursDifference = Math.floor(difference / 3600000);
            let minutesDifference = Math.floor((difference % 3600000) / 60000);
            let secondsDifference = Math.floor(((difference % 3600000) % 60000) / 1000);

            if (difference < 0) {

                container.innerText = "";

                container.innerText = "00 : 00 : 00";

                return;

            }
    
            container.innerText = "";
    
            container.innerText = `${this.formatTime(hoursDifference)} : ${this.formatTime(minutesDifference)} : ${this.formatTime(secondsDifference)}`;

        }, 1000);


    }

    formatTime = (part) => {

        return part.toString().padStart(2, "0");

    }

}

export default Time;