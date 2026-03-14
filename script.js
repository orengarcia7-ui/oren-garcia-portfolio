document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const message = document.getElementById('userMsg').value;

            alert(`Thank you, ${name}! Redirecting to your email client...`);

            // Secure encoding for mailto
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
            window.location.href = `mailto:orengarcia7@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // Header scroll shadow effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});