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

function CheckC() {
var x = document.forms['AnsC']['MonoAns'].value;

if (x == "Problems worthy of attack prove their worth by fighting back - Paul Erdos") {
  alert('Well done! You cracked the code!');
}
else {
  alert('Oops! Have another go.');
}
}

function Hint() {
  alert('Hint')
}



$(document).ready(function(){
  $('.toggle').on('click', function() {
    $(this).toggleClass('show-answer hide-answer');
  });
});


</script>
