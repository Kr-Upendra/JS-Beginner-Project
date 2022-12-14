const bill = document.getElementById("billAmount");
const tip = document.getElementById("tipAmount");
const result = document.getElementById("result");
const numberOfPeople = document.getElementById("noOfPeople");

let peoples = Number(numberOfPeople.innerText);

const calculateBill = () => {
     const billAmount = Number(bill.value);
     const tipAmount = Number(tip.value) / 100;
     const tipBill = billAmount * tipAmount;
     const totalBill = billAmount + tipBill;
     const total = totalBill / peoples;

     result.innerText = `$${total.toFixed(2)}`;
};

const increasePeople = () => {
     peoples += 1;
     numberOfPeople.innerText = peoples;
     calculateBill();
};

const decreasePeople = () => {
     if (peoples <= 1) return;
     peoples -= 1;
     numberOfPeople.innerText = peoples;
     calculateBill();
};
