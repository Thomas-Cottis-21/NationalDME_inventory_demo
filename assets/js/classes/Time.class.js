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
    
            container.innerText = "";
    
            container.innerText = `${hoursDifference} : ${minutesDifference} : ${secondsDifference}`;

        })


    }

    runCountDown = (setTime, container) => {

        this.countdown(setTime, container);

    }

}

export default Time;