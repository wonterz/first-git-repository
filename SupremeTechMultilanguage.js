// lang.js
const translations = {
    ua: {
      home: "Головна",
      catalog: "Каталог",
      cart: "Кошик",
      checkout: "Оформити замовлення",
      login: "Увійти",
      logout: "Вийти",
      welcome: "Ласкаво просимо до SupremeTech!",
      product: "Товар",
      price: "Ціна",
      buy: "Купити",
      quantity: "Кількість",
      total: "Всього",
      place_order: "Оформити замовлення",
      username: "Логін",
      password: "Пароль",
      wrong_credentials: "Неправильний логін або пароль",
      enter: "Увійти",
      lang: "Мова",
    },
    en: {
      home: "Home",
      catalog: "Catalog",
      cart: "Cart",
      checkout: "Checkout",
      login: "Login",
      logout: "Logout",
      welcome: "Welcome to SupremeTech!",
      product: "Product",
      price: "Price",
      buy: "Buy",
      quantity: "Quantity",
      total: "Total",
      place_order: "Place Order",
      username: "Username",
      password: "Password",
      wrong_credentials: "Wrong username or password",
      enter: "Enter",
      lang: "Language",
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("language", lang);
    translatePage();
  }
  
  function getLanguage() {
    return localStorage.getItem("language") || "ua";
  }
  
  function translatePage() {
    const lang = getLanguage();
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    translatePage();
  });
  