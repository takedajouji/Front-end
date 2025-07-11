const form =document.getElementById('signup-form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message=document.getElementById("error-message")

form.addEventListener('submit', (e) =>{
   // e.preventDefault()

   let errors = []

    if(firstname_input){
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value)

    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }
    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === '' || firstname == null){
        erorr.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }

    if(email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password ==='' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if(password.length < 8){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password ==='' || repeatPassword == null){
        errors.push('Password does not match')
        password_input.parentElement.classList.add('incorrect')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

function getLoginFormsErrors(email, password){
    let errors = []
    if(email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password ==='' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allInputs = [firstname_input, password_input, email_input, repeat_password_input]

allInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})