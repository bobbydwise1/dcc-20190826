/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
*/

const rand5 = () => {
  return Math.round(Math.random()*(5-1)+1);
}

const rand7 = (seed) => {
  return Math.round(seed/5*7);
}

console.log(rand5())

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let output0 = rand5()
    let output1 = rand7(output0)
    console.log(output1)
    $('#output-section-0').text(output0)
    $('#output-section-1').text(output1)
  })
});
