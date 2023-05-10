
function showError(errorElement, errorMessagge){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessagge;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display-error");
    }
}

let form = document.forms['sign-up-form'];
form.onsubmit = function(event){

    clearError();

    if(form.email.value === ""){
        showError("emaill-error", "Masukan email sesuai dengan format yang diminta");
        return false;
    }

    if(form.name.value === ""){
        showError("name-error", "Masukan nama sesuai dengan format yang diminta");
        return false;
    }

    if(form.phone.value === ""){
        showError("phone-error", "Masukan nomor handphone sesuai dengan format yang diminta");
        return false;
    }

    if(form.event.value === ""){
        showError("event-error");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Your registration was successful";


    event.preventDefault();
}