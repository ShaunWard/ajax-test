let btn = document.getElementById("btn");
let clr = document.getElementById("clr");
let activities;

btn.addEventListener('click', myRequest);
clr.addEventListener('click', myClear);

function myRequest(){
    document.getElementById("info").innerHTML = "";
    $.getJSON("https://www.boredapi.com/api/activity/", function(swResults){
        console.log(swResults);
        let things =    `<div>stuff within a div on a page</div>
                        <div>and here's an activity: ${swResults.activity}</div>
                        <div>with this many participants: ${swResults.participants}</div>
                        <div>and how much does all this cost you ask?</div>
                        <div><strong>£${swResults.price}</strong></div>`
        $("#info").html(things)
    
    });
    
}

function myClear() {
    document.getElementById("info").innerHTML = "";
}

