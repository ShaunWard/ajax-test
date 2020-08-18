let btn = document.getElementById("btn");

btn.addEventListener('click', myRequest);

function myRequest(){
    $.getJSON("https://ci-swapi.herokuapp.com/api/", function(swResults){
        console.log(swResults);
    });
}

