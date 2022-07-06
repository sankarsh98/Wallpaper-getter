
// var submitted = document.getElementById("submit-button")

// submitted.onclick = function (){
//     alert("SUBMITTED!")
// }

function submitted(){
    var val = document.getElementById("category").value;
    // alert(val);
    var node=document.getElementById("response");
    node.innerHTML="<h1>Hello</h1>";
}

// const userAction = async () => {
//     // var url = "https://api.unsplash.com/photos/random?client_id=JiouuZcbhMxy8L8Oi9vgQ3oavNekX6PqqhIK-vBj5M8&query=animals&orientation=landscape";
//     var url = "https://catfact.ninja/fact";
//     console.log(url);
//     const response = await fetch(url);
//     alert("hello");
   
//     console.log(response);
//     const myJson = await response.json(); //extract JSON from the http response


//     // alert("hello");
//     console.log(myJson);
//     // do something with myJson
//     // var imgurl = myJson.urls.raw;
//     // document.write('<div id="image"><img src="'+imgurl+'"></div>')
//     var node=document.getElementById("response");
//     node.innerHTML("<h1>Hello</h1>");
//     // document.write('<h1>'+url+'</h1>');
//     // alert(imgurl);

//   }