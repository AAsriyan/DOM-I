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

let nav1 = document.getElementById('nav1');
nav1.textContent = siteContent.nav["nav-item-1"];

let nav2 = document.getElementById('nav2');
nav2.textContent = siteContent.nav["nav-item-2"];

let nav3 = document.getElementById('nav3');
nav3.textContent = siteContent.nav["nav-item-3"];

let nav4 = document.getElementById('nav4');
nav4.textContent = siteContent.nav["nav-item-4"];

let nav5 = document.getElementById('nav5');
nav5.textContent = siteContent.nav["nav-item-5"];

let nav6 = document.getElementById('nav6');
nav6.textContent = siteContent.nav["nav-item-6"];

// CTA content adding text content insertion for h1, button, and image source.

let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta["h1"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent.cta["img-src"]);

// Top Content text insertion
// Features content

let topFeatureContent = document.querySelector('#features-content-input h4');
topFeatureContent.textContent = siteContent['main-content']['features-h4'];

let topFeatureTextContent = document.querySelector('#features-content-input p');
topFeatureTextContent.textContent = siteContent['main-content']['features-content'];

// About content

let topAboutContent = document.querySelector('#about-content-input h4');
topAboutContent.textContent = siteContent['main-content']['about-h4'];

let topAboutTextContent = document.querySelector('#about-content-input p');
topAboutTextContent.textContent = siteContent['main-content']['about-content'];

// Middle image source insertion

let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute('src', siteContent['main-content']["middle-img-src"]);

// Bottom content text insertion
// Services content

let servicesContent = document.querySelector('#services-content-input h4');
servicesContent.textContent = siteContent['main-content']['services-h4'];

let servicesTextContent = document.querySelector('#services-content-input p');
servicesTextContent.textContent = siteContent['main-content']['services-content'];

// Product content

let productContent = document.querySelector('#product-content-input h4');
productContent.textContent = siteContent['main-content']['product-h4'];

let productTextContent = document.querySelector('#product-content-input p');
productTextContent.textContent = siteContent['main-content']['product-content'];

// Vision content

let visionContent = document.querySelector('#vision-content-input h4');
visionContent.textContent = siteContent['main-content']['vision-h4'];

let visionTextContent = document.querySelector('#vision-content-input p');
visionTextContent.textContent = siteContent['main-content']['vision-content'];

// Contact content text insertion

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent.contact['address'];
contactText[1].textContent = siteContent.contact['phone'];
contactText[2].textContent = siteContent.contact['email'];

// Footer content text insertion

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer["copyright"];




