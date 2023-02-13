let isRunning = false;

function timerStart() {
  if (isRunning) {
    return;
  }
  isRunning = true;

  let time = prompt('Enter number of minutes', '10'); 
  const timeInMinutes = Number(time);

    if (Number.isNaN(timeInMinutes) || timeInMinutes === 0 || timeInMinutes < 0) {
      return 0;
    } 
    
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
      const hoursSpan = clock.querySelector('.hours'); 
      const separatorOne = clock.querySelector('.separatorOne')
      const minutesSpan = clock.querySelector('.minutes');
      const separatorTwo = clock.querySelector('.separatorTwo')
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock(){
        const t = getTimeRemaining(endtime);
    
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        separatorOne.innerHTML = ' :';
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        separatorTwo.innerHTML = ' :';
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
          wait = () => alert('Time\'s Up!');
          setTimeout(wait, 1000);
          setTimeout(function(){
            isRunning = false;
          }, 1000); 
        }
      }

      updateClock(); 
      var timeinterval = setInterval(updateClock,1000);
    }

    initializeClock('clockdiv', deadline); 
}

isRunning = false;
