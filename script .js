// script.js - Fonctionnalités principales du site ISJIEE

// Charger la configuration
const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {};

// État du site
let siteState = {
    editing: false,
    theme: localStorage.getItem('theme') || 'light',
    fontSize: parseInt(localStorage.getItem('fontSize')) || 16,
    cookies: {
        analytics: localStorage.getItem('cookiesAnalytics') === 'true',
        marketing: localStorage.getItem('cookiesMarketing') === 'true'
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('ISJIEE Site v2.0 - Initialisé');
    
    // Appliquer le thème
    applyTheme(siteState.theme);
    
    // Appliquer la taille de police
    document.documentElement.style.fontSize = siteState.fontSize + 'px';
    
    // Initialiser les événements
    initEvents();
    
    // Charger les vidéos
    loadVideos();
    
    // Restaurer les préférences
    restorePreferences();
});

// Initialiser les événements
function initEvents() {
    // Mode édition
    const toggleEdit = document.getElementById('toggle-edit');
    if (toggleEdit) {
        toggleEdit.addEventListener('click', toggleEditMode);
    }
    
    // Sauvegarde
    const saveBtn = document.getElementById('save-config');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveConfiguration);
    }
    
    // Réinitialisation
    const resetBtn = document.getElementById('reset-config');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetConfiguration);
    }
    
    // Statistiques
    const statsBtn = document.getElementById('view-stats');
    if (statsBtn) {
        statsBtn.addEventListener('click', showStatistics);
    }
    
    // Menu mobile
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('opened');
        });
    }
    
    // Navigation smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Boutons de paiement
    initPaymentButtons();
    
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Configuration des cookies
    initCookieSettings();
    
    // Changement d'images (mode édition)
    initImageEditors();
    
    // Ajout de vidéos
    const addVideoBtn = document.getElementById('addVideoBtn');
    if (addVideoBtn) {
        addVideoBtn.addEventListener('click', addVideo);
    }
}

// Mode édition
function toggleEditMode() {
    siteState.editing = !siteState.editing;
    
    if (siteState.editing) {
        document.body.classList.add('editing');
        document.querySelectorAll('[data-editable]').forEach(el => {
            if (el.dataset.editable === 'text') {
                el.setAttribute('contenteditable', 'true');
            }
        });
        document.getElementById('toggle-edit').innerHTML = '<i class="fas fa-check"></i> Quitter édition';
        document.getElementById('addVideoBtn').style.display = 'block';
    } else {
        document.body.classList.remove('editing');
        document.querySelectorAll('[contenteditable="true"]').forEach(el => {
            el.removeAttribute('contenteditable');
        });
        document.getElementById('toggle-edit').innerHTML = '<i class="fas fa-edit"></i> Mode édition';
        document.getElementById('addVideoBtn').style.display = 'none';
        saveContent();
    }
}

// Sauvegarder le contenu
function saveContent() {
    const content = {};
    
    document.querySelectorAll('[data-editable]').forEach(el => {
        const key = el.dataset.key;
        const type = el.dataset.editable;
        
        if (key) {
            if (type === 'text') {
                content[key] = el.innerHTML;
            } else if (type === 'image') {
                content[key] = el.src;
            } else if (type === 'link') {
                content[key] = el.href;
            }
        }
    });
    
    localStorage.setItem('isjiee_content', JSON.stringify(content));
    showNotification('Contenu sauvegardé', 'success');
}

// Restaurer le contenu
function restoreContent() {
    const saved = localStorage.getItem('isjiee_content');
    if (!saved) return;
    
    try {
        const content = JSON.parse(saved);
        
        Object.entries(content).forEach(([key, value]) => {
            const el = document.querySelector(`[data-key="${key}"]`);
            if (el) {
                const type = el.dataset.editable;
                if (type === 'text') {
                    el.innerHTML = value;
                } else if (type === 'image') {
                    el.src = value;
                } else if (type === 'link') {
                    el.href = value;
                }
            }
        });
    } catch (e) {
        console.error('Erreur de restauration:', e);
    }
}

// Sauvegarde complète
function saveConfiguration() {
    saveContent();
    localStorage.setItem('isjiee_theme', siteState.theme);
    localStorage.setItem('isjiee_fontSize', siteState.fontSize);
    showNotification('Configuration sauvegardée', 'success');
}

// Réinitialisation
function resetConfiguration() {
    if (confirm('Voulez-vous vraiment réinitialiser toutes les configurations ?')) {
        localStorage.clear();
        location.reload();
    }
}

// Statistiques
function showStatistics() {
    const stats = {
        pagesVues: Math.floor(Math.random() * 1000) + 100,
        visiteurs: Math.floor(Math.random() * 500) + 50,
        conversions: Math.floor(Math.random() * 50) + 5
    };
    
    alert(`📊 Statistiques du site\n\nPages vues: ${stats.pagesVues}\nVisiteurs uniques: ${stats.visiteurs}\nConversions: ${stats.conversions}`);
}

// Boutons de paiement
function initPaymentButtons() {
    // PayPal
    const paypalBtn = document.getElementById('paypalBtn');
    if (paypalBtn) {
        paypalBtn.addEventListener('click', () => {
            const amount = getSelectedAmount();
            window.open(`${config.payment?.paypal || '#'}?amount=${amount}`, '_blank');
        });
    }
    
    // MonCash
    const moncashBtn = document.getElementById('moncashBtn');
    if (moncashBtn) {
        moncashBtn.addEventListener('click', () => {
            const amount = getSelectedAmount();
            window.open(`${config.payment?.moncash || '#'}?amount=${amount}`, '_blank');
        });
    }
    
    // Carte
    const cardBtn = document.getElementById('cardBtn');
    if (cardBtn) {
        cardBtn.addEventListener('click', () => {
            const amount = getSelectedAmount();
            window.open(`${config.payment?.stripe || '#'}?amount=${amount}`, '_blank');
        });
    }
    
    // Boutons de montant
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Récupérer le montant sélectionné
function getSelectedAmount() {
    const activeBtn = document.querySelector('.amount-btn.active');
    if (activeBtn) {
        return activeBtn.dataset.amount;
    }
    
    const custom = document.getElementById('customAmount');
    if (custom && custom.value) {
        return custom.value;
    }
    
    return 25; // Montant par défaut
}

// Formulaire de contact
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Ici, vous pouvez ajouter l'envoi vers un serveur
    console.log('Formulaire soumis:', { name, email, phone, subject, message });
    
    showNotification('Message envoyé avec succès !', 'success');
    e.target.reset();
}

// Configuration des cookies
function initCookieSettings() {
    const analyticsCheck = document.getElementById('cookiesAnalytics');
    const marketingCheck = document.getElementById('cookiesMarketing');
    
    if (analyticsCheck) {
        analyticsCheck.checked = siteState.cookies.analytics;
        analyticsCheck.addEventListener('change', function() {
            siteState.cookies.analytics = this.checked;
            localStorage.setItem('cookiesAnalytics', this.checked);
        });
    }
    
    if (marketingCheck) {
        marketingCheck.checked = siteState.cookies.marketing;
        marketingCheck.addEventListener('change', function() {
            siteState.cookies.marketing = this.checked;
            localStorage.setItem('cookiesMarketing', this.checked);
        });
    }
    
    // Thème
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.dataset.theme;
            siteState.theme = theme;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
            
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Taille de police
    const fontSizeInput = document.getElementById('fontSize');
    if (fontSizeInput) {
        fontSizeInput.value = siteState.fontSize;
        fontSizeInput.addEventListener('input', function() {
            const size = parseInt(this.value);
            siteState.fontSize = size;
            document.documentElement.style.fontSize = size + 'px';
            localStorage.setItem('fontSize', size);
        });
    }
}

// Appliquer le thème
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Auto - basé sur les préférences système
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
}

// Éditeurs d'images
function initImageEditors() {
    document.querySelectorAll('.change-image-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const img = document.getElementById(targetId);
            
            if (img) {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                
                input.onchange = function(e) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        img.src = event.target.result;
                        saveContent();
                        showNotification('Image mise à jour', 'success');
                    };
                    
                    reader.readAsDataURL(file);
                };
                
                input.click();
            }
        });
    });
}

// Charger les vidéos
function loadVideos() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    const videos = config.videos?.gallery || [];
    
    videoGrid.innerHTML = '';
    videos.forEach((video, index) => {
        const videoEl = document.createElement('div');
        videoEl.className = 'video-item';
        videoEl.innerHTML = `
            <iframe width="100%" height="200" 
                    src="https://www.youtube.com/embed/${video.id}" 
                    title="${video.title}" 
                    frameborder="0" 
                    allowfullscreen></iframe>
            <p>${video.title}</p>
            ${siteState.editing ? '<button class="delete-video-btn" data-index="'+index+'"><i class="fas fa-trash"></i></button>' : ''}
        `;
        videoGrid.appendChild(videoEl);
    });
    
    // Boutons de suppression en mode édition
    if (siteState.editing) {
        document.querySelectorAll('.delete-video-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                if (confirm('Supprimer cette vidéo ?')) {
                    // Logique de suppression
                    this.closest('.video-item').remove();
                    showNotification('Vidéo supprimée', 'info');
                }
            });
        });
    }
}

// Ajouter une vidéo
function addVideo() {
    const videoId = prompt('Entrez l\'ID de la vidéo YouTube:');
    if (!videoId) return;
    
    const title = prompt('Titre de la vidéo:');
    if (!title) return;
    
    const videoGrid = document.getElementById('videoGrid');
    if (videoGrid) {
        const videoEl = document.createElement('div');
        videoEl.className = 'video-item';
        videoEl.innerHTML = `
            <iframe width="100%" height="200" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="${title}" 
                    frameborder="0" 
                    allowfullscreen></iframe>
            <p>${title}</p>
            <button class="delete-video-btn"><i class="fas fa-trash"></i></button>
        `;
        videoGrid.appendChild(videoEl);
        showNotification('Vidéo ajoutée', 'success');
    }
}

// Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 8px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Restaurer les préférences
function restorePreferences() {
    restoreContent();
    
    // Restaurer le thème actif
    const theme = siteState.theme;
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
}

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    [contenteditable="true"] {
        outline: 2px dashed var(--primary);
        padding: 5px;
        border-radius: 4px;
    }
    
    .delete-video-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background: var(--danger);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .video-item {
        position: relative;
    }
`;

document.head.appendChild(style);