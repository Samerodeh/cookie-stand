'use strict'; 

let table = document.getElementById('table'); 


function Seattle(name, mincust, maxcust, avgsale, hour) { 

  this.name = name; 
  this.mincust = mincust; 
  this.maxcust = maxcust; 
  this.avgsale = avgsale; 
  this.hour = hour; 
  this.Array = []

 /* this.gitCustNumber = function(){

    return Math.ceil(getRandomNumber(this.mincust,this.maxcust)*this.avgsale);
  };


this.render = function(){
  const parentElement = document.getElementById('cookie-stand');


  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  let h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  articleElement.appendChild(h2Element);

  let ulElement=document.createElement('ul');
  h2Element.appendChild(ulElement);
  let total=0;
  for(let i=0;i<this.hour.length;i++){
    let liElement=document.createElement('li');
    let cookie=this.gitCustNumber();
    liElement.textContent=this.hour[i]+': '+cookie+' cookies';
    total=total+cookie;
    ulElement.appendChild(liElement);
    if (i===13){
      let liElement=document.createElement('li');
      liElement.textContent='total: '+total+' cookies';
      ulElement.appendChild(liElement);
    }
  }
}*/
} 

Seattle.prototype.gitCustNumber = function(){

  return Math.ceil(getRandomNumber(this.mincust,this.maxcust)*this.avgsale);
};

Seattle.prototype.render = function(){
  const parentElement = document.getElementById('cookie-stand');


 
  





  const tr2 = document.createElement('tr')
  table.appendChild(tr2);

  const tdBody = document.createElement('td');
    tr2.appendChild(tdBody);
    tdBody.textContent = this.name; 
  for(let i = 0; i < this.hour.length; i++) {
    const tdBody = document.createElement('td');
    tr2.appendChild(tdBody);
    tdBody.textContent = this.gitCustNumber();
  

  }

  
  
 
    }  

    function tableheader(){

      const tr1 = document.createElement('tr');
      table.appendChild(tr1);
    
      let headArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      const th = document.createElement('th');
        tr1.appendChild(th);
        th.textContent = ''
      for(let i = 0; i < headArray.length; i++) {
        const th = document.createElement('th');
        tr1.appendChild(th);
        th.textContent = headArray[i];
      }
    }
  
 

tableheader();
let SeattleBranch = new Seattle ('seattle', '23', '65', '6.3', ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']);
SeattleBranch.render();
console.log(SeattleBranch);
let tokyo = new Seattle ('tokyo', '3', '24', '1.2', ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']);
tokyo.render();
console.log(tokyo);
let dubai = new Seattle ('dubai', '11', '38', '3.7', ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']);
dubai.render();
console.log(dubai); 
let paris = new Seattle ('paris', '20', '38', '2.3', ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']);
paris.render(); 
console.log(paris);
let lima = new Seattle ('lima', '2', '16', '4.6', ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']);
lima.render();
console.log(lima);
let total = new Seattle ('total', '333', '367', '447', '355', '531', '547', '592', '562', '597', '438', '468', '553', '419', '428');
total.render();
console.log(total);

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
