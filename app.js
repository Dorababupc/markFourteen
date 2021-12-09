var btnclick=document.querySelector("#check-button");
var initial=document.querySelector("#initial-price");
var current=document.querySelector("#current-price");
var quantity=document.querySelector("#no-of-stocks");
var message=document.querySelector("#display-message");
function clickHandler(){
    var buy=Number(initial.value);
    var today=Number(current.value);
    var no=Number(quantity.value);
    if(today>buy){
        var gain=today-buy;
        var gainper=(gain/buy)*100;
        var 
        message.innerText=
    }
    else if(today<buy){
        var loss=buy-today;
        var lossper=(loss/buy)*100;
        message.innerText="Sorry you have lost "+loss+" which is "+lossper+"%";
    }
    else{
        message.innerText="No gain, no loss";
    }
}
btnclick.addEventListener("click",clickHandler);