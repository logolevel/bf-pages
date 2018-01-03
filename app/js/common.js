$(function() {


	/********************
	SITE
	********************/
	/*init selectpicker*/
	$('.selectpicker_r').selectpicker();

	/*toggle menu*/
	$('.burger-menu__btn').on('click', function(){
		$(this).toggleClass('active');
		$('.top-menu').toggleClass('active');
		$('body').toggleClass('block-scroll');
	});


	/********************
	DASHBOARD
	********************/

	/*toggle menu*/
	$('.d-burger-btn').on('click', function(){
		$('.d-header-line__right').toggleClass('active');
	});
	$('.close-main-menu').on('click', function(){
		$('.d-header-line__right').removeClass('active');
		$('.overlay').removeClass('active').fadeOut(300);
	});

	/*transfer switch-lang block*/
	var transferSwitchLang = function() {
		if ( $(window).width() < 1199 ) {
			$('.d-bell').insertAfter('.d-header-line__left');

		}
		else {
			$('.d-bell').insertAfter('.d-nav-full');
		};
	}

	transferSwitchLang();

	$(window).on("resize", function(){
		transferSwitchLang();
	});

	/*copy-link animation*/
	$('.copy-link__btn').on('click', function() {
		var self = $(this);
		self.prev().addClass('active');
		setTimeout(function(){
			self.prev().removeClass('active');
		}, 500);
	});


	/*datepicker*/
	$('.datepicker').datepicker({
		format: 'yyyy/mm/dd',
		startDate: '-3d'
	});

	/*toggle sidebar*/
	$('.toggle-sidebar').on('click', function(){
		$('.left-column').toggleClass('visible');
		$('.right-column').toggleClass('no-scroll');
	});

	/* toggle notification */
	$(".d-bell-btn").click(function(e) {
		$(".notification").toggle();
		e.stopPropagation();
	});

	$(document).click(function(e) {
		if (!$(e.target).is('.notification, .notification *')) {
			$(".notification").hide();
		}
	});
	/* close notification item */
	$('.notification__close-item').on('click', function(event) {
		var self = $(this);
		self.parent().remove();
		event.stopPropagation();

		var itemLength = $('.notification__item').length;
		if ( itemLength == 0 ) {
			$('.notification').remove();
		}
	});

	/* toggle main menu */
	$('.toggle-main-menu').on('click', function(event) {
		event.stopPropagation();

		$('.d-header-line__right').addClass('active');
		$('.overlay').toggleClass('active').fadeToggle(300);

	});

	$(document).click(function(e) {
		if (!$(e.target).is('.d-header-line__right, .d-header-line__right *')) {
			$(".d-header-line__right").removeClass('active');
			$('.overlay').removeClass('active').fadeOut(300);
		}
	});


	/*tab links animaton*/

	var nav = $('.slide-nav');
	var navItem = $('.slide-nav li');
	var current = $('.slide-nav .active');
	var slideWidth = current.outerWidth();
	var slideLeft = current.position().left;
  
	nav.append("<li class='slide-bg'></li>");
	var slideBg = $('.slide-bg');

	slideBg.width(slideWidth).css("left", slideLeft);

	navItem.hover(function(){
		slideBg.stop().animate({
			left: $(this).position().left,
			width: $(this).outerWidth(),
			opacity: 1
		});
	}, function(){
		slideBg.stop().animate({
			left: current.position().left,
			width: slideWidth,
			opacity: 1
		});
	});

	navItem.click(function(e){
		e.preventDefault();
		navItem.removeClass('active');
		$(this).addClass('active');
		current = $(this);
		slideWidth = $(this).outerWidth();
		slideLeft = $(this).position().left;
		slideBg.animate({opacity : 1 });

	});









});
