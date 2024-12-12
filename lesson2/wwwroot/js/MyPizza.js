var baseURL = "http://localhost:5125";
// function load() {
//     fetch(baseURL + "/lesson2")
//         .then((res) => res.json())
//         .then((data) => fillpizzaTbl(data))
//         .catch((error) => console.log(error))

// }
// function fillpizzaTbl(data) {
//     var table = document.getElementById('pizzalist');
//     data.forEach(function (pizza) {
//         var tr = document.createElement('tr');
//         tr.innerHTML = '<td>' + pizza.id + '</td>' +
//             '<td>' + pizza.name + '</td>' +
//             '<td>' + pizza.isglotan + '</td>' ;
//         var tBody = table.getElementsByTagName('tbody')[0];
//         tBody.appendChild(tr);
//     });
// }
function addPizza() {
    var pizza={};
    pizza.Id=document.getElementById('id').value;
    pizza.Name=document.getElementById('name').value;
    pizza.IsGlotan=document.getElementById('glotan').value;
    console.log(pizza);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(pizza);

    const requestOptions = {
        method: "POST",
        // redirect: "follow"
        headers: myHeaders,
        body: raw
      };
      
      fetch(`${baseURL}/MyPizza/Post?nameOfPizza=${pizza.Name}&id=${pizza.Id}&glotan=${pizza.IsGlotan}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));


}










// function afterPost(params) {
//     alert("");
//     load();
// }

//לפןנקצית get
// const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   fetch("http://localhost:5125/MyPizza/GetById/105", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));