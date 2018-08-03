// Code your JavaScript / jQuery solution here
var state=["","","","","","","","",""]
var squares=[];
var turn=0;
var winCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

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
  if(turn%2===0){
    return "X"
  } else {
    return "O"
  }
}

function updateState(square){
  turn+=1
  var token=player();
  var ind=squares.indexOf(square);
  square.innerHTML=token;
  state[ind]=token
  console.log(state)
}

function setMessage(msg){
  $("#message").text(msg);
}

function checkWinner(){
  winCombos.forEach(function(combo){
    if(checkCombo(combo)){
      var winner=state[combo[0]].innerHTML
      setMessage("Player "+winner+" Won!");
      return true;
    }
  })
  return false;
}

function checkCombo(combo){
  if(state[combo[0]]===state[combo[1]] && state[combo[2]]===state[combo[1]]){
    return true;
  } else {
    return false;
  }
}
