document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // Dynamic content loading
    if (document.getElementById('events-container')) {
        const events = [
            {
                title: 'Hackathon 2024',
                description: 'Join our annual hackathon to solve real-world problems.',
                image: 'images/event1.jpg'
            },
            {
                title: 'Workshop on AI',
                description: 'Learn the basics of Artificial Intelligence in this hands-on workshop.',
                image: 'images/event2.jpg'
            }
        ];

        const container = document.getElementById('events-container');
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');

            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            `;

            container.appendChild(eventCard);
        });
    }

    // Responsive navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
