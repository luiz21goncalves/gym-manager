const currentPage = location.pathname;
const memuItens = document.querySelectorAll("header .links a");

for (item of memuItens) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}