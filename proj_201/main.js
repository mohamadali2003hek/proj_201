
document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listeners to each link
    navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        // Scroll to the target section smoothly
        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the section
        });
        }
    });
    });
});





const navigateButton = document.getElementById('navigateButton');


navigateButton.addEventListener('click', () => {

    window.location.href = 'page2.html';
});










//                sand email 




function sendEmail(id) {
    let email = "mohamadalihek@gmail.com"; 
    let subject = "Inquiry about";
    let body = `Hello,\n\n I would like to inquire about the : ${id}\n\n`;
    
    
    
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
}




