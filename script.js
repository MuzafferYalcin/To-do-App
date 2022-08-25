
function ekleme(){
    let tbodyadet= document.querySelector("tbody");
    let adet = tbodyadet.children.length;
    let taskk = document.querySelector(".taskinput").value;

    if(taskk==""){
        alert("Enter Task")
    }else{
    if(adet == 0){
    let newTr = `
                    <tr>
                        <td>${adet+1}</td>
                        <td>${taskk}</td>
                        <td>in progress</td>
                        <td>
                            <button type="button" class="dlt">Delete</button>
                            <button type="button" class="fns">Finished</button>
                        </td>
                    </tr>
`

tbodyadet.insertAdjacentHTML("beforeend",newTr)
}
    else {
        let newTr = `
                    <tr>
                        <td>${adet+1}</td>
                        <td>${taskk}</td>
                        <td>in progress</td>
                        <td>
                            <button type="button" class="dlt">Delete</button>
                            <button type="button" class="fns">Finished</button>
                        </td>
                    </tr>
`
tbodyadet.insertAdjacentHTML("beforeend",newTr)
    }
 }
}

let container = document.querySelector(".container");

container.addEventListener("click",function(e){
    if (e.target.classList.contains("dlt")){
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains("fns")){
        
        if(e.target.parentElement.previousSibling.previousSibling.innerHTML == "in progress"){
            e.target.parentElement.previousSibling.previousSibling.innerHTML= "Completed";
            e.target.innerHTML= "Go on";
        }
        else if(e.target.parentElement.previousSibling.previousSibling.innerHTML == "Completed"){
            e.target.parentElement.previousSibling.previousSibling.innerHTML= "in progress";
            e.target.innerHTML = "Finished";
        }
    }
})
