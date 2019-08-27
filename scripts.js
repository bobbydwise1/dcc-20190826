/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
*/

const rand5 = () => {
  return Math.round(Math.random()*(5-1)+1);
}

console.log(rand5())

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    $('#output-section-0').text(rand5())
    $('#output-section-1').text(rand5())
  })
});
