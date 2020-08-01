function getData(cb) {                                          //cb short for callback
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");     //Open a request to get data from URL
    xhr.send();                                                 //Send that request

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));                  //Changes the returned string into JSON format
        }
    };
};

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);