var  s1 = document.getElementById("s1");
var  s2 = document.getElementById("s2");
var  add = document.getElementById("add");


if("oninput" in s1){
    s1.addEventListener("input",getWord,false);
} else {
    s1.onpropertychange = getWord;
}
if("oninput" in s2){
    s2.addEventListener("input",getWord,false);
} else {
    s2.onpropertychange = getWord;
}
//判断值是否为空，怎么显示，避免出现“NaN”
function getWord(){
    if(s1.value == "" && s2.value == "") {
        add.innerHTML = "0";
    } else if (s2.value == "") {
        add.innerHTML = parseInt(s1.value)+0;
    } else if(s1.value == ""){
        add.innerHTML = parseInt(s2.value)+0;
    } else  {
        add.innerHTML = parseInt(s1.value) + parseInt(s2.value);
    }
}