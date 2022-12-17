let a = 0;
function addData() {
    if(document.getElementById("list").value != ""){
        a += 1;
        document.getElementById("insert-data").innerHTML += '<tr><td>' + a + '</td>' + '<td>' + document.getElementById("list").value + '</td></tr>';
        document.getElementById("list").value = "";
    }
}