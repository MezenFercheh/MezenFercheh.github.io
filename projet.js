function verif()
{
    nom=document.getElementById("nom").value;
    cin=document.getElementById("cin").value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    if(nom=="")
    {alert("le nom ne doit pas etre vide");}
    if(nom.length<3)
    {alert("le nom doit etre minimum 3 lettres");}
    if((cin.length!=8)||(isNaN==true))
    {alert("le cin doit etre numerique et contient 8 lettres");}
    if((age<17)||(age>22))
    {alert("entre 17 et 22");}
    if(email.indexOf("@")==-1)
    {alert("l'email doit contenir @ ");}
}