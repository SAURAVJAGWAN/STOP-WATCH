let input = document.querySelector('input');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let msec = 0;
let sec = 0;
let min = 0;
let time = null;

start.addEventListener('click',()=>{
    if(time == null)
    time = setInterval(timer, 10);
})

stop.addEventListener('click',()=>{
    clearInterval(time);
})

reset.addEventListener('click',()=>{
    clearInterval(time);
    input.value = `00:00:00`;
})

let timer = ()=>{
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }

    let m=0;
    let s=0;
    let mi=0
    if(msec<10){
         m = `0${msec}`;
    }
    else{
        m = msec;
    }
    if(sec<10){
        s = `0${sec}`;
    }
    else{
        s = sec;
    }
    if(min<10){
         mi = `0${min}`;
    }
    else{
        mi = min;
    }
    input.value = `${mi}:${s}:${m}` 
}  

