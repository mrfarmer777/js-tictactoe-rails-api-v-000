// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]
var squares=[];
var turns=0;

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
  if(turns%2===0){
    return "O"
  } else {
    return "X"
  }
}

function updateState(square){
  turns+=1
  var token=player();
  var ind=squares.indexOf(square);
  square.innerHTML=token;
  state[ind]=token
  console.log(state)
}
