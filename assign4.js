function compLocale() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var compValue = input1.localeCompare(input2);
    var output1;

    if (compValue == 0) {
        output1 = "Both Stings Are Equal";
    }
    else {
        output1 = "Both Strings Are Unequal";
    }
    document.getElementById("output1").innerHTML = output1;
}

function compEqEq() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var l31 = parseInt(input1.length);
    var l32 = parseInt(input2.length);
    var output31;
    var output32;
    if (l31 == l32) {
        output31 = "Both Stings Of Same Length";
        if (input1 == input2) {
            output32 = "Both Strings Are Equal";
        }
        else {
            output32 = "Both Strings Are Unequal";
        }
    }
    else {
        output31 = "Both Strings Are Of Unequal Length";
        output32 = " ";
    }
    document.getElementById("output2").innerHTML = output31;
    document.getElementById("output3").innerHTML = output32;
}

function compEqEqEq() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var output4;
    if (input1 === input2) {
        output4 = "Both Stings Are Equal";
    }
    else {
        output4 = "Both Strings Are Unequal";
    }
    document.getElementById("output4").innerHTML = output4;
}

function customStringComparison() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var output5;

    // Implement custom string comparison logic here
    if (input1.length !== input2.length) {
        output5 = "Both Strings Are of Different Lengths";
    } else if(input1.length == input2.length){
        // You can add your custom comparison logic here
        var areEqual = true;
        for (var i = 0; i < input1.length; i++) {
            if (input1[i] !== input2[i]) {
                areEqual = false;
                break;
            }
        }

        if (areEqual) {
            output5 = "Both Strings Are Equal";
        } else {
            output5 = "Both Strings Are Unequal";
        }
    }

    document.getElementById("output5").innerHTML = output5;
}
