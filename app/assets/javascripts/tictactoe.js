// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]
var squares=[];

$(function(){
  squares=$("td").toArray();
  attachListeners();



});

function attachListeners(){
  $('td').on('click',function(){
    updateState(this);
  });
}


function player(){
  var turn=state.filter(String).length+1
  if(turn%2===0){
    return "O"
  } else {
    return "X"
  }
}

function updateState(square){
  var token=player();
  var ind=squares.indexOf(square);
  square.innerHTML=token;
  state[ind]=token
  console.log(state)
}
