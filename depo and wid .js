function dep() {

    const enteramount = document.getElementById("damount");
     const acctno = document.getElementById("daccno");
     const dresult = document.getElementById("dresult");

     let deposamt = parseFloat(enteramount.value);//parseFloat change to number
     let depoacct = acctno.value.trim();

     //getting the same amount


     if (!localStorage.getItem(deposamt)) {

        alert('invalid number')
        
     }

     if (isNaN(deposamt) || deposamt<=0 ) { //isNaN not a number

        alert("enter valid number")
        
     }

     let currentbalance = parseFloat(localStorage.getItem(deposamt)) || 0.00;

     if (isNaN(currentbalance)) {

        alert("error in data")
        
     }


// storing amount updated amt

let updateBalance = currentbalance + deposamt;

localStorage.setItem(depoacct,updateBalance.toFixed(2));

alert(`deposit successful Current balance: $${updateBalance.toFixed (2)}`);


dresult.innerHTML = `Current balance: $${updateBalance.toFixed(2)}`;

}


function wid() {
    const widamount = document.getElementById("wamount");
    const widacc = document.getElementById("waccno");
    const wresult = document.getElementById("wresult");

    let widddamount = parseFloat(widamount.value);
    let widdacc = widacc.value.trim();

    // entering crrct wid

    if (isNaN(widamount) || widamount <= 0) {

        alert("please enter valid amout");
        
    }

    let currentBalance = localStorage.getItem(widdacc);

    if (!currentBalance) {

        alert('invalid account')
        
    }

    currentBalance = parseFloat(currentBalance);

    if (isNaN(currentBalance)) {

        alert('error with amout balance')
        
    }

    // insufficient amount check

    if (widamount > currentBalance) {

        alert('insuficient funds');
        
    }

    // showing balance after widdrw

    let updateBalance = currentBalance - widddamount;

    localStorage.setItem(widacc, updateBalance.toFixed(2));

    alert(`new balance:$${updateBalance.toFixed(2)}`);

    wresult.innerHTML = `new balance: $${updateBalance.toFixed(2)}`

    
}