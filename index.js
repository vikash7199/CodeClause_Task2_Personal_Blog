// Example code for adding a click event listener to the "Read More" links

var readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		// Code to display the full blog post
	});
});
