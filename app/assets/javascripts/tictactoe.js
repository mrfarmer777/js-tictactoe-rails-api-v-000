// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]

$(function(){
  $('td').on('click',function(){
    var move=player();
    $(this).text(move);
  });

});


function player(){
  var turn=state.filter(String).length+1
  if(turn%2===0){
    return "X"
  } else {
    return "O"
  }
}

function updateState(){
  var spaces=$("td")
  console.log(spaces[0].innerHTML)
}
