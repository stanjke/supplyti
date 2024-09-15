export const navigation = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector(".navigation").offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);

        if (targetId === "") {
          // Прокрутка к началу страницы
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    });
  });
};
