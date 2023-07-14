
function run(){
 var a,b,c,d;

a=document.getElementById("seatt").value;
document.getElementById("seat").innerHTML=""+a;

b=document.getElementById("center1").value;
document.getElementById("center").innerHTML=""+b;

c=document.getElementById("intake1").value;
document.getElementById("intake").innerHTML=""+c;

d=document.getElementById("srno1").value;
document.getElementById("srno").innerHTML=""+d;

var e=document.getElementById("name1").value;
document.getElementById("name").innerHTML=""+e;
document.getElementById("name").style="color:red";

// MARKS START

var f=parseInt(document.getElementById("marks1").value);
document.getElementById("marksF").innerHTML=""+f;

var g=parseInt(document.getElementById("marks2").value);
document.getElementById("marksG").innerHTML=""+g;

var h=parseInt(document.getElementById("marks3").value);
document.getElementById("marksH").innerHTML=""+h;

var i=parseInt(document.getElementById("marks4").value);
document.getElementById("marksI").innerHTML=""+i;

var j=parseInt(document.getElementById("marks5").value);
document.getElementById("marksJ").innerHTML=""+j;

var k=parseInt(document.getElementById("marks6").value);
document.getElementById("marksK").innerHTML=""+k;

var L=parseInt(document.getElementById("marks7").value);
document.getElementById("marksL").innerHTML=""+L;
// GRADE START
var M=document.getElementById("grade1").value;
document.getElementById("gradeM").innerHTML=""+M;

var N=document.getElementById("grade2").value;
document.getElementById("gradeN").innerHTML=""+N;

var O=document.getElementById("grade3").value;
document.getElementById("gradeO").innerHTML=""+O;

var P=document.getElementById("grade4").value;
document.getElementById("gradeP").innerHTML=""+P;

var Q=document.getElementById("grade5").value;
document.getElementById("gradeQ").innerHTML=""+Q;

var R=document.getElementById("grade6").value;
document.getElementById("gradeR").innerHTML=""+R;

var S=document.getElementById("grade7").value;
document.getElementById("gradeS").innerHTML=""+S;

// overall

var T=document.getElementById("remark1").value;
document.getElementById("remark").innerHTML=T;

// var U=document.getElementById("out_of1").value;
// document.getElementById("out_of").innerHTML=U;

var V=document.getElementById("total1").value;
document.getElementById("total").innerHTML=V;

// var W=document.getElementById("point1").value;
// document.getElementById("point").innerHTML=W;

// alert("help me");
var sum=f+g+h+i+j+k+L;
document.getElementById("total").innerHTML=sum;

// percent calculte
var percent=(sum/700)*100;
var final=Math.round(percent);
document.getElementById("percentage").innerHTML=final+"%";

// percent calculate end

// grade

if(final<=100 && final>=95){
    document.getElementById("point").innerHTML="O";
    }else
    document.getElementById("point").innerHTML="fail";
    
     if(final<=94 && final>=85){
       
        document.getElementById("point").innerHTML="A";
     }
     
     if(final<=84 && final>=65){
       
        document.getElementById("point").innerHTML="B";
     }
     if(final<=64 && final>=55){
       
       document.getElementById("point").innerHTML="C";
    }
    
     if(final<=54 && final>=30){
       
        document.getElementById("point").innerHTML="D";
     }

    //  grade end
     
// pass fail


     if(final<=100 && final>=95){
        document.getElementById("remark").innerHTML="PASS";
        }else
        document.getElementById("remark").innerHTML="FAIL";
        
         if(final<=94 && final>=85){
           
            document.getElementById("remark").innerHTML="PASS";
         }
         
         if(final<=84 && final>=65){
           
            document.getElementById("remark").innerHTML="PASS";
         }
         if(final<=64 && final>=55){
           
           document.getElementById("remark").innerHTML="PASS";
        }
        
         if(final<=54 && final>=30){
           
            document.getElementById("remark").innerHTML="PASS";
         }
    

// pass fail end


// }

// function GO()
// {
score1=document.getElementById("marks1").value;  

// score = +score;

if(score1<=100 && score1>=95){
document.getElementById("gradeM").innerHTML="O";
}else{
document.getElementById("gradeM").innerHTML="fail";

 if(score1<=94 && score1>=85){
   
    document.getElementById("gradeM").innerHTML="A";
 }
 
 if(score1<=84 && score1>=65){
   
    document.getElementById("gradeM").innerHTML="B";
 }
 if(score1<=64 && score1>=55){
   
   document.getElementById("gradeM").innerHTML="C";
}

 if(score1<=54 && score1>=30){
   
    document.getElementById("gradeM").innerHTML="D";
 }
 
}

score2=document.getElementById("marks2").value;  

if(score2<=100 && score2>=95){
document.getElementById("gradeN").innerHTML="O";
}else{
document.getElementById("gradeN").innerHTML="fail";

 if(score2<=94 && score2>=85){
   
    document.getElementById("gradeN").innerHTML="A";
 }
 
 if(score2<=84 && score2>=65){
   
    document.getElementById("gradeN").innerHTML="B";
 }
 if(score2<=64 && score2>=55){
   
   document.getElementById("gradeN").innerHTML="C";
}

 if(score2<=54 && score2>=30){
   
    document.getElementById("gradeN").innerHTML="D";
 }
 
}

score3=document.getElementById("marks3").value; 

if(score3<=100 && score3>=95){
document.getElementById("gradeO").innerHTML="O";
}else{
document.getElementById("gradeO").innerHTML="fail";

 if(score3<=94 && score3>=85){
   
    document.getElementById("gradeO").innerHTML="A";
 }
 
 if(score3<=84 && score3>=65){
   
    document.getElementById("gradeO").innerHTML="B";
 }
 if(score3<=64 && score3>=55){
   
   document.getElementById("gradeO").innerHTML="C";
}

 if(score3<=54 && score3>=30){
   
    document.getElementById("gradeO").innerHTML="D";
 }
 
}

score4=document.getElementById("marks4").value;  

if(score4<=100 && score4>=95){
document.getElementById("gradeP").innerHTML="O";
}else{
document.getElementById("gradeP").innerHTML="fail";

 if(score4<=94 && score4>=85){
   
    document.getElementById("gradeP").innerHTML="A";
 }
 
 if(score4<=84 && score4>=65){
   
    document.getElementById("gradeP").innerHTML="B";
 }
 if(score4<=64 && score4>=55){
   
   document.getElementById("gradeP").innerHTML="C";
}

 if(score4<=54 && score4>=30){
   
    document.getElementById("gradeP").innerHTML="D";
 }
 
}

score5=document.getElementById("marks5").value;  

if(score5<=100 && score5>=95){
document.getElementById("gradeQ").innerHTML="O";
}else{
document.getElementById("gradeQ").innerHTML="fail";

 if(score5<=94 && score5>=85){
   
    document.getElementById("gradeQ").innerHTML="A";
 }
 
 if(score5<=84 && score5>=65){
   
    document.getElementById("gradeQ").innerHTML="B";
 }
 if(score5<=64 && score5>=55){
   
   document.getElementById("gradeQ").innerHTML="C";
}

 if(score5<=54 && score5>=30){
   
    document.getElementById("gradeQ").innerHTML="D";
 }
 
}

score6=document.getElementById("marks6").value;  

if(score6<=100 && score6>=95){
document.getElementById("gradeR").innerHTML="O";
}else{
document.getElementById("gradeR").innerHTML="fail";

 if(score6<=94 && score6>=85){
   
    document.getElementById("gradeR").innerHTML="A";
 }
 
 if(score6<=84 && score6>=65){
   
    document.getElementById("gradeR").innerHTML="B";
 }
 if(score6<=64 && score6>=55){
   
   document.getElementById("gradeR").innerHTML="C";
}

 if(score6<=54 && score6>=30){
   
    document.getElementById("gradeR").innerHTML="D";
 }
 
}


score7=document.getElementById("marks7").value;  

if(score7<=100 && score7>=95){
document.getElementById("gradeS").innerHTML="O";
}else{
document.getElementById("gradeS").innerHTML="fail";

 if(score7<=94 && score7>=85){
   
    document.getElementById("gradeS").innerHTML="A";
 }
 
 if(score7<=84 && score7>=65){
   
    document.getElementById("gradeS").innerHTML="B";
 }
 if(score7<=64 && score7>=55){
   
   document.getElementById("gradeS").innerHTML="C";
}

 if(score7<=54 && score7>=30){
   
    document.getElementById("gradeS").innerHTML="D";
 }
 
}



}




//  alert("help me");


