function displayMultiplicationTable() {
    const numberInput = document.getElementById("numberInput").value;
    if (numberInput === "") {
        document.getElementById("forLoopTable").innerHTML = "No input provided.";
        document.getElementById("whileLoopTable").innerHTML = "No input provided.";
        document.getElementById("doWhileLoopTable").innerHTML = "No input provided.";
        return;
    }
    const number = parseInt(numberInput);

    document.getElementById("forLoopTable").innerHTML = "";
    document.getElementById("whileLoopTable").innerHTML = "";
    document.getElementById("doWhileLoopTable").innerHTML = "";

    let forLoopTableHTML = "<table>";
    for (let i = 1; i <= 10; i++) {
        forLoopTableHTML +=
            `<tr><td>${number}</td><td>*</td><td>${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    forLoopTableHTML += "</table>";
    document.getElementById("forLoopTable").innerHTML = forLoopTableHTML;
}

function displayMultiplicationTablewhile() {
    const numberInput = document.getElementById("numberInput1").value;
    const number = parseInt(numberInput);

    let whileLoopTableHTML = "<table>";
    let j = 1;
    while (j <= 10) {
        whileLoopTableHTML +=
            `<tr> <td>${number}</td>  <td> *</td>  <td>${j}</td> <td> = </td> <td>${number * j}</td> </tr>`;
        j++;
    }
    whileLoopTableHTML += "</table>";
    document.getElementById("whileLoopTable").innerHTML = whileLoopTableHTML;
}

function displayMultiplicationTabledowhile() {
    const numberInput = document.getElementById("numberInput2").value;
    const number = parseInt(numberInput);

    let doWhileLoopTableHTML = "<table>";
    let k = 1;
    do {
        doWhileLoopTableHTML +=
            `<tr><td>${number}</td><td>*</td><td>${k}</td><td>=</td><td>${number * k}</td></tr>`;
        k++;
    } while (k <= 10);
    doWhileLoopTableHTML += "</table>";
    document.getElementById("doWhileLoopTable").innerHTML = doWhileLoopTableHTML;
}
