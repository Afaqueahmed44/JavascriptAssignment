///chap1

//tasks

alert("wellcome to coding in Javascript")




alert("Wellcome to Javascript Land..." + "\nHappy Coding")
      
      

//chap MathExpression



//task1
//var no1=+prompt("Enter First no")
//var no2=+prompt("Enter second no")
//var add;
//document.write("Sum is ", no1+no2)

//task3




//var a;
//document.write("Value of variable is undefined ");
//a=5;
//document.write("<br>Initial value is ",a);
//a++;
//document.write("<br> Value after increament is ", a);
//var b=7;
//var c=a+b;
//document.write("<br> Sum after addition is ",c)
//c--;
//document.write("<br> Sum after decreament ",c)
//d=c/3;
//document.write("<br> The remainder is ",d)





//task4

//
//var a="600";
//document.write(" The total cost for buying five tickets are ", a*5 +"PKR")



//task5

//
//document.write("<br>Table of 20")
//for(var i=1;i<=10;i++){
//    
//    document.write( "<br> 20 " + " x "+ i + "=" + 20*i )
//    
//}



//task 8

//
//var T="850";
//var O="645";
//document.write("Total Marks = ",T)
//document.write("<br>Obtained Marks = ", O)
//var p= O*100/T
//document.write("<br>Your Percentage is ", p + "%")

///task9


//var us="159";
//var r="42.5";
//var s="159"*10;
//var r="42.5"*10;
//document.write("Total Currency in Pkr = ",s+r);


//task7



//
//var price1="650";
//var price2="100";
//var q1="3";
//var q2="7";
//var ship="100"
//var cost=q1*price1;
//var quan=q2*price2;
//var total=cost+quan+(+ship);
//
//
//document.write("The price of item 1 is = ",price1);
//document.write("The price of item 2 is = ",price2);
//document.write("The quantity of item 1 is = ",q1);
//document.write("The quantity of item 2 is = ",q2);
//document.write("The total amount is = ", total);















//task10

//
//var n="15"
//var o=+(n+5)*10/2;
//document.write(o);

////or
//var n="15";
//var o=+(n+5);
//var p=n*10;
//var q=p/2;
//document.write(o,p,q)







//task11
//
//var thisyear="2020";
//var birthy="1999";
//var age=thisyear-birthy;
//document.write("your age is ", age)



//task6

//var cels="25";
//var fah=(cels*9/5)+32;
//document.write("the celcius temp in feh is ",fah)











//Assignment6_______________________________________________________________



////task1--
//var a=+prompt("Please enter a number")
//document.write("<br>Value of a is ",a);
//++a;
//document.write("<br>Value of a is ",a);
//document.write("<br> Now  Value of a is ",a)
//a++
//document.write("<br> Now  Value of a++ is ",a);
//--a;
//document.write("<br> Now  Value of --a is ",a);
//a--
//document.write("<br> Now  Value of a-- is ",a);


//task2----------

//
//var a=2
//var b=1;
//
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
//document.write(a,b)






//task5----

//
//var a=prompt("Enter a num which you need multiplication table")
//for(var i=1;i<=10;i++){
//    document.write("<br>")
//    document.write(a+"x"+i+"=",a*i)
//}
//if(a==null){
//    document.write(5+"x"+i+"=",5*i)
//}


//task6


var a=prompt("Enter name of First Subject")
var b=prompt("Enter name of Second Subject")
var c=prompt("Enter name of Third Subject")

var d=+prompt("Enter marks obtained for first subject")
var e=+prompt("Enter marks obtained for second subject")
var f=+prompt("Enter marks obtained for third subject")
var per1=d*100/100;
var per2=e*100/100;
var per3=f*100/100;
document.write("<b>Subject"+"<nbsp><b> Total Marks"+"<nbsp><b> Obtained Marks"+"<nbsp><b> Percentage")
document.write("<br>")
document.write(a+"&nbsp&nbsp&nbsp&nbsp"+ "100","&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",d,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per1+"%")
document.write("<br>")
document.write(b +"&nbsp&nbsp&nbsp&nbsp"+"100"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",e,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per2+"%")
document.write("<br>")
document.write(c+"&nbsp&nbsp&nbsp&nbsp"+"100"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",f,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",per3+"%")

var total="300"
var obtained=d+e+f
var totalper=obtained*100/total;
document.write("<br>")
document.write("Total marks=",total)
document.write("<br>")
document.write("Obtained =",obtained)
document.write("<br>")
document.write("Total percentage=",totalper+"%")

////chap Array and Loop





var a

for(var i=1;i<4;i+1){
    for(var j=0;j<i;j++)
    document.write(i)
    
}
//for(var j=1;j<i;j+1){
//    document.write(a[j])
//    
//    
//}












//chap Variables



//Assigment 2______________________________


//var username;
//var myName="AfaqueAhmed";
//var message="Hello World";
//
//alert(message);

//
//var name="Afaque Ahmed";
//var age="15 years Old";
//var prof="Certified Mobile App Developer";
//alert(name);
//alert(age);
//alert(prof);


//
//var msg="PIZZA"
//alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

//
//var email="ahmedafaq554@gmail.com"
//alert("My email  is "+email)

//document.write("Yah! I can write HTML Content through Javascript")

var val1=+prompt("Enter your first value")
var val2=+prompt("Enter your second value")
var operator=prompt("Enter your Operator")
console.log(val1+operator+val2);
if(operator=="+"){
    document.write( val1+val2);
}
else if(operator=='-'){
    console.log(val1-val2);
}







//chp 3_____________________________________________







//3no Question




var VisitorName= " Ali";
var ProductTitle= " TShirts";
var Quantiy= " 5 ";

document.write( VisitorName + " have ordered " + Quantiy + ProductTitle);








//Legal Variables

var ali_am;
var sam;
var $ali;
var ali12;
var afaqAhmed;

//illegal Variables


var this;
var af aq;
var 12afaq;
var @ad;









//chap9-11------------------------------------------------------------

//task2

//var a=prompt("Enter the gender");
//if(a=="Male"){
//    document.write("Good Morningdd Sir")
//}
//else if(a=="Female"){
//    document.write("Good Morning Madam")
//}
//else{
//    document.write("uhugufg")
//}


//task5--------------------
//a.
//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}
//b   var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}
//c       var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}


//d         
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
// if (true){
//alert("True");
//}
//if (false){
//alert("False");
//}

//task9
//
//var n=+prompt("Enter any number")
//if(n%2==0){
//    document.write("No is even")
//}
//else{
//    document.write("Number is odd")
//}



//chap12-13-----------------------------------------------------------------



//
//var str1="cmkk"
//var str2="as"
////var n=str1.localeCompare(str2)
////document.write(largest)
//console.log(largest(str1,str2))

//var a=prompt("Insert a string")
//var b=prompt("Insert other string")
//if(a.length>b.length){
//    document.write("The larger is")
//}
//else if(a.length==b.length){
//    document.write("Equal in size")
//}











//task1

//
//var a = prompt("Press any key")
//if(a>=65 && a<96){
//   
//   console.log("The entered key is uppercase letter")
//   }
//    
//if(a>=96 && a<122 ){
//console.log("The entered key is lower case letter")
//      
//   }
//
//else{
//
//console.log("The entered key is number")
//    
//
//
//}



//task3
//
//var a= prompt("Enter any number")
// if(a>0){
//     
//     document.write("It is positive number")
// }
//if(a<=0){
//     
//     document.write("It is negative or Zero number")
// }
//


//task4

//
//var a=prompt("Enter any characater")
//
//
//if (a=='a'|| a=='e' || a=='i' || a=='o' || a=='u'){
//    document.write("vowel")
//}
//else{
//    document.write("cons")
//}
//

//task5
//var b=prompt("Enter your Password")
//if(b==""){
//    document.write("Please  enterd  password")
//
//}
//
//if(b=="Afaque"){
//    document.write("Correct! You enterd correct password")
//}
//else{
//document.write("Wrong! You enterd wrong password")
//    
//}
//

//task6

//
//var greeting=prompt("Enter time"); 
//var hour = "13";
//if (hour < 18) {
//    greeting = "Good day"; 
//                
//               }
//else {
//    greeting = "Good evening"; }



//task 7

var a= prompt("Enter the time in Format like: 0000")

if(a>=0000 && a<1200){
    
    document.write("Good Morning")
}


if(a>= 1200 && a < 1700){

    document.write("Good Afternoon")

    
}

if(a>= 1700 && a < 2100){

    document.write("Good Evening")

    
}

if(a>= 2100 && a <= 2359){

    document.write("Good Night ")

    
}
























//chap 14-16--------------------------------------



//task7
//
//var arr = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6)MS","7)M.Phil","8)PhD"];
//
//document.write("Qualifications:<br>")
//for(var i=0;i<arr.length;i++){
//console.log(arr[i])
//}




//task8
//var names=["Aafaq","Farhan","Wajid"];
//var score=["344","444","244"];
//var per1=score[0]*100/500;
//var per2=score[1]*100/500;
//var per3=score[2]*100/500;
//document.write("Score of " , names[0] + " is ", score[0]  + " and percentage= " ,per1)
//document.write("<br>"+"Score of " , names[1] + " is ", score[1]  + " and percentage= " ,per2)
//document.write("<br>"+"Score of " , names[2] + " is ", score[2]  + " and percentage= " ,per3)








//task9



//var color=["Red","Green","blue","purple","Orange"];
//document.write(color)
//color.unshift("black");
//document.write("<br>")
//document.write(color)
//color.push("white")
//document.write("<br>")
//document.write(color)
//color.unshift("skyblue","sea green")
//document.write("<br>")
//document.write(color)
//color.shift();
//document.write("<br>")
//document.write(color)
//color.pop();
//document.write("<br>")
//document.write(color)
//color.splice(2,1,"gray")
//document.write("<br>")
//document.write(color)
//color.splice(2,2)
//document.write("<br>")
//document.write(color)


//task11


//
//var color=["karachi","Lahore","Islamabad","Quetta","Peshawar"];
////document.write("<br>")
//document.write(color)
//
//var arr = color.slice(2,4)
//document.write("<br>")
//document.write(arr)




//task12


//
//var arr=["This","is","my","cat"];
//document.write(arr);
//var str="This is My cat"
//document.write(str)







//tassk13

//
//var arr=["Keyboard","Mouse","Printer","monitor"]
//for(var i=0;i<arr.length;i++){
//document.write("<br>"+"Out:",arr[i])}
//
//document.write("<br>"+"Out:",arr[1])
//document.write("<br>"+"Out:",arr[2])
//document.write("<br>"+"Out:",arr[3])}



//task14

//
//var arr=["Keyboard","Mouse","Printer","monitor"];
//for(var  i=arr.length - 1; i>=0; i--){
//document.write(arr[i])
//
//}


//task15


var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]

