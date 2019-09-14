(function (){ 
    var grabform=document.getElementById("message-form");
    grabform.addEventListener("submit",function(e){
        e.preventDefault();
        message=document.getElementById("message");
        var inputvalue=message.value;
        message.value="";
if(inputvalue===""){
    document.querySelector(".feedback").classList.add("show");
    inputvalue="";
    setTimeout(function(){

        document.querySelector(".feedback").classList.remove("show");


    },2000)

} else {




        document.querySelector(".message-content").innerHTML=inputvalue;
        inputvalue="";  }

    }


    )




})();