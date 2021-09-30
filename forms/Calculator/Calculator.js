btnAdd.onclick=function(){
  let num1 = parseInt(inptNum1.value)
  let num2 = parseInt(inptNum2.value)
  let sum = num1 + num2
  lblMessage2.value = "Your two numbers added together are " + sum
}

btnReset.onclick=function(){
  lblMessage2.value = ""
  lblMessage4.value = ""
}

btnMultiply.onclick=function(){
  let num1 = parseInt(inptNum1.value)
  let num2 = parseInt(inptNum2.value)
  let product = num1*num2
  lblMessage4.value = "Your two numbers multiplied together are " + product
}

Breadcrumbs2.onclick=function(choice){
    if(choice=="Membership" ) { ChangeForm(Membership); }
    if(choice=="Calculator" ) { ChangeForm(Calculator); }
    if(choice=="newControls" ) { ChangeForm(newControls); }
};

