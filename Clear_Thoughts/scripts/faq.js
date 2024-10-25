// JavaScript for FAQ toggle
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const arrow = item.querySelector('.faq-arrow');

        // Toggle the clicked answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';  // Hide answer if open
            arrow.textContent = '▼';        // Change arrow to down
        } else {
            // Close other open answers
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.faq-arrow').forEach(arr => arr.textContent = '▼');
            
            answer.style.display = 'block'; // Show clicked answer
            arrow.textContent = '▲';        // Change arrow to up
        }
    });
});