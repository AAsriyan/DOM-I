const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"]);

// Navigation anchor links 

let navBar = document.querySelectorAll('nav a');
console.log(navBar);
const navBarKeys = Object.keys(siteContent.nav).filter(key => {
  if (key.includes('nav')) {
    return key;
  }
});

navBar.forEach((element, index) => {
  element.textContent = siteContent.nav[navBarKeys[index]];
});

// Appending Home anchor link
let nav = document.querySelector('nav');
let homeNav = document.createElement('a');
homeNav.setAttribute('href', '#');
homeNav.innerHTML = 'Home';
nav.appendChild(homeNav);

// Appending Wow anchor link
let wowNav = document.createElement('a');
wowNav.setAttribute('href', '#');
wowNav.innerHTML = 'Wow';
nav.prepend(wowNav);

const navBarUpdated = document.querySelectorAll('nav a');

// Changing navigation anchor color to green
navBarUpdated.forEach(element => {
  element.style.color = 'green';
});

// CTA content adding text content insertion for h1, button, and image source.

let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = 'DOM<br>IS<br>AWESOME';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent.cta["img-src"]);

// Header Content text insertion

let textHeaderContent = document.querySelectorAll('.text-content h4');
textHeaderContent[0].textContent = siteContent['main-content']['features-h4'];
textHeaderContent[1].textContent = siteContent['main-content']['about-h4'];
textHeaderContent[2].textContent = siteContent['main-content']['services-h4'];
textHeaderContent[3].textContent = siteContent['main-content']['product-h4'];
textHeaderContent[4].textContent = siteContent['main-content']['vision-h4'];

// Text Content insertion

let textParagraphContent = document.querySelectorAll('.text-content p');
textParagraphContent[0].textContent = siteContent['main-content']['features-content'];
textParagraphContent[1].textContent = siteContent['main-content']['about-content'];
textParagraphContent[2].textContent = siteContent['main-content']['services-content'];
textParagraphContent[3].textContent = siteContent['main-content']['product-content'];
textParagraphContent[4].textContent = siteContent['main-content']['vision-content'];

// // Middle image source insertion

let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute('src', siteContent['main-content']["middle-img-src"]);

// // Contact content text insertion

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent.contact['address'];
contactText[1].textContent = siteContent.contact['phone'];
contactText[2].textContent = siteContent.contact['email'];

// Footer content text insertion

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer["copyright"];




