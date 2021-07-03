'use strict';

const main=document.getElementById('main');
const btnAddUser=document.getElementById('add-user');
const btnDouble=document.getElementById('double');
const btnFilter=document.getElementById('filter-rich');
const btnTotal=document.getElementById('total');

//add user
let data=[];

//fetch a random user 

const getRandomUser=async function(){
    const response=await fetch('https://randomuser.me/api');
    const data=await response.json();
    const user=data.results[0];
 const newUser={
    name: `${user.name.first} ${user.name.last}`,
    balance: Math.floor(Math.random()*100000),
 };

 addData(newUser);
}

const addData=function(obj){
    data.push(obj);
    updateDOM();
}

const updateDOM=function(providedData=data){
    //clear main
    main.innerHTML="";
    providedData.forEach(item=>{
        const element=document.createElement('div');
        element.classList.add='users';
        element.innerHTML=`<strong>${item.name}</strong>$${item.balance}`;
        main.appendChild(element);
    });
}


function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  

function doubleBalance(){
    data=data.map(user=>{
        return {...user,balance:user.balance*2}
    });

    updateDOM();
}





//Event Listeners
btnAddUser.addEventListener('click',getRandomUser);

btnDouble.addEventListener('click',doubleBalance);

btnFilter.addEventListener('click',filterRich);