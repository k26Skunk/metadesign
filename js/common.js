/* Chosen select */
$(".chosen-select").chosen({disable_search_threshold: 10});


/* UI slider */
jQuery(document).ready(function(){

jQuery("#slider").slider({
	min: 0,
	max: 10000,
	values: [0,10000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 10000) { value2 = 10000; jQuery("input#maxCost").val(10000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});
// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});

});


/* Tooltips */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/* Quantity */
var price = 900;
var quantity = document.getElementById('quantity').value;
var basePrice = document.getElementById('basePrice').value;
var i = 1;

function counter() {
    document.getElementById('basePrice').value = basePrice;
}
function countUp() {
    if (quantity > 19) {
      quantity = 20;
    } else {
    quantity++;
    basePrice = price*quantity;
    document.getElementById('quantity').value = quantity;
    counter();
    }
  }
function countDown() {
    if (quantity < 1) {
      quantity=0;
    } else {
      quantity--;
      basePrice = basePrice - price;
      document.getElementById('quantity').value = quantity;
      counter();
    }
}