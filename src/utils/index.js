export function scrollToTop(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
