console.log("this is for js file");
// data type  in js
// string :> any carecter in '',""
//  number : int, double, float
//  boolean : true, false 
//           0,1,2,3
//  list => [1,2,3,'thish'] > index start from 0
//  length of list : 4
//  object : {key:'value'}
//  nan > not a number : NaN
//  null :> we declare var without any value
//  undefined : use a var without declaring

//  var type declaration
//  assign add value to variable
name2 ='value' 
//  always the data type of value will be assigned to variable
//  var global scope : can be access anywhere in the code
var username="ali"
console.log(username)
username=10
console.log(username)
let phone="0123456789"//   local scope : can be access only in this block or function
console.log(phone)
// const name1="ali"
//  name1="ahmad"
// console.log(name1)
//  var name = value 
//  exmaples 
//  if // switch // for // while// do while
//  function
//  declare a function
//  function funName(){
    //  block code 
// }
//  call the function
//  oop concepts : classes , objects , inheritance , polymorphism , encapsulation
// alert('you are trying to contact us ')
//  declare a var from html 
var contactButton=document.getElementById('contactButton')
console.log(contactButton)
function contactus(){
    alert('you are trying to contact us')
    contactButton.innerHTML="you contacted us"
    contactButton.style.backgroundColor="red"
    contactButton.style.width="400px"
}
var numberInput=document.getElementById('numberInput')
var numberInput2=document.getElementById('numberInput2')
    var operation=document.getElementById('operation')
var result=document.getElementById("result")
function calculate(){
    console.log(operation.value)
    if(operation.value==='+'){
        result.innerHTML=parseInt(numberInput.value)+parseInt(numberInput2.value)
    }
    else if(operation.value==='-'){
        result.innerHTML=parseInt(numberInput.value)-parseInt(numberInput2.value)
    }
    if(operation.value==='*'){
        result.innerHTML=parseInt(numberInput.value)*parseInt(numberInput2.value)
    }
    if(operation.value==='/'){
        result.innerHTML=parseInt(numberInput.value)/parseInt(numberInput2.value)
    }
   
}

function Prime(){
    var choosingNumber=document.getElementById('numberInput11').value
var result2=document.getElementById("result2")
console.log(10)
console.log(choosingNumber)
for(let i=2;i<parseInt(choosingNumber);i++){
    console.log("shahed")
if(choosingNumber%i===0){
result2.innerHTML=false;
console.log(false)
}
else {result2.innerHTML=true
console.log(true)};
}

}
var items=document.getElementsByClassName('items')
console.log(items)
var searchInput=document.getElementById("searchInput")
searchInput.addEventListener('input',function(){
    console.log(searchInput.value)
for(var i=0;i<items.length;i++){
    items[i].style.display='block'
    for(var j=0;j<searchInput.value.length;j++){
        if(items[i].innerHTML[j]==searchInput.value[j]){
            console.log(items[i].innerHTML[j])
        }
        else{
            items[i].style.display='none'
        }

    }
}
})