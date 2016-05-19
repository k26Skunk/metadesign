<!-- Modal -->
<div class="modal fade" id="basket" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

	<div class="modal-dialog" role="document">

		<div class="modal-content">

			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h1 class="modal-title" id="myModalLabel">Корзина</h1>
			</div>

			<div class="modal-body">

				<h3>Вы положили в корзину</h3>

				<div class="basket_item">

					<div class="row">

						<div class="col-sm-3">
							<div class="basket_item_img">
								<img src="img/maxell.jpg" alt="maxell" title="maxell">
							</div>
						</div>

						<div class="col-sm-6">
							<a href="#">Maxell Waterproof MP3 Player 8Gb</a>
							<p class="basket_item_descr">Flash, карта памяти 4096 Мб в комплекте, поддержка карт microSD, FM-тюнер, Bluetooth, питание: собственный Li-Pol, вес: 92 г</p>
						</div>

						<div class="col-sm-3">

							<div class="basePrice">
								<span><input value="10150" id="basePrice">Р</span>
							</div>

							<div class="addtocart-area">
								<div class="quantityBlock">
									<div>
										<input value="-" class="quantityDown" type="button" onclick='countDown()'>
									</div>
									<div>
										<input class="quantity" id="quantity" value="1">  
									</div>
									<div>
										<input value="+" class="quantityUp" type="button" onclick='countUp()'>
									</div>

								</div>
							</div>
							
						</div>
						
					</div>

					<div class="row">
						<div class="col-xs-12">
							<h2>Всего в корзине: 3 товара, на сумму 12 600 Р</h2>
						</div>

						</div>
				</div>
			
			</div>
			
			<div class="modal-footer">
				<a href="#">Перейти в корзину</a>
				<button type="button" class="main_button">Оформить заказ</button>
			</div>
		
		</div>
	
	</div>

</div>