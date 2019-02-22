function deluser()
{
    //enter name prompt pop-up
    var deleteuser = prompt("enter name of the user to delete");
    if (deleteuser != null){
        //confirm pop-up
        confirm("Press ok to delete " + deleteuser +" otherwise cancel");
    }   
}