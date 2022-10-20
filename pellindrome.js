let num=2112;
let recov=num;
let bag=0;
while(num>=1){
  let  r=num%10;
    bag=(bag*10)+r;
    num=num/10
}
if(recove==sum){console.log("This is pelindrome");}
else{"This not a pelindrome"}