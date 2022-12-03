$(document).ready(function () {
  const locale =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  let savedLocale = sessionStorage.getItem("locale");

  if (savedLocale !== locale) {
    sessionStorage.setItem("locale", locale || 'en');
  }

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
