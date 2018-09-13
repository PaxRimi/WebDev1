document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // First form validation
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

    //Second form validation
    const mailName = document.getElementById("name2");
    const mailNameFalse = document.getElementById("mailName");
    const mailMail = document.getElementById("email2");
    const mailMailFalse = document.getElementById("mailMail");
    const mailTxT = document.getElementById("mailMessage");
    const mailTxTFalse = document.getElementById("mailTxT");

    const mailSubmit = document.getElementById("mailSub");


    mailName.addEventListener("keypress", () => {
       mailNameFalse.style.display = "none";
    });

    mailMail.addEventListener("keypress", () => {
        mailMailFalse.style.display = "none";
    });

    mailTxT.addEventListener("keypress", () => {
        mailTxTFalse.style.display = "none";
    });

    mailSubmit.addEventListener("click", checkMailForm);


    function checkMailForm(e){
        let stop = false;

        if(mailName.value.length === 0){
            mailNameFalse.style.display = "block";
            stop = true;
        }

        if (mailMail.value.length === 0 || mailMail.value.indexOf("@") < 1){
            mailMailFalse.style.display = "block";
            stop = true;
        }

        if (mailTxT.value.length === 0){
            mailTxTFalse.style.display = "block";
            stop = true;
        }

        if (stop === true){
            e.preventDefault();
        }
    }

    //Third form validation
    
    const signNick = document.getElementById("name3");
    const signNickFalse = document.getElementById("signNick");
    const signPass = document.getElementById("password2");
    const signPassFalse = document.getElementById("signPassword");
    
    
    const signSubmit = document.getElementById("signSub");

    signNick.addEventListener("keypress", () => {
       signNickFalse.style.display = "none";
    });

    signPass.addEventListener("keypress", () => {
        signPassFalse.style.display = "none";
    });
    
    signSubmit.addEventListener("click", checkSignForm);
    
    function checkSignForm(e) {
        let stop = false;

        if(signNick.value.length === 0){
            signNickFalse.style.display = "block";
            stop = true;
        }

        if(signPass.value.length === 0){
            signPassFalse.style.display = "block";
            stop = true;
        }

        if( stop === true ){
            e.preventDefault();
        }
    }

    // Fourth form validation

    const recMail = document.getElementById("email3");
    const recMailFalse = document.getElementById("recMail");
    const recPhone = document.getElementById("phone");
    const recPhoneFalse = document.getElementById("recPhone");


    const recSubmit = document.getElementById("recSub");

    recMail.addEventListener("keypress", () => {
       recMailFalse.style.display = "none";
    });

    recPhone.addEventListener("keypress", () => {
        recPhoneFalse.style.display = "none";
    });

    recSubmit.addEventListener("click", checkRecForm);

    function checkRecForm(e) {
        let stop = false;

        if(recMail.value.length === 0 || recMail.value.indexOf("@") < 1 || recMail.value.lastIndexOf(".") < recMail.value.lastIndexOf("@")){
            recMailFalse.style.display = "block";
            stop = true;
        }

        if(recPhone.value.length < 9){
            recPhoneFalse.style.display = "block";
            stop = true;
        }

        if(stop === true){
            e.preventDefault();
        }
    }

    //Fifth form validation

    const subMail = document.getElementById("email4");
    const subMailFalse = document.getElementById("subMail");

    const subSubmit = document.getElementById("subSub");

    subMail.addEventListener("keypress", () => {
        subMailFalse.style.display = "none";
    });


    subSubmit.addEventListener("click", checkSubForm);

    function checkSubForm(e) {
        let stop = false;

        if(subMail.value.length === 0 || subMail.value.indexOf("@") < 1 || subMail.value.lastIndexOf(".") < subMail.value.lastIndexOf("@")) {
            subMailFalse.style.display = "block";
            stop = true;
        }

        if(stop === true){
            e.preventDefault();
        }
    }
});