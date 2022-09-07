
function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbwlFnstqUezme15mtIzrM5Dn5lY1Pst8slGR902H-97HHMD-xE/exec"


  fetch(url)
    .then(d => d.json())
    .then(d => {

        document.getElementById("app").textContent= d[0].status;


    });

}

document.getElementById("btn").addEventListener("click",testGS);
