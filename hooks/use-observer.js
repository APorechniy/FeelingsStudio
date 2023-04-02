export const useObserver = (elementId, className = "fadeIn") => {
  try {
    const element = document.getElementById(elementId);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
        }
      });
    });

    observer.observe(element);
  } catch (error) {
    return null;
  }
};
