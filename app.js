'use strict';

let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

const parentElement = document.getElementById('cookie-stand');
    const tableElement = document.getElementById('Table');
    const cookiesForm = document.getElementById('cookiesForm'); 

    function location(name, min, max, avgSale) {
      this.name = name;
      this.min = min;
      this.max = max;
      this.avgSale = avgSale;
      this.cookiesNumber = [];
      this.customerNumber = [];
      this.Total = 0;
      location.allLocations.push(this);
    }

    location.allLocations = [];

    location.prototype.getNumber = function () {
      for (let i = 0; i < Hours.length; i++) {
        let custNumber = randomCustNumber(this.min, this.max);
        let cookieNumber = Math.ceil((custNumber) * this.avgSale);
        this.Total += cookieNumber;
        this.cookiesNumber.push(cookieNumber);
        this.customerNumber.push(custNumber);
      }

      console.log(this.cookiesNumber, this.Total);

    };

    location.prototype.render = function () {

      const tableElement = document.getElementById('table');
      parentElement.appendChild(tableElement);

      const tr = document.createElement('tr');
      tableElement.appendChild(tr);

      const td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = `${this.name}`;

      for (let i = 0; i < Hours.length; i++) {
        const tContent = document.createElement('td');
        tr.appendChild(tContent);
        tContent.textContent = `${this.cookiesNumber[i]}`;
      }
      const td1 = document.createElement('td');
      tr.appendChild(td1);
      td1.textContent = `${this.Total}`;
    }



    function heading() {

      let trElement = document.createElement('tr');
      table.appendChild(trElement);
      let thElement = document.createElement('th');
      thElement.textContent = ' ';

      trElement.appendChild(thElement);

      for (let i = 0; i < Hours.length; i++) {

        let thElement = document.createElement('th');
        trElement.appendChild(thElement);
        thElement.textContent = Hours[i];
      }
      let th1Element = document.createElement('th');
      trElement.appendChild(th1Element);
      th1Element.textContent = 'Day Total ';
    }

    function footer() {
      const tableElement = document.getElementById('table');
      let trfoot = document.createElement('tr');
      tableElement.appendChild(trfoot);
      let thElement = document.createElement('th');
      trfoot.appendChild(thElement);
      thElement.textContent = 'Total';

      let totalTotal;
      for (let i = 0; i < Hours.length; i++) {
        let total = 0
        totalTotal = 0
        for (let j = 0; j < location.allLocations.length; j++) {
          console.log(location.allLocations[j], 'inhour', i);
          total += location.allLocations[j].cookiesNumber[i];
          totalTotal += location.allLocations[j].Total;
        }
        let thElement = document.createElement('th');
        trfoot.appendChild(thElement);
        thElement.textContent = total;
      }

      let th1 = document.createElement('th');
      trfoot.appendChild(th1);
      th1.textContent = totalTotal;
    }



    function randomCustNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


    heading();

    let Seattle = new location('Seattle', 23, 65, 6.3);
    Seattle.getNumber();
    Seattle.render();

    let Tokyo = new location('tokyo', 3, 24, 1.2);
    Tokyo.getNumber();
    Tokyo.render();

    let Dubai = new location('Dubai', 11, 38, 3.7);
    Dubai.getNumber();
    Dubai.render();

    let Paris = new location('Paris', 20, 38, 2.3);
    Paris.getNumber();
    Paris.render();

    let Lima = new location('Lima', 2, 16, 4.6);
    Lima.getNumber();
    Lima.render();



    footer();



    /*const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;*/
  

cookiesForm.addEventListener('submit', eventButton)

function eventButton(event) {

  event.preventDefault(); 


  const name = event.target.name.value;
  const min = event.target.minCust.value;
  const max = event.target.maxCust.value;
  const avgSales = event.target.avgSales.value;



  let Location = new branch =  (name, min, max, avgSales);

  tableElement.deleteRow(numOfRow - 1);

  newLocation.getNumber();

  newLocation.render();

  cookiesForm.reset();


  console.footer(name, min, max, avgSales);

}
/*let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgSale: 6.3,
  cookiesNumber: [],
  customerNumber: [],
  Total: 0,

  getNumber: function () {
    for (let i = 0; i < Hours.length; i++) {
      let custNumber = randomCustNumber(this.min, this.max);
      let cookieNumber = Math.ceil((custNumber) * this.avgSale);


      console.log(custNumber);

      console.log(cookieNumber);
      this.cookiesNumber.push(cookieNumber);
      this.Total += cookieNumber;
      this.customerNumber.push(custNumber);
    }
  },


  render: function () {

    const parentElement = document.getElementById('cookie-stand');
    const tableElement = document.getElementById('Table');
    const cookiesForm = document.getElementById('cookiesForm');

    function location(name, min, max, avgSale) {
      this.name = name;
      this.min = min;
      this.max = max;
      this.avgSale = avgSale;
      this.cookiesNumber = [];
      this.customerNumber = [];
      this.Total = 0;
      location.allLocations.push(this);
    }

    location.allLocations = [];


    location.prototype.getNumber = function () {
      for (let i = 0; i < Hours.length; i++) {
        let custNumber = randomCustNumber(this.min, this.max);
        let cookieNumber = Math.ceil((custNumber) * this.avgSale);
        this.Total += cookieNumber;
        this.cookiesNumber.push(cookieNumber);
        this.customerNumber.push(custNumber);
      }


      console.log(this.cookiesNumber, this.Total);


    };

    location.prototype.render = function () {

      const tableElement = document.getElementById('table');
      parentElement.appendChild(tableElement);

      const tr = document.createElement('tr');
      tableElement.appendChild(tr);

      const td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = `${this.name}`;

      for (let i = 0; i < Hours.length; i++) {
        const tContent = document.createElement('td');
        tr.appendChild(tContent);
        tContent.textContent = `${this.cookiesNumber[i]}`;
      }
      const td1 = document.createElement('td');
      tr.appendChild(td1);
      td1.textContent = `${this.Total}`;
    }



    function heading() {

      let trElement = document.createElement('tr');
      table.appendChild(trElement);
      let thElement = document.createElement('th');
      thElement.textContent = ' ';

      trElement.appendChild(thElement);

      for (let i = 0; i < Hours.length; i++) {

        let thElement = document.createElement('th');
        trElement.appendChild(thElement);
        thElement.textContent = Hours[i];
      }
      let th1Element = document.createElement('th');
      trElement.appendChild(th1Element);
      th1Element.textContent = 'Day Total ';
    }

    function footer() {
      const tableElement = document.getElementById('table');
      let trfoot = document.createElement('tr');
      tableElement.appendChild(trfoot);
      let thElement = document.createElement('th');
      trfoot.appendChild(thElement);
      thElement.textContent = 'Total';

      let totalTotal;
      for (let i = 0; i < Hours.length; i++) {
        let total = 0
        totalTotal = 0
        for (let j = 0; j < location.allLocations.length; j++) {
          console.log(location.allLocations[j], 'inhour', i);
          total += location.allLocations[j].cookiesNumber[i];
          totalTotal += location.allLocations[j].Total;
        }
        let thElement = document.createElement('th');
        trfoot.appendChild(thElement);
        thElement.textContent = total;
      }

      let th1 = document.createElement('th');
      trfoot.appendChild(th1);
      th1.textContent = totalTotal;
    }



    function randomCustNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


    heading();

    let Seattle = new location('Seattle', 23, 65, 6.3);
    Seattle.getNumber();
    Seattle.render();

    let Tokyo = new location('tokyo', 3, 24, 1.2);
    Tokyo.getNumber();
    Tokyo.render();

    let Dubai = new location('Dubai', 11, 38, 3.7);
    Dubai.getNumber();
    Dubai.render();

    let Paris = new location('Paris', 20, 38, 2.3);
    Paris.getNumber();
    Paris.render();

    let Lima = new location('Lima', 2, 16, 4.6);
    Lima.getNumber();
    Lima.render();



    footer();







    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;
  }


};


let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgSale: 1.2,
  cookiesNumber: [],
  customerNumber: [],
  Total: 0,
  getNumber: function () {
    for (let i = 0; i < Hours.length; i++) {
      let custNumber = randomCustNumber(this.min, this.max);
      let cookieNumber = Math.ceil(custNumber * (this.avgSale));

      console.log(custNumber);

      console.log(cookieNumber);
      this.cookiesNumber.push(cookieNumber);
      this.Total += cookieNumber;
      this.customerNumber.push(custNumber);
    }
  },

  render: function () {
    const parentElement = document.getElementById('cookie-stand');



    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;
  }

};



let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgSale: 3.7,
  cookiesNumber: [],
  customerNumber: [],
  Total: 0,

  getNumber: function () {

    for (let i = 0; i < Hours.length; i++) {
      let custNumber = randomCustNumber(this.min, this.max);
      let cookieNumber = Math.ceil((custNumber) * this.avgSale);

      console.log(cookieNumber);
      this.cookiesNumber.push(cookieNumber);
      this.Total += cookieNumber;
      this.customerNumber.push(custNumber);
    }
  },



  render: function () {

    const parentElement = document.getElementById('cookie-stand');


    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;
  }


};



let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgSale: 2.3,
  cookiesNumber: [],
  customerNumber: [],
  Total: 0,

  getNumber: function () {

    for (let i = 0; i < Hours.length; i++) {
      let custNumber = randomCustNumber(this.min, this.max);
      let cookieNumber = Math.ceil((custNumber) * this.avgSale);

      console.log(cookieNumber);
      this.cookiesNumber.push(cookieNumber);
      this.Total += cookieNumber;
      this.customerNumber.push(custNumber);
    }
  },

  render: function () {

    const parentElement = document.getElementById('cookie-stand');


    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;
  }

};



let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avgSale: 4.6,
  cookiesNumber: [],
  customerNumber: [],
  Total: 0,

  getNumber: function () {

    for (let i = 0; i < Hours.length; i++) {
      let custNumber = randomCustNumber(this.min, this.max);
      let cookieNumber = Math.ceil((custNumber) * this.avgSale);


      console.log(cookieNumber);
      this.cookiesNumber.push(cookieNumber);
      this.Total += cookieNumber;
      this.customerNumber.push(custNumber);
    }
  },


  render: function () {
    const parentElement = document.getElementById('cookie-stand');


    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < Hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${Hours[i]}: ${this.cookiesNumber[i]} cookies`;


    }
    const li2Element = document.createElement('li');
    ulElement.appendChild(li2Element);
    li2Element.textContent = `Total: ${this.Total} cookies`;
  }

};


function randomCustNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


Seattle.getNumber();
Seattle.render();
Tokyo.getNumber();
Tokyo.render();
Dubai.getNumber();
Dubai.render();
Paris.getNumber();
Paris.render();
Lima.getNumber();
Lima.render();


cookiesForm.addEventListener('submit', eventButton)

function eventButton(event) {

  event.preventDefault(); 

  console.log(event);

  const name = event.target.name.value;
  const min = event.target.minCust.value;
  const max = event.target.maxCust.value;
  const avgSales = event.target.avgSales.value;



  let Table = new cookiesForm (name, min, max, avgSales);

  cookiesForm.getNumber();

  cookiesForm.render();

  tableElement.reset();


  console.table(name, min, max, avgSales);

}*/
