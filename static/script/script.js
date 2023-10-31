
//form Button
    function formButton() {
        var myModal = new bootstrap.Modal(document.getElementById('popupForm'));
        myModal.show();
}


//script Url-->
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz7CwSFzgm3QvF_aXROJl3B1FkKe6VT5Mx0OSYu7n3ubBmiF84SHc7m1JtBZktKAsE71w/exec'
  const form = document.forms['submitsheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        alert("Form submitted");
        form.reset();
    })
      .catch(error => {
        console.error('Error!', error.message)
            })
  });

//form clear button
  function  clearForm() {
    document.getElementById("a_form").reset();
    }
