function timerStart() {

const timeInMinutes = document.getElementById('startingTime').value;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes*60*1000);

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    clock.innerHTML = t.hours + ' :' +
                      t.minutes + ' :' +
                      t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
      wait = () => alert('Time\'s Up!');
      setTimeout(wait, 1000); 
    }
  },1000);
}

initializeClock('clockdiv', deadline); 

}