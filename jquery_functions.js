
// let submitBtn = document.getElementById("submit-button");


// submitBtn.addEventListener("click", submitted);

function selection() {

    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();

    const xhrSaveURL = new XMLHttpRequest();

    const xhrRandomUrl = new XMLHttpRequest();

    var regUrl = "sample.com";

    var category = document.getElementById("category").value;

    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    var url = "https://api.unsplash.com/photos/random?client_id=JiouuZcbhMxy8L8Oi9vgQ3oavNekX6PqqhIK-vBj5M8&query=" + category + "&orientation=landscape";

    xhr.open("GET", url, true);

    // When response is ready
    xhr.onload = function () {
        if (xhr.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(xhr.responseText);

            var saveUrl = "http://localhost:8081/terms/" + category + "/urls/";


            // Getting the ul element
            let response = document.getElementById("response");

            regUrl = obj.urls.regular;
            var saveJsonString = {
                "url": regUrl
            };
            xhrSaveURL.open("POST", saveUrl, true);
            xhrSaveURL.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhrSaveURL.send(JSON.stringify(saveJsonString));

            str = '<img src="' + obj.urls.regular + '">';

            console.log(str);
            response.innerHTML = str;
        } else if (xhr.status === 403) {

            var randomUrl = "http://localhost:8081/terms/" + category + "/urls/random/";

            xhrRandomUrl.open("GET", randomUrl, true);

            xhrRandomUrl.onload = function () {
                if (this.status === 200) {

                    randomResponse = JSON.parse(this.responseText);

                    str = '<img src="' + randomResponse.url + '">';

                    console.log(str);
                    response.innerHTML = str;

                }
            }

            xhrRandomUrl.send();

        }
        else {
            console.log("File not found");
        }
    }

    // At last send the request
    xhr.send();
}

function search_handler() {

    const xhr = new XMLHttpRequest();

    var search_string = document.getElementById("search-string").value;

    var url = "https://api.unsplash.com/photos/random?client_id=JiouuZcbhMxy8L8Oi9vgQ3oavNekX6PqqhIK-vBj5M8&query=" + search_string + "&orientation=landscape";

    xhr.open("GET", url, true);

    let resposne = document.getElementById("response");

    xhr.onload = function () {
        if (this.status === 200) {

            obj = JSON.parse(this.responseText);

            str = '<img src="' + obj.urls.regular + '">';

            console.log(str);
            resposne.innerHTML = str;

        } else if (this.status == 403) {
            console.log("403 rate limit exceeded");
            str = '<img src="./403-Forbidden-HTML.png">';
            resposne.innerHTML = str;
        }
        else {
            console.log("File not found");
        }
    }

    xhr.send();
}


function api_tester() {

    const xhr = new XMLHttpRequest();


    var term = document.getElementById("category").value;
    var regUrl = "adfadf.com";
    var jsonString = {
        "url": regUrl
    };

    var url = "http://localhost:8081/terms/" + term + "/urls/";

    let response = document.getElementById("response");

    xhr.open("POST",
        url, true);


    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);

            // Getting the ul element
            // str = '<img src="' + obj.urls.regular + '">';


            str = '<p>' + obj.id + obj.term + '</p>';
            console.log(str);
            response.innerHTML = str;
            xhr.send(JSON.stringify(jsonString));

        }
        else if (this.status === 403) {

            console.log("here");



        }
        else {
            console.log("File not found");
        }
    }

    // At last send the request
    // xhr.send(JSON.stringify('{ "url" : '+regUrl +'}'));

}

function random_tester() {

    const xhrRandomUrl = new XMLHttpRequest();

    var term = document.getElementById("category").value;

    var randomUrl = "http://localhost:8081/terms/" + term + "/urls/random/";

    xhrRandomUrl.open("GET", randomUrl, true);

    xhrRandomUrl.onload = function () {
        if (this.status === 200) {

            randomResponse = JSON.parse(this.responseText);

            str = '<p> ' + randomResponse.url + '</p>';
            console.log(str);
            response.innerHTML = str;

        }
    }

    xhrRandomUrl.send();
}
// function readTextFile() {

//     file="./abc.txt";
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function () {
//         if (rawFile.readyState === 4) {
//             if (rawFile.status === 200 || rawFile.status == 0) {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// $.ajax({
//     type: "POST",
//     url: "~/pythoncode.py",
//     data: { param: text}
//   }).done(function( o ) {
//      // do something
//   });

// $(document).ready(function() {
//     $("button").click(function() {
//         // $.ajax({url: "geeks.txt", 
//         //         success: function(result) {
//         //     $("#h11").html(result);
//         // }});
//         text = "Hello";
//         $.ajax({
//             type: "POST",
//             url: "./test.py",
//             data: { param: text }
//         }).done(function (o) {
//             // do something
//             alert(text);
//         });
//         // alert("Hello");
//     });
// });

//this is a comment

