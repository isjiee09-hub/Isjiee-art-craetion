server.js        → serveur Node.js / Express
    ├── routes/
    │   ├── upload.js    → gestion des images
    │   └── content.js   → sauvegarde du contenu texte
    ├── /uploads/        → images sauvegardées

    └── package.json     → dépendances
    ├──  # depuis le dossier server 

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISJIEE Art Creation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body data-page="index">
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <div class="brand">
                    <img src="assets/logo.png" alt="ISJIEE Logo" class="logo">
                    <div class="brand-text">
                        <h1>ISJIEE Art Creation</h1>
                        <div class="tag">Design · Formation · Création</div>
                    </div>
                </div>
                <nav class="nav" id="main-nav">
                    <a href="index.html" class="nav-link active">Accueil</a>
                    <a href="portfolio/portfolio.html" class="nav-link">Portfolio</a>
                    <a href="modules/green-card.html" class="nav-link">Green Card</a>
                    <a href="modules/education-financiere.html" class="nav-link">Éducation Financière</a>
                    <a href="modules/programme-anglais.html" class="nav-link">Anglais</a>
                    <a href="modules/creativite.html" class="nav-link">Créativité</a>
                    <button id="nav-toggle" aria-label="Menu">☰</button>
                </nav>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="hero">
            <div class="hero-left">
                <div class="kicker">Studio & Formation</div>
                <h2>Créations visuelles & parcours pour jeunes entrepreneurs</h2>
                <p class="lead">ISJIEE ArtCreation conçoit, forme et accompagne les jeunes artistes — ateliers, mentorat, portfolio professionnel et formations spécialisées.</p>
                <div class="hero-actions">
                    <a href="portfolio/portfolio.html" class="btn">Voir le portfolio</a>
                    <a href="modules/green-card.html" class="btn ghost">Green Card</a>
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

        <section id="programmes" class="card-section">
            <h3>Nos Programmes</h3>
            <div class="programmes-grid">
                <div class="programme-card">
                    <h4>Green Card</h4>
                    <p>Formation entrepreneuriale de base</p>
                </div>
                <div class="programme-card">
                    <h4>Blue Card</h4>
                    <p>Stratégies marketing avancées</p>
                </div>
                <div class="programme-card">
                    <h4>Gold Card</h4>
                    <p>Programme élite avec coaching</p>
                </div>
            </div>
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
            <p>© 2025 ISJIEE Art Creation — Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</p>
            <div id="editor-tools">
                <button id="toggle-edit">📌 Mode édition</button>
                <button id="reset-page">🟧 Réinitialiser</button>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>


:root {
    --bg: #faf7f2;
    --card: #ffffff;
    --muted: #8b7d74;
    --accent: #caa76b;
    --accent-2: #6b5847;
    --shadow: 0 8px 28px rgba(18,16,16,0.06);
    --radius: 14px;
    --maxw: 1100px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    color: #222;
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
}

.container {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
.site-header {
    background: linear-gradient(90deg, #fff, #f3ede6);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo {
    width: 58px;
    height: 58px;
    border-radius: 10px;
    object-fit: cover;
}

.brand-text h1 {
    margin: 0;
    font-size: 18px;
    color: var(--accent-2);
}

.brand-text .tag {
    font-size: 12px;
    color: var(--muted);
}

/* Navigation */
.nav {
    display: flex;
    align-items: center;
    gap: 12px;
}

.nav-link {
    padding: 8px 12px;
    text-decoration: none;
    color: var(--accent-2);
    font-weight: 700;
    border-radius: 10px;
    position: relative;
    transition: all 0.24s ease;
}

.nav-link:hover {
    background: rgba(202,167,107,0.08);
    transform: translateY(-2px);
}

.nav-link.active {
    background: linear-gradient(90deg, var(--accent), #e8d6b0);
    color: #fff;
    box-shadow: 0 8px 20px rgba(202,167,107,0.14);
}

#nav-toggle {
    display: none;
    background: transparent;
    border: 0;
    font-size: 20px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 40px;
    align-items: center;
    padding: 60px 0;
}

.kicker {
    font-weight: 800;
    color: var(--muted);
    letter-spacing: 1px;
    font-size: 14px;
    text-transform: uppercase;
}

.hero h2 {
    color: var(--accent-2);
    margin: 6px 0 12px;
    font-size: 2.5rem;
    line-height: 1.2;
}

.lead {
    color: var(--muted);
    max-width: 55ch;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.hero-actions {
    margin-top: 14px;
    display: flex;
    gap: 12px;
}

/* Buttons */
.btn {
    background: var(--accent);
    color: #fff;
    padding: 12px 24px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 800;
    border: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(202,167,107,0.3);
}

.btn.ghost {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent-2);
}

/* Drop Box */
.drop-box {
    background: var(--card);
    border-radius: 12px;
    padding: 20px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 280px;
    transition: all 0.3s ease;
}

.drop-box.drag {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(18,16,16,0.08);
    border: 2px dashed var(--accent);
}

.drop-box img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 10px;
    object-fit: cover;
}

.drop-note {
    color: var(--muted);
    font-size: 13px;
    margin-top: 12px;
    text-align: center;
}

/* Sections */
.card-section {
    background: transparent;
    padding: 60px 0;
}

.card-section h3 {
    color: var(--accent-2);
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.muted {
    color: var(--muted);
}

.small {
    font-size: 13px;
}

/* Programme Grid */
.programmes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.programme-card {
    background: var(--card);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
}

.programme-card:hover {
    transform: translateY(-5px);
}

.programme-card h4 {
    color: var(--accent-2);
    margin-bottom: 10px;
}

/* Gallery Styles */
.tools {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 20px;
}

.upload-btn {
    background: var(--accent);
    color: #fff;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
}

.upload-btn input {
    display: none;
}

.drop-zone {
    background: linear-gradient(180deg, #fff, #f9f3ea);
    padding: 30px;
    border-radius: 12px;
    border: 2px dashed rgba(122,107,95,0.12);
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.drop-zone.drag {
    border-color: var(--accent);
    background: rgba(202,167,107,0.05);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.gallery-item {
    background: var(--card);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    position: relative;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.gallery-item .meta {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.clear-btn {
    background: transparent;
    border: 0;
    color: var(--muted);
    cursor: pointer;
    padding: 5px 10px;
}

/* Editor Tools */
#editor-tools {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 1000;
}

#editor-tools button {
    background: var(--card);
    border: 1px solid rgba(0,0,0,0.06);
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

/* Content Editable */
[contenteditable="true"] {
    outline: 2px dashed transparent;
    transition: outline 0.12s ease;
    border-radius: 4px;
}

.editing [contenteditable="true"] {
    outline: 2px dashed rgba(106,77,47,0.2);
    padding: 8px;
    border-radius: 6px;
}

/* Footer */
.site-footer {
    padding: 40px 0;
    background: transparent;
    color: var(--muted);
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
}

/* Responsive Design */
@media (max-width: 980px) {
    .hero {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
    
    .header-inner {
        flex-direction: column;
        gap: 15px;
    }
    
    #nav-toggle {
        display: block;
    }
    
    .nav {
        flex-direction: column;
        width: 100%;
        display: none;
    }
    
    .nav.opened {
        display: flex;
    }
    
    .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    .hero {
        padding: 40px 0;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .programmes-grid {
        grid-template-columns: 1fr;
    }
    
    #editor-tools {
        position: static;
        margin-top: 20px;
        flex-direction: row;
        justify-content: center;
    }
}

// --- Configuration et Helpers ---
const page = document.body.dataset.page || 'index';
const STORAGE_PREFIX = 'isj_site_v2_';

function storageKey(key) {
    return STORAGE_PREFIX + page + '_' + key;
}

function dataURLFromFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function hashPath(el) {
    let path = [];
    while (el && el.tagName) {
        let selector = el.tagName.toLowerCase();
        if (el.id) selector += '#' + el.id;
        if (el.className) selector += '.' + el.className.toString().split(' ').join('.');
        path.unshift(selector);
        el = el.parentElement;
    }
    return path.join('>');
}

// --- Gestion du Mode Édition ---
const toggleEditBtn = document.getElementById('toggle-edit');
const resetBtn = document.getElementById('reset-page');

function setEditMode(on) {
    if (on) {
        document.body.classList.add('editing');
        document.querySelectorAll('[data-editable="true"]').forEach(el => {
            el.setAttribute('contenteditable', 'true');
        });
    } else {
        document.body.classList.remove('editing');
        document.querySelectorAll('[data-editable="true"]').forEach(el => {
            el.removeAttribute('contenteditable');
        });
        saveEditable();
    }
}

function saveEditable() {
    const items = {};
    document.querySelectorAll('[data-editable="true"]').forEach(el => {
        const key = el.id || el.dataset.key || ('editable_' + hashPath(el));
        items[key] = el.innerHTML;
    });
    if (Object.keys(items).length) {
        localStorage.setItem(storageKey('edits'), JSON.stringify(items));
    }
}

function restoreEditable() {
    const raw = localStorage.getItem(storageKey('edits'));
    if (!raw) return;
    
    try {
        const items = JSON.parse(raw);
        document.querySelectorAll('[data-editable="true"]').forEach(el => {
            const key = el.id || el.dataset.key || ('editable_' + hashPath(el));
            if (items[key] !== undefined) {
                el.innerHTML = items[key];
            }
        });
    } catch (e) {
        console.error('Error restoring edits:', e);
    }
}

// Événements Mode Édition
if (toggleEditBtn) {
    toggleEditBtn.addEventListener('click', () => {
        const isEditing = document.body.classList.contains('editing');
        setEditMode(!isEditing);
        toggleEditBtn.textContent = isEditing ? '📌 Mode édition' : '🚪 Quitter édition';
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (!confirm('Réinitialiser les changements locaux pour cette page ?')) return;
        
        localStorage.removeItem(storageKey('edits'));
        localStorage.removeItem(storageKey('hero_image'));
        localStorage.removeItem(storageKey('gallery_images'));
        location.reload();
    });
}

// Sauvegarde automatique
document.addEventListener('focusout', (ev) => {
    if (ev.target && ev.target.hasAttribute('contenteditable')) {
        saveEditable();
    }
});

// --- Navigation ---
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
    }
    
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');
    });
});

// --- Gestion des Images Hero ---
document.querySelectorAll('.editable-img').forEach(zone => {
    const key = zone.dataset.key || 'hero_image';
    
    // Charger l'image sauvegardée
    if (key === 'hero_image') {
        const saved = localStorage.getItem(storageKey('hero_image'));
        const img = zone.querySelector('img');
        if (saved && img) {
            img.src = saved;
        }
    }
    
    // Événements Drag & Drop
    ['dragenter', 'dragover'].forEach(ev => {
        zone.addEventListener(ev, e => {
            e.preventDefault();
            zone.classList.add('drag');
        });
    });
    
    ['dragleave', 'drop'].forEach(ev => {
        zone.addEventListener(ev, e => {
            e.preventDefault();
            zone.classList.remove('drag');
        });
    });
    
    zone.addEventListener('drop', async (e) => {
        if (!document.body.classList.contains('editing') && zone.dataset.key === 'hero_image') {
            alert('Active le Mode édition pour changer cette image.');
            return;
        }
        
        const files = Array.from(e.dataTransfer.files).filter(f => f.type && f.type.startsWith('image/'));
        if (!files.length) return;
        
        for (const file of files) {
            const url = await dataURLFromFile(file);
            const img = zone.querySelector('img');
            if (img) {
                img.src = url;
                if (zone.dataset.key === 'hero_image') {
                    localStorage.setItem(storageKey('hero_image'), url);
                }
            } else {
                addImageToGallery(url);
            }
        }
    });
});

// --- Galerie ---
const galleryEl = document.getElementById('gallery');
const dropGallery = document.getElementById('drop-gallery');
const fileInput = document.getElementById('file-input');
const clearBtn = document.getElementById('clear-gallery');

let images = JSON.parse(localStorage.getItem(storageKey('gallery_images')) || '[]');

function renderGallery() {
    if (!galleryEl) return;
    
    galleryEl.innerHTML = '';
    images.forEach((dataUrl, index) => {
        const el = document.createElement('div');
        el.className = 'gallery-item';
        el.innerHTML = `
            <img src="${dataUrl}" alt="Image ${index + 1}">
            <div class="meta">
                <div>Image ${index + 1}</div>
                <button class="clear-btn" data-index="${index}">Supprimer</button>
            </div>
        `;
        galleryEl.appendChild(el);
    });
}

function saveGallery() {
    localStorage.setItem(storageKey('gallery_images'), JSON.stringify(images));
}

function addImageToGallery(url) {
    images.unshift(url);
    saveGallery();
    renderGallery();
}

// Gestion de la galerie
if (dropGallery) {
    ['dragenter', 'dragover'].forEach(ev => {
        dropGallery.addEventListener(ev, e => {
            e.preventDefault();
            dropGallery.classList.add('drag');
        });
    });
    
    ['dragleave', 'drop'].forEach(ev => {
        dropGallery.addEventListener(ev, e => {
            e.preventDefault();
            dropGallery.classList.remove('drag');
        });
    });
    
    dropGallery.addEventListener('drop', async (e) => {
        if (!document.body.classList.contains('editing')) {
            alert('Active le Mode édition pour ajouter des images à la galerie.');
            return;
        }
        
        const files = Array.from(e.dataTransfer.files)
            .filter(f => f.type && f.type.startsWith('image/'))
            .slice(0, 24);
        
        for (const file of files) {
            const url = await dataURLFromFile(file);
            addImageToGallery(url);
        }
    });
}

if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        if (!document.body.classList.contains('editing')) {
            alert('Active le Mode édition pour ajouter des images.');
            return;
        }
        
        const files = Array.from(e.target.files || [])
            .filter(f => f.type && f.type.startsWith('image/'))
            .slice(0, 12);
        
        for (const file of files) {
            const url = await dataURLFromFile(file);
            addImageToGallery(url);
        }
        
        fileInput.value = '';
    });
}

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (!document.body.classList.contains('editing')) {
            if (!confirm('Tu n\'es pas en mode édition. Vider quand même la galerie ?')) return;
        }
        
        if (!confirm('Vider la galerie localement ?')) return;
        
        images = [];
        saveGallery();
        renderGallery();
    });
}

if (galleryEl) {
    galleryEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-index]');
        if (!btn) return;
        
        const index = Number(btn.dataset.index);
        images.splice(index, 1);
        saveGallery();
        renderGallery();
    });
}

// --- Formulaire de Contact ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        const subject = `Contact: ${name}`;
        const body = `${message}\n\nEmail: ${email}`;
        
        window.location.href = `mailto:isjiee.artcreation@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

// --- Navigation Mobile ---
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('opened');
    });
}

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', () => {
    restoreEditable();
    renderGallery();
    
    // Restaurer les images éditable au chargement
    document.querySelectorAll('img[data-editable-img]').forEach(img => {
        const zone = img.closest('.editable-img');
        if (zone) {
            const key = zone.dataset.key;
            if (key === 'hero_image') {
                const saved = localStorage.getItem(storageKey('hero_image'));
                if (saved) img.src = saved;
            }
        }
    });
});

// Sauvegarde avant déchargement
window.addEventListener('beforeunload', () => {
    if (document.body.classList.contains('editing')) {
        saveEditable();
    }
});

// API globale
window.ISJ_API_BASE = 'http://localhost:4000';
window.addImageToGallery = addImageToGallery;


{
  "name": "isj-site-api",
  "version": "1.0.0",
  "description": "API pour ISJIEE ArtCreation - upload images & sauvegarde contenu",
  "main": "server/server.js",
  "scripts": {
    "start": "node server/server.js",
    "dev": "nodemon server/server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "multer": "^1.4.5",
    "morgan": "^1.10.0",
    "helmet": "^6.0.1",
    "dotenv": "^16.0.3",
    "fs-extra": "^11.1.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}



       
   
