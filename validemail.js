function Valid_Email() {
    var output = document.getElementById("input").value;
    if (output == "") {
        alert("enter your Email please")
        return false;
    }
    if ((output.indexOf('@') <= 0)) {
        document.getElementById("message").innerHTML = "Invalid Email";
        document.getElementById("message").style.color = 'red';
        return false;
    }
    // if( ((output.indexOf('#') <= 0))&& ((output.indexOf('-') <= 0))&& ((output.indexOf('_') <= 0))&& ((output.indexOf('+') <= 0))){
    //     document.getElementById("message").innerHTML = "Invalid Email";
    //     document.getElementById("message").style.color = 'red';
    //     return false;
    // }

    if ((output.charAt(output.length - 4) != '.') && (output.charAt(output.length - 3) != '.')) {
        document.getElementById("message").innerHTML = "Invalid Email";
        document.getElementById("message").style.color = 'red';
        return false;
    }

   

    else {
        document.getElementById("message").innerHTML = "Valid Email"
        document.getElementById("message").style.color = 'green';
    }
}