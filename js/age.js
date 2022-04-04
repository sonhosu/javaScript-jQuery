
var year = 2022;
function calc(){
 var birthYearMonth =prompt("태어난 생년 월일을 입력하세요", "yyyymmdd");
 if(!birthYearMonth){
     alert("생년 월일 꼭 입력하세요");
     return   
 }
 //if(prompt.toString)
 var monthcalc=birthYearMonth.substring(4,6); // 19971117
 var birthYear = birthYearMonth.substring(0,4);
 
 var now = new Date().getMonth()+1;
 var age;
 if(now>monthcalc){
     age=year-birthYear;
     console.log(age);
   
 }if(now<=monthcalc){
     age=year-birthYear+1;
     console.log(age);
 }

 document.querySelector("#age").innerHTML =
  "당신의 나이는"+ age+ "세 입니다"+"<br>"+
  "당신의 만 나이는"+age+"세 입니다."
}
