document.addEventListener("DOMContentLoaded", function() {
    // Function to animate the number counting
    function animateCounting(element, targetNumber) {
        let currentNumber = 0;
        const interval = setInterval(() => {
            currentNumber += Math.ceil(targetNumber / 100); // Increase step by 1% each time
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(interval);
            }
            element.innerText = currentNumber;
        }, 20); // Speed of the counting effect (ms)
    }

    // Trigger the counting effect when section-three is in view
    let hasAnimated = false; // Flag to ensure counting happens only once
    const sectionThree = document.querySelector('.section-three');
    const overlays = document.querySelectorAll('.overlay-box h2');

    function checkIfInView() {
        const sectionTop = sectionThree.getBoundingClientRect().top;
        const sectionBottom = sectionThree.getBoundingClientRect().bottom;

        // If the section is in the viewport and the animation has not been done yet
        if (sectionTop < window.innerHeight && sectionBottom > 0 && !hasAnimated) {
            hasAnimated = true; // Set flag to true to prevent rerunning the animation
            overlays.forEach((overlay, index) => {
                const targetNumber = parseInt(overlay.innerText);
                animateCounting(overlay, targetNumber);
            });
        }
    }

    // Trigger counting animation if section is already in view on page load
    checkIfInView();

    // Listen for scroll event
    window.addEventListener('scroll', checkIfInView);
});


//Detect when the section-four comes into view and trigger the animation
document.addEventListener('DOMContentLoaded', function () {
    const components = document.querySelectorAll('.section-four .component');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Function to add the visible class when the element is in the viewport
    function handleScroll() {
        components.forEach(component => {
            if (isInViewport(component)) {
                component.classList.add('visible');
            }
        });
    }

    // Initial check for elements that are in the viewport on page load
    handleScroll();

    // Listen for scroll events to trigger the visibility change
    window.addEventListener('scroll', handleScroll);
});