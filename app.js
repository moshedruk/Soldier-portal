const NameOfKey = "solders";
const arrsolders = []
const saveLocalost = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getLocalost = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const saveSolders = (solders) => {
    saveLocalost(NameOfKey, solders);
}
const callsetintrval = (tag,timeMissom) =>{
    console.log(timeMissom);
    let interval = setInterval(() => {
        tag.value = timeMissom-1;            
        if(timeMissom <= 0){
            clearInterval(interval);
            alert("Time is over")
            return;
        }        
    },1000)

}
document.onload = () => {
    alert("ghf")
    let solders = getLocalost(NameOfKey) || [];
    for (const element of solders) {
        createnewtd(element);
    }
    
}
const addSolder = () => {
    let solders = {}
    const inputValue = document.querySelectorAll(".inp-create")
    for (const element of inputValue) {
        solders[element.id] = element.value;
    }
    arrsolders.push(solders);
    saveSolders(arrsolders);
    
    createnewtd(solders)
}
const createnewtd = (solders) => {    
    let newtdq = document.createElement("tr");
    for (let key in solders) {        
        let newtd = document.createElement("td");
        newtd.textContent = solders[key];
        newtdq.appendChild(newtd);
    }
    let newbtn = document.createElement("td");
    newbtn.classList.add("btn-actions");
    let btnRemuve = document.createElement("button");
    btnRemuve.textContent = "Remove";
    btnRemuve.classList.add("btn-remove");
    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("btn-edit");
    let displyTime = document.createElement("div");
    let timeMissom = document.querySelector(".inp-create-time").value
    let time = document.createElement("p");
    let text = document.createElement("span");
    time.textContent = timeMissom;
    text.textContent = "secends time.....";
    displyTime.classList.add("display-time");
    displyTime.append(text,time);
    newbtn.append(btnRemuve, btnEdit, displyTime);
    newtdq.appendChild(newbtn);    
    document.querySelector("table").appendChild(newtdq);
    callsetintrval(time,timeMissom)  

}
let save = document.querySelector(".btn-create"); 

save.addEventListener("click", addSolder);

















