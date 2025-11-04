
ISJIEE-Art-Creation/
│
├── index.html                → Page d’accueil (thème blanc/beige, menu principal)
├── style.css                 → Design global du site
├── script.js                 → Animations et effets dynamiques
│
├── /assets/                  → Images, vidéos, icônes
│   ├── logo.png
│   ├── background.jpg
│   ├── art1.jpg
│   ├── art2.jpg
│   ├── art3.jpg
│   └── audio/                → (si tu ajoutes une voix ou musique)
│
├── /modules/                 → Sous-pages ou programmes
│   ├── green-card.html
│   ├── programme-anglais.html
│   ├── system-bar.html
│   ├── creativite.html
│   └── leadership.html
│
├── /portfolio/               → Dossier dédié à tes créations
│   ├── portfolio.html
│   ├── art-gallery.html
│   └── projets/              → sous-dossier pour projets spécifiques
│
├── /docs/                    → Documents PDF, guides, e-books
│   ├── Guide_GreenCard.pdf
│   ├── Formation_Guerriere.pdf
│   └── English_Level1.pdf
│
├── /css/                     → (optionnel) pour séparer les styles de modules
│   └── green-card.css
│
├── /js/                      → (optionnel) pour scripts spécifiques
│   └── portfolio.js
│
└── 
ISJIEE-Art-Creation/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── logo.png
│   └── placeholder.jpg
├── portfolio/
│   └── portfolio.html
└── modules/
    ├── green-card.html
    └── education-financiere.html
ISJIEE-Art-Creation/
│
├── index.html
├── style.css
├── script.js
│
├── /portfolio/
│   └── portfolio.html
│
├── /modules/
│   ├── green-card.html
│   └── education-financiere.html
│
├── /assets/
│   ├── logo.png
│   └── placeholder.jpg
│
└── /server/
    ├── server.js        → serveur Node.js / Express
    ├── routes/
    │   ├── upload.js    → gestion des images
    │   └── content.js   → sauvegarde du contenu texte
    ├── /uploads/        → images sauvegardées
    └── package.json     → dépendances (Express, Multer, Cors)

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ISJIEE Art Creation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body data-page="index">

  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <img src="assets/logo.png" alt="ISJIEE Logo" class="logo" id="logo-img">
        <div class="brand-text">
          <h1 id="site-title" data-editable="true">ISJIEE ArtCreation</h1>
          <div class="tag" id="site-tag" data-editable="true">Design · Formation · Création</div>
        </div>
      </div>

      <nav class="nav" id="main-nav">
        <a href="index.html" class="nav-link active">Accueil</a>
        <a href="portfolio/portfolio.html" class="nav-link">Portfolio</a>
        <a href="modules/green-card.html" class="nav-link">Green Card</a>
        <a href="modules/education-financiere.html" class="nav-link">Éducation Financière</a>
        <a href="#contact" class="nav-link">Contact</a>
        <button id="nav-toggle" aria-label="Menu">☰</button>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div class="hero-left">
        <div class="kicker" data-editable="true">Studio & Formation</div>
        <h2 id="hero-title" data-editable="true">Créations visuelles & parcours pour jeunes entrepreneurs</h2>
        <p class="lead" id="hero-lead" data-editable="true">ISJIEE ArtCreation conçoit, forme et accompagne les jeunes artistes — ateliers, mentorat, portfolio professionnel et formations spécialisées.</p>
        <div class="hero-actions">
          <a class="btn" href="modules/green-card.html">Green Card</a>
          <a class="btn ghost" href="portfolio/portfolio.html">Entrer dans la galerie</a>
        </div>
      </div>

      <div class="hero-right">
        <div class="drop-box editable-img" id="drop-hero" data-key="hero_image" title="Dépose une image ici pour remplacer l'illustration">
          <img src="assets/placeholder.jpg" alt="illustration" id="hero-img" data-editable-img>
          <div class="drop-note">Dépose une image ici pour remplacer l'illustration</div>
        </div>
      </div>
    </section>

    <section id="about" class="card-section">
      <h3 data-editable="true">Notre mission</h3>
      <p class="muted" id="about-text" data-editable="true">
        Accompagner les jeunes talents par la formation pratique et des projets réels : workshops, mentorat, et diffusion.
      </p>
    </section>

    <section id="contact" class="card-section">
      <h3 data-editable="true">Contact</h3>
      <form id="contact-form" class="contact-form">
        <input type="text" id="name" placeholder="Votre nom" required>
        <input type="email" id="email" placeholder="Email" required>
        <textarea id="message" placeholder="Message" rows="4" required></textarea>
        <button class="btn" type="submit">Envoyer</button>
      </form>
      <p class="muted small">Téléphones: <span data-editable="true">+509 38447063 / 31457642</span></p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div id="footer-text" data-editable="true">© 2025 ISJIEE Art Creation — Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</div>
    </div>
  </footer>

  <!-- Edit Mode toggle -->
  <div id="editor-tools">
    <button id="toggle-edit" title="Mode édition">✏️ Mode édition</button>
    <button id="reset-page" title="Réinitialiser la page">♻️ Réinitialiser</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Portfolio — ISJIEE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body data-page="portfolio">

  <header class="site-header small">
    <div class="container header-inner">
      <div class="brand">
        <img src="../assets/logo.png" alt="ISJIEE" class="logo">
        <h1 data-editable="true">Portfolio</h1>
      </div>
      <nav>
        <a href="../index.html">Accueil</a>
        <a href="portfolio.html" class="active">Portfolio</a>
        <a href="../modules/green-card.html">Green Card</a>
        <a href="../modules/education-financiere.html">Éducation Financière</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section>
      <h2 data-editable="true">Galerie</h2>

      <div class="tools">
        <label class="upload-btn">
          Ajouter image
          <input id="file-input" type="file" accept="image/*" multiple>
        </label>
        <button id="clear-gallery" class="btn ghost">Vider la galerie</button>
      </div>

      <div id="drop-gallery" class="drop-zone editable-img" data-key="gallery_images">
        <div class="drop-note">Dépose tes images ici (glisser-déposer) — supporte plusieurs</div>
      </div>

      <div id="gallery" class="gallery-grid"></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© ISJIEE ArtCreation</div>
  </footer>

  <div id="editor-tools">
    <button id="toggle-edit" title="Mode édition">✏️ Mode édition</button>
    <button id="reset-page" title="Réinitialiser la page">♻️ Réinitialiser</button>
  </div>

  <script src="../script.js"></script>
</body>
</html>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Green Card — ISJIEE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body data-page="green-card">

  <header class="site-header small">
    <div class="container header-inner">
      <div class="brand">
        <img src="../assets/logo.png" alt="ISJIEE" class="logo">
        <h1 data-editable="true">Green Card</h1>
      </div>
      <nav>
        <a href="../index.html">Accueil</a>
        <a href="../portfolio/portfolio.html">Portfolio</a>
        <a href="green-card.html" class="active">Green Card</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section>
      <h2 data-editable="true">Programme Green Card</h2>
      <p class="muted" id="green-desc" data-editable="true">
        Module d'initiation entrepreneuriale pour jeunes — structuré par profils : Produits physiques, Services virtuels, Mode & Beauté.
      </p>

      <div class="module-card" data-editable="true">
        <h3>Objectifs</h3>
        <ul>
          <li>Comprendre l'idée de produit</li>
          <li>Valider un marché avec peu de budget</li>
          <li>Créer un prototype et une offre commerciale</li>
        </ul>
      </div>

      <div class="module-card" data-editable="true">
        <h3>Ressources</h3>
        <p>Ajoute tes PDFs dans /docs/ et crée des liens ici pour les télécharger.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© ISJIEE ArtCreation</div>
  </footer>

  <div id="editor-tools">
    <button id="toggle-edit" title="Mode édition">✏️ Mode édition</button>
    <button id="reset-page" title="Réinitialiser la page">♻️ Réinitialiser</button>
  </div>

  <script src="../script.js"></script>
</body>
</html>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Éducation Financière — ISJIEE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body data-page="education-financiere">

  <header class="site-header small">
    <div class="container header-inner">
      <div class="brand">
        <img src="../assets/logo.png" alt="ISJIEE" class="logo">
        <h1 data-editable="true">Éducation Financière</h1>
      </div>
      <nav>
        <a href="../index.html">Accueil</a>
        <a href="../portfolio/portfolio.html">Portfolio</a>
        <a href="education-financiere.html" class="active">Éducation Financière</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section>
      <h2 data-editable="true">Programme d'éducation financière</h2>
      <p class="muted" id="ef-desc" data-editable="true">
        Introduction aux bases de la gestion d'argent, budget, épargne, investissement simple et création d'un petit portefeuille. Conçu pour les jeunes entrepreneurs.
      </p>

      <div class="module-card">
        <h3 data-editable="true">Modules</h3>
        <ol data-editable="true">
          <li>Budget personnel & planification</li>
          <li>Épargne intelligente et objectifs</li>
          <li>Micro-investissement et risques</li>
          <li>Gestion de trésorerie pour projets</li>
        </ol>
      </div>

      <div class="module-card" data-editable="true">
        <h3>Supports</h3>
        <p>Ajoute des PDFs dans /docs/ (Guide d'épargne, feuille de budget) ou des audios dans /assets/audio/.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© ISJIEE ArtCreation</div>
  </footer>

  <div id="editor-tools">
    <button id="toggle-edit" title="Mode édition">✏️ Mode édition</button>
    <button id="reset-page" title="Réinitialiser la page">♻️ Réinitialiser</button>
  </div>

  <script src="../script.js"></script>
</body>
</html>
:root{
  --bg:#faf7f2;
  --card:#ffffff;
  --muted:#8b7d74;
  --accent:#caa76b;
  --accent-2:#6b5847;
  --shadow:0 8px 28px rgba(18,16,16,0.06);
  --radius:14px;
  --maxw:1100px;
}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial;color:#222;background:var(--bg);-webkit-font-smoothing:antialiased}
.container{max-width:var(--maxw);margin:0 auto;padding:20px}

/* HEADER */
.site-header{background:linear-gradient(90deg,#fff,#f3ede6);box-shadow:var(--shadow);position:sticky;top:0;z-index:60}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 18px}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:58px;height:58px;border-radius:10px;object-fit:cover}
.brand-text h1{margin:0;font-size:18px;color:var(--accent-2)}
.brand-text .tag{font-size:12px;color:var(--muted)}

/* NAV */
.nav{display:flex;align-items:center;gap:12px}
.nav-link{padding:8px 12px;text-decoration:none;color:var(--accent-2);font-weight:700;border-radius:10px;position:relative;transition:all .24s ease}
.nav-link:hover{background:rgba(202,167,107,0.08);transform:translateY(-2px)}
.nav-link.active{background:linear-gradient(90deg,var(--accent),#e8d6b0);color:#fff;box-shadow:0 8px 20px rgba(202,167,107,0.14)}
#nav-toggle{display:none;background:transparent;border:0;font-size:20px;cursor:pointer}

/* HERO */
.hero{display:grid;grid-template-columns:1fr 420px;gap:20px;align-items:center;padding:32px 0}
.kicker{font-weight:800;color:var(--muted);letter-spacing:1px}
h2{color:var(--accent-2);margin:6px 0 12px}
.lead{color:var(--muted);max-width:55ch}
.hero-actions{margin-top:14px;display:flex;gap:12px}
.btn{background:var(--accent);color:#fff;padding:10px 14px;border-radius:999px;text-decoration:none;font-weight:800;border:0;cursor:pointer}
.btn.ghost{background:transparent;border:2px solid var(--accent);color:var(--accent-2)}

/* DROP BOX */
.drop-box{background:var(--card);border-radius:12px;padding:12px;box-shadow:var(--shadow);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:220px;transition:transform .18s}
.drop-box.drag{transform:translateY(-6px);box-shadow:0 20px 40px rgba(18,16,16,0.08)}
.drop-box img{max-width:100%;max-height:200px;border-radius:10px;object-fit:cover}
.drop-note{color:var(--muted);font-size:13px;margin-top:8px}

/* SECTIONS */
.card-section{background:transparent;padding:26px 0}
.card-section h3{color:var(--accent-2);margin-bottom:8px}
.muted{color:var(--muted)}
.small{font-size:13px}

/* GALLERY SHARED */
.tools{display:flex;gap:12px;align-items:center;margin-bottom:12px}
.upload-btn{background:var(--accent);color:#fff;padding:8px 12px;border-radius:8px;cursor:pointer}
.upload-btn input{display:none}
.drop-zone{background:linear-gradient(180deg,#fff,#f9f3ea);padding:18px;border-radius:12px;border:2px dashed rgba(122,107,95,0.12);min-height:130px;display:flex;align-items:center;justify-content:center}
.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:14px}
.gallery-item{background:var(--card);border-radius:10px;overflow:hidden;box-shadow:var(--shadow);position:relative}
.gallery-item img{width:100%;height:180px;object-fit:cover;display:block}
.gallery-item .meta{padding:10px;display:flex;justify-content:space-between;align-items:center}
.clear-btn{background:transparent;border:0;color:var(--muted);cursor:pointer}

/* EDITOR TOOLS */
#editor-tools{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:120}
#editor-tools button{background:var(--card);border:1px solid rgba(0,0,0,0.06);padding:8px 12px;border-radius:10px;cursor:pointer;box-shadow:var(--shadow)}
[contenteditable="true"]{outline: 2px dashed transparent; transition: outline .12s ease}
.editing [contenteditable="true"]{outline:2px dashed rgba(106,77,47,0.2);padding:2px;border-radius:6px}

/* small screens */
@media(max-width:980px){
  .hero{grid-template-columns:1fr;gap:14px}
  .header-inner{flex-direction:column;gap:8px}
  #nav-toggle{display:block}
  .nav{position:relative}
  .nav.opened{display:block;background:transparent}
}
/* script.js
   - Shared for all pages
   - Features:
     * Drag & drop images (hero + gallery)
     * File input upload
     * Persist data per page in localStorage
     * Edit mode (toggle to enable contenteditable and image edits)
     * Reset page to defaults (clears saved localStorage for that page)
     * Navigation active link handling
*/

// ----------------- Helpers -----------------
function dataURLFromFile(file){
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = () => rej(reader.error);
    reader.readAsDataURL(file);
  });
}
const page = document.body.dataset.page || 'index';
const STORAGE_PREFIX = 'isj_site_v1_'; // version key (increment if breaking changes)
function storageKey(key){ return STORAGE_PREFIX + page + '_' + key; }

// ----------------- EDIT MODE -----------------
const toggleEditBtn = document.querySelectorAll('#toggle-edit');
const resetBtns = document.querySelectorAll('#reset-page');

function setEditMode(on){
  if(on){
    document.body.classList.add('editing');
    // make editable all elements with data-editable
    document.querySelectorAll('[data-editable="true"]').forEach(el=>{
      el.setAttribute('contenteditable','true');
    });
    // show instruction
  } else {
    document.body.classList.remove('editing');
    document.querySelectorAll('[data-editable="true"]').forEach(el=>{
      el.removeAttribute('contenteditable');
    });
    // save current editable content automatically
    saveEditable();
  }
}

function saveEditable(){
  const items = {};
  document.querySelectorAll('[data-editable="true"]').forEach(el=>{
    // store innerHTML to support simple markup
    const key = el.id || el.dataset.key || ('editable_' + hashPath(el));
    items[key] = el.innerHTML;
  });
  if(Object.keys(items).length) localStorage.setItem(storageKey('edits'), JSON.stringify(items));
}

// restore edits on load
function restoreEditable(){
  const raw = localStorage.getItem(storageKey('edits'));
  if(!raw) return;
  try{
    const items = JSON.parse(raw);
    document.querySelectorAll('[data-editable="true"]').forEach(el=>{
      const key = el.id || el.dataset.key || ('editable_' + hashPath(el));
      if(items[key] !== undefined) el.innerHTML = items[key];
    });
  }catch(e){}
}

// small helper to build a key from element path
function hashPath(el){
  let p = [];
  while(el && el.tagName){
    let s = el.tagName.toLowerCase();
    if(el.id) s += '#'+el.id;
    if(el.className) s += '.'+el.className.toString().split(' ').join('.');
    p.unshift(s);
    el = el.parentElement;
  }
  return p.join('>');
}

// toggle buttons wiring (multiple on pages)
toggleEditBtn.forEach(b => b.addEventListener('click', ()=>{
  const on = !document.body.classList.contains('editing');
  setEditMode(on);
  b.textContent = on ? '💾 Quitter édition' : '✏️ Mode édition';
}));

resetBtns.forEach(b => b.addEventListener('click', ()=>{
  if(!confirm('Réinitialiser les changements locaux pour cette page ?')) return;
  localStorage.removeItem(storageKey('edits'));
  // remove images saved for this page
  localStorage.removeItem(storageKey('hero_image'));
  localStorage.removeItem(storageKey('gallery_images'));
  // reload to restore defaults
  location.reload();
}));

// auto-save when contenteditable loses focus
document.addEventListener('focusout', (ev)=>{
  if(ev.target && ev.target.hasAttribute('contenteditable')) saveEditable();
});

// restore at startup
restoreEditable();

// ----------------- NAV
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(a => a.addEventListener('click', ()=>{
  navLinks.forEach(x=>x.classList.remove('active'));
  a.classList.add('active');
}));

// ----------------- HERO IMAGE (editable)
document.querySelectorAll('.editable-img').forEach(zone=>{
  const key = zone.dataset.key || 'hero_image';
  // load saved
  if(key === 'hero_image'){
    const saved = localStorage.getItem(storageKey('hero_image'));
    const img = zone.querySelector('img');
    if(saved && img) img.src = saved;
  }

  // drag events
  ['dragenter','dragover'].forEach(ev => zone.addEventListener(ev, e=>{
    e.preventDefault(); zone.classList.add('drag');
  }));
  ['dragleave','drop'].forEach(ev => zone.addEventListener(ev, e=>{
    e.preventDefault(); zone.classList.remove('drag');
  }));

  zone.addEventListener('drop', async (e)=>{
    // only allow image edits in edit mode
    if(!document.body.classList.contains('editing') && zone.dataset.key === 'hero_image'){
      return alert('Active le Mode édition pour changer cette image.');
    }
    const files = Array.from(e.dataTransfer.files).filter(f=>f.type && f.type.startsWith('image/'));
    if(!files.length) return;
    for(const f of files){
      const url = await dataURLFromFile(f);
      // if this zone contains one image (hero), set it
      const img = zone.querySelector('img');
      if(img){
        img.src = url;
        if(zone.dataset.key === 'hero_image'){ localStorage.setItem(storageKey('hero_image'), url); }
      } else {
        // if this is gallery zone, push into gallery (handled separately)
        addImageToGallery(url);
      }
    }
  });
});

// ----------------- GALLERY (specific)
const galleryEl = document.getElementById('gallery');
const dropGallery = document.getElementById('drop-gallery');
const fileInput = document.getElementById('file-input');
const clearBtn = document.getElementById('clear-gallery');

let images = JSON.parse(localStorage.getItem(storageKey('gallery_images')) || '[]');

function renderGallery(){
  if(!galleryEl) return;
  galleryEl.innerHTML = '';
  images.forEach((dataUrl, i)=>{
    const el = document.createElement('div'); el.className = 'gallery-item';
    el.innerHTML = `
      <img src="${dataUrl}" alt="image-${i}" data-editable-img>
      <div class="meta">
        <div contenteditable="${document.body.classList.contains('editing')}" data-edit-label>Image ${i+1}</div>
        <div>
          <button class="clear-btn" data-index="${i}">Supprimer</button>
        </div>
      </div>
    `;
    galleryEl.appendChild(el);
  });
}
renderGallery();

function saveGallery(){ localStorage.setItem(storageKey('gallery_images'), JSON.stringify(images)); }

function addImageToGallery(url){
  images.unshift(url);
  saveGallery();
  renderGallery();
}

// drop area for gallery (supports multiple)
if(dropGallery){
  ['dragenter','dragover'].forEach(ev => dropGallery.addEventListener(ev, e=>{ e.preventDefault(); dropGallery.classList.add('drag'); }));
  ['dragleave','drop'].forEach(ev => dropGallery.addEventListener(ev, e=>{ e.preventDefault(); dropGallery.classList.remove('drag'); }));
  dropGallery.addEventListener('drop', async (e)=>{
    // require edit mode to add via drop (protect accidental drops)
    if(!document.body.classList.contains('editing')){
      return alert('Active le Mode édition pour ajouter des images à la galerie.');
    }
    const files = Array.from(e.dataTransfer.files).filter(f=>f.type && f.type.startsWith('image/')).slice(0,24);
    for(const f of files){
      const url = await dataURLFromFile(f);
      images.unshift(url);
    }
    saveGallery(); renderGallery();
  });
}

// file input upload (works in edit mode)
if(fileInput){
  fileInput.addEventListener('change', async (e)=>{
    if(!document.body.classList.contains('editing')) return alert('Active le Mode édition pour ajouter une image.');
    const files = Array.from(e.target.files || []).filter(f=>f.type && f.type.startsWith('image/')).slice(0,12);
    for(const f of files){
      const url = await dataURLFromFile(f);
      images.unshift(url);
    }
    saveGallery(); renderGallery(); fileInput.value = '';
  });
}

// clear gallery
if(clearBtn){
  clearBtn.addEventListener('click', ()=>{
    if(!document.body.classList.contains('editing') && !confirm('Tu n\'es pas en mode édition. Continuer?')) return;
    if(!confirm('Vider la galerie localement?')) return;
    images = []; saveGallery(); renderGallery();
  });
}

// delete single
if(galleryEl){
  galleryEl.addEventListener('click', (ev)=>{
    const btn = ev.target.closest('button[data-index]');
    if(!btn) return;
    const idx = Number(btn.dataset.index);
    images.splice(idx,1); saveGallery(); renderGallery();
  });
}

// helper used by other scripts to add images
window.addImageToGallery = addImageToGallery;

// ----------------- Load saved hero image globally
document.querySelectorAll('img[data-editable-img]').forEach(img=>{
  const key = img.closest('.editable-img') && img.closest('.editable-img').dataset.key;
  if(key === 'hero_image'){
    const saved = localStorage.getItem(storageKey('hero_image'));
    if(saved) img.src = saved;
  }
});

// ----------------- CONTACT FORM
const contact = document.getElementById('contact-form');
if(contact){
  contact.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if(!name || !email || !msg) return alert('Remplis tous les champs');
    window.location.href = `mailto:isjiee.artcreation@example.com?subject=${encodeURIComponent('Contact: '+name)}&body=${encodeURIComponent(msg+'\\n\\nEmail: '+email)}`;
  });
}

// ----------------- small nav toggle for mobile
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    nav.classList.toggle('opened');
    if(nav.classList.contains('opened')){
      nav.style.flexDirection = 'column'; nav.style.gap = '8px';
    } else { nav.style.flexDirection = ''; nav.style.gap = ''; }
  });
}

// ----------------- Save editable content before unload
window.addEventListener('beforeunload', ()=> saveEditable());

README.md                 → Présentation du projet sur GitHub
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE Art Creation</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    /* ======== STYLE GLOBAL ======== */
    body {
      margin: 0;
      font-family: "Poppins", sans-serif;
      background: #faf7f2;
      color: #333;
      scroll-behavior: smooth;
    }

    header {
      background: linear-gradient(to right, #fff, #f2ede9);
      padding: 60px 20px;
      text-align: center;
      animation: fadeIn 2s ease;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    header h1 {
      font-size: 2.5rem;
      color: #6a4d2f;
    }

    header p {
      font-size: 1.1rem;
      color: #777;
      margin-bottom: 20px;
    }

    nav a {
      margin: 0 15px;
      text-decoration: none;
      color: #6a4d2f;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #c79a63;
    }

    /* ======== SECTION À PROPOS ======== */
    section {
      padding: 80px 20px;
      max-width: 1000px;
      margin: auto;
      animation: fadeUp 1s ease;
    }

    section h2 {
      text-align: center;
      color: #6a4d2f;
      font-size: 2rem;
      margin-bottom: 30px;
    }

    section p {
      text-align: center;
      color: #555;
      line-height: 1.8;
    }

    /* ======== GALERIE ======== */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin-top: 40px;
    }

    .gallery img {
      width: 100%;
      border-radius: 10px;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }

    .gallery img:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    /* ======== FOOTER ======== */
    footer {
      background: #f0e7dd;
      text-align: center;
      padding: 30px 10px;
      font-size: 0.9rem;
      color: #6a4d2f;
    }

    /* ======== ANIMATIONS ======== */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ======== BOUTON INTERACTIF ======== */
    .btn {
      display: inline-block;
      background: #c79a63;
      color: white;
      padding: 12px 25px;
      border-radius: 25px;
      text-decoration: none;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #b5874e;
    }
  </style>
</head>
<body>

  <header>
    <h1>ISJIEE Art Creation</h1>
    <p>Créativité, Formation et Innovation</p>
    <nav>
      <a href="#about">À propos</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#programmes">Programmes</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>Notre Mission</h2>
    <p>ISJIEE Art Creation est une plateforme dédiée à l’expression artistique, 
    à la créativité entrepreneuriale et à la formation des jeunes talents. 
    Nous croyons en la puissance de l’art et de l’éducation pour inspirer et transformer.</p>
  </section>

  <section id="portfolio">
    <h2>Notre Portfolio</h2>
    <div class="gallery">
      <img src="assets/art1.jpg" alt="Création artistique 1">
      <img src="assets/art2.jpg" alt="Création artistique 2">
      <img src="assets/art3.jpg" alt="Création artistique 3">
      <img src="assets/art4.jpg" alt="Création artistique 4">
    </div>
    <div style="text-align:center; margin-top:30px;">
      <a href="portfolio.html" class="btn">Voir tout le portfolio</a>
    </div>
  </section>

  <section id="programmes">
    <h2>Nos Programmes</h2>
    <p>Découvrez nos initiatives :</p>
    <div style="text-align:center; margin-top:20px;">
      <a href="modules/green-card.html" class="btn">Green Card</a>
      <a href="modules/programme-anglais.html" class="btn">Programme Anglais</a>
      <a href="modules/system-bar.html" class="btn">Système BAR</a>
      <a href="modules/creativite.html" class="btn">Créativité & Innovation</a>
    </div>
  </section>

  <footer>
    © 2025 ISJIEE Art Creation | Tous droits réservés.
  </footer>

  <script>
    // Animation au défilement
    window.addEventListener("scroll", function() {
      document.querySelectorAll("section").forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    });
  </script>

</body>
</html>

  <!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ISJIEE ArtCreation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- HEADER (menu animé) -->
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <img src="assets/logo.png" alt="ISJIEE Logo" class="logo" />
        <div class="brand-text">
          <h1>ISJIEE ArtCreation</h1>
          <div class="tag">Design · Formation · Création</div>
        </div>
      </div>

      <nav class="nav" id="main-nav">
        <a href="index.html" class="nav-link active">Accueil</a>
        <a href="portfolio/portfolio.html" class="nav-link">Portfolio</a>
        <a href="modules/green-card.html" class="nav-link">Green Card</a>
        <a href="#contact" class="nav-link">Contact</a>
        <button id="nav-toggle" aria-label="Menu">☰</button>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <main class="container">
    <section class="hero">
      <div class="hero-left">
        <div class="kicker">Studio & Formation</div>
        <h2>Créations visuelles & parcours pour jeunes entrepreneurs</h2>
        <p class="lead">ISJIEE ArtCreation conçoit, forme et accompagne les jeunes artistes — ateliers, mentorat, portfolio professionnel et formations spécialisées.</p>
        <div class="hero-actions">
          <a class="btn" href="modules/green-card.html">Green Card</a>
          <a class="btn ghost" href="portfolio/portfolio.html">Entrer dans la galerie</a>
        </div>
      </div>

      <div class="hero-right">
        <div class="drop-box" id="drop-hero" title="Dépose une image ici pour remplacer l'illustration">
          <img src="assets/placeholder.jpg" alt="illustration" id="hero-img">
          <div class="drop-note">Dépose une image ici pour remplacer l'illustration</div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="card-section">
      <h3>Notre mission</h3>
      <p class="muted">Accompagner les jeunes talents par la formation pratique et des projets réels : workshops, mentorat, et diffusion. Nous transformons des idées en produits et parcours professionnels.</p>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="card-section">
      <h3>Contact</h3>
      <form id="contact-form" class="contact-form">
        <input type="text" id="name" placeholder="Votre nom" required>
        <input type="email" id="email" placeholder="Email" required>
        <textarea id="message" placeholder="Message" rows="4" required></textarea>
        <button class="btn" type="submit">Envoyer</button>
      </form>
      <p class="muted small">Téléphones: +509 38447063 / 31457642</p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© 2025 ISJIEE ArtCreation — Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
:root{
  --bg:#faf7f2;
  --card:#ffffff;
  --muted:#8b7d74;
  --accent:#caa76b;
  --accent-2:#6b5847;
  --shadow:0 8px 28px rgba(18,16,16,0.06);
  --radius:14px;
  --maxw:1100px;
}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial;color:#222;background:var(--bg);-webkit-font-smoothing:antialiased}
.container{max-width:var(--maxw);margin:0 auto;padding:20px}

/* HEADER */
.site-header{background:linear-gradient(90deg,#fff,#f3ede6);box-shadow:var(--shadow);position:sticky;top:0;z-index:60}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 18px}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:58px;height:58px;border-radius:10px;object-fit:cover}
.brand-text h1{margin:0;font-size:18px;color:var(--accent-2)}
.brand-text .tag{font-size:12px;color:var(--muted)}

/* NAV */
.nav{display:flex;align-items:center;gap:12px}
.nav-link{padding:8px 12px;text-decoration:none;color:var(--accent-2);font-weight:700;border-radius:10px;position:relative;transition:all .24s ease}
.nav-link:hover{background:rgba(202,167,107,0.08);transform:translateY(-2px)}
.nav-link.active{background:linear-gradient(90deg,var(--accent),#e8d6b0);color:#fff;box-shadow:0 8px 20px rgba(202,167,107,0.14)}
#nav-toggle{display:none;background:transparent;border:0;font-size:20px;cursor:pointer}

/* HERO */
.hero{display:grid;grid-template-columns:1fr 420px;gap:20px;align-items:center;padding:32px 0}
.kicker{font-weight:800;color:var(--muted);letter-spacing:1px}
h2{color:var(--accent-2);margin:6px 0 12px}
.lead{color:var(--muted);max-width:55ch}
.hero-actions{margin-top:14px;display:flex;gap:12px}
.btn{background:var(--accent);color:#fff;padding:10px 14px;border-radius:999px;text-decoration:none;font-weight:800;border:0;cursor:pointer}
.btn.ghost{background:transparent;border:2px solid var(--accent);color:var(--accent-2)}

/* DROP BOX */
.drop-box{background:var(--card);border-radius:12px;padding:12px;box-shadow:var(--shadow);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:220px;transition:transform .18s}
.drop-box.drag{transform:translateY(-6px);box-shadow:0 20px 40px rgba(18,16,16,0.08)}
.drop-box img{max-width:100%;max-height:200px;border-radius:10px;object-fit:cover}
.drop-note{color:var(--muted);font-size:13px;margin-top:8px}

/* SECTIONS */
.card-section{background:transparent;padding:26px 0}
.card-section h3{color:var(--accent-2);margin-bottom:8px}
.muted{color:var(--muted)}
.small{font-size:13px}

/* GALLERY SHARED */
.tools{display:flex;gap:12px;align-items:center;margin-bottom:12px}
.upload-btn{background:var(--accent);color:#fff;padding:8px 12px;border-radius:8px;cursor:pointer}
.upload-btn input{display:none}
.drop-zone{background:linear-gradient(180deg,#fff,#f9f3ea);padding:18px;border-radius:12px;border:2px dashed rgba(122,107,95,0.12);min-height:130px;display:flex;align-items:center;justify-content:center}
.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:14px}
.gallery-item{background:var(--card);border-radius:10px;overflow:hidden;box-shadow:var(--shadow);position:relative}
.gallery-item img{width:100%;height:180px;object-fit:cover;display:block}
.gallery-item .meta{padding:10px;display:flex;justify-content:space-between;align-items:center}
.clear-btn{background:transparent;border:0;color:var(--muted);cursor:pointer}

/* FOOTER */
.site-footer{padding:22px 0;background:transparent;color:var(--muted);text-align:center}

/* ANIMATIONS & RESPONSIVE */
@media(max-width:980px){
  .hero{grid-template-columns:1fr;gap:14px}
  .header-inner{flex-direction:column;gap:8px}
  #nav-toggle{display:block}
  .nav{position:relative}
  .nav.opened{display:block;background:transparent}
}

/* script.js
   - Drag & drop hero and gallery
   - Upload via input
   - Persist gallery & hero via localStorage
   - Animated nav toggle and active link
*/

// ----------------- helpers -----------------
function dataURLFromFile(file){
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = () => rej(reader.error);
    reader.readAsDataURL(file);
  });
}

// ----------------- HERO DROP -----------------
const heroDrop = document.getElementById('drop-hero');
const heroImg = document.getElementById('hero-img');
if(heroDrop){
  ['dragenter','dragover'].forEach(e => heroDrop.addEventListener(e, ev => { ev.preventDefault(); heroDrop.classList.add('drag'); }));
  ['dragleave','drop'].forEach(e => heroDrop.addEventListener(e, ev => { ev.preventDefault(); heroDrop.classList.remove('drag'); }));
  heroDrop.addEventListener('drop', async (ev) => {
    const f = ev.dataTransfer.files[0];
    if(!f || !f.type.startsWith('image/')) return;
    const url = await dataURLFromFile(f);
    heroImg.src = url;
    localStorage.setItem('isj_hero', url);
  });
  // load saved hero
  const savedHero = localStorage.getItem('isj_hero');
  if(savedHero) heroImg.src = savedHero;
}

// ----------------- GALLERY -----------------
const dropGallery = document.getElementById('drop-gallery');
const gallery = document.getElementById('gallery');
const fileInput = document.getElementById('file-input');
const clearBtn = document.getElementById('clear-gallery');

let images = JSON.parse(localStorage.getItem('isj_gallery') || '[]');

function renderGallery(){
  if(!gallery) return;
  gallery.innerHTML = '';
  images.forEach((dataUrl, i) => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.innerHTML = `
      <img src="${dataUrl}" alt="image-${i}">
      <div class="meta">
        <div style="font-size:13px;color:${getComputedStyle(document.documentElement).getPropertyValue('--muted')}">Image ${i+1}</div>
        <div>
          <button class="clear-btn" data-index="${i}">Supprimer</button>
        </div>
      </div>
    `;
    gallery.appendChild(el);
  });
}
renderGallery();

if(dropGallery){
  ['dragenter','dragover'].forEach(e => dropGallery.addEventListener(e, ev => { ev.preventDefault(); dropGallery.classList.add('drag'); }));
  ['dragleave','drop'].forEach(e => dropGallery.addEventListener(e, ev => { ev.preventDefault(); dropGallery.classList.remove('drag'); }));
  dropGallery.addEventListener('drop', async (ev) => {
    const files = Array.from(ev.dataTransfer.files).filter(f => f.type.startsWith('image/')).slice(0,12);
    for(const f of files){
      const url = await dataURLFromFile(f);
      images.unshift(url);
    }
    localStorage.setItem('isj_gallery', JSON.stringify(images));
    renderGallery();
  });
}

if(fileInput){
  fileInput.addEventListener('change', async (ev) => {
    const f = ev.target.files[0];
    if(!f) return;
    if(!f.type.startsWith('image/')) return alert('Choisir une image.');
    const url = await dataURLFromFile(f);
    images.unshift(url);
    localStorage.setItem('isj_gallery', JSON.stringify(images));
    renderGallery();
    fileInput.value = '';
  });
}

if(clearBtn){
  clearBtn.addEventListener('click', () => {
    if(!confirm('Vider la galerie localement ?')) return;
    images = [];
    localStorage.removeItem('isj_gallery');
    renderGallery();
  });
}

// delete single
if(gallery){
  gallery.addEventListener('click', (ev) => {
    const btn = ev.target.closest('button[data-index]');
    if(!btn) return;
    const idx = Number(btn.dataset.index);
    images.splice(idx, 1);
    localStorage.setItem('isj_gallery', JSON.stringify(images));
    renderGallery();
  });
}

// ----------------- CONTACT -----------------
const contact = document.getElementById('contact-form');
if(contact){
  contact.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if(!name || !email || !msg) return alert('Remplis tous les champs');
    // ouverture du client mail (remplace si backend)
    window.location.href = `mailto:isjiee.artcreation@example.com?subject=${encodeURIComponent('Contact: '+name)}&body=${encodeURIComponent(msg + '\\n\\nEmail: ' + email)}`;
  });
}

// ----------------- NAV ANIMATION & MOBILE -----------------
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

if(navToggle){
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('opened');
    // simple mobile behaviour: toggle links display
    if(nav.classList.contains('opened')){
      nav.style.flexDirection = 'column';
      nav.style.gap = '8px';
    } else {
      nav.style.flexDirection = '';
      nav.style.gap = '';
    }
  });
}

// set active on click
navLinks.forEach(a => a.addEventListener('click', (e) => {
  navLinks.forEach(x => x.classList.remove('active'));
  e.currentTarget.classList.add('active');
}));

// Intersection observer to add active class while scrolling (optional)
const sections = document.querySelectorAll('main section[id], main section');
const linkMap = {};
navLinks.forEach(link => {
  const href = link.getAttribute('href') || '';
  if(href.startsWith('#')){
    linkMap[href.slice(1)] = link;
  }
});
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(!en.target.id) return;
    if(en.isIntersecting && linkMap[en.target.id]){
      navLinks.forEach(l => l.classList.remove('active'));
      linkMap[en.target.id].classList.add('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => io.observe(s));

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Portfolio — ISJIEE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <header class="site-header small">
    <div class="container header-inner">
      <div class="brand">
        <img src="../assets/logo.png" alt="ISJIEE" class="logo">
        <h1>Portfolio</h1>
      </div>
      <nav>
        <a href="../index.html">Accueil</a>
        <a href="portfolio.html" class="active">Portfolio</a>
        <a href="../modules/green-card.html">Green Card</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section>
      <h2>Galerie</h2>

      <div class="tools">
        <label class="upload-btn">
          Ajouter image
          <input id="file-input" type="file" accept="image/*">
        </label>
        <button id="clear-gallery" class="btn ghost">Vider la galerie</button>
      </div>

      <div id="drop-gallery" class="drop-zone">
        <div class="drop-note">Dépose tes images ici (glisser-déposer) — supporte plusieurs</div>
      </div>

      <div id="gallery" class="gallery-grid"></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© ISJIEE ArtCreation</div>
  </footer>

  <script src="../script.js"></script>
</body>
</html>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Green Card — ISJIEE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <header class="site-header small">
    <div class="container header-inner">
      <div class="brand">
        <img src="../assets/logo.png" alt="ISJIEE" class="logo">
        <h1>Green Card</h1>
      </div>
      <nav>
        <a href="../index.html">Accueil</a>
        <a href="../portfolio/portfolio.html">Portfolio</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section>
      <h2>Programme Green Card</h2>
      <p class="muted">Module d'initiation entrepreneuriale pour jeunes — structuré par profils : Produits physiques, Services virtuels, Mode & Beauté.</p>

      <div class="module-card">
        <h3>Objectifs</h3>
        <ul>
          <li>Comprendre l'idée de produit</li>
          <li>Valider un marché avec peu de budget</li>
          <li>Créer un prototype et une offre commerciale</li>
        </ul>
      </div>

      <div class="module-card">
        <h3>Ressources</h3>
        <p>Ajoute tes PDFs dans /docs/ et crée des liens ici pour les télécharger.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© ISJIEE ArtCreation</div>
  </footer>

  <script src="../script.js"></script>
</body>
</html>
/ISJIEE
│
├── index.html              → page principale (Programmes)
├── anglais.html             → page du cours d’anglais
├── creativite.html          → page Créativité
├── style.css
├── script.js
└── assets/videos/           → dossier pour tes futures vidéos

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISJIEE | Accueil</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Barre de navigation -->
  <header class="navbar">
    <h1>ISJIEE</h1>
    <nav>
      <a href="index.html" class="active">Accueil</a>
      <a href="anglais.html">Anglais</a>
      <a href="creativite.html">Créativité</a>
    </nav>
  </header>

  <!-- Section principale -->
  <section class="programmes">
    <h2>Nos Programmes ISJIEE</h2>
    <div class="slider-container">
      <div class="slider">
        <div class="slide green">
          <h3>Green Card</h3>
          <p>Formation de base pour apprendre à créer, vendre et gérer un petit business.</p>
          <div class="bar"><div class="bar-fill green-bar" style="width:40%"></div></div>
          <span class="bar-label">BAR : 40% – Niveau Débutant</span>
        </div>

        <div class="slide blue">
          <h3>Blue Card</h3>
          <p>Formation avancée sur les stratégies marketing et la création digitale.</p>
          <div class="bar"><div class="bar-fill blue-bar" style="width:60%"></div></div>
          <span class="bar-label">BAR : 60% – Niveau Intermédiaire</span>
        </div>

        <div class="slide gold">
          <h3>Gold</h3>
          <p>Programme élite pour les jeunes entrepreneurs avec coaching et financement.</p>
          <div class="bar"><div class="bar-fill gold-bar" style="width:80%"></div></div>
          <span class="bar-label">BAR : 80% – Niveau Avancé</span>
        </div>

        <div class="slide leadership">
          <h3>Leadership Voice</h3>
          <p>Développe ton leadership, ton charisme et ta communication d’impact.</p>
          <div class="bar"><div class="bar-fill purple-bar" style="width:100%"></div></div>
          <span class="bar-label">BAR : 100% – Niveau Maîtrise</span>
        </div>
      </div>

      <div class="nav-bar">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </section>

  <!-- Formulaire de souscription -->
  <section class="subscribe">
    <h2>Reste connecté à nos formations</h2>
    <form>
      <input type="text" placeholder="Nom complet" required>
      <input type="email" placeholder="Adresse email" required>
      <button type="submit">S’inscrire</button>
    </form>
  </section>

  <footer>
    <p>© 2025 ISJIEE — Inspiré par la lumière, forgé dans le feu.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISJIEE | Anglais</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <h1>ISJIEE</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="anglais.html" class="active">Anglais</a>
      <a href="creativite.html">Créativité</a>
    </nav>
  </header>

  <section class="anglais">
    <h2>Programme d’Anglais ISJIEE</h2>
    <p>Ce module aide les étudiants à développer leurs compétences en compréhension, prononciation et communication anglaise à travers des exercices interactifs, audios et quiz.</p>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE - Programme</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<header>
  <h1>ISJIEE PROGRAMMES</h1>
  <nav>
    <a href="#programmes">Nos Programmes</a>
    <a href="anglais.html">Anglais</a>
    <a href="creativite.html">Créativité</a>
    <a href="#videos">Vidéos</a>
    <a href="#contact">Souscription</a>
  </nav>
</header>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE – American English Program</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<header>
  <h1>ISJIEE – American English Path</h1>
  <nav>
    <a href="index.html">🏠 Home</a>
  </nav>
</header>

<section class="english-section">
  <h2>🇺🇸 Master American English with ISJIEE</h2>
  <p>
    Learn to speak, listen, and think in American English!  
    Our structured program takes you from <strong>Beginner</strong> to <strong>TOEFL-ready</strong>,  
    focusing on pronunciation, real-life situations, and vocabulary used in the U.S.
  </p>

  <div class="english-grid">

    <!-- BEGINNER -->
    <div class="english-card beginner">
      <h3>Beginner (Level 1)</h3>
      <p>Focus: Basic communication, greetings, and “to be / to have”.</p>
      <ul>
        <li>Lesson 1: Hi, I’m John! (Introductions)</li>
        <li>Lesson 2: My Daily Routine</li>
        <li>Lesson 3: Numbers, Time, and Dates</li>
      </ul>
      <audio controls src="audio/beginner-dialogue.mp3"></audio><br>
      <button onclick="alert('Beginner practice coming soon!')">Practice Now</button>
    </div>

    <!-- ELEMENTARY -->
    <div class="english-card elementary">
      <h3>Elementary (Level 2)</h3>
      <p>Focus: Building short conversations and using simple tenses.</p>
      <ul>
        <li>Lesson 1: Family & Friends</li>
        <li>Lesson 2: At the Store</li>
        <li>Lesson 3: Places Around Town</li>
      </ul>
      <button onclick="alert('Elementary practice coming soon!')">Practice Now</button>
    </div>

    <!-- INTERMEDIATE -->
    <div class="english-card intermediate">
      <h3>Intermediate (Level 3)</h3>
      <p>Focus: Fluency, vocabulary expansion, and American idioms.</p>
      <ul>
        <li>Lesson 1: Talking About Jobs</li>
        <li>Lesson 2: Hobbies and Leisure</li>
        <li>Lesson 3: Travel & Experiences</li>
      </ul>
      <button onclick="alert('Intermediate practice coming soon!')">Practice Now</button>
    </div>

    <!-- ADVANCED -->
    <div class="english-card advanced">
      <h3>Advanced (Level 4)</h3>
      <p>Focus: Debates, essay writing, and native-like expressions.</p>
      <ul>
        <li>Lesson 1: American Slang and Phrasal Verbs</li>
        <li>Lesson 2: Writing Opinion Essays</li>
        <li>Lesson 3: Public Speaking Skills</li>
      </ul>
      <button onclick="alert('Advanced practice coming soon!')">Practice Now</button>
    </div>

    <!-- TOEFL -->
    <div class="english-card toefl">
      <h3>TOEFL Preparation (Level 5)</h3>
      <p>Focus: Academic vocabulary, comprehension, and test strategies.</p>
      <ul>
        <li>Reading Comprehension</li>
        <li>Listening and Speaking Practice</li>
        <li>Essay Writing & Integrated Tasks</li>
      </ul>
      <a href="https://www.ets.org/toefl/test-takers/ibt/prepare.html" target="_blank">
        <button>Start TOEFL Practice</button>
      </a>
    </div>

  </div>

  <div class="progress-section">
    <h3>📊 Your Progress</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 20%;"></div>
    </div>
    <p>You're currently at the Beginner Level. Keep learning!</p>
  </div>
</section>

<footer>
  <p>© 2025 ISJIEE American English Division | “Learn with Purpose, Speak with Confidence.”</p>
</footer>

</body>
</html>

.english-section {
  padding: 2rem;
  text-align: center;
}

.english-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.english-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: 0.3s;
}

.english-card:hover {
  transform: translateY(-5px);
}

.beginner { border-top: 8px solid #2ecc71; }
.elementary { border-top: 8px solid #27ae60; }
.intermediate { border-top: 8px solid #2980b9; }
.advanced { border-top: 8px solid #8e44ad; }
.toefl { border-top: 8px solid #e67e22; }

button {
  background: #003366;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #0055aa;
}

audio {
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
}

.progress-section {
  margin-top: 3rem;
}

.progress-bar {
  background: #ccc;
  border-radius: 10px;
  height: 15px;
  width: 80%;
  margin: 10px auto;
}

.progress {
  background: #003366;
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s;
}
<section id="programmes" class="scroll-section">
  <div class="card green">
    <h2>Green Card</h2>
    <p>Formation de base pour découvrir et lancer ton business.</p>
  </div>
  <div class="card blue">
    <h2>Blue Card</h2>
    <p>Apprentissage intermédiaire sur la gestion et la stratégie d’entreprise.</p>
  </div>
  <div class="card gold">
    <h2>Gold Card</h2>
    <p>Développement avancé, leadership et innovation.</p>
  </div>
  <div class="card leader">
    <h2>Leadership Voice</h2>
    <p>Communication, influence, motivation et prise de décision.</p>
  </div>
</section>

<section id="bar">
  <h2>BAR — Barème d’Application Requise</h2>
  <ul>
    <li>✔ Participation active — 25%</li>
    <li>✔ Réalisation de projet — 30%</li>
    <li>✔ Présence et discipline — 15%</li>
    <li>✔ Test final et présentation — 30%</li>
  </ul>
</section>

<section id="videos" class="video-gallery">
  <h2>🎥 Nos vidéos de formation</h2>
  <div class="videos">
    <video src="video1.mp4" controls></video>
    <video src="video2.mp4" controls></video>
    <video src="video3.mp4" controls></video>
  </div>
</section>

<section id="contact">
  <h2>📬 Souscription</h2>
  <form>
    <input type="text" placeholder="Nom complet" required />
    <input type="email" placeholder="Email" required />
    <select>
      <option>Choisir une formation</option>
      <option>Green Card</option>
      <option>Blue Card</option>
      <option>Gold Card</option>
      <option>Leadership Voice</option>
      <option>Anglais</option>
      <option>Créativité</option>
    </select>
    <button type="submit">S'inscrire</button>
  </form>
</section>

<footer>
  <p>© 2025 ISJIEE - Inspiré par la lumière, forgé dans le feu.</p>
</footer>

<script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #f3f6fa;
  color: #222;
}

header {
  background: #003366;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

.scroll-section {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding: 2rem;
}

.card {
  flex: 0 0 250px;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  scroll-snap-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.green { border-top: 8px solid #2ecc71; }
.blue { border-top: 8px solid #3498db; }
.gold { border-top: 8px solid #f1c40f; }
.leader { border-top: 8px solid #8e44ad; }

#bar {
  background: #fdfdfd;
  padding: 2rem;
  border-left: 6px solid #003366;
}

#bar ul {
  list-style: none;
  padding: 0;
}

.video-gallery {
  text-align: center;
  padding: 2rem;
}

.video-gallery .videos {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

video {
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

#contact form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  gap: 10px;
}

#contact input, select, button {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background: #003366;
  color: white;
  border: none;
  cursor: pointer;
}

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ISJIEE — American English (Quizzes & Progress)</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>ISJIEE — American English</h1>
    <nav><a href="index.html">🏠 Retour</a></nav>
  </header>

  <main class="container">
    <section class="intro">
      <h2>Interactive Quizzes & Progress Tracker</h2>
      <p>Pratique l'anglais américain par niveau. Ton avancement est sauvegardé dans ton navigateur.</p>
    </section>

    <!-- NIVEAUX -->
    <section id="levels" class="levels">
      <!-- Les cartes de niveaux seront générées par JS -->
    </section>

    <!-- QUIZ MODAL -->
    <div id="quizModal" class="modal hidden" aria-hidden="true">
      <div class="modal-content">
        <button id="closeModal" class="close">✕</button>
        <h3 id="quizTitle">Quiz</h3>
        <div id="quizQuestion"></div>
        <div id="quizOptions"></div>
        <div class="quiz-actions">
          <button id="submitAnswer" class="btn">Valider</button>
          <button id="skipBtn" class="btn secondary">Passer</button>
        </div>
        <div id="quizFeedback" class="feedback"></div>
      </div>
    </div>

    <!-- TABLEAU DE PROGRESSION -->
    <section id="progress" class="progress-section">
      <h2>Tableau de progression</h2>
      <table id="progressTable">
        <thead>
          <tr><th>Niveau</th><th>Score (%)</th><th>Statut</th></tr>
        </thead>
        <tbody></tbody>
      </table>
      <div class="progress-controls">
        <button id="downloadCsv" class="btn">Télécharger CSV</button>
        <button id="resetProgress" class="btn warning">Réinitialiser progression</button>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2025 ISJIEE — American English</p>
  </footer>

  <script src="anglais-quiz.js"></script>
</body>
</html>
/* anglais-quiz.js
  - génère les niveaux & quiz
  - gère storage & tableau de progression
*/

const LEVELS = [
  { id: 'beginner', title: 'Beginner (Level 1)', target: 'Beginner' },
  { id: 'elementary', title: 'Elementary (Level 2)', target: 'Elementary' },
  { id: 'intermediate', title: 'Intermediate (Level 3)', target: 'Intermediate' },
  { id: 'advanced', title: 'Advanced (Level 4)', target: 'Advanced' },
  { id: 'toefl', title: 'TOEFL Prep (Level 5)', target: 'TOEFL' }
];

// Exemple de petits quiz par niveau (tu peux ajouter/modifier)
const QUIZZES = {
  beginner: [
    {
      q: "Complete: 'He ___ to school every day.'",
      options: ["go", "goes", "going", "gone"],
      answer: 1
    },
    {
      q: "What's the correct American spelling?",
      options: ["colour", "color", "colur", "coloor"],
      answer: 1
    }
  ],
  elementary: [
    {
      q: "Choose the right word: 'I ___ my homework yesterday.'",
      options: ["do", "did", "done", "doing"],
      answer: 1
    },
    {
      q: "Which is a place in town?",
      options: ["library", "cake", "sleep", "blue"],
      answer: 0
    }
  ],
  intermediate: [
    {
      q: "Complete the phrase: 'She has been ___ English for two years.'",
      options: ["studying", "study", "studied", "studies"],
      answer: 0
    }
  ],
  advanced: [
    {
      q: "Which sentence uses a correct phrasal verb?",
      options: ["He called off the meeting", "He called over the meeting", "He called in the meeting", "He called with the meeting"],
      answer: 0
    }
  ],
  toefl: [
    {
      q: "TOEFL style: What is main idea? (short passage) - 'Urbanization increases unless...' (simulate)",
      options: ["More people move to cities", "Rural areas are better", "Cities will disappear", "None"],
      answer: 0
    }
  ]
};

// Storage key
const STORAGE_KEY = 'isjiee_english_progress_v1';

// Récupère ou initialiser l'état
function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = {};
    LEVELS.forEach(l => {
      initial[l.id] = { attempts: 0, correct: 0, score: 0 }; // score %
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(raw);
  } catch(e) {
    localStorage.removeItem(STORAGE_KEY);
    return loadProgress();
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// UI génération niveaux
const levelsContainer = document.getElementById('levels');
const progressTableBody = document.querySelector('#progressTable tbody');
const modal = document.getElementById('quizModal');
const quizTitle = document.getElementById('quizTitle');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const submitAnswer = document.getElementById('submitAnswer');
const closeModal = document.getElementById('closeModal');
const skipBtn = document.getElementById('skipBtn');
const quizFeedback = document.getElementById('quizFeedback');

let currentQuiz = null;
let currentLevelId = null;
let selectedOption = null;
let progress = loadProgress();

function renderLevels() {
  levelsContainer.innerHTML = '';
  LEVELS.forEach(l => {
    const div = document.createElement('div');
    div.className = 'level-card';
    const p = progress[l.id];
    div.innerHTML = `
      <h3>${l.title}</h3>
      <p>Niveau: ${l.target}</p>
      <div class="mini-progress">
        <div class="mini-fill" style="width:${p.score}%"></div>
      </div>
      <p>Score: ${p.score}% — Attempts: ${p.attempts}</p>
      <div class="level-actions">
        <button class="btn start-quiz" data-id="${l.id}">Lancer un quiz</button>
        <button class="btn show-report" data-id="${l.id}">Voir le détail</button>
      </div>
    `;
    levelsContainer.appendChild(div);
  });

  // lier boutons
  document.querySelectorAll('.start-quiz').forEach(b => {
    b.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      openQuiz(id);
    });
  });

  document.querySelectorAll('.show-report').forEach(b => {
    b.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      alertReport(id);
    });
  });
}

function renderProgressTable() {
  progressTableBody.innerHTML = '';
  LEVELS.forEach(l => {
    const p = progress[l.id];
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${l.title}</td><td>${p.score}%</td><td>${p.score >= 75 ? 'Completed' : (p.score > 0 ? 'In progress' : 'Not started')}</td>`;
    progressTableBody.appendChild(tr);
  });
}

// Ouvrir modal et charger un quiz aléatoire du niveau
function openQuiz(levelId) {
  const pool = QUIZZES[levelId] || [];
  if (pool.length === 0) {
    alert('Aucun quiz pour ce niveau pour le moment.');
    return;
  }
  currentQuiz = pool[Math.floor(Math.random() * pool.length)];
  currentLevelId = levelId;
  selectedOption = null;
  quizTitle.textContent = `Quiz — ${LEVELS.find(l=>l.id===levelId).title}`;
  quizQuestion.textContent = currentQuiz.q;
  quizOptions.innerHTML = '';
  currentQuiz.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.dataset.index = i;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
      btn.classList.add('selected');
      selectedOption = i;
    });
    quizOptions.appendChild(btn);
  });
  quizFeedback.textContent = '';
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

// Valider réponse
submitAnswer.addEventListener('click', () => {
  if (selectedOption === null) {
    quizFeedback.textContent = 'Sélectionne une option avant de valider.';
    return;
  }
  const correct = (selectedOption == currentQuiz.answer);
  // mise à jour progress
  const state = progress[currentLevelId];
  state.attempts += 1;
  if (correct) state.correct += 1;
  state.score = Math.round((state.correct / state.attempts) * 100);
  saveProgress(progress);
  renderLevels();
  renderProgressTable();
  quizFeedback.textContent = correct ? 'Bonne réponse 🎉' : `Mauvaise réponse — la bonne était: "${currentQuiz.options[currentQuiz.answer]}"`;
  // après 1.2s fermer modal
  setTimeout(() => closeQuiz(), 1200);
});

// skip
skipBtn.addEventListener('click', closeQuiz);
closeModal.addEventListener('click', closeQuiz);

function closeQuiz() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  currentQuiz = null;
  currentLevelId = null;
  selectedOption = null;
}

// Voir détail (rapide)
function alertReport(levelId) {
  const s = progress[levelId];
  alert(`${LEVELS.find(l=>l.id===levelId).title}\nAttempts: ${s.attempts}\nCorrect: ${s.correct}\nScore: ${s.score}%`);
}

// CSV download
document.getElementById('downloadCsv').addEventListener('click', () => {
  const rows = [['Niveau','Attempts','Correct','Score']];
  LEVELS.forEach(l => {
    const s = progress[l.id];
    rows.push([l.title, s.attempts, s.correct, s.score]);
  });
  const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'isjiee_english_progress.csv';
  a.click();
  URL.revokeObjectURL(url);
});

// Reset
document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm('Réinitialiser toute la progression ?')) return;
  localStorage.removeItem(STORAGE_KEY);
  progress = loadProgress();
  renderLevels();
  renderProgressTable();
});

// initial render
renderLevels();
renderProgressTable();

/* --- Anglais : quizzes & progress --- */
.container { max-width: 1000px; margin: 20px auto; padding: 0 18px; }
.intro { text-align: center; margin-bottom: 16px; }

.levels { display: grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap: 16px; margin: 18px 0; }
.level-card { background:#fff; padding:16px; border-radius:10px; box-shadow:0 6px 18px rgba(2,20,50,0.06); }
.level-card h3 { margin-bottom:6px; color:#003366; }
.mini-progress { height:10px; background:#eee; border-radius:6px; overflow:hidden; margin:8px 0; }
.mini-fill { height:100%; background:#003366; width:0%; transition:width .8s; }

.level-actions { display:flex; gap:8px; margin-top:10px; }
.btn { padding:8px 10px; border-radius:8px; border:none; background:#003366; color:white; cursor:pointer; }
.btn.secondary { background:#7a8da6; }
.btn.warning { background:#b22222; }

.progress-section { margin-top:22px; background:#fff; padding:12px; border-radius:10px; box-shadow:0 6px 18px rgba(2,20,50,.05); }
#progressTable { width:100%; border-collapse:collapse; margin-top:10px; }
#progressTable th, #progressTable td { padding:10px; border-bottom:1px solid #eee; text-align:left; }

.modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.5); z-index:50; }
.modal.hidden { display:none; }
.modal-content { background:#fff; padding:18px; border-radius:10px; width:90%; max-width:560px; position:relative; }
.close { position:absolute; right:10px; top:8px; background:transparent; border:none; font-size:18px; cursor:pointer; }
#quizOptions { display:flex; flex-direction:column; gap:8px; margin:12px 0; }
.option { padding:10px; border-radius:8px; border:1px solid #ddd; background:#f7f9fb; cursor:pointer; }
.option.selected { border-color:#003366; background:#e6f0ff; }
.feedback { margin-top:8px; font-weight:600; color:#003366; }

/* mini responsive */
@media (max-width:600px) {
  .level-actions { flex-direction:column; }
  .modal-content { padding:12px; }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci pour votre inscription à ISJIEE !");
});
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE - Anglais</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
  <h1>ISJIEE - Programme Anglais</h1>
  <nav><a href="index.html">Retour</a></nav>
</header>

<section>
  <h2>Cours d’Anglais Interactif</h2>
  <p>Modules de prononciation, vocabulaire et communication pratique.</p>
  <ul>
    <li>Level 1: Everyday English</li>
    <li>Level 2: Business English</li>
    <li>Level 3: Speaking & Listening</li>
  </ul>
</section>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE - Anglais</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
  <h1>ISJIEE - Programme Anglais</h1>
  <nav><a href="index.html">Retour</a></nav>
</header>

<section>
  <h2>Cours d’Anglais Interactif</h2>
  <p>Modules de prononciation, vocabulaire et communication pratique.</p>
  <ul>
    <li>Level 1: Everyday English</li>
    <li>Level 2: Business English</li>
    <li>Level 3: Speaking & Listening</li>
  </ul>
</section>
</body>
</html>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE - Créativité</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
  <h1>ISJIEE - Espace Créatif</h1>
  <nav><a href="index.html">Retour</a></nav>
</header>

<section>
  <h2>Atelier de Créativité</h2>
  <p>Exprime ton imagination à travers le design, l’écriture, la musique et la vidéo.</p>
</section>
</b
