// function makeH4(){
//     var text = document.getElementById("My Text")
//     text.sytle.fontSize="20px";
// }


// 


const textarea = document.getElementById("textarea");

function select(e){
    let value = e.value;
    textarea.style.fontSize= value + "px"
}
function makeBold(){
    if(textarea.style.fontWeight=="bold"){
        textarea.style.fontWeight="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.fontWeight="bold"
        e.classList.add("active");
    }
}
function makeitalic(){
    if(textarea.style.fontStyle=="italic"){
        textarea.style.fontStyle="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.fontStyle="italic"
        e.classList.add("active");
    }
}
function makeunderline(){
    if(textarea.style.textDecoration=="underline"){
        textarea.style.textDecoration="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.textDecoration="underline"
        e.classList.add("active");
    }
}
function makeleft(){
    if(textarea.style.textAlign=="left"){
        textarea.style.textAlign="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.textAlign="left"
        e.classList.add("active");
    }
}
function makecenter(){
    if(textarea.style.textAlign=="center"){
        textarea.style.textAlign="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.textAlign="center"
        e.classList.remove("active");
    }
}
function makeright(){
    if(textarea.style.textAlign=="right"){
        textarea.style.textAlign="normal"
        e.classList.remove("active");
    }
    else{
        textarea.style.textAlign="right"
        e.classList.remove("active");
    }
}

function makeslash(){
    textarea.style.fontWeight="normal"
    textarea.style.textAlign="left"
    textarea.style.fontWeight="normal"
    textarea.style.textTransform="capitalize"
    textarea.value="";
 }
 function f10(e){
    let value = e.value;
    textarea.style.color=value;
 }
 window.addEventListener("load"), ()=>{
    textarea.value="";
 }
