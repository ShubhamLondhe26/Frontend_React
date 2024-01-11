function calculate(){
    var a,b,choice;
    a=parseInt(document.getElementById("val1").value);
    b=parseInt(document.getElementById("val2").value);
    choice=document.getElementById("choice").value;

    switch(choice){
        case "+":{
            document.getElementById("result").innerHTML=a+b;
            break;
        }
        case "-":{
            document.getElementById("result").innerHTML=a-b;
            break;
        }
    }
    
}