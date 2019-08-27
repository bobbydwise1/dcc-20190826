/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
*/



$(document).ready(function() {
  let value1;
  let value2;
  $('#form1').submit(function(event){
    event.preventDefault()
    value1 = $('#input-section-0').val();
    console.log(value1)
    value1.replace(/'/g,'"')
    console.log(value1)
    value2 = JSON.parse(value1)
    $('#output-section-0').text(findInversion(value2))
  })
});
