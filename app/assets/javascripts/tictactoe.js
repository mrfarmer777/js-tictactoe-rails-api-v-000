// Code your JavaScript / jQuery solution here
var state=["X","","O","","","","","",""]

$(function(){
  console.log("Hello everybody!")
  $('td').on('click',function(){
    var move=player();
    $(this).text(move);
  });

});



function player(){
  var turn=state.filter(String).length
  if(turn%2===0){
    return "O"
  } else {
    return "X"
  }
}
