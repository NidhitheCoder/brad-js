document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

// load single customer
function loadCustomer(e) {
const xhr = new XMLHttpRequest();

xhr.open ('GET','60_customer.json',true);

xhr.onload = function() {
    if(this.status === 200 ) {
// console.log(this.responseText);
const customer = JSON.parse(this.responseText);

const output = `
<ul>
<li>ID : ${customer.id}</li>
<li>Name : ${customer.name} </li>
<li>Company : ${customer.compay}</li>
<li>Phone : ${customer.phone}</li>
`;
document.getElementById('customer').innerHTML = output;
    }
}
xhr.send();
}

// load multiple customer
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET",'60_customers.json',true);
    xhr.onload =  function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = "";
            customers.forEach(function(customer) {
                output +=`
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
                `
            });
            document.getElementById('customers').innerHTML = output;
        }
        
    }
    xhr.send();
}