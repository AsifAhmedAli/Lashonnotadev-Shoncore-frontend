	function closeModal() {
			$('#exampleModalToggle').modal('hide');
		}

       
		$('.responsive').slick({
			dots: true,
			prevArrow: $('.previously'),
			nextArrow: $('.nextly'),
			infinite: false,
			autoplay: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll:1
					}
				},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
				 
			]
		});
 



        // Show More Show Less start


      
        document.addEventListener("DOMContentLoaded", function() {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            const hiddenCards = document.querySelectorAll('.mastercardshow:nth-child(n+9)');
            let isLoaded = false;
    
            // Initially hide the additional cards
            hiddenCards.forEach(card => {
                card.style.display = 'none';
            });
    
            // Function to show hidden cards
            const showHiddenCards = () => {
                hiddenCards.forEach(card => {
                    card.style.display = 'block';
                });
                isLoaded = true;
                loadMoreBtn.textContent = 'Show Less';
            };
    
            // Function to hide additional cards
            const hideAdditionalCards = () => {
                hiddenCards.forEach(card => {
                    card.style.display = 'none';
                });
                isLoaded = false;
                loadMoreBtn.textContent = 'Load More';
            };
    
            // Toggle between showing more and showing less when button is clicked
            loadMoreBtn.addEventListener('click', () => {
                if (!isLoaded) {
                    showHiddenCards();
                } else {
                    hideAdditionalCards();
                }
            });
        });
    

        // Show More Show Less end 



        // Remove Cart Js Start
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event listener to all elements with class "remove-column"
            var removeButtons = document.querySelectorAll('.remove-column');
            removeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
            // Find the parent column of the clicked button
            var column = button.closest('.col-lg-4, .col-md-6');
            // Check if the column exists
            if (column) {
            // Remove the column from the DOM
            column.remove();
            }
            });
            });
            });  
        // Remove Cart Js End 