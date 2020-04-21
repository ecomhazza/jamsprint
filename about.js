function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function checkTextArea() {
  if($('#comments').val() == '') {
    alert("Comments is blank!");
    return false;
  } else {
    return true;
  }
}

$('#submit').click(() => {
  if(ValidateEmail($('#email').val())) {
    if(checkTextArea()){
      $('.modal').show();
      $('#comments').val('');
    }
  }
})

$('#email, #comments').keyup((key) => {
  if(key.keyCode ==13) {
    $('#submit').click();
  }
})

  var modal = document.getElementById("myModal");
  $(window).click((e) => {
    if(e.target == modal) {
      modal.style.display = "none";
    }
  })