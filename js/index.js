;(function () {

})();

var tmpObj = {};
var modal = document.getElementById("form1");
var btn = document.getElementById("add");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block"
};

span.onclick = function () {
    modal.style.display = "none"
};


function valid (fotm) {
    tmpObj.name = form.name1.value;
    tmpObj.surname = form.surname.value;
    tmpObj.phone = form.phone.value;
    tmpObj.emale = form.emale.value;

    localStorage.setItem(tmpObj.name, JSON.stringify(tmpObj));

    alert('Contact ' + tmpObj.name + ' added to memory');
}

function Search() {
    var input, a, i, ul, li, filter;
    input = document.getElementById('poisk');
    filter = input.value.toUpperCase();
    ul = document.getElementById('spisok');
    li = ul.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}

var countOfFields = 1;
var curFieldNameId = 1;
var maxFieldLimit = 5;

function deleteField(a) {
    var contDiv = a.parentNode;
    contDiv.parentNode.removeChild(contDiv);
    countOfFields--;
    return false;
}
function addField() {
    if (countOfFields >= maxFieldLimit) {
        alert("The number of fields reached its maximum");
        return false;
    }
    countOfFields++;
    curFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"name_" + curFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("parentId").appendChild(div);

    return false;
}

var EcountOfFields = 1;
var EcurFieldNameId = 1;
var EmaxFieldLimit = 5;

function EaddField() {
    if (EcountOfFields >= EmaxFieldLimit) {
        alert("The E-male of fields reached its maximum");
        return false;
    }
    EcountOfFields++;
    EcurFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"name_" + EcurFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("EparentId").appendChild(div);

    return false;
}

function seeCntakt() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var li = document.createElement("li");
        li.innerHTML = "<a onclick=\"return see(key)\" href=# >" + key + "</a>";
        document.getElementById("spisok").appendChild(li);

    }
}

var bedit = document.getElementById("edit");
var bdel = document.getElementById("del");
var span2 = document.getElementsByClassName("close2")[0];


span2.onclick = function () {
    modal2.style.display = "none"
};

function see(Key) {
    var returnObj = JSON.parse(localStorage.getItem(Key));

    alert("test21");
}
