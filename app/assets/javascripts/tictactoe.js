// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]

$(function(){
  console.log("Hello everybody!")
  $('td').on('click',function(){
    var move=player();
    $(this).text(move);
  });


  console.log(state)
});



function player(){
  var turn=10-state.filter(String).length
  if(turn%2===0){
    return "O"
  } else {
    return "X"
  }
}
