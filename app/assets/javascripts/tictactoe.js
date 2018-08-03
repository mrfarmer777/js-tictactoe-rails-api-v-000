// Code your JavaScript / jQuery solution here
$(function(){
  console.log("Hello everybody!")
  $('td').on('click',function(){
    var move=player();
    $(this).text(move);
  });

  var state=["","","","","","","","",""]
});



function player(){
  var turn=9-state.filter(String).length
  if(turn%2===0){
    return "O"
  } else {
    return "X"
  }
}
