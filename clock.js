var amount = document.getElementById('amount');
var start = new Date("October 24, 2022 00:00:00").getTime();
var current;

var startingAmount = 31230144668950;
var october2024Amount = 35785000000000;
var dollarsPerMillisecond = (october2024Amount - startingAmount) / 731 / 24 / 60 / 60 / 1000;

update();

function update() {
var current = startingAmount + (new Date().getTime() - start) * dollarsPerMillisecond;
amount.innerHTML = formatMoney(current);
}

setInterval(update,1000);

function formatMoney(amount) {
var dollars = Math.floor(amount).toString().split('');
var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
if(typeof cents == 'undefined'){
    cents = '00';
}else if(cents.length == 1){
    cents = cents + '0';
}
var str = '';
for(i=dollars.length-1; i>=0; i--){
    str += dollars.splice(0,1);
    if(i%3 == 0 && i != 0) str += ',';
}
return '-$' + str;
}
