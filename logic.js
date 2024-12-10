let input=document.querySelector(".inpu");
let add=document.querySelector(".but");
let list=document.querySelector("ul");
add.addEventListener("click",()=>{
    if(input.value=="") 
        alert("firsty enter any task");
    else{
        let task=document.createElement("li");
        task.innerHTML=input.value;
        list.appendChild(task);
        input.value="";
        let sp=document.createElement("span");
        sp.innerHTML="X";
        task.appendChild(sp);
        save();
    }
});

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.style.textDecoration="line-through";
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

    
function save(){
    localStorage.setItem("data",list.innerHTML);
}
function fetch(){
    list.innerHTML=localStorage.getItem("data");
}
fetch();


