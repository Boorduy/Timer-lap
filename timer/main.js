let time = document.getElementById('display-time')
let [millisecond,seconds, minutes, hours] = [0,0,0,0]
let [tim] = [0]
let lappp = document.getElementById('lappp')
//set them in arrays and give them 0 value
let timer = 0
function stopWatch() {

    millisecond++ 
    if (millisecond == 60) {
        millisecond = 0
        seconds++
    }
    if (seconds == 60) {
        seconds = 0
         minutes++
    }
    if (minutes == 60) {
        minutes = 0
        hours++
    }

    //pretty simple format to have seconds going and innerHTML being the whole process and numbers
    //changing
    time.innerHTML = hours + ':' + minutes + ':' + seconds + ':' +millisecond
}
function startWatch() {
    if (timer!==0) {
        clearInterval(timer)
    }// above code to make sure timer  only happens once and it does'nt duplicate itself cause if it
    //does the speed becomes faster and faster
    timer = setInterval(stopWatch, 16)
    //executes stopWatch every second putting it as normal if we set it as function stopwatch() we
    //had to click it every single time
    

}

function pauseWatch() {

    time.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + millisecond
    clearInterval(timer)
}
function resetWatch() {
    hours = 0
    minutes = 0
    seconds = 0
    millisecond = 0
    time.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + millisecond
    
    clearInterval(timer)
}

function lapWatch() {
    
    tim++
   let p = document.createElement('p')
   p.innerHTML = 'Lap'+'('+tim+'):  ' + time.innerHTML
   lappp.appendChild(p)
   //didnt work properly so i created an array with value 0 called tim so that everytime it adds 1
   //to it when button is clicked then display it on screen as lap number
   
   }



   //everytime LapWatch is clicked startWatch() also activates and every time startWatch() activates
   //an amount is added to it. here the valueOf() is 3 before i even press LapWatch()
   //so i minused it by 2 so that the first p that is created is lap 1
    // don't know how to make my laps scrollable if they get more than an amount that exceeds the screen

//time.innerHTML = timer .... apparently this line of code indicates how many times we pressed buttons
//can be used for lapping