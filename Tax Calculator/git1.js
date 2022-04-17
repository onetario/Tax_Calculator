let price=document.getElementById("main");
let gst_percentage=document.getElementById("gstper");
let gst_amount=document.getElementById("gstamt");
let total_amount=document.getElementById("total");
let button1=document.getElementById("button1");
let buttonclear1=document.getElementById("buttonclear");


button1.onclick=function(){
   
    let cost=parseInt(price.value);
    let gst_percentage2=parseInt(gst_percentage.value);
    let gst_amount2=parseInt(gst_amount);

   
    gst_amount2=(gst_percentage2/100)*cost
    gst_amount.value=gst_amount2
    total_amount.value=(cost+gst_amount2)

   
}



buttonclear1.onclick=function(){
    price.value=" ";
    gst_amount.value=" ";
    gst_percentage.value=" ";
    total_amount.value=" ";
}