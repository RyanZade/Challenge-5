let crtDay = document.getElementById('currentDay');
let timeBlockDiv = document.getElementsByClassName('container')[0];
var timeText = localStorage.getItem("timeText");

crtTime = moment().format('dddd, MMMM Do');
crtDay.innerHTML = crtTime;


    for (let i = 9; i < 19; i++) {
  
let parentDiv = document.createElement('div');
parentDiv.setAttribute("class", "time-block");
parentDiv.style.display = 'flex';
parentDiv.style.border = '1px solid black';

let timeDiv = document.createElement('div');
timeDiv.innerHTML = i + ':00';
timeDiv.style.flex =  '20%';

let textAreaDiv = document.createElement('div');
let textArea = document.createElement('textarea');
textArea.setAttribute("id", `${i}:00`);
if(moment().format('H') === i){
    textAreaDiv.setAttribute("class", "present");
}if(moment().format('H') < i){
    textAreaDiv.setAttribute("class", "future");
}if(moment().format('H') > i){
    textAreaDiv.setAttribute("class", "past");
};
textAreaDiv.appendChild(textArea);
textAreaDiv.style.flex = "70%";

let saveBtnDiv = document.createElement('div')
let saveBtn = document.createElement('btn');
saveBtnDiv.addEventListener("click",(event) => {
    console.log(event.target.previousElementSibling.firstElementChild.value);
    console.log(event.target.previousElementSibling.previousElementSibling.innerHTML);
    let key = event.target.previousElementSibling.previousElementSibling.innerHTML;
    let value = event.target.previousElementSibling.firstElementChild.value;
    localStorage.setItem(`${key}`, value);

})
saveBtnDiv.appendChild(saveBtn);
saveBtnDiv.style.flex = "15%";
saveBtnDiv.setAttribute("class", "saveBtn saveBtn i:hover");
saveBtnDiv.innerHTML = " Save";

parentDiv.append(timeDiv, textAreaDiv, saveBtnDiv);
timeBlockDiv.append(parentDiv);
};

function getItemLS(){
    for(let i = 9; i < 19; i++){
        document.getElementById(`${i}:00`).value = localStorage.getItem(`${i}:00`);
    }
};
getItemLS();