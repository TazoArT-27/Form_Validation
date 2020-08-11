let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener("blur", function(){
    //console.log("name is blurred");
    let regex = /^[a-z A-Z]([0-9 a-z A-Z]){3,15}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your name is valid");
        name.classList.remove("is-invalid");
        validUser = true;
    }else{
        console.log("Your name is not valid");
        name.classList.add("is-invalid");
        validUser = false;
    }
})
email.addEventListener("blur", function(){
    //console.log("email is blurred");
    let regex = /^([a-z A-Z 0-9 _ . \-\ $]+)@([a-z A-Z 0-9 _ . \-\ $]+)\.([a-z A-Z]){2,20}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
        validEmail = true;
    }else{
        console.log("Your email is not valid");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})
phone.addEventListener("blur", function(){
    //console.log("phone is blurred");
    let regex = /^([0-9]){11,13}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
        validPhone = true;
    }else{
        console.log("Your phone is not valid");
        phone.classList.add("is-invalid");
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault();

    console.log(validUser, validEmail, validPhone)

    if(validEmail && validPhone && validUser){
        console.log("All are valid");
        let success = document.getElementById("success");
        //let failure = document.getElementById("failure");
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();
    }else{
        console.log("FAILED");
        //let success = document.getElementById("success");
        let failure = document.getElementById("failure");
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
    

})
