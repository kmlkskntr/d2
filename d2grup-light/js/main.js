/* =========================================================
   D2 GRUP — shared header/footer + interactions
   Works fully offline (file://). No fetch, no CDNs.
   ========================================================= */
(function () {
  "use strict";

  var NAV = [
    { label: "ANASAYFA",     href: "index.html" },
    { label: "KURUMSAL",     href: "kurumsal.html" },
    { label: "KATEGORİLER",  href: "kategoriler.html" },
    { label: "MARKALAR",     href: "markalar.html" },
    { label: "TEKNOLOJİLER", href: "teknolojiler.html" },
    { label: "KOZMETİK",     href: "kozmetik.html" },
    { label: "İLETİŞİM",     href: "iletisim.html" }
  ];

  // current page file name
  var path = window.location.pathname.split("/").pop() || "index.html";
  if (path === "") path = "index.html";

  function navLinks(cls) {
    return NAV.map(function (n) {
      var active = n.href === path ? " active" : "";
      return '<a class="' + (cls || "") + active + '" href="' + n.href + '">' + n.label + "</a>";
    }).join("");
  }

  /* ---------- HEADER ---------- */
  var headerHTML =
    '<header class="site-header" id="siteHeader">' +
      '<div class="container nav">' +
        '<a class="brand" href="index.html">D2<small>GRUP</small></a>' +
        '<nav class="nav-links">' + navLinks() + '</nav>' +
        '<div class="nav-actions">' +
          '<button class="lang-chip" aria-label="Dil">TR ' + chevron() + '</button>' +
          '<a class="header-cta" href="bayi-girisi.html">BAYİ GİRİŞİ</a>' +
          '<button class="hamburger" id="hamburger" aria-label="Menü">' + iconMenu() + '</button>' +
        '</div>' +
      '</div>' +
    '</header>' +
    /* mobile menu */
    '<div class="mobile-menu" id="mobileMenu">' +
      '<div class="mm-top">' +
        '<a class="brand" href="index.html">D2<small>GRUP</small></a>' +
        '<button class="mm-close" id="mmClose" aria-label="Kapat">' + iconClose() + '</button>' +
      '</div>' +
      '<nav class="mm-links">' + navLinks() + '</nav>' +
      '<div class="mm-actions">' +
        '<a class="btn btn--outline" href="bayi-girisi.html">BAYİ GİRİŞİ</a>' +
        '<a class="btn btn--dark" href="iletisim.html">İLETİŞİME GEÇ</a>' +
      '</div>' +
    '</div>';

  /* ---------- FOOTER ---------- */
  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="index.html">D2<small>GRUP</small></a>' +
            '<p>Dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturan lider distribütör.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>HIZLI ERİŞİM</h4>' +
            '<ul>' +
              '<li><a href="kurumsal.html">Kurumsal</a></li>' +
              '<li><a href="urunler.html">Ürünler</a></li>' +
              '<li><a href="markalar.html">Markalar</a></li>' +
              '<li><a href="teknolojiler.html">Teknolojiler</a></li>' +
              '<li><a href="bayi-girisi.html">Bayi Girişi</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>KATEGORİLER</h4>' +
            '<ul>' +
              '<li><a href="kategoriler.html">Yüz Teknolojileri</a></li>' +
              '<li><a href="kategoriler.html">Vücut Teknolojileri</a></li>' +
              '<li><a href="kategoriler.html">Longevity</a></li>' +
              '<li><a href="kozmetik.html">Kozmetik Ürünler</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>İLETİŞİM</h4>' +
            '<ul>' +
              '<li><a href="iletisim.html">Maslak Mah. Ahi Evran Cad. No:6/1, 34398 Sarıyer / İstanbul</a></li>' +
              '<li><a href="tel:+902121234567">+90 (212) 123 45 67</a></li>' +
              '<li><a href="mailto:info@d2grup.com">info@d2grup.com</a></li>' +
            '</ul>' +
            '<h4 style="margin-top:26px">BÜLTEN</h4>' +
            '<form class="newsletter" onsubmit="return false">' +
              '<input type="email" placeholder="E-posta adresiniz" aria-label="E-posta" />' +
              '<button type="submit" aria-label="Abone ol">' + arrowRight() + '</button>' +
            '</form>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bar">' +
          '<span>© 2024 D2 Grup. Tüm hakları saklıdır.</span>' +
          '<div class="legal"><a href="#">KVKK</a><a href="#">Gizlilik</a><a href="#">Çerez Politikası</a></div>' +
          '<div class="socials">' +
            '<a href="#" aria-label="Instagram">' + iconInstagram() + '</a>' +
            '<a href="#" aria-label="LinkedIn">' + iconLinkedin() + '</a>' +
            '<a href="#" aria-label="YouTube">' + iconYoutube() + '</a>' +
            '<a href="#" aria-label="X">' + iconX() + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  /* ---------- inject ---------- */
  function inject() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.innerHTML = headerHTML;
    if (f) f.innerHTML = footerHTML;
    wire();
  }

  /* ---------- interactions ---------- */
  function wire() {
    var burger = document.getElementById("hamburger");
    var menu = document.getElementById("mobileMenu");
    var close = document.getElementById("mmClose");

    if (burger && menu) {
      burger.addEventListener("click", function () {
        menu.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }
    function closeMenu() {
      if (!menu) return;
      menu.classList.remove("open");
      document.body.style.overflow = "";
    }
    if (close) close.addEventListener("click", closeMenu);
    if (menu) {
      menu.querySelectorAll(".mm-links a").forEach(function (a) {
        a.addEventListener("click", closeMenu);
      });
    }

    // header goes translucent-dark when over a dark hero
    var header = document.getElementById("siteHeader");
    var darkHero = document.querySelector("[data-dark-hero]");
    if (header && darkHero) {
      var onScroll = function () {
        var threshold = darkHero.offsetTop + darkHero.offsetHeight - header.offsetHeight - 4;
        if (window.scrollY < threshold) header.classList.add("on-dark");
        else header.classList.remove("on-dark");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });

    // product catalog filtering (urunler.html)
    var filters = document.querySelectorAll(".filter-btn");
    var products = document.querySelectorAll("[data-cat]");
    if (filters.length && products.length) {
      filters.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filters.forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          var cat = btn.getAttribute("data-filter");
          products.forEach(function (p) {
            var show = cat === "all" || p.getAttribute("data-cat").indexOf(cat) > -1;
            p.style.display = show ? "" : "none";
          });
        });
      });
    }

    // simple form handling (contact / dealer)
    document.querySelectorAll("form[data-mock]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = form.querySelector(".form-success");
        if (ok) {
          ok.classList.add("show");
          form.reset();
          ok.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });

    // detail page thumbnail swap (cosmetic)
    document.querySelectorAll(".thumbs .th").forEach(function (th) {
      th.addEventListener("click", function () {
        document.querySelectorAll(".thumbs .th").forEach(function (t) { t.classList.remove("active"); });
        th.classList.add("active");
      });
    });
  }

  /* ---------- inline SVG icons ---------- */
  function chevron(){return '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';}
  function iconMenu(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';}
  function iconClose(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';}
  function arrowRight(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';}
  function iconInstagram(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';}
  function iconLinkedin(){return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg>';}
  function iconYoutube(){return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.77-1.77C19.36 5.1 12 5.1 12 5.1s-7.36 0-8.83.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.77 1.77c1.47.43 8.83.43 8.83.43s7.36 0 8.83-.43a2.5 2.5 0 0 0 1.77-1.77C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5z"/></svg>';}
  function iconX(){return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H1.4l8.1-9.3L1 2h7l4.9 6.5zM17.7 20h1.7L7.4 4H5.6z"/></svg>';}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
