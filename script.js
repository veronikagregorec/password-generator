function go() {
    var length = document.getElementById("field").value;
    var write = document.getElementById("copy");
    var password = "";
    var letters = "abcdefghijklmnoprstuvzABCDEFGHIJKLMNOPRSTUVZ0123456789!?#$%&/()\|[]@{}";
    for (var x = 0; x <= 6; x++) {
        for (var i = 0; i < length; i++) {
            password += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        password = password + "<br>";
        write.innerHTML = password;
    }
}