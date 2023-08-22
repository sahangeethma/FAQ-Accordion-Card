const headers = document.querySelectorAll(".faq");

headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    const rotate = document.querySelector(".rotate");
    const visibility = document.querySelector(".visibility");

    if (active) {
      active.classList.remove("active");
    }

    if (rotate) {
      rotate.classList.remove("rotate");
    }

    if (visibility) {
      visibility.classList.remove("visibility");
    }

    header.children[1].classList.add("visibility");
    header.children[0].children[0].classList.add("active");
    header.children[0].children[1].classList.add("rotate");
    // console.log(header.children);
  });
});
