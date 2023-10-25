
//form Button
    function formButton() {
        var myModal = new bootstrap.Modal(document.getElementById('popupForm'));
        myModal.show();
}


function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }

          function validatePhone() {
            var phone = document.getElementById('phone').value;
            if(phone.length == 0) {
              alert("Phone number can't be blank") ;//Validation Message
              return false;
            }

            if(!phone.match(/^[0]?[789]\d{9}$/)) {
             alert("Please enter a correct phone number") ;//Validation Message
             return false;
           }

           return true;

         }

         function validateEmail () {

          var email = document.getElementById('email').value;
          if(email.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }


        function validateForm() {
          if (!validateName() || !validatePhone() || !validateEmail()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
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
