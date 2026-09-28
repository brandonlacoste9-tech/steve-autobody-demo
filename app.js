const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "0421 893 970",
  "hero.kicker": "Springvale, Victoria · Panel beating & spray painting",
  "hero.title": "Bodywork done right,<br>straight and true.",
  "hero.sub": "Rated 5.0 out of 5 on Birdeye — Steve Autobody is Springvale's panel beater and spray painter, with a specialty in classic Citroën (2CV and DS) body repairs.",
  "hero.cta1": "Book a repair", "hero.cta2": "See services",
  "walkin.w1t": "Mon – Fri 8am – 6pm", "walkin.w1d": "Sat 10am – 2pm · Sun closed",
  "walkin.w2t": "Classic Citroën specialist", "walkin.w2d": "2CV & DS body repairs",
  "walkin.w3t": "Panel beating + spray painting", "walkin.w3d": "Insurance work welcome",
  "stats.hoursNum": "Mon – Sat", "stats.hours": "Open 6 days a week",
  "stats.specNum": "Citroën", "stats.spec": "classic 2CV & DS specialty",
  "stats.rateNum": "5.0 ★", "stats.rate": "Birdeye rating (2 reviews)",
  "stats.quoteNum": "Free", "stats.quote": "quotes before every job",
  "services.kicker": "What we do", "services.title": "Body repairs, from dents to full resprays",
  "services.s1t": "Panel Beating", "services.s1d": "Traditional panel beating — straightened by hand, shaped back to factory lines.",
  "services.s2t": "Spray Painting", "services.s2d": "Colour-matched spray painting with a smooth, factory-fresh finish.",
  "services.s3t": "Classic Citroën Body Repairs", "services.s3d": "Specialist body repairs for classic Citroën 2CV and DS — recommended in Aussie Frogs classic-Citroën forums.",
  "services.s4t": "Dent & Scratch Repair", "services.s4d": "Parking dents, scratches and scuffs repaired and blended invisibly.",
  "services.s5t": "Rust Repairs", "services.s5d": "Rust cut out and repaired properly — sealed and painted to last.",
  "services.s6t": "Insurance Work", "services.s6d": "We work with insurers on accident repairs — we'll help with the claim process.",
  "why.kicker": "Why choose us", "why.title": "A classic Citroën specialty, honest old-school craft",
  "why.intro": "Steve Autobody is known among Aussie Frogs forum members for classic Citroën (2CV and DS) body repairs — the kind of work that takes patience, the right panels and an eye for the original lines. Everyday cars get the same care.",
  "why.l1t": "Citroën classic expertise", "why.l1d": "Recommended in the Aussie Frogs classic-Citroën community for 2CV and DS bodywork.",
  "why.l2t": "Free quotes", "why.l2d": "The price is confirmed before we touch your car.",
  "why.l3t": "Straight talk", "why.l3d": "We explain what needs doing — and what doesn't.",
  "why.l4t": "Springvale, easy to reach", "why.l4d": "On Centre Road, open Monday to Saturday.",
  "gallery.kicker": "The workshop in action", "gallery.title": "A tidy shop, careful work",
  "gallery.c1": "Panel beating by hand, shaped true",
  "gallery.c2": "Classic Citroën, freshly resprayed",
  "gallery.c3": "Clean booth, colour-matched finish",
  "reviews.kicker": "Word on the street", "reviews.title": "Rated by our customers",
  "reviews.more": "5.0 out of 5 on Birdeye — 2 verified reviews",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "Monday to Friday 8am to 6pm, Saturday 10am to 2pm. Closed Sundays.",
  "faq.q2": "Do you repair classic Citroëns?",
  "faq.a2": "Yes — classic Citroën (2CV and DS) body repairs are our specialty, recommended in the Aussie Frogs classic-Citroën forums.",
  "faq.q3": "Do you handle insurance work?",
  "faq.a3": "Yes, we do insurance body repairs and can help you through the claim process. Call us for a free quote.",
  "faq.q4": "Do I need an appointment?",
  "faq.a4": "Call ahead so we can set time aside for you — or drop by during opening hours. Call 0421 893 970.",
  "contact.kicker": "Come see us", "contact.title": "Book your repair",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 6:00 PM<br>Sat: 10:00 AM – 2:00 PM<br>Sun: closed",
  "contact.cta": "Call now to book",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Panel beating & spray painting · Springvale, Victoria"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Steve Autobody — Panel Beating & Spray Painting in Springvale | Classic Citroën Specialist";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
