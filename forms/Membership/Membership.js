let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]
let user = " "

btnSubmit.onclick=function(){
  user = inptName.value
  if (members.includes(user) == true)
    lblMessage.value = user + ", you have been added to the membership roster."
  else {
    lblMessage.value = user + ", you are already a member."
    members.push(user)
  }
}

Breadcrumbs3.onclick=function(choice){
    if(choice=="Membership" ) { ChangeForm(Membership); }
    if(choice=="Calculator" ) { ChangeForm(Calculator); }
    if(choice=="newControls" ) { ChangeForm(newControls); }
};
