
function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    
    if(password.value.length >= 8 ) {
        window.location.replace("home.html");
        return false;
    }
    else{
        alert("Password Error");
    }
}

let colorChanged=0;
    let imageChanged=false;
        function changeColor(){
            let sentence=document.getElementById("p1");
            if (colorChanged===0){
              sentence.style.color="#FFC0CB";
              colorChanged=1;
            }
            else if(colorChanged===1){
              let x = confirm("Color has already been changed.Want to change it again?")
              if(x==true){ 
              sentence.style.color=null;
              colorChanged=0;
            }
            else{
              colorChanged=1
            }
          }
        }

        function changeImage(){
            let img=document.getElementById("img1");
            img.style.transitionDuration="1s"
            if (imageChanged===false){
                img.setAttribute('src','http://images6.fanpop.com/image/photos/37600000/Transparent-Baymax-big-hero-6-37653146-621-748.png')
                img.style.height="470px";
                img.style.width="410px";
                img.style.transform="rotate(9deg)";
                imageChanged=true;
            }
            else{
                img.style.height="430px";
                img.style.width="300px";
                img.style.transform="rotate(0deg)";
                img.setAttribute('src','https://tse1.mm.bing.net/th?id=OIP.C8w86XVIN4OTAWK1-DVr6QHaKr&pid=Api&P=0')
                imageChanged=false;
            }
        } 