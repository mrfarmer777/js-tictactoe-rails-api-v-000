// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]


$(function(){
  var squares=document.querySelectorAll("td");
  $('td').on('click',function(){
    updateState(this);
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
  var ind=squares.indexOf(square);
  square.innerHTML=token;
  state[ind]=token
  console.log(state)
}
