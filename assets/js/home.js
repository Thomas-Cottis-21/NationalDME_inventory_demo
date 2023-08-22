import Time from "./classes/Time.class.js";
import Slider from "./classes/Slider.class.js";
import Count from "./classes/Count.class.js";

let TimeObject = new Time();

TimeObject.runCountDown("15", document.getElementById("panel-countdown"));




let SliderObject = new Slider(document.getElementById("track"));

SliderObject.slideLeft(document.getElementById("start-clinic"));

SliderObject.slideRight(document.getElementById("select-clinic-back"));

SliderObject.slideLeft(document.getElementById("select-clinic-start"));



let CountObject = new Count();

CountObject.countUp(document.getElementById("count-up"), document.getElementById("count"));

CountObject.countDown(document.getElementById("count-down"), document.getElementById("count"));

CountObject.submit(document.getElementById("submit-count"),  document.getElementById("item"), document.getElementById("count"));

CountObject.updateCount(document.getElementById("clinic-count-data"), document.getElementById("item"), document.getElementById("count"));