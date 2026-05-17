document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    /*
       Intentionally vulnerable logic
       for WAF testing
    */

    if(username && password) {

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerHTML = "Invalid Login";
    }

});
