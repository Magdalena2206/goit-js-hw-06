const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', formSubmit)

const formSubmit = placeholder => {
    placeholder.preventDefault()
    const {
        elements: { email, password },
    } = placeholder.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Wypełnij wszystkie pola!')
    }
    const userEl = { email: email.value, Password: password.value }
    
    console.log(userEl)
    placeholder.currentTarget.reset()
}


