document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    const regName = document.getElementById("name");
    const regNameFalse = document.getElementById("regNick");
    const regPass = document.getElementById("password");
    const regPassFalse = document.getElementById("regPass");
    const regPassConf = document.getElementById("confPassword");
    const regPassConfFalse = document.getElementById("regPassConf");
    const regEmail = document.getElementById("email");
    const regEmailFalse = document.getElementById("regMail");
    const regLoc = document.getElementById("location");
    const regLocFalse = document.getElementById("regCity");
    const locArray = ["Warszawa","Kraków","Wrocław","Poznań"];
    const regCheck = document.getElementById("test2");
    const regCheckFalse = document.getElementById("regCheck");
    const regSubmit = document.getElementById("regSub");

    regName.addEventListener("keypress", () => {
       regNameFalse.style.display = "none";
    });

    regPass.addEventListener("keypress", () => {
        regPassFalse.style.display = "none";
    });

    regPassConf.addEventListener("keypress", () => {
        regPassConfFalse.style.display = "none";
    });

    regEmail.addEventListener("keypress", () => {
       regEmailFalse.style.display = "none";
    });

    regLoc.addEventListener("focusin",() => {
       regLocFalse.style.display = "none";
    });

    regCheck.addEventListener("change",() => {
        regCheckFalse.style.display = "none";
    });


    regSubmit.addEventListener("click", checkForm);

    function checkForm(e) {
        let stop = false;

        if (regName.value.length === 0){
            regNameFalse.style.display = "block";
            stop = true;
        }

        if (regPass.value.length === 0){
            regPassFalse.style.display = "block";
            stop = true;
        }

        if (regPassConf.value.length === 0 || regPassConf.value !== regPass.value){
            regPassConfFalse.style.display = "block";
            stop = true;
        }

        if (regEmail.value.length === 0 || regEmail.value.indexOf("@") < 1){
            regEmailFalse.style.display = "block";
            stop = true;
        }

        if (locArray.indexOf(regLoc.value) < 0){
            regLocFalse.style.display = "block";
            stop = true;
        }

        if (regCheck.checked === false){
            regCheckFalse.style.display = "block";
            stop = true;
        }


        if (stop === true) {
            e.preventDefault();
        }
    }
});