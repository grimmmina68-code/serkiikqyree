import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import bgVideo from "@/assets/bg-video.mp4";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Barbershop By Serki — Nabburg" },
      { name: "description", content: "Premium Barbershop in Nabburg. Präzision, Stil und perfekter Service. Online buchen — keine Wartezeit." },
      { property: "og:title", content: "Barbershop By Serki — Nabburg" },
      { property: "og:description", content: "Premium Barbershop in Nabburg. Online Termin buchen." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    // CURSOR
    const cr = document.getElementById("cr");
    const cr2 = document.getElementById("cr2");
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cr) cr.style.transform = `translate(${mx - 6}px,${my - 6}px)`;
    };
    document.addEventListener("mousemove", onMove);
    let raf = 0;
    const animate = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      if (cr2) cr2.style.transform = `translate(${rx - 20}px,${ry - 20}px)`;
      raf = requestAnimationFrame(animate);
    };
    animate();
    const onEnter = () => cr2?.classList.add("big");
    const onLeave = () => cr2?.classList.remove("big");
    const interactive = document.querySelectorAll("a,button");
    interactive.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // LOADER
    const loaderTimer = setTimeout(() => {
      const l = document.getElementById("bss-loader");
      l?.classList.add("out");
      setTimeout(() => l?.remove(), 1100);
    }, 2000);

    // NAV scroll
    const nav = document.getElementById("bss-nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 60);
      const s = window.scrollY;
      const back = document.querySelector<HTMLElement>(".hero-text-back");
      const front = document.querySelector<HTMLElement>(".hero-text-front");
      const photo = document.querySelector<HTMLElement>(".hero-photo");
      if (back) back.style.transform = `translateY(${s * 0.15}px)`;
      if (front) front.style.transform = `translateY(${s * 0.05}px)`;
      if (photo) photo.style.transform = `translateY(${s * 0.1}px)`;
    };
    window.addEventListener("scroll", onScroll);

    // REVEAL
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("on"), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".rv").forEach(el => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(loaderTimer);
      interactive.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      obs.disconnect();
    };
  }, []);

  return (
    <div className="bss-root">
      <div id="cr"></div>
      <div id="cr2"></div>

      <div id="bss-loader">
        <div className="ld-word"><span>BARBERSHOP</span></div>
        <div className="ld-word"><span>BY SERKI</span></div>
        <div className="ld-word"><span>NABBURG</span></div>
        <div className="ld-bar"></div>
      </div>

      <nav id="bss-nav" className="bss-nav">
        <a href="#" className="nav-logo">BS<em>.</em></a>
        <div className="nav-socials">
          <a href="https://www.instagram.com/barbershopbyserki/" target="_blank" rel="noreferrer" aria-label="Instagram" className="nav-soc">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@barbershop.by.ser" target="_blank" rel="noreferrer" aria-label="TikTok" className="nav-soc">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 106.34 6.34V8.69a8.18 8.18 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/></svg>
          </a>
          <a href="https://www.google.com/maps/place/BarberShop+By+Serki/@49.4520183,12.1783325,17z/data=!3m1!4b1!4m6!3m5!1s0x47a0212854a25a8b:0x264576da16b3b9e3!8m2!3d49.4520183!4d12.1809074!16s%2Fg%2F11ywdn_9g_?hl=de-DE" target="_blank" rel="noreferrer" aria-label="Google Maps" className="nav-soc">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#bss-services">Preise</a></li>
          <li><a href="#bss-gallery">Galerie</a></li>
          <li><a href="#bss-hours">Zeiten</a></li>
          <li><a href="#bss-contact">Kontakt</a></li>
        </ul>
        <a href="tel:017670962134" className="nav-cta">Anrufen</a>
      </nav>

      <section id="bss-hero">
        <div className="hero-gradient"></div>
        <div className="hero-text-back"><div className="big-text-back">SERKI</div></div>
        <div className="hero-photo">
          <img src={heroImg} alt="Barbershop By Serki Interior" />
        </div>
        <div className="hero-text-front"><div className="big-text-front">SERKI</div></div>

        <div className="hero-center">
          <div className="hero-top-tag">Nabburg · Bayern</div>
          <h1 className="hero-brand">BARBERSHOP <em>BY SERKI</em></h1>
          <div className="hero-divider"><span>Premium · Präzision · Stil</span></div>
          <div className="hero-btns">
            <a href="tel:017670962134" className="btn-acc">Anrufen</a>
          </div>
        </div>

        <div className="badge badge-1">
          <div className="b-num">5.0</div>
          <div className="b-lbl">Google Rating</div>
        </div>
        <div className="badge badge-2">
          <div className="b-num">★★★★★</div>
          <div className="b-lbl">Top Bewertung</div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="s-line"></div>
        </div>
      </section>

      <section id="bss-services">
        <div className="services-header rv">
          <span className="sec-tag">Preisliste</span>
          <h2 className="sec-title">UNSERE LEISTUNGEN</h2>
        </div>
        <div className="services-grid">
          {[
            { n: "01", name: "Trockenhaarschnitt", desc: "Präziser Haarschnitt mit Maschine und Schere. Professionelle Finisierung inklusive.", price: "16" },
            { n: "02", name: "Haare schneiden, waschen & föhnen", desc: "Komplettservice — Waschen, Schneiden und professionelles Föhnen für den perfekten Look.", price: "21" },
            { n: "03", name: "Schneiden & Rasieren", desc: "Das Komplettpaket — Haarschnitt kombiniert mit einer präzisen Bartrasur.", price: "25" },
            { n: "04", name: "Gesichtsrasur", desc: "Sanfte und präzise Rasur für ein gepflegtes und frisches Erscheinungsbild.", price: "12" },
            { n: "05", name: "Augenbrauen mit Faden", desc: "Präzises Fadenepilieren für perfekt geformte Augenbrauen.", price: "7" },
            { n: "06", name: "Nasenlöcher mit Wachs", desc: "Schnelle und effektive Nasenharentfernung mit Warmwachs.", price: "6" },
          ].map(s => (
            <div className="svc rv" key={s.n}>
              <div className="svc-n">{s.n}</div>
              <div className="svc-bar"></div>
              <div className="svc-name">{s.name}</div>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-price"><sup>€</sup>{s.price}</div>
            </div>
          ))}
          <div className="svc rv" style={{ gridColumn: "1/-1", maxWidth: 360, margin: "0 auto", width: "100%" }}>
            <div className="svc-n">07</div>
            <div className="svc-bar"></div>
            <div className="svc-name">Kinderhaarschnitt</div>
            <p className="svc-desc">Liebevoller Haarschnitt für Kinder bis 10 Jahre. Mit Geduld und besonderer Fürsorge.</p>
            <div className="svc-price"><sup>€</sup>12</div>
          </div>
        </div>
      </section>

      <section id="bss-gallery">
        <div className="gallery-head rv">
          <span className="sec-tag">Unsere Arbeit</span>
          <h2 className="sec-title">GALERIE</h2>
        </div>
        <div className="gallery-video-bg">
          <video src={bgVideo} autoPlay loop muted playsInline />
          <div className="gallery-video-overlay"></div>
        </div>
        <div className="gallery-circular">
          <div className="circular-track">
            {[...[g1, g2, g4, g5], ...[g1, g2, g4, g5]].map((src, i) => (
              <div className="circ-item" key={i}>
                <img src={src} alt={`Cut ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bss-hours">
        <div className="hours-inner">
          <div className="rv">
            <span className="sec-tag">Öffnungszeiten</span>
            <h2 className="sec-title" style={{ fontSize: "clamp(36px,5vw,56px)" }}>WIR SIND FÜR EUCH DA</h2>
            {[
              ["Montag", "09:00 — 19:00"],
              ["Dienstag", "09:00 — 19:00"],
              ["Mittwoch", "09:00 — 19:00"],
              ["Donnerstag", "09:00 — 19:00"],
              ["Freitag", "09:00 — 19:00"],
            ].map(([d, t], i) => (
              <div className="h-row" key={d} style={i === 0 ? { marginTop: 28 } : undefined}>
                <span className="h-day">{d}</span>
                <span className="h-time">{t}</span>
              </div>
            ))}
            <div className="h-row">
              <span className="h-day today">Samstag ★</span>
              <span className="h-time">09:00 — 18:00</span>
            </div>
            <div className="h-row">
              <span className="h-day">Sonntag</span>
              <span className="h-closed">Geschlossen</span>
            </div>
          </div>
          <div className="hcta rv">
            <h3 className="hcta-title">RUF UNS<br /><em>EINFACH AN.</em></h3>
            <p className="hcta-sub">Vereinbare deinen Termin telefonisch — direkt, schnell und persönlich.</p>
            <a href="tel:017670962134" className="btn-acc" style={{ width: "fit-content" }}>Jetzt anrufen</a>
            <a href="tel:017670962134" className="btn-ghost" style={{ width: "fit-content" }}>017670962134</a>
          </div>
        </div>
      </section>

      <section id="bss-contact">
        <div className="rv">
          <span className="sec-tag">Kontakt & Standort</span>
          <h2 className="sec-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 32 }}>FINDET UNS</h2>
          <div className="ci-label">Adresse</div>
          <div className="ci-val">Georgenstraße 7<br />92507 Nabburg</div>
          <div className="ci-div"></div>
          <div className="ci-label">Telefon</div>
          <div className="ci-val"><a href="tel:017670962134">017670962134</a></div>
          <div className="ci-div"></div>
          <div className="ci-label">Folgt uns</div>
          <div className="social-row">
            <a href="https://www.instagram.com/barbershopbyserki/" className="soc-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@barbershop.by.ser" className="soc-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" /></svg>
              TikTok
            </a>
            <a href="https://www.google.com/maps/place/BarberShop+By+Serki/@49.4520183,12.1783325,17z/data=!3m1!4b1!4m6!3m5!1s0x47a0212854a25a8b:0x264576da16b3b9e3!8m2!3d49.4520183!4d12.1809074!16s%2Fg%2F11ywdn_9g_?hl=de-DE" className="soc-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              Google Maps
            </a>
          </div>
        </div>
        <div className="rv">
          <div className="map-box">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.5!2d12.1783325!3d49.4520183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0212854a25a8b%3A0x264576da16b3b9e3!2sBarberShop%20By%20Serki!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div style={{ marginTop: 12, padding: "18px 20px", background: "#13112A", border: "1px solid rgba(124,92,191,.1)" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.55)", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "#9B7FD4", fontWeight: 500 }}>Georgenstraße 7, 92507 Nabburg</strong><br />
              <a href="https://www.google.com/maps/place/BarberShop+By+Serki/@49.4520183,12.1783325,17z/data=!3m1!4b1!4m6!3m5!1s0x47a0212854a25a8b:0x264576da16b3b9e3!8m2!3d49.4520183!4d12.1809074!16s%2Fg%2F11ywdn_9g_?hl=de-DE" target="_blank" rel="noreferrer" style={{ color: "#9B7FD4", textDecoration: "none", fontSize: 10, letterSpacing: ".15em", cursor: "none" }}>Route planen →</a>
            </p>
          </div>
        </div>
      </section>

      <section id="bss-book">
        <div className="rv">
          <h2 className="book-big">BEREIT FÜR<br /><em>DEINEN LOOK?</em></h2>
          <p className="book-sub">Ruf uns an · Persönlich · Schnell</p>
          <a href="tel:017670962134" className="btn-acc">Jetzt anrufen</a>
        </div>
      </section>

      <footer className="bss-footer">
        <div className="f-logo">Barbershop By Serki</div>
        <div className="f-links">
          <a href="#bss-services">Preise</a>
          <a href="#bss-gallery">Galerie</a>
          <a href="#bss-hours">Zeiten</a>
          <a href="#bss-contact">Kontakt</a>
        </div>
        <div className="f-copy">© 2025 Barbershop By Serki · Nabburg</div>
      </footer>
    </div>
  );
}
