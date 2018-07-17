/* countdown clock*/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date("1 August 2018")));
initializeClock('clockdiv', deadline);

/* set mvie drpodown menu according to day */ 
var aug5th = ["Paddington 2", "Nebraska", "World's End"];
var aug6th = ["Bad Moms Christmas", "Sacred Deer", "Murder on the Orient Express"];
var aug7th = ["Despictable Me 3", "Only the Brave's", "Baby Driver"];
var aug8th = ["Cars 3", "The Death of Stalin", "Blade Runner"]
function setSelect(v) {
  var x = document.getElementById("movie");
  for (i = 0; i < x.length; ) { 
      x.remove(x.length -1);
  }
  var a;
  if (v=='5th'){
      a = aug5th;
  } else if (v=='6th'){
      a = aug6th;
  } else if (v=='7th'){
    a = aug7th;
  } else if (v=='8th'){
    a = aug8th;
  }  
  for (i = 0; i < a.length; ++i) {
    var option = document.createElement("option");
    option.text = a[i];
    x.add(option);
  }
  
}
function load() {
    setSelect('5th');
}
window.onload = load;

