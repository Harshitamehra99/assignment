jQuery(document).ready(function () {
    if (jQuery('.owl-carousel').length > 0) {
        jQuery('.owl-carousel').owlCarousel({
	    loop: false,
	    margin: 5,
        dots:false,
	    nav: true,
	    responsiveClass: true,
		nestedItemSelector: 'item',
	    responsive: {
	      0: {
		items: 1,
		dots:true
	      },
	      600: {
		items: 1,
        dots:true
	      },
	      768: {
		items: 2,
		margin: 15
	      },
	      992: {
		items: 3,
		margin: 30
	      }
	    }
	})
    }
});
