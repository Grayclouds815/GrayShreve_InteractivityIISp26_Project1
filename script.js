			// Add event listener for the Next button
document.addEventListener('DOMContentLoaded', function() {
	var nextBtn = document.getElementById('next-btn');
	if (nextBtn) {
		nextBtn.addEventListener('click', function() {
			console.log('Next button clicked!');
			// Add your button logic here
            window.location.href = 'next.html';
        });
	}
})

document.addEventListener('DOMContentLoaded', function() {
	var backBtn = document.getElementById('back-btn');
	if (backBtn) {
		backBtn.addEventListener('click', function() {
			console.log('Back button clicked!');
			// Add your button logic here
            window.location.href = 'index.html';
        });
	}
})