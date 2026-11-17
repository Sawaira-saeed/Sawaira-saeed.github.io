/* ============================================================
   Sawaira Saeed — Portfolio | script.js
   Navigation, scroll, reveal, filters, form, GitHub API
   ============================================================ */

/* ===== CONFIG =====
   CONTACT_FORM_ENDPOINT: Sign up at https://formspree.io and paste
   your form endpoint here (e.g. "https://formspree.io/f/abcdwxyz").
   Until set, the form will show a helpful setup message instead of
   faking a success.
*/
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/mrpqqezq"; // Formspree endpoint

const GITHUB_USERNAME = "Sawaira-saeed";

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initNav();
  initSmoothScroll();
  initActiveNav();
  initScrollReveal();
  initBackToTop();
  initProjectFilters();
  initContactForm();
  initGitHub();
  initCustomCursor();
  initParticles();
  initTyping();
  initHeroParallax();
  initStatsCounter();
});

/* ===== Footer year ===== */
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ===== Navigation: scrolled state + mobile toggle ===== */
function initNav() {
  const nav = document.getElementById("mainNav");
  const toggler = document.getElementById("navToggler");
  const menu = document.getElementById("navMenu");

  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggler && menu) {
    toggler.addEventListener("click", () => {
      const open = menu.classList.toggle("show");
      toggler.classList.toggle("active", open);
      toggler.setAttribute("aria-expanded", open);
    });
    // close on link click
    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        toggler.classList.remove("active");
        toggler.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ===== Smooth scroll (native via CSS, plus offset fix) ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ===== Active nav highlighting via IntersectionObserver ===== */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const links = document.querySelectorAll(".custom-nav .nav-link");
  if (!sections.length || !links.length) return;

  const map = {};
  links.forEach(l => {
    const href = l.getAttribute("href");
    if (href && href.startsWith("#")) map[href.slice(1)] = l;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const link = map[entry.target.id];
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ===== Scroll reveal ===== */
function initScrollReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  // respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  els.forEach(el => observer.observe(el));
}

/* ===== Back to top ===== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ===== Project filtering ===== */
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");
  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      items.forEach(item => {
        const match = filter === "all" || item.dataset.category === filter;
        if (match) {
          item.style.display = "";
          item.classList.add("revealed");
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

/* ===== Contact form (real submission via Formspree) ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");
  const submit = document.getElementById("cfSubmit");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    clearErrors();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) { setError("errName", "Please enter your name."); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("errEmail", "Please enter a valid email."); valid = false; }
    if (!subject) { setError("errSubject", "Please enter a subject."); valid = false; }
    if (!message || message.length < 10) { setError("errMessage", "Message must be at least 10 characters."); valid = false; }

    if (!valid) return;

    if (!CONTACT_FORM_ENDPOINT) {
      status.className = "form-status error";
      status.textContent = "Form not configured — see js/script.js CONTACT_FORM_ENDPOINT (Formspree). Email me directly at sawairasaeed63@gmail.com.";
      return;
    }

    submit.disabled = true;
    status.className = "form-status loading";
    status.textContent = "Sending...";

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (res.ok) {
        status.className = "form-status success";
        status.textContent = "Message sent successfully. Thank you!";
        form.reset();
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      status.className = "form-status error";
      status.textContent = "Could not send. Please email me directly at sawairasaeed63@gmail.com.";
    } finally {
      submit.disabled = false;
    }
  });

  function setError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearErrors() {
    ["errName", "errEmail", "errSubject", "errMessage"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
    status.className = "form-status";
    status.textContent = "";
  }
}

/* ===== GitHub API integration ===== */
function initGitHub() {
  fetchGitHubProfile();
  fetchGitHubRepos();
}

function fetchGitHubProfile() {
  fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
    .then(r => { if (!r.ok) throw new Error("profile"); return r.json(); })
    .then(data => {
      setText("ghRepos", data.public_repos ?? "—");
      setText("ghFollowers", data.followers ?? "—");
      setText("ghGists", data.public_gists ?? "—");
    })
    .catch(() => { /* leave placeholders */ });
}

function fetchGitHubRepos() {
  const container = document.getElementById("ghRepos");
  if (!container) return;

  fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
    .then(r => { if (!r.ok) throw new Error("repos"); return r.json(); })
    .then(repos => {
      if (!Array.isArray(repos) || !repos.length) throw new Error("empty");
      container.innerHTML = repos.map(repo => {
        const lang = repo.language || "N/A";
        const langColor = languageColor(lang);
        return `
          <div class="col-lg-4 col-md-6" data-reveal>
            <div class="repo-card">
              <h4><a href="${repo.html_url}" target="_blank" rel="noopener"><i class="fa-solid fa-book-bookmark"></i> ${escapeHtml(repo.name)}</a></h4>
              <p>${escapeHtml(repo.description || "No description provided.")}</p>
              <span class="repo-lang"><span class="lang-dot" style="background:${langColor}"></span> ${lang}</span>
            </div>
          </div>`;
      }).join("");
      // reveal new cards
      container.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("revealed"));
    })
    .catch(() => {
      container.innerHTML = `
        <div class="col-12" data-reveal>
          <div class="repo-card" style="text-align:center">
            <p>Could not load repositories automatically. <a href="https://github.com/Sawaira-saeed" target="_blank" rel="noopener">Visit my GitHub profile</a> to see all projects.</p>
          </div>
        </div>`;
      container.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("revealed"));
    });
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function languageColor(lang) {
  const colors = {
    "Python": "#3776AB", "Dart": "#00B4AB", "JavaScript": "#F1E05A",
    "HTML": "#E34F26", "CSS": "#563D7C", "Jupyter Notebook": "#DA5B88",
    "Java": "#B07219", "C++": "#F34B7D", "C": "#555555", "Shell": "#89E051",
    "TypeScript": "#3178C6", "Vue": "#41B883", "Flutter": "#54C5F8"
  };
  return colors[lang] || "#60A5FA";
}
/* ============================================================
   ENHANCEMENTS: Cursor, Particles, Typing, Parallax, Stats
   ============================================================ */

/* ===== Custom Cursor (dot + trailing ring) ===== */
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  }
  loop();

  // grow on interactive elements
  const hoverables = "a, button, .chip, .filter-btn, .project-card, .skill-card, .cert-card, input, textarea, .tl-card";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(hoverables)) { dot.classList.add("hovering"); ring.classList.add("hovering"); }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(hoverables)) { dot.classList.remove("hovering"); ring.classList.remove("hovering"); }
  });
}

/* ===== Particle Network Background ===== */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const COUNT = window.innerWidth < 768 ? 35 : 70;
  const MAX_DIST = 130;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6
    });
  }

  let mouseX = -1000, mouseY = -1000;
  window.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // mouse repulsion
      const dxm = p.x - mouseX, dym = p.y - mouseY;
      const dm = Math.sqrt(dxm * dxm + dym * dym);
      if (dm < 120) {
        p.x += (dxm / dm) * 1.2;
        p.y += (dym / dm) * 1.2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(96, 165, 250, 0.7)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(59, 130, 246, " + (0.18 * (1 - dist / MAX_DIST)) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ===== Typing Animation for Hero Role ===== */
function initTyping() {
  const el = document.getElementById("typedRole");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const roles = [
    "Software Engineer",
    "AI/ML Engineer",
    "Deep Learning Engineer",
    "Data Science Enthusiast",
    "Problem Solver"
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(tick, 1800);
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 90);
  }
  tick();
}

/* ===== Hero Visual Parallax (mouse-based tilt) ===== */
function initHeroParallax() {
  const card = document.querySelector(".visual-card");
  if (!card) return;
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const hero = document.querySelector(".hero");
  hero.addEventListener("mousemove", e => {
    const rect = hero.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = "perspective(900px) rotateY(" + (cx * 10) + "deg) rotateX(" + (-cy * 10) + "deg)";
  });
  hero.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  });
}

/* ===== Animated Stats Counter ===== */
function initStatsCounter() {
  const nums = document.querySelectorAll(".hs-num[data-count]");
  if (!nums.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nums.forEach(n => n.textContent = n.dataset.count);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 30));
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur + (target >= 8 ? "+" : "");
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
}