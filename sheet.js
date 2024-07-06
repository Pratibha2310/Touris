
const scriptURL = 'https://script.google.com/macros/s/AKfycbxyIvuOEvkhFKZHjm_tDHUV-aeqaBV2ldrQyxalX2KS1pGhI-DyfkCvEP1rdg-NfJ9jwA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! you will be notified  shortly" ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
