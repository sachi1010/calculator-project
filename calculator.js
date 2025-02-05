function show(value) {
    let num = document.getElementById("result");
    num.value+=value;
}
function clear1(){
    document.getElementById("result").value=" ";
}
function result(){
    let result = document.querySelector("#result");
    result.value=eval(result.value);
}
function backspace(){
     let num=document.getElementById("result");
    num.value=num.value.slice(0,-1);
}
