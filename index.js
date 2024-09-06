const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const popup = document.getElementById("popup");
const eyeIcon = document.getElementById("eyeBtn");
const password = document.getElementById("password");

copyBtn.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");

    // Show the popup
    popup.classList.add("show");

    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
});

eyeIcon.addEventListener("click",()=>{
    if (password.type=="text")
    {
        password.type="password";
        eyeIcon.src="images/eye-close.png"
    }
    else{
        password.type="text";
        eyeIcon.src="images/eye-open.png"
    }
})

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{][></-=";

const allChars = upperCase + lowerCase + number + symbol; 

const buttonClick = document.querySelector(".container button");
buttonClick.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
});
