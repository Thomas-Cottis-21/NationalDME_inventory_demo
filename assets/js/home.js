import Time from "./classes/Time.class.js";
import Slider from "./classes/Slider.class.js";

let TimeObject = new Time();

TimeObject.runCountDown("15", document.getElementById("panel-countdown"));




let SliderObject = new Slider(document.getElementById("track"));

SliderObject.slideLeft(document.getElementById("start-clinic"));