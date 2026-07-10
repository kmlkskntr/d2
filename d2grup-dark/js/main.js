/* =========================================================
   D2 GRUP — Shared header/footer injection + interactions
   Fully offline (file://) — no fetch, no CDNs.
   ========================================================= */
(function () {
  "use strict";

  /* ---- Inline SVG icon helper ---- */
  var svg = {
    arrow: '<svg class="arw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>'
  };

  /* ---- Determine current page ---- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  var nav = [
    { href: "index.html", label: "ANASAYFA" },
    { href: "kurumsal.html", label: "KURUMSAL" },
    { href: "kategoriler.html", label: "KATEGORİLER" },
    { href: "markalar.html", label: "MARKALAR" },
    { href: "teknolojiler.html", label: "TEKNOLOJİLER" },
    { href: "kozmetik.html", label: "KOZMETİK" },
    { href: "iletisim.html", label: "İLETİŞİM" }
  ];

  var navHtml = nav.map(function (n) {
    var active = (n.href === page) ? " class=\"active\"" : "";
    return '<a href="' + n.href + '"' + active + '>' + n.label + "</a>";
  }).join("");

  /* ---- HEADER ---- */
  var header =
    '<header class="site-header" id="hdr">' +
      '<div class="nav">' +
        '<a href="index.html" class="logo"><b>D2 GRUP</b><span>AESTHETICS</span></a>' +
        '<nav class="nav-links" id="navLinks">' + navHtml + "</nav>" +
        '<div class="nav-right">' +
          '<button class="lang-chip">TR</button>' +
          '<a href="bayi-girisi.html" class="header-cta">BAYİ GİRİŞİ</a>' +
          '<div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>' +
        "</div>" +
      "</div>" +
    "</header>";

  /* ---- FOOTER ---- */
  var footer =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-col footer-about">' +
            '<a href="index.html" class="logo"><b>D2 GRUP</b><span>AESTHETICS</span></a>' +
            '<p>D2 Grup, Türkiye\'nin en büyük profesyonel güzellik cihazları distribütörüdür. Dünya çapındaki ileri teknolojileri Türkiye ile buluşturuyoruz.</p>' +
            '<div class="social-row">' +
              '<a href="#" aria-label="Facebook">f</a>' +
              '<a href="#" aria-label="X">𝕏</a>' +
              '<a href="#" aria-label="Instagram">◎</a>' +
              '<a href="#" aria-label="LinkedIn">in</a>' +
              '<a href="#" aria-label="YouTube">▶</a>' +
            "</div>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h5>Hızlı Erişim</h5>" +
            "<ul>" +
              '<li><a href="index.html">Anasayfa</a></li>' +
              '<li><a href="kurumsal.html">Kurumsal</a></li>' +
              '<li><a href="kategoriler.html">Kategoriler</a></li>' +
              '<li><a href="markalar.html">Markalar</a></li>' +
              '<li><a href="teknolojiler.html">Teknolojiler</a></li>' +
              '<li><a href="iletisim.html">İletişim</a></li>' +
            "</ul>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h5>Kategoriler</h5>" +
            "<ul>" +
              '<li><a href="kategoriler.html">Yüz Teknolojileri</a></li>' +
              '<li><a href="kategoriler.html">Vücut Teknolojileri</a></li>' +
              '<li><a href="kategoriler.html">Longevity Teknolojileri</a></li>' +
              '<li><a href="urunler.html">Tüm Ürünler</a></li>' +
              '<li><a href="kozmetik.html">Kozmetik</a></li>' +
            "</ul>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h5>İletişim</h5>" +
            '<ul class="footer-contact">' +
              '<li><span class="ic">' + svg.pin + '</span><span>Maslak Mah. Ahi Evran Cad. No:6/1, 34398 Sarıyer / İstanbul</span></li>' +
              '<li><span class="ic">' + svg.phone + '</span><span>+90 (212) 123 45 67</span></li>' +
              '<li><span class="ic">' + svg.mail + '</span><span>info@d2grup.com</span></li>' +
            "</ul>" +
          "</div>" +
          '<div class="footer-col">' +
            "<h5>Bülten</h5>" +
            '<p style="color:var(--muted);font-size:14px;margin-bottom:8px">Gelişmelerden haberdar olun.</p>' +
            '<form class="news-form" onsubmit="return D2.newsletter(event)">' +
              '<input type="email" placeholder="E-posta adresiniz" required>' +
              '<button type="submit" aria-label="Abone ol">→</button>' +
            "</form>" +
            '<p class="form-note" id="newsMsg"></p>' +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<p>© 2024 D2 Grup. Tüm hakları saklıdır.</p>" +
          '<div class="legal">' +
            '<a href="#">KVKK</a>' +
            '<a href="#">Gizlilik Politikası</a>' +
            '<a href="#">Çerez Politikası</a>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</footer>";

  /* ---- Inject ---- */
  function inject() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.innerHTML = header;
    if (f) f.innerHTML = footer;
    wire();
  }

  /* ---- Wire up interactions ---- */
  function wire() {
    var hdr = document.getElementById("hdr");
    var hamburger = document.getElementById("hamburger");
    var navLinks = document.getElementById("navLinks");

    // scrolled header
    function onScroll() {
      if (!hdr) return;
      if (window.scrollY > 30) hdr.classList.add("scrolled");
      else hdr.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll);
    onScroll();

    // hamburger
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          hamburger.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    // smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var el = document.querySelector(id);
          if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
        }
      });
    });
  }

  /* ---- Public helpers ---- */
  window.D2 = {
    newsletter: function (e) {
      e.preventDefault();
      var msg = document.getElementById("newsMsg");
      if (msg) { msg.textContent = "Teşekkürler! Bültenimize başarıyla abone oldunuz."; msg.style.color = "var(--gold)"; }
      e.target.reset();
      return false;
    },
    submitForm: function (e, msgId) {
      e.preventDefault();
      var msg = document.getElementById(msgId);
      if (msg) { msg.classList.add("show"); }
      e.target.reset();
      return false;
    },
    // tech tabs
    tab: function (btn, panelId) {
      var head = btn.parentElement;
      head.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var container = head.parentElement;
      container.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
      var panel = document.getElementById(panelId);
      if (panel) panel.classList.add("active");
    },
    // product filter
    filter: function (btn, cat) {
      var bar = btn.parentElement;
      bar.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      document.querySelectorAll("[data-cat]").forEach(function (card) {
        var match = (cat === "all") || card.getAttribute("data-cat").indexOf(cat) > -1;
        card.classList.toggle("hide", !match);
      });
    },
    // detail thumbnail
    thumb: function (el) {
      el.parentElement.querySelectorAll(".thumb").forEach(function (t) { t.classList.remove("active"); });
      el.classList.add("active");
    },
    playVideo: function () {
      alert("Tanıtım videosu yakında burada oynatılacaktır.");
    },
    login: function (e) {
      e.preventDefault();
      var msg = document.getElementById("loginMsg");
      if (msg) { msg.classList.add("show"); msg.textContent = "Giriş başarılı! Bayi paneline yönlendiriliyorsunuz..."; }
      return false;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
