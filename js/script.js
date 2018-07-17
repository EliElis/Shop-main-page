$(document).ready(function () {
	
	//Hide on click outside element
	$.hideOnClick = function (div) {
		$(document).mouseup(function (e) {
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.hide();
			}
		});
	}
	
	//Cart, wish
	$('.js-header-icon-holder').click(function () {
		$(this).children('.js-header-dropdown').css("display", "block");
	});
	$.hideOnClick($('.js-header-dropdown'));
	
	//Fast view
	$('.js-view-btn').click(function () {
		$('.js-overlay').css("display", "flex");
	});
	$('.js-view-close').click(function () {
		$('.js-overlay').css("display", "none");
	});
	$('.js-plus').click(function () {
		var value = parseInt($('#js-count-inp').val()) + 1;
		$('#js-count-inp').val(value);
	})
	$('.js-minus').click(function () {
		var value = parseInt($('#js-count-inp').val());
		if (value > 1) {
			value = value - 1;
			$('#js-count-inp').val(value);
		}
	});
	
	//Search input
	$.showSearch = function () {
		if ($(window).width() < 441) {
			$('.js-search').on('click', function (e) {
				e.preventDefault();
				$('#js-search-input').css("display", "block");
				$('.js-search').addClass("js-header-search-btn");
				$('.header-search').addClass("js-header-search-active");
			});
			$(document).mouseup(function (e) {
				e.preventDefault();
				var div = $("#js-search-input");
				if (!div.is(e.target) && div.has(e.target).length === 0) {
					div.css("display", "none");
					$('.js-search').removeClass("js-header-search-btn");
					$('.header-search').removeClass("js-header-search-active");
				}
			});
		}
	};
	$.showSearch();
	
//Show categories navbar	
	var tmp = false;
	$('.sidebar-title').on('click', function (e) {
		if (tmp == false) {
			$('.categ-nav-ul').css('display', 'block');
			$('.categ-nav-arrow-down').css('transform', 'rotate(180deg)');
			tmp = true;
		}
		else {
			$('.categ-nav-ul').css('display', 'none');
			$('.categ-nav-arrow-down').css('transform', 'rotate(0deg)');
			tmp = false;
		}
	});
	
	
//Show navbar submenu
	$('.categ-nav-ul>li').on('click', function(e){
		e.preventDefault();
	
		if ($(this).children('.sub-menu').is(':visible') && ($(this).find('.categ-nav-title').is(e.target) )){
			$(this).children('.sub-menu').hide();
				if ($(window).width() < 767) {
				$(this).children('.categ-nav-arrow').css('transform', 'rotate(90deg)');
				}
	}else{
		
			if ($(window).width() > 767) {
		$(this).children('.sub-menu').css("display", "flex");
			}
		if ($(window).width() < 767) {
						$(this).children('.sub-menu').css("display", "block");
			$(this).children('.categ-nav-arrow').css('transform', 'rotate(270deg)');
				}
		
							 }})

	$('.sub-menu-categ').on('click', function(e){
		e.preventDefault();
		if ($(this).children('.sub-menu-ul').is(':visible')) {
			$(this).children('.sub-menu-ul').hide();
	}else{
		
			if ($(window).width() > 767) {
		$(this).children('.sub-menu-ul').css("display", "flex");
			}
		if ($(window).width() < 767) {
						$(this).children('.sub-menu-ul').css("display", "block");
	}}})
	
	
//for mobile
	$.forMobile = function (){
	if ($(window).width() < 767) {
	$('.sub-menu-title').append('<i class="fas fa-angle-down js-submenu-arrow">');
	$('.categ-nav-ul').append('<a class="categ-menu-more categ-menu-plus" href="#">Еще<i class="fas fa-plus-circle"></i></a>');
		  $('.categ-nav-ul').append('<a class="categ-menu-more categ-menu-minus" href="#">Скрыть<i class="fas fa-minus-circle"></i></a>');
		if($('.categ-nav-ul').children().length>5){
		    var index = $('.categ-nav-ul').children().length ;
	           $( ".categ-nav-ul>li" ).slice( 5, index).css( "display", "none" );
			$(".categ-menu-plus").css('display', 'inline-block');
			
				$(".categ-menu-plus").on('click', function(e){
			 $( ".categ-nav-ul>li" ).slice( 5, index).css( "display", "block" );
			
				$(".categ-menu-plus").hide();
			  	$(".categ-menu-minus").css('display', 'inline-block');
		})
			
						$(".categ-menu-minus").on('click', function(e){
			 $( ".categ-nav-ul>li" ).slice( 5, index).css( "display", "none" );
			
				$(".categ-menu-plus").css('display', 'inline-block');
			  	$(".categ-menu-minus").hide();
		})
		   }
		
	
	}
		}
	
	$.forMobile (); 
	
		//for window resize
	$(window).resize(function () {
		$.showSearch();
		$.forMobile (); 
		if ($(window).width() > 441) {
			$('#js-search-input').css("display", "block");
		};
		if ($(window).width() < 441) {
			$('#js-search-input').css("display", "none");
		};
	});

	

});