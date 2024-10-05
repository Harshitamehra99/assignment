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


// const heart = document.getElementById('heart');

// heart.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default link behavior

//     const icon = heart.querySelector('i');
    
//     // Toggle between solid and regular heart
//     if (icon.classList.contains('fa-regular')) {
//         icon.classList.remove('fa-regular');
//         icon.classList.add('fa-solid');
//         heart.style.color = 'red'; // Change the color to red
//     } else {
//         icon.classList.remove('fa-solid');
//         icon.classList.add('fa-regular');
//         heart.style.color = 'inherit'; // Change back to original color
//     }
// });