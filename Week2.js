var customername = "Chow";
var price = 10;
var quantity = 3;
var totalPrice = 0;

document.getElementById("customername").innerHTML = "Chow";
document.getElementById("price").innerHTML = "$" + totalPrice;
var products = [
	"Pizza",
	"Naan",
	"Sourdough",
	"Foccacia",
	"White bread"
];
var price = [40,10,20,50,5];
var productsText= "";
var productsElement = document.getElementById("banana");


hours = new Date().getHours();
if (hours<=11){
	document.getElementById("time").innerHTML="Good Morning";
}else if(hours<=16){
	document.getElementById("time").innerHTML="Good Afternoon";
}else{
	document.getElementById("time").innerHTML="Good Evening";
}

for (i in products){
	productsText= productsText + "<li class= 'list-group-item'>" + products[i] + "<span class= 'badge badge-pill badge-secondary float-right'> $ " + price[i] + "</li>";
	productsElement.innerHTML = productsText;
	totalPrice += price[i];
}

totalPrice = totalPrice * .75;
document.getElementById("price").innerHTML = "$" + totalPrice;
