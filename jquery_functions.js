
// let submitBtn = document.getElementById("submit-button");


// submitBtn.addEventListener("click", submitted);

function selection() {

    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();

    var category = document.getElementById("category").value;

    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    var url = "https://api.unsplash.com/photos/random?client_id=JiouuZcbhMxy8L8Oi9vgQ3oavNekX6PqqhIK-vBj5M8&query=" + category + "&orientation=landscape";

    xhr.open("GET",
        url, true);




    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);

            // Getting the ul element
            let response = document.getElementById("response");
            str = '<img src="' + obj.urls.regular + '">';

            console.log(str);
            response.innerHTML = str;
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

    var url = "http://sankarshpallela.co:8080/images";

    xhr.open("GET",
        url, true);

        xhr.onload = function () {
            if (this.status === 200) {
    
                // Changing string data into JSON Object
                obj = JSON.parse(this.responseText);
    
                // Getting the ul element
                let response = document.getElementById("response");
                // str = '<img src="' + obj.urls.regular + '">';
                str = '<p>' + obj + '</p>';
                console.log(str);
                response.innerHTML = str;
            }
            else {
                console.log("File not found");
            }
        }
    
        // At last send the request
        xhr.send();
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