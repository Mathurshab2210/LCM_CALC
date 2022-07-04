
    document.getElementById("results").onclick=function(){
        let a 
        let n = document.getElementById("inp1")
        a=parseInt(n.value)
        
        let b 
        let m = document.getElementById("inp2")
        b=parseInt(m.value)
        var max;
        if(a>b){
            max=a
        }
        else{
            max=b
        }

     while (1) {
    if (max % a == 0 && max % b == 0) {
        document.getElementById("display").style.display="block"
        document.getElementById("display").style.fontSize="20px"

        document.getElementById("display").innerHTML="Lcm is :" + max;
        break;
    }
    ++max;
    }

    }
    document.getElementById("clr").onclick=function(){
        document.getElementById("display").style.display="none"
        let h1=document.getElementById("inp1")
         h1.value=""
        let w1=document.getElementById("inp2")
          w1.value=""
    }
