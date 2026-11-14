const scriptURL = 'https://script.google.com/macros/s/AKfycbx8G2Ni-v9d3dLnOY4W1rGx6JmiXDvgzWpmUpsiTAaGrTiTAMSxKZoX03wGUIObc9RjZg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})