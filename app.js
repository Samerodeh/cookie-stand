'use strict';

//let hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let parentElement = document.getElementById('Salmoncookiesstand');
//let ulElement = document.createElement('ul')
//parentElement(ulElement); 

/*function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  } */

 /* let totalCookies = []; 
  let Cookies = { 

    location : location, 
    mincust : mincust, 
    maxcust : maxcust, 
    avrpersales : avrpersales, 
    rancust : [], 
    totalPerLocation : 0, 
    cookiesPerHour : [], */

 // }

  //let seattle = Cookies('seattle', 23, 65, 6.3); 
  //let tokyo = Cookies('tokyo', 3, 24, 1.2); 
  //let dubai = Cookies('dubai', 11, 38, 3.7); 
  //let paris = Cookies('paris', 20, 38, 2.3); 
  //let lima = Cookies('lima', 2, 16, 4.6); 

let seattle = {
  name: 'seattle',
  mincust: 23,
  maxcust: 65,
  avrpersales : 6.3, 
  rancust : [], 
  totalPerLocation : 0,
  cookiesPerHour : [],
  
  getNumbers: function(min, max) {
    this.numbers = RandomNumber(min, max);
  }, 
  render: function() {
    const parentElement = document.getElementById('Salmoncookiesstand');
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement); 

    
    const liElement = document.createElement('li');
    h2Element.textContent = this.name;
    articleElement.appendChild(liElement);

    /*const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement) */

    for(let i = 0; i < this.hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.likes[i];
      ulElement.appendChild(liElement);
    }
  
    /*const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
    imgEle.src = this.img;
    articleElement.appendChild(imgEle);*/
  }
}

let tokyo = {
    name: 'seattle',
    mincust: 3,
    maxcust: 24,
    avrpersales : 1.2, 
    rancust : [], 
    totalPerLocation : 0,
    cookiesPerHour : [],
    
    getNumbers: function(min, max) {
      this.numbers = RandomNumber(min, max);
    }, 
    render: function() {
      const parentElement = document.getElementById('Salmoncookiesstand');
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement); 

    
    const liElement = document.createElement('li');
    h2Element.textContent = this.name;
    articleElement.appendChild(liElement);

    /*const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;*/

    // const ulElement = document.createElement('ul');
   // articleElement.appendChild(ulElement)

    for(let i = 0; i < this.hours.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = this.likes[i];
        ulElement.appendChild(liElement);
      }

    //const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
   // imgEle.src = this.img;
    //articleElement.appendChild(imgEle);
  }
}

let dubai = {
  name: 'dubai',
  mincust: 11,
    maxcust: 38,
    avrpersales : 3.7, 
    rancust : [], 
    totalPerLocation : 0,
    cookiesPerHour : [],
    
    getNumbers: function(min, max) {
      this.numbers = RandomNumber(min, max);
    }, 
    render: function() {
      const parentElement = document.getElementById('Salmoncookiesstand');
    // console.log(parentElement);

    // Create a new element
    // add the text to the new element
    // append the new element to the parent element

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement); 

    
    const liElement = document.createElement('li');
    h2Element.textContent = this.name;
    articleElement.appendChild(liElement);

   /* const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement)*/

    for(let i = 0; i < this.hours.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = this.likes[i];
        ulElement.appendChild(liElement);
      }

   /* const imgEle = document.createElement('img');
    // imgEle.setAttribute('src', this.img);
    imgEle.src = this.img;
    articleElement.appendChild(imgEle);*/
  }
}

let paris = {
    name: 'paris',
    mincust: 20,
      maxcust: 38,
      avrpersales : 2.3, 
      rancust : [], 
      totalPerLocation : 0,
      cookiesPerHour : [],
      
      getNumbers: function(min, max) {
        this.numbers = RandomNumber(min, max);
      }, 
      render: function() {
        const parentElement = document.getElementById('Salmoncookiesstand'); 

        const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement); 

    
    const liElement = document.createElement('li');
    h2Element.textContent = this.name;
    articleElement.appendChild(liElement); 

    for(let i = 0; i < this.hours.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = this.likes[i];
        ulElement.appendChild(liElement);
      } 
     } 
    }  

    let lima = {
        name: 'lima',
        mincust: 2,
          maxcust: 16,
          avrpersales : 4.6, 
          rancust : [], 
          totalPerLocation : 0,
          cookiesPerHour : [],
          
          getNumbers: function(min, max) {
            this.numbers = RandomNumber(min, max);
          }, 
          render: function() {
            const parentElement = document.getElementById('Salmoncookiesstand'); 
    
            const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement); 
    
        
        const liElement = document.createElement('li');
        h2Element.textContent = this.name;
        articleElement.appendChild(liElement); 
    
        for(let i = 0; i < this.hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = this.likes[i];
            ulElement.appendChild(liElement);
          } 
         } 
        }  
    






seattle.getNumbers(23, 65);
seattle.render();
console.log(seattle);

tokyo.getNumbers(3, 24);
tokyo.render();
console.log(tokyo);

dubai.getNumbers(11, 38);
dubai.render();
console.log(dubai);

paris.getNumbers(20, 38);
paris.render();
console.log(paris);

lima.getNumbers(2, 16);
lima.render();
console.log(lima);



// console.log(this);*/

// General helper function


function RandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(RandomNumber(23, 65)); 
