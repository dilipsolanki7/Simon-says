let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(event){
    let li = document.createElement("li");
    li.innerText = inp.value;
    
    let delbtn= document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON") {
        console.log("button delete");
        console.dir(event.target);
        let ListItem = event.target.parentElement;
        //console.log(para);
        ListItem.remove();
    }  
    else{
        //console.log("NO");
    }
});

// Will Not Work
/* let delBtns = document.querySelectorAll(".delete");
for(delbtn of delBtns){
    delbtn.addEventListener("click",function(){
        let para = delbtn.parentElement;
        para.remove();
        console.log("delete");
    });
} */