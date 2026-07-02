function calculateBill() {

    let customer = document.getElementById("customer").value.trim();
    let units = parseFloat(document.getElementById("units").value);

    let result = document.getElementById("billResult");

    // Validation
    if (customer === "" || isNaN(units) || units < 0) {
        result.innerHTML = `
            <h2>⚠️ Error</h2>
            <p>Please enter a valid customer name and units consumed.</p>
        `;
        return;
    }

    let rate = 0;

    // Rate Calculation
    if (units <= 100) {
        rate = 1.5;
    }
    else if (units <= 200) {
        rate = 2.5;
    }
    else if (units <= 300) {
        rate = 4.0;
    }
    else {
        rate = 6.0;
    }

    let totalBill = units * rate;

    result.innerHTML = `
        <h2>🧾 Bill Details</h2>

        <p><strong>👤 Customer:</strong> ${customer}</p>

        <p><strong>🔢 Units Consumed:</strong> ${units}</p>

        <p><strong>💰 Rate Per Unit:</strong> ₹${rate}</p>

        <p><strong>⚡ Total Bill:</strong> ₹${totalBill.toFixed(2)}</p>
    `;
}

function resetForm() {

    document.getElementById("customer").value = "";
    document.getElementById("units").value = "";

    document.getElementById("billResult").innerHTML = `
        <h2>Your Bill Details</h2>
        <p>Fill the details and click "Calculate Bill".</p>
    `;
}