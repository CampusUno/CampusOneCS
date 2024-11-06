const form = document.querySelector("#form")
const input = document.querySelector("#email")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxzKPZET7DIsqWAQLohCNeGHPHOEfI57Ea-NVp3AkXKTNJ3s9Nz8ZNh3a4aFQkvkrlc/exec'
const width = document.body.clientWidth;
const mobile = 600

// Script to collect email list

form.addEventListener('submit', e => {
    const inputValue = input.value
    submitButton.disabled = true
    submitButton.innerHTML = "Submitting..."

    e.preventDefault()

    if(!inputValue.endsWith("galgotiacollege.edu")){

        submitButton.disabled = false


        if(width<mobile){
            Toastify({
                text: "Please use only your college email ID",
                duration: 3000,
                gravity: "bottom",
                className: "toastify-center",
                style: {
                    background: "linear-gradient(to right, #4D041B, #940432)",
                },
            }).showToast();
        }
        else{
            Toastify({
                text: "Please use only your college email ID",
                duration: 3000,
                gravity: "bottom",
                style: {
                    background: "linear-gradient(to right, #4D041B, #940432)",
                },
            }).showToast();
        }
        

        submitButton.innerHTML = `
                                    Get notified about the launch
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7.5L17 7.5M17 7.5L11 14M17 7.5L11 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>   
                                `
        form.reset();
        return;
    }

    let requestBody = new FormData(form)

    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        submitButton.innerHTML = `
                                    Get notified about the launch
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7.5L17 7.5M17 7.5L11 14M17 7.5L11 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>   
                                `
        if(width<mobile){
            Toastify({
                text: "Congrats! You will be notified soon!",
                duration: 3000,
                className: "toastify-center",
                gravity: "bottom",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        }
        else{
            Toastify({
                text: "Congrats! You will be notified soon!",
                duration: 3000,
                gravity: "bottom",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        }
        
        submitButton.disabled = false
        form.reset();

    })
    .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
        form.reset();
    })
})