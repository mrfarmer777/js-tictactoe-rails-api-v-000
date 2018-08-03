// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]
var squares=$("td").toArray();

$(function(){
  $('td').on('click',function(){
    var move=player();
    $(this).text(move);
    updateState();
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

function updateState(square){
  var token=player();
  var ind=squares.index(square);
  square.innerHTML=token;
  state[ind]=token
}
