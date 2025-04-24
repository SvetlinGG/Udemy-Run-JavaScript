document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tabs");
  const details = container.querySelectorAll("details");

  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open && window.innerWidth <= 800) {
        
        details.forEach((d) => {
          if (d !== detail) d.removeAttribute("open");
        });

        
        container.appendChild(detail);
      }
    });
  });
});

