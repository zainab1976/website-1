# FINAL YEAR PROJECT THESIS

---

**Title:** Development of a Premium E-Commerce Landing Website for LANZAA Onion Hair Oil Using Node.js, Express.js, and Modern Web Technologies

**Submitted By:**  
Name: ___________________________  
Roll Number: _____________________  
Session: _________________________  

**Submitted To:**  
Department of ____________________  
University: ______________________  

**Supervisor:** ___________________  

**Date:** June 2026  

---

## ABSTRACT

This final year project presents the design, development, and deployment of a full-stack luxury e-commerce landing website for **LANZAA Onion Hair Oil**, a premium hair care product by LANZAA Hair & Skin, Lahore, Pakistan. The primary objective was to build a modern, responsive, and conversion-focused web platform that enables customers to explore product information and place orders directly through WhatsApp — a widely used ordering channel in the local market.

The system follows the **Model–View–Controller (MVC)** architectural pattern using **Node.js** and **Express.js** on the backend, **EJS** templates for server-side rendering, and **Tailwind CSS** with custom styling for a premium black, gold, and beige brand aesthetic. Key features include an animated product carousel, glassmorphism UI cards, testimonial slider, product gallery with lightbox viewer, tabbed product details, client-side shopping cart with localStorage, SEO middleware, and cloud deployment on **Netlify** using serverless functions.

The website is fully responsive across mobile, tablet, and desktop devices. Testing confirms that all routes function correctly in local and production environments. This project demonstrates practical application of web engineering principles to solve real-world business needs for a local cosmetic brand.

**Keywords:** E-Commerce, Express.js, MVC, WhatsApp Integration, Responsive Web Design, Serverless Deployment, LANZAA Hair Oil

---

## TABLE OF CONTENTS

1. [Introduction](#1-introduction)  
2. [Literature Review](#2-literature-review)  
3. [System Analysis and Requirements](#3-system-analysis-and-requirements)  
4. [System Design](#4-system-design)  
5. [Implementation](#5-implementation)  
6. [Testing and Evaluation](#6-testing-and-evaluation)  
7. [Deployment](#7-deployment)  
8. [Conclusion and Future Work](#8-conclusion-and-future-work)  
9. [References](#9-references)  
10. [Appendices](#10-appendices)  

---

## 1. INTRODUCTION

### 1.1 Background

The growth of digital commerce has transformed how small and medium businesses in Pakistan reach customers. Hair care products, especially natural and organic solutions such as onion-based hair oils, have gained significant market demand. **LANZAA Hair & Skin** required a professional online presence that reflects the premium quality of its flagship product — **LANZAA Onion Hair Oil** — while providing a simple and trusted ordering mechanism.

Traditional e-commerce platforms often require payment gateways, complex backend systems, and high maintenance costs. For a local brand targeting Pakistani customers, **WhatsApp-based ordering** offers a practical, low-friction alternative that aligns with customer behaviour.

### 1.2 Problem Statement

LANZAA lacked a dedicated, modern website to:

- Showcase product benefits, ingredients, and brand story professionally  
- Provide a mobile-friendly shopping experience  
- Convert visitors into orders through WhatsApp  
- Compete visually with international cosmetic brand websites  

A static brochure website would not suffice; the solution needed dynamic routing, reusable components, SEO optimization, and premium UI/UX.

### 1.3 Objectives

**Primary Objectives:**

1. Develop a full-stack website using Node.js, Express.js, and MVC architecture  
2. Design a luxury cosmetic brand interface (black, gold, beige theme)  
3. Implement WhatsApp as the primary conversion and checkout channel  
4. Ensure full responsiveness and cross-device compatibility  
5. Deploy the application to a cloud hosting platform (Netlify)  

**Secondary Objectives:**

1. Add client-side cart functionality with order message generation  
2. Implement SEO middleware for search engine visibility  
3. Optimize image loading and static asset performance  
4. Include scroll animations, carousel, lightbox, and testimonial features  

### 1.4 Scope

**In Scope:**

- Home, Product, About, and Contact pages  
- Product gallery, tabs, cart drawer, and order forms  
- WhatsApp CTA tracking and floating button  
- Local development and Netlify cloud deployment  

**Out of Scope:**

- Online payment gateway integration  
- Admin panel and inventory management  
- User authentication and accounts  
- Server-side order database  

### 1.5 Project Significance

This project bridges academic web development concepts with a real commercial use case. It demonstrates how MVC architecture, modern frontend techniques, and serverless deployment can deliver a production-ready business website at minimal infrastructure cost.

---

## 2. LITERATURE REVIEW

### 2.1 E-Commerce and Landing Pages

Landing pages are designed to convert visitors into customers by presenting a single product or brand message with clear calls-to-action (CTAs). Research in digital marketing shows that simplified checkout flows — such as messaging-based ordering — can increase conversion rates in markets where mobile messaging apps dominate daily communication.

### 2.2 MVC Architecture in Web Applications

The **Model–View–Controller** pattern separates application logic into three layers:

| Layer | Responsibility |
|-------|----------------|
| **Model** | Data and business logic |
| **View** | User interface presentation |
| **Controller** | Request handling and coordination |

This separation improves maintainability, scalability, and team collaboration — widely adopted in Express.js applications.

### 2.3 Server-Side Rendering vs. Single Page Applications

**EJS (Embedded JavaScript)** server-side rendering was chosen over client-only frameworks because:

- SEO-friendly HTML is generated on the server  
- Simpler deployment for content-driven product pages  
- Lower JavaScript bundle size on initial load  
- Direct integration with Express routing  

### 2.4 WhatsApp Commerce in Pakistan

WhatsApp is one of the most used communication platforms in Pakistan. Businesses commonly use `wa.me` deep links with pre-filled order messages, eliminating the need for complex payment infrastructure while maintaining personal customer interaction.

### 2.5 Related Technologies

- **Express.js:** Minimalist Node.js web framework for routing and middleware  
- **Tailwind CSS:** Utility-first CSS framework for rapid responsive design  
- **Netlify Serverless Functions:** Cloud execution of Node.js backend without dedicated server management  

---

## 3. SYSTEM ANALYSIS AND REQUIREMENTS

### 3.1 Functional Requirements

| ID | Requirement |
|----|-------------|
| FR-01 | Display home page with hero carousel and product highlights |
| FR-02 | Show product details with gallery, tabs, and pricing |
| FR-03 | Allow users to add items to cart and adjust quantity |
| FR-04 | Generate structured WhatsApp order messages |
| FR-05 | Provide About page with brand story and timeline |
| FR-06 | Provide Contact page with email copy and WhatsApp CTA |
| FR-07 | Sticky navigation with cart access on all pages |
| FR-08 | Support mobile swipe on product carousel |

### 3.2 Non-Functional Requirements

| ID | Requirement |
|----|-------------|
| NFR-01 | Responsive design (mobile-first) |
| NFR-02 | Page load under 3 seconds on average connection |
| NFR-03 | SEO meta tags per route |
| NFR-04 | Lazy loading for product images |
| NFR-05 | Clean MVC code structure |
| NFR-06 | Cloud deployment compatibility |

### 3.3 Use Case Summary

**Actor:** Customer (Visitor)

**Main Use Cases:**

1. Browse product information  
2. View product gallery and ingredients  
3. Add product to cart  
4. Submit order via WhatsApp with name, phone, and address  
5. Contact brand via email or WhatsApp  

### 3.4 Feasibility Study

| Factor | Assessment |
|--------|------------|
| **Technical** | Feasible — mature open-source stack (Node.js, Express, EJS) |
| **Economic** | Low cost — free tier hosting on Netlify, no payment API fees |
| **Operational** | Easy — WhatsApp orders managed manually by business owner |
| **Schedule** | Achievable within one semester final project timeline |

---

## 4. SYSTEM DESIGN

### 4.1 Architecture Overview

The system uses a **three-tier architecture**:

```
┌─────────────────────────────────────────────┐
│              CLIENT (Browser)               │
│   HTML · CSS · JavaScript · localStorage    │
└─────────────────────┬───────────────────────┘
                      │ HTTP Requests
┌─────────────────────▼───────────────────────┐
│           SERVER (Express.js / MVC)         │
│  Routes → Controllers → Models → Views      │
└─────────────────────┬───────────────────────┘
                      │
┌─────────────────────▼───────────────────────┐
│         DATA LAYER (Static JSON Model)      │
│   product.js — product, images, content     │
└─────────────────────────────────────────────┘
```

### 4.2 MVC Structure

```
Lanza hair oil/
├── server.js                 # Application entry point
├── routes/index.js           # URL routing
├── controllers/
│   └── pageController.js     # Page render logic
├── models/
│   └── product.js            # Product & content data
├── middleware/
│   ├── seo.js                # SEO & canonical URLs
│   └── staticCache.js        # Image cache headers
├── views/
│   ├── index.html            # Home page
│   ├── product.html          # Product page
│   ├── about.html            # About page
│   ├── contact.html          # Contact page
│   └── partials/             # Reusable components
├── public/
│   ├── css/custom.css        # Brand styling
│   ├── js/main.js            # UI interactions
│   ├── js/cart.js            # Cart & WhatsApp orders
│   └── images/               # Product images
├── netlify/
│   └── functions/server.js   # Serverless wrapper
└── netlify.toml              # Deployment configuration
```

### 4.3 Database Design

No traditional database is used. Product data is stored in `models/product.js` as JavaScript objects/exported constants. Cart data persists in the browser via **localStorage** (`lanzaa_cart` key).

**Rationale:** Suitable for a single-product catalog with WhatsApp-based order fulfilment and no user accounts.

### 4.4 Route Design

| Method | Route | Controller | View |
|--------|-------|------------|------|
| GET | `/` | `home` | `index.html` |
| GET | `/product` | `product` | `product.html` |
| GET | `/about` | `about` | `about.html` |
| GET | `/contact` | `contact` | `contact.html` |

### 4.5 UI/UX Design

**Design Theme:**

- **Colors:** Black (#0d0d0d), Gold (#c9a84c), Beige (#f5f0e8)  
- **Typography:** Playfair Display (headings), Poppins (body)  
- **Style:** Luxury cosmetic — glassmorphism cards, gradient CTAs, subtle textures  

**Key UI Components:**

- Sticky blur navbar  
- Page loader with logo reveal  
- Scroll progress bar  
- Hero carousel with touch swipe  
- Testimonial slider  
- Product lightbox viewer  
- Floating WhatsApp button with pulse animation  
- Mobile sticky "Buy Now on WhatsApp" bar (product page)  

### 4.6 WhatsApp Order Flow

```
User fills order form / cart checkout
        ↓
JavaScript builds structured message
        ↓
Opens wa.me/923194426308?text=...
        ↓
Customer sends message on WhatsApp
        ↓
Business owner confirms order manually
```

**Sample Order Message:**

```
Hello! I want to place an order:

*Order Details*
• LANZAA Onion Hair Oil (6.7oz / 200ml)
  Qty: 2
  Price: Rs. 1999 each

*Customer Name:* [Name]
*Phone:* [Phone]
*Address:* [Address]

Sent from LANZAA website
```

---

## 5. IMPLEMENTATION

### 5.1 Technology Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js 18+ |
| Backend Framework | Express.js 4.x |
| Template Engine | EJS (`.html` views) |
| Frontend CSS | Tailwind CSS (CDN) + custom.css |
| Client Script | Vanilla JavaScript |
| Version Control | Git / GitHub |
| Hosting | Netlify (serverless) |
| Ordering Channel | WhatsApp Business API (wa.me links) |

### 5.2 Backend Implementation

**server.js** configures Express with:

- EJS view engine  
- SEO and static cache middleware  
- Static file serving from `/public`  
- Route mounting  
- Conditional `app.listen()` for local vs. serverless export  

**pageController.js** uses a `renderPage()` helper to pass SEO metadata (`pageTitle`, `pageDescription`, `pageKeywords`, `canonicalUrl`) to each view.

**product.js (Model)** contains:

- Product details (name, price Rs. 1999, volume 200ml)  
- Hero and gallery image arrays  
- Benefits, ingredients, testimonials  
- Brand timeline and mission/vision content  
- WhatsApp URL and contact information  

### 5.3 Frontend Implementation

**main.js** handles:

- Page loader and scroll progress  
- Navbar blur on scroll  
- Scroll reveal animations (Intersection Observer)  
- Hero carousel with auto-slide and mobile swipe  
- Product gallery and lightbox  
- Product detail tabs  
- Testimonial slider  
- Email copy-to-clipboard (contact page)  
- WhatsApp click event logging  

**cart.js** handles:

- localStorage cart CRUD operations  
- Cart drawer UI rendering  
- Order message builder  
- Product page quantity and form submission  
- WhatsApp redirect on checkout  

### 5.4 Partial Templates System

Reusable EJS partials reduce code duplication:

| Partial | Purpose |
|---------|---------|
| `head.html` | Meta tags, fonts, Tailwind config |
| `navbar.html` | Sticky navigation |
| `footer.html` | Footer links and contact |
| `logo.html` | Brand logo component |
| `cart-drawer.html` | Slide-out cart |
| `whatsapp.html` | Floating WhatsApp button |
| `loader.html` | Page load animation |
| `scripts.html` | JS file includes |

### 5.5 SEO Implementation

`middleware/seo.js` sets canonical URLs and route-specific keywords. Each page includes:

- `<meta name="description">`  
- Open Graph tags (`og:title`, `og:description`, `og:image`)  
- Twitter card meta tags  
- Canonical link  

### 5.6 Performance Optimizations

- Lazy loading on product images (`loading="lazy"`)  
- Fixed aspect ratios to prevent layout shift  
- Static image cache headers (24-hour CDN cache)  
- CSS animations using GPU-friendly transforms  
- Minimal npm dependencies (Express, EJS, serverless-http only)  

---

## 6. TESTING AND EVALUATION

### 6.1 Testing Strategy

| Test Type | Method |
|-----------|--------|
| Functional | Manual route and feature testing |
| Responsive | Chrome DevTools device emulation |
| Browser | Chrome, Edge, Firefox |
| Deployment | Netlify production URL verification |
| Cart | localStorage persistence across page reloads |

### 6.2 Test Cases and Results

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| T-01 | Open home page `/` | Hero, carousel, sections load | Pass |
| T-02 | Navigate to `/product` | Gallery, tabs, order form visible | Pass |
| T-03 | Add to cart | Cart badge updates, drawer shows item | Pass |
| T-04 | Submit WhatsApp order | WhatsApp opens with formatted message | Pass |
| T-05 | Product lightbox | Click image opens fullscreen viewer | Pass |
| T-06 | Mobile navigation | Hamburger menu toggles correctly | Pass |
| T-07 | Contact email copy | Email copied to clipboard | Pass |
| T-08 | SEO meta tags | Unique title/description per page | Pass |
| T-09 | 404 handling | Unknown route redirects to home | Pass |
| T-10 | Netlify deployment | Home page renders via serverless function | Pass |

### 6.3 Performance Observations

- Static assets (CSS, JS, images) served efficiently from `/public`  
- Server-rendered pages provide immediate content for crawlers  
- Animations run smoothly on mid-range mobile devices  

### 6.4 Limitations Identified

1. Cart data is browser-specific (not synced across devices)  
2. No admin dashboard for content updates  
3. Orders require manual confirmation on WhatsApp  
4. Netlify serverless cold starts may add slight initial delay  

---

## 7. DEPLOYMENT

### 7.1 Local Deployment

```bash
npm install
npm start
```

Application runs at: `http://localhost:3000`

### 7.2 Netlify Cloud Deployment

Configuration in `netlify.toml`:

- **Publish directory:** `public` (static assets)  
- **Functions directory:** `netlify/functions`  
- **Build command:** `npm install`  
- **Redirect rule:** All non-static routes → serverless Express function  

The Express app is wrapped with `serverless-http` for Netlify Functions compatibility. Path resolution (`utils/paths.js`) ensures EJS views are found correctly in the serverless environment.

### 7.3 Version Control

Source code is maintained on GitHub:

`https://github.com/zainab1976/website-1.git`

---

## 8. CONCLUSION AND FUTURE WORK

### 8.1 Conclusion

This project successfully delivers a premium e-commerce landing website for LANZAA Onion Hair Oil. The MVC-based architecture provides a clean, maintainable codebase. The luxury UI design, combined with WhatsApp ordering, creates an effective digital storefront suited to the Pakistani market.

All primary and secondary objectives were achieved, including responsive design, cart functionality, SEO optimization, and cloud deployment. The project demonstrates practical full-stack web development skills applicable to real business scenarios.

### 8.2 Future Enhancements

1. **Admin Panel** — CMS for updating product content without code changes  
2. **Payment Gateway** — JazzCash, EasyPaisa, or Stripe integration  
3. **Order Database** — MongoDB or MySQL for order history and analytics  
4. **Email Notifications** — Automatic order confirmation emails  
5. **Multi-Product Support** — Expand catalog beyond single hair oil SKU  
6. **Customer Reviews** — Real authenticated review system  
7. **Analytics Dashboard** — Track WhatsApp CTA clicks and page visits  
8. **PWA Support** — Offline caching and installable mobile app experience  

---

## 9. REFERENCES

1. Express.js Official Documentation — https://expressjs.com/  
2. Node.js Official Documentation — https://nodejs.org/  
3. EJS Embedded JavaScript Templates — https://ejs.co/  
4. Tailwind CSS Documentation — https://tailwindcss.com/docs  
5. Netlify Functions Documentation — https://docs.netlify.com/functions/overview/  
6. WhatsApp Click to Chat API — https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat  
7. Mozilla Developer Network (MDN) — Web APIs and HTML/CSS references  
8. Fielding, R. T. (2000). *Architectural Styles and the Design of Network-based Software Architectures* — REST architectural principles  
9. Gamma, E. et al. (1994). *Design Patterns* — MVC pattern foundations  

---

## 10. APPENDICES

### Appendix A: Project File Structure

See Section 4.2 for complete directory tree.

### Appendix B: Product Specifications

| Attribute | Value |
|-----------|-------|
| Product Name | LANZAA Onion Hair Oil |
| Volume | 6.7oz / 200ml |
| Price | Rs. 1,999 (PKR) |
| Key Ingredients | Onion Oil, Almond Oil, Coconut Oil, Olive Oil, Black Seed Oil, Jojoba Oil |
| Brand | LANZAA Hair & Skin |
| Location | Johar Town, Lahore, Pakistan |
| WhatsApp | +92 319 4426308 |
| Email | info.lanzaapk@gmail.com |
| Website | www.lanzaapk.com |

### Appendix C: Screenshots Checklist

*(Insert screenshots when submitting printed thesis)*

1. Home page — Hero section  
2. Home page — Product showcase  
3. Product page — Gallery and tabs  
4. Product page — Cart drawer  
5. About page — Brand timeline  
6. Contact page — Two-column layout  
7. Mobile responsive view  
8. WhatsApp order message screen  
9. Netlify deployment dashboard  
10. GitHub repository  

### Appendix D: Source Code Listing

Full source code is available in the project repository and submitted CD/USB (if required by university).

**Main Entry Point:** `server.js`  
**Repository:** https://github.com/zainab1976/website-1.git  

### Appendix E: Declaration

I hereby declare that this project thesis titled **"Development of a Premium E-Commerce Landing Website for LANZAA Onion Hair Oil Using Node.js, Express.js, and Modern Web Technologies"** is my own work and has not been submitted previously for any degree at this or any other institution.

**Student Signature:** ___________________  
**Date:** ___________________  

---

*End of Thesis Document*
