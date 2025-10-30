console.log(23);
const number=[23,12,45,67,34,65,30];
console.log(number);
number.push(80);
console.log(number);
number.pop();
console.log(number);
number.shift(); //first teke remove
console.log(number);
number.unshift(56); //first e dukai dibe
console.log(number);
console.log(number.slice(1,3));
console.log(number.slice(2,5));
console.log(number.join("  ")); //join kore string akare
console.log(number);//final number array

const fruits = ["Mango", "Apple", "Banana"];
console.log(fruits); console.log(typeof(fruits)); //object   

for(const i of number){    //variable i ,i=0 kaaj
    console.log(i);
}

//Continue= kaaj skip kore
console.log("Continue");
for(const i of number){    //variable i ,i=0 kaaj
    if(i%2==0) continue; //odd number nibe,even ones skip
    console.log(i);
}

//typeof
function afra(){console.log("Hello Afra");}
let a="Afra",b=23,c, isRich=true; //bool
console.log(typeof(a));console.log(typeof(c));
console.log(typeof(isRich));console.log(typeof(afra));
console.log(typeof(b));
console.log(typeof(number));

if(isRich) console.log("Rich")
else console.log("Poor");
let appleprice=parseInt("Four hundred");
console.log(appleprice); //nan ans hobe. but "400tk" dile 400 dekbe
console.log(typeof(appleprice)); //number dekbe as string to num niye felse even if NaN
// appleprice="400tk";console.log(typeof(appleprice)); //string dekbe ekne
//if (Number.isNaN(appleprice)) console.log("NUMBER NAA"); //NaN hisabe check korbe

if(appleprice!=="NaN") console.log(appleprice);//string hisabe check korbe
else console.log("Is not a number");
if(appleprice!==NaN) console.log(appleprice);//NaN hisabe check korbe
else console.log("Is not a number");

if(2==2)console.log("True");else console.log("False");//true
if("2"==="2")console.log("True");else console.log("False")//true ,data type o compare kore
if(2!=2)console.log("True");
else console.log("False")//f. akta equal=only value compare
if(2!="2")console.log("True");
else console.log("False") //f . duita equals== data type and value compares both
if(2!=2)console.log("True");else console.log("False")

let x=0.123455;
let y=34.293223;
let total=x+y; console.log(total)
console.log(total.toFixed(2)) //to 2 decimal places
console.log(total.toFixed(4)) //if 56 is total,,then 56.0000

const mixedarray=["Afra",2,66,"tasnia",true,afra]
console.log(mixedarray)
console.log(mixedarray.length) //array er length
console.log(Array.isArray(mixedarray)) //true = as eta array,not with typeof(obj dibe)


for(let i=0;i<mixedarray.length;i++){
    console.log("x[" + i + "] =", mixedarray[i]);
}
console.log(mixedarray.indexOf(afra))  //to see that index value,which index,,naa tkle -1

const friends=["Afra","Nafia","Nusrat","Salsa","Tasnia"];
console.log(friends.indexOf("Tasnia")) //4th index =4
console.log(friends.includes("Nafia")) //true dekbe as ache
console.log(Array.isArray(friends)) //true as eta array

let data1=[12,23,43,54];console.log(data1);
let data2=[32,65,87,45];console.log(data2);
data1=data1.concat(data2) //data1 e data2 link!
console.log(data1); //new merged data with 8 values
console.log(data1.concat(data2)); //concatenate data2 abro but not storing! so data 1 ager tai tkbe lenght

const capital="Muscat"
console.log(capital.length)
console.log(capital[3]);//3rd index letter=c
console.log(capital.toLowerCase());console.log(capital.toUpperCase());

const name="   Afra is nice af";
console.log(name) ;console.log(name.trim()); //cuts off space!
console.log(name.slice(3,9));
console.log(name.split(""));
console.log(name.split("a")); //splits where a

const firstn="Afra"; const lastn="Ackerman";
const fulln=firstn+" "+lastn;
console.log(fulln);
console.log(firstn.concat("").concat(lastn)); //2ways

function square(x){ return x*x;}
console.log(square(5));

function array(x){
    const a=x; console.log(a); //catch kore print korbe
    for( let i=0;i<x.length;i++){ 
    //console.log(x[i]); 
    console.log("x[" + i + "] =", x[i]);
    //console.log(i); 
    }
}
array([2,3,4,5,6])
array("name= afra")

function ackerman(x){
    if (typeof(x) !== "number" || Number.isNaN(x)) return "Not a number";
    if (x % 2 === 0) return "Even Number";
    else return "Odd Number";
}
console.log(ackerman(64));

let apple_price= parseInt("Four hundred");
console.log(typeof(apple_price));
if(apple_price==="NaN") 
console.log(apple_price)
else 
console.log("Is not a number");
