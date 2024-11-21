// Add interactivity to your portfolio
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
  
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
  
        // Remove 'active' class from all links
        links.forEach(item => item.classList.remove("active"));
  
        // Add 'active' class to the clicked link
        link.classList.add("active");
  
        // Scroll to the section smoothly
        const section = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      });
    });
  });
  