$(document).ready(function() {
	var productItem = [{
			productName: "Gầu bò hoa",
			price: "100000",
			photo: "5_order_monnhung_gubohoa.jpg"
		},
		{
			productName: "Lõi vai bò Mỹ",
			price: "160000",
			photo: "6_order_monnhung_loivaibomy.jpg"
		},
		{
			productName: "Gầu bò Úc",
			price: "180000",
			photo: "7_order_monnhung_gaubouc.jpg"
		},
		{
			productName: "Nạm bò Úc",
			price: "170000",
			photo: "8_order_monnhung_nambouc.jpg"
		},
		{
			productName: "Ba chỉ heo",
			price: "150000",
			photo: "9_order_monnhung_bachiheo.jpg"
		},
		{
			productName: "Bắp bò Úc",
			price: "170000",
			photo: "10_order_monnhung_bapbouc.jpg"
		},
		{
			productName: "Tôm tươi",
			price: "140000",
			photo: "11_order_monnhung_tom.jpg"
		},
		{
			productName: "Mực baby",
			price: "130000",
			photo: "12_order_monnhung_mucbaby.jpg"
		},
		{
			productName: "Cổ bò",
			price: "130000",
			photo: "13_order_monnhung_cobo.jpg"
		},
		{
			productName: "Tim bò",
			price: "115000",
			photo: "14_order_monnhung_timbo.jpg"
		},
		{
			productName: "Ba chỉ bò",
			price: "160000",
			photo: "15_order_monnhung_bachibo.jpg"
		},
		{
			productName: "Viên tổng hợp",
			price: "120000",
			photo: "16_order_monnhung_vientonghop.jpg"
		},
		{
			productName: "Đậu hủ phô mai",
			price: "110000",
			photo: "17_order_monnhung_dauhuphomai.jpg"
		},
		{
			productName: "Viên tôm hùm",
			price: "180000",
			photo: "18_order_monnhung_vientomhum.jpg"
		},
		{
			productName: "Viên trứng cá hồi",
			price: "180000",
			photo: "19_order_monnhung_vientrungcahoi.jpg"
		},
		{
			productName: "Xúc xích",
			price: "90000",
			photo: "20_order_monnhung_xucxich.jpg"
		}];

    var productItem2 = [{
            productName2: "Rau muống",
			price2: "70000",
			photo2: "21_order_rau_muong.jpg"
    },
    {
        productName2: "Nấm kim châm",
        price2: "70000",
        photo2: "22_order_rau_namkimcham.jpg"   
    },
    {
        productName2: "Tần ô",
        price2: "70000",
        photo2: "23_order_rau_tano.jpg"   
    },
    {
        productName2: "Rau tổng hợp",
        price2: "70000",
        photo2: "24_order_rau_tonghop.jpg"   
    }];

    var productItem3 = [{
        productName3: "Lẩu cay Mala",
        price3: "70000",
        photo3: "1_order_lau_mala.jpg"
    },
    {
        productName3: "Lẩu Tom Yum",
        price3: "70000",
        photo3: "2_order_lau_tomyum.jpg"
    },
	{
        productName3: "Lẩu cải chua",
        price3: "70000",
        photo3: "3_order_lau_cachua.jpg"
    },
	{
        productName3: "Lẩu nấm",
        price3: "70000",
        photo3: "4_order_lau_nam.jpg"
    }];

	var productItem4 = [{
        productName4: "Trà sữa",
        price4: "70000",
        photo4: "25_order_nuoc_trasua.jpg"
    },
    {
        productName4: "Trà lài",
        price4: "70000",
        photo4: "26_order_nuoc_tranhai.jpg"
    },
	{
        productName4: "Sữa chua",
        price4: "70000",
        photo4: "27_order_nuoc_suachua.jpg"
    },
	{
        productName4: "Kem viên",
        price4: "70000",
        photo4: "28_order_nuoc_kem.jpg"
    }];
	showProductGallery(productItem);
    showProductGallery2(productItem2);
    showProductGallery3(productItem3);
    showProductGallery4(productItem4);

	showCartTable();
});
///1
function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img class="ord-photo" src="img/order/' + item.photo + '">'+
					'<div class="details">' +
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">VND <span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="number" class="product-quantity" name="quantity" min="0" value="1" size=2" />'+ 
						'<input type="submit" value="   " class="add-to-cart" onClick="addToCart(this)" />'+
						'</div>'+
					'</div>'+
				'</div>';
	});
	$('#product-item-container1').html(productHTML);
}
///2
function showProductGallery2(product) {
	//Iterate javascript shopping cart array
    var productHTML2 = "";
    product.forEach(function(item) {
		productHTML2 += '<div class="product-item">'+
					'<img class="ord-photo" src="img/order/' + item.photo2 + '">'+
					'<div class="details">' +
					'<div class="productname">' + item.productName2 + '</div>'+
					'<div class="price">VND <span>' + item.price2 + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="number" class="product-quantity" name="quantity" min="0" value="1" size=2" />'+ 
						'<input type="submit" value="  " class="add-to-cart" onClick="addToCart(this)" />'+
						'</div>'+
					'</div>'+
				'</div>';
	});
    $('#product-item-container2').html(productHTML2);
}
///3
function showProductGallery3(product) {
	//Iterate javascript shopping cart array
    var productHTML3 = "";
    product.forEach(function(item) {
		productHTML3 += '<div class="product-item">'+
					'<img class="ord-photo" src="img/order/' + item.photo3 + '">'+
					'<div class="details">' +
					'<div class="productname">' + item.productName3 + '</div>'+
					'<div class="price">VND <span>' + item.price3 + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="number" class="product-quantity" name="quantity" min="0" value="1" size=2" />'+ 
						'<input type="submit" value="  " class="add-to-cart" onClick="addToCart(this)" />'+
						'</div>'+
					'</div>'+
				'</div>';
	});
    $('#product-item-container3').html(productHTML3);
}
///4
function showProductGallery4(product) {
	//Iterate javascript shopping cart array
    var productHTML4 = "";
    product.forEach(function(item) {
		productHTML4 += '<div class="product-item">'+
					'<img class="ord-photo" src="img/order/' + item.photo4 + '">'+
					'<div class="details">' +
					'<div class="productname">' + item.productName4 + '</div>'+
					'<div class="price">VND <span>' + item.price4 + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="number" class="product-quantity" name="quantity" min="0" value="1" size=2" />'+ 
						'<input type="submit" value="  " class="add-to-cart" onClick="addToCart(this)" />'+
						'</div>'+
					'</div>'+
				'</div>';
	});
    $('#product-item-container4').html(productHTML4);
}

// Chức năng các thanh hiện/ẩn nhóm thức ăn trong menu
$(document).ready(function(){
    $('#btn-toggle1').click(function(){
      $("#product-item-container1").slideToggle(2000);
    });
});
$(document).ready(function(){
    $('#btn-toggle2').click(function(){
      $("#product-item-container2").slideToggle(1000);
    });
});
$(document).ready(function(){
    $('#btn-toggle3').click(function(){
      $("#product-item-container3").slideToggle(1000);
    });
});
$(document).ready(function(){
    $('#btn-toggle4').click(function(){
      $("#product-item-container4").slideToggle(1000);
    });
});

// Chức năng nút "Add to Cart"
function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

// Chức năng nút "Empty Cart"
function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}

// Chức năng nút "X" để xóa từng món
$("table").on('click', '.del-btn', function() {
    var rowIndex = $(this).closest('tr').index();// NEED THE INDEX OF THE ELEMENT OF THE ARRAY WE WANT TO DELETE
    var cart = JSON.parse(sessionStorage.getItem('shopping-cart'));
    cart.splice(rowIndex,1); 
    var newcartJSON = JSON.stringify(cart);
    sessionStorage.setItem('shopping-cart', newcartJSON);
    showCartTable();
})
             
function showCartTable() {
	var cartRowHTML = "";
	var itemCount = 0;
	var grandTotal = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;


	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		//itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity;

			cartRowHTML += "<tr>" +
                "<td class='del'>" + "<button class='del-btn' >X" + "</button>" + "</td>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>" + price.toFixed(0) + "</td>" +
				"<td class='text-right'>"+ quantity + "</td>" +
				"<td class='text-right'>" + subTotal.toFixed(0) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
			itemCount += quantity;
		});
	}

	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text(grandTotal.toFixed(0));
}
