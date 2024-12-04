const scriptURL = 'https://script.google.com/macros/s/AKfycbzGOuL3PRlqEBm0YdEc88N8BtCh3Ix3c3c2NHL6BN9xfcN796sXBDuaAwVl0jSnttOKhw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})