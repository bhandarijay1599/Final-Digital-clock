setInterval(current_date,1000);
function current_date(){
    let hrs=document.getElementById('time_hours');
    let mins=document.getElementById('time_mins')
    let secs=document.getElementById('time_sec')
    let am_pm=document.getElementById('meridian_switch')
    
    let instanceofdate=new Date()
    let hours=instanceofdate.getHours()
    if (hours>=12){
        hours-=12
        am_pm.innerText="PM"
    }
    let minutes=instanceofdate.getMinutes()
    let seconds=instanceofdate.getSeconds()
    // letconsole.log(hours,":",minutes,":",seconds)
    hrs.innerText=hours
    mins.innerText=minutes
    secs.innerText=seconds
}

function auto_settime(){
    let dateobj=new Date()
    let hours=dateobj.getHours()

console.log("function involed" ,hours)
    if(hours <=11){
        // morning 
        document.getElementById('box3_greeting').innerText="GOOD MORNING!! WAKE UP !! "
        // document.getElementById('image').src="./morning_greeting.svg"
        // document.getElementById('box7_greeting').innerText="GRAB SOME HEALTHY BREAKFAST!!! "
    }
    else if(hours <=13){
        document.getElementById('box3_greeting').innerText="GOOD AFTERNOON TAKE SOME SLEEP"
        // document.getElementById('image').src="./lunch_greeting.png"
        // document.getElementById('box7_greeting').innerText="LET'S HAVE SOME LUNCH !!"
    }
    else if(hours <=17){
        document.getElementById('box3_greeting').innerText="GOOD EVENING !!"
        // document.getElementById('image').src="./good_evening.png"
        // document.getElementById('box7_greeting').innerText='STOP YAWNING, GET SOME TEA.. \n ITS JUST EVENING!'
    }
    else {
        document.getElementById('box3_greeting').innerText="GOOD NIGHT !!"
        console.log("good night")
        // document.getElementById('image').src="./good_night.png"
        // document.getElementById('box7_greeting').innerText='CLOSE YOUR EYES AND GO TO SLEEP'
    }
}
auto_settime()
function set_alarm_button(){
    let dateobj=new Date()
    let hours=dateobj.getHours()
    let night_id=document.getElementById('night_menu')
    let nap_id=document.getElementById('nap_menu')
    let lunch_id=document.getElementById('lunch_menu')
    let wake_up_id=document.getElementById('wake_up_menu')
    let night_time_viewer=document.getElementById('night_time_display')
    let nap_time_viewer=document.getElementById('nap_time_display')
    let lunch_time_viewer=document.getElementById('lunch_time_display')
    let wake_up_time_viewer=document.getElementById('wake_up_time_display')
    

    // console.log(night_id.options[night_id.selectedIndex].text)
    console.log(night_id.value)
    night_time_viewer.innerText=night_id.options[night_id.selectedIndex].text
    nap_time_viewer.innerText=nap_id.options[nap_id.selectedIndex].text
    lunch_time_viewer.innerText=lunch_id.options[lunch_id.selectedIndex].text
    wake_up_time_viewer.innerText=wake_up_id.options[wake_up_id.selectedIndex].text

    if(night_id.value == hours){
        // document.getElementById('box3_greeting').innerText="GOOD NIGHT !!"
        document.getElementById('image').src="./good_night.png"
        document.getElementById('box7_greeting').innerText='CLOSE YOUR EYES AND GO TO SLEEP'
    }
    else if(nap_id.value == hours){
        // document.getElementById('box3_greeting').innerText="GOOD EVENING !!"
        document.getElementById('image').src="./good_evening.png"
        document.getElementById('box7_greeting').innerText='STOP YAWNING, GET SOME TEA.. \n ITS JUST EVENING!'
    }
    else if(lunch_id.value ==hours){
        // document.getElementById('box3_greeting').innerText="GOOD AFTERNOON TAKE SOME SLEEP"
        document.getElementById('image').src="./lunch_greeting.png"
        document.getElementById('box7_greeting').innerText="LET'S HAVE SOME LUNCH !!"

    }
    else if(wake_up_id.value ==hours){
        // document.getElementById('box3_greeting').innerText="GOOD MORNING!! WAKE UP !! "
        document.getElementById('image').src="./morning_greeting.svg"
        document.getElementById('box7_greeting').innerText="GRAB SOME HEALTHY BREAKFAST!!! "
    }
}

var button_new=document.getElementById("set_alarm")

button_new.addEventListener("mouseover",function(){
    this.innerText="Party Time"
})
button_new.addEventListener("mouseout",function(){
    this.innerText="Set Alarm"
})