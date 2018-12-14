
   window.onload=function(){

       var btn = document.getElementById("submit");
       document.getElementById("pwd").focus();
       btn.onclick = function(){
           var p = document.getElementById("pwd");

           window.sessionStorage.setItem("verificationCode",p.value);


           if(p.value==="iuzuan"){

              
               function browserRedirect() {
                   var sUserAgent = navigator.userAgent.toLowerCase();
                   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                   var bIsAndroid = sUserAgent.match(/android/i) == "android";
                   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                   if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                       // document.writeln("phone");
                       window.location.href='m/cn/index.html';
                   } else {
                       window.location.href='pc/cn/index.html';
                   }
               }
               browserRedirect();
           }else{
               alert("输入密码不正确")
           };
       }
       document.onkeydown=function(event){
           var e = event || window.event || arguments.callee.caller.arguments[0];
           if(e && e.keyCode==13){
               btn.onclick();
           }
       };
   }

