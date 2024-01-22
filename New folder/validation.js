
function checkAll(){
   
//    var userName = document.getElementById("fname").value;
var userName = document.myform.fname.value;
   var regName = "^[a-zA-Z ]{3,20}$";

var uedu = document.myform.edu;  

   if(userName===""){
     window.alert("fname is required");
    
   return false;
   }
   if(!userName.match(regName)){
    window.alert("fnam must contain only character min-3 and max-20");
    return false;
   }
   if(uedu[0].checked===false && uedu[1].checked===false && uedu[2].checked===false && uedu[3].checked===false){
    window.alert("please select your qualification");
    return false;
   }
}
