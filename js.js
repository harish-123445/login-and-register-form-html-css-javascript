//form 1

  function vfun(){
            var username=document.forms["myform"]["username"].value;
            var password=document.forms["myform"]["password"].value;

        if(username==null || username=="" ){
                  document.getElementById("errorBox").innerHTML ="enter the user name";
                 return false;
        }

        if(password==null || password==""){
                  document.getElementById("errorBox").innerHTML = "enter the password";
                 return false;
        }

        if (username != '' &&password != '' ){
         alert("Login successfully");
                         }

        }

 //form 2

  function vfun1(){
            var uname1=document.forms["myform2"]["uname1"].value;
            var email1=document.forms["myform2"]["email1"].value;
            var pword1=document.forms["myform2"]["pword1"].value;
            var pword2=document.forms["myform2"]["pword2"].value;


        if(uname1==null || uname1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the user name";
                 return false;
        }

        if(email1==null || email1==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the email";
                 return false;
        }

        if(pword1==null || pword1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
        }

        if(pword2==null || pword2==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;}

 		if(pword1 != pword2){
                  document.getElementById("errorBox").innerHTML =
                   "password dont match";
                 return false;}

        

        if (uname1 != '' && pword1 != '' && pword2 != '' && email1 != '' && pword1 == pword2)


          alert("Register successfull");
                         

        }