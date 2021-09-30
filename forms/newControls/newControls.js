
Jumbotron1.onclick=function(){
    NSB.MsgBox("You clicked Learn More!");
};



Alert1.onclick=function(){
    NSB.MsgBox("You clicked on an alert function :)");
};

Breadcrumbs1.onclick=function(choice){
    if(choice=="Membership" ) { ChangeForm(Membership); }
    if(choice=="Calculator" ) { ChangeForm(Calculator); }
    if(choice=="newControls" ) { ChangeForm(newControls); }
};