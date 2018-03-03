<script>

function CheckC() {
var x = document.forms['AnsC']['CaesAns'].value;

if (x == 'I will wait for you at the bridge') {
  alert('Well done! You cracked the code!');
}
else {
  alert('Oops! Try again');
}
}



$(document).ready(function(){
  $('.toggle').on('click', function() {
    $(this).toggleClass('show-answer hide-answer');
  });
});


</script>
