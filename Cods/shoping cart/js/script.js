
var userpoint = 0
var gin = 0

var userpoint1 = 0
var gin1 = 0

var userpoint2 = 0
var gin2 = 0

var ginsum = 0
function func(){
    userpoint++
    gin = gin + 620
    document.getElementById("gin").innerHTML= gin + "$"
    document.getElementById("btn").innerHTML = userpoint
    if (ginsum > 0){
        funcccc()
    }
}
function func1(){
    if(userpoint>0){
        userpoint--
        gin = gin - 620
        document.getElementById("gin").innerHTML= gin + "$"
        document.getElementById("btn").innerHTML = userpoint 
    }
    if (ginsum > 0){
        funcccc()
    }
}
function funcc(){
    userpoint1++
    gin1 = gin1 + 200 
    document.getElementById("gin1").innerHTML= gin1 + "$"
    document.getElementById("btn1").innerHTML = userpoint1 
    if (ginsum > 0){
        funcccc()
    }
}
function funcc1(){
    if(userpoint1>0){
        userpoint1--
        gin1 = gin1 - 200
        document.getElementById("gin1").innerHTML= gin1 + "$"
        document.getElementById("btn1").innerHTML = userpoint1  
    }
    if (ginsum > 0){
        funcccc()
    }
}
function funccc(){
    userpoint2++
    gin2 = gin2 + 1240
    document.getElementById("gin2").innerHTML= gin2 + "$"
    document.getElementById("btn2").innerHTML = userpoint2 
    if (ginsum > 0){
        funcccc()
    }
}
function funccc1(){
    if(userpoint2>0){
        userpoint2--
        gin2 = gin2 - 1240
        document.getElementById("gin2").innerHTML= gin2  + "$"
        document.getElementById("btn2").innerHTML = userpoint2
    }
    if (ginsum > 0){
        funcccc()
    }
}

function funcccc(){
    ginsum = gin + gin1 + gin2
    document.getElementById("getbut").innerHTML = ginsum + "$"
}