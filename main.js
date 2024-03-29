// Initial values
let b = 50;
let v = 33;

function calculateTotal() {
    const bordInput = parseInt(document.getElementById("bordInput").value);
    const vordInput = parseInt(document.getElementById("vordInput").value);
    
    let errorMessage = '';

    if (bordInput > b) {
        errorMessage += 'Entered amount exceeds the amount of Hot-Cross buns available.\n';
    } else {
        b -= bordInput;
    }

    if (vordInput > v) {
        errorMessage += 'Entered amount exceeds the amount of Vadas available.\n';
    } else {
        v -= vordInput;
    }

    if (errorMessage !== '') {
        alert(errorMessage);
        return; // Stop further execution if there's an error
    }
    
    const total = (bordInput * 60) + (vordInput * 50);
    document.getElementById("totalAmount").innerHTML = "<b>Your Total is: " + total + "</b>";
    
    document.getElementById("orderSection").style.display = "none";
    document.getElementById("paymentSection").style.display = "block";
}

function proceedToNext() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    
    if (paymentMethod === "cash") {
        document.getElementById("paymentSection").style.display = "none";
        document.getElementById("cashPaymentSection").style.display = "block";
    } else {
        resetOrder();
    }
}

function calculateBalance() {
    const total = parseInt(document.getElementById("totalAmount").textContent.split(":")[1]);
    const amountReceived = parseInt(document.getElementById("amountReceived").value);
    const balance = amountReceived - total;
    alert("Balance: " + balance);
    
    document.getElementById("cashPaymentSection").style.display = "none";
    document.getElementById("newOrderButton").style.display = "block";
}

function resetOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("cashPaymentSection").style.display = "none";
    document.getElementById("newOrderButton").style.display = "none";
    document.getElementById("bordInput").value = "";
    document.getElementById("vordInput").value = "";
    document.getElementById("amountReceived").value = "";
    
    // Update remaining buns and vadas
    document.getElementById("buns").textContent = b;
    document.getElementById("vadas").textContent = v;
}
