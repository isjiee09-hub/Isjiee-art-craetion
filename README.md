isjiee-site/
├── index.html          # Page principale
├── style.css           # Styles
├── script.js           # Fonctionnalités
├── config.js           # Configuration du site
├── README.md           # Documentation
└── assets/             # Images et vidéos
    ├── logo.png
    ├── favicon.ico
    └── videos/<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISJIEE - Création & Formation</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Barre d'administration (visible seulement en mode édition) -->
    <div id="admin-bar" class="admin-bar">
        <div class="admin-container">
            <span class="admin-title">⚙️ Mode Administration</span>
            <div class="admin-buttons">
                <button id="toggle-edit" class="admin-btn"><i class="fas fa-edit"></i> Mode édition</button>
                <button id="save-config" class="admin-btn"><i class="fas fa-save"></i> Sauvegarder</button>
                <button id="reset-config" class="admin-btn"><i class="fas fa-undo"></i> Réinitialiser</button>
                <button id="view-stats" class="admin-btn"><i class="fas fa-chart-bar"></i> Statistiques</button>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <div class="logo-area">
                    <img src="assets/logo.png" alt="ISJIEE Logo" class="logo" id="site-logo" data-editable="image">
                    <div class="site-title" data-editable="text" data-key="site_title">ISJIEE</div>
                </div>
                
                <nav class="main-nav" id="mainNav">
                    <a href="#accueil" class="nav-link active">Accueil</a>
                    <a href="#about" class="nav-link">À propos</a>
                    <a href="#green-card" class="nav-link">Green Card</a>
                    <a href="#videos" class="nav-link">Vidéos</a>
                    <a href="#winginfluenceur" class="nav-link">WingInfluenceur</a>
                    <a href="#marketing" class="nav-link">Marketing</a>
                    <a href="#contact" class="nav-link">Contact</a>
                    <a href="#shop" class="nav-link">Boutique</a>
                </nav>
                
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <main>
        <!-- SECTION 1: ACCUEIL / HERO -->
        <section id="accueil" class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title" data-editable="text" data-key="hero_title">
                            ISJIEE <span class="highlight">Création & Formation</span>
                        </h1>
                        <p class="hero-subtitle" data-editable="text" data-key="hero_subtitle">
                            Inspiré par la lumière, forgé dans le feu
                        </p>
                        <p class="hero-description" data-editable="text" data-key="hero_desc">
                            Accompagnement des jeunes talents haïtiens vers l'excellence entrepreneuriale et créative
                        </p>
                        <div class="hero-buttons">
                            <a href="#green-card" class="btn btn-primary">Découvrir Green Card</a>
                            <a href="#videos" class="btn btn-secondary">Voir les vidéos</a>
                            <button class="btn btn-outline" id="donateBtn"><i class="fas fa-heart"></i> Faire un don</button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="assets/hero-placeholder.jpg" alt="ISJIEE Hero" id="hero-image" data-editable="image">
                        <button class="change-image-btn" data-target="hero-image"><i class="fas fa-camera"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: OBJECTIF, VISION, MISSION -->
        <section id="about" class="about-section">
            <div class="container">
                <h2 class="section-title" data-editable="text" data-key="about_title">Qui sommes-nous ?</h2>
                
                <div class="about-grid">
                    <!-- Objectif -->
                    <div class="about-card">
                        <div class="card-icon"><i class="fas fa-bullseye"></i></div>
                        <h3 data-editable="text" data-key="objectif_title">Notre Objectif</h3>
                        <p data-editable="text" data-key="objectif_text">
                            Former et accompagner 1000 jeunes entrepreneurs haïtiens d'ici 2028, en leur fournissant les outils et connaissances nécessaires pour réussir dans l'économie moderne.
                        </p>
                        <button class="edit-icon" data-target="objectif_text"><i class="fas fa-pencil-alt"></i></button>
                    </div>

                    <!-- Vision -->
                    <div class="about-card">
                        <div class="card-icon"><i class="fas fa-eye"></i></div>
                        <h3 data-editable="text" data-key="vision_title">Notre Vision</h3>
                        <p data-editable="text" data-key="vision_text">
                            Devenir le principal catalyseur de l'innovation et de la créativité en Haïti, créant un écosystème où les jeunes talents peuvent s'épanouir et rayonner internationalement.
                        </p>
                        <button class="edit-icon" data-target="vision_text"><i class="fas fa-pencil-alt"></i></button>
                    </div>

                    <!-- Mission -->
                    <div class="about-card">
                        <div class="card-icon"><i class="fas fa-hand-heart"></i></div>
                        <h3 data-editable="text" data-key="mission_title">Notre Mission</h3>
                        <p data-editable="text" data-key="mission_text">
                            Offrir des formations pratiques, un mentorat personnalisé et des opportunités de réseautage pour permettre aux jeunes de transformer leurs idées en entreprises durables.
                        </p>
                        <button class="edit-icon" data-target="mission_text"><i class="fas fa-pencil-alt"></i></button>
                    </div>
                </div>

                <!-- Valeurs -->
                <div class="values-section">
                    <h3 data-editable="text" data-key="values_title">Nos Valeurs</h3>
                    <div class="values-grid">
                        <span class="value-tag" data-editable="text" data-key="value1">🔆 Excellence</span>
                        <span class="value-tag" data-editable="text" data-key="value2">🤝 Solidarité</span>
                        <span class="value-tag" data-editable="text" data-key="value3">💡 Innovation</span>
                        <span class="value-tag" data-editable="text" data-key="value4">🌍 Ouverture</span>
                        <span class="value-tag" data-editable="text" data-key="value5">🔥 Passion</span>
                        <span class="value-tag" data-editable="text" data-key="value6">📈 Intégrité</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: GREEN CARD PROGRAMME -->
        <section id="green-card" class="green-card-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title" data-editable="text" data-key="greencard_title">Programme Green Card</h2>
                    <p class="section-subtitle" data-editable="text" data-key="greencard_subtitle">
                        La formation entrepreneuriale complète pour les jeunes ambitieux
                    </p>
                </div>

                <div class="program-content">
                    <div class="program-left">
                        <div class="program-image">
                            <img src="assets/greencard-placeholder.jpg" alt="Green Card" id="greencard-image" data-editable="image">
                            <button class="change-image-btn" data-target="greencard-image"><i class="fas fa-camera"></i></button>
                        </div>
                    </div>

                    <div class="program-right">
                        <div class="program-description" data-editable="text" data-key="greencard_desc">
                            <p>Le programme Green Card est une formation intensive de 3 mois qui couvre tous les aspects de la création et gestion d'entreprise :</p>
                        </div>

                        <ul class="program-features">
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature1">Création d'entreprise et business model</span></li>
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature2">Marketing digital et réseaux sociaux</span></li>
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature3">Gestion financière et comptable</span></li>
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature4">Personal branding et communication</span></li>
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature5">Mentorat personnalisé</span></li>
                            <li><i class="fas fa-check-circle"></i> <span data-editable="text" data-key="feature6">Réseautage et partenariats</span></li>
                        </ul>

                        <div class="program-price" data-editable="text" data-key="greencard_price">
                            <span class="price">150$ USD</span> <span class="price-note">par participant</span>
                        </div>

                        <div class="program-buttons">
                            <button class="btn btn-primary" id="greencardPaymentBtn"><i class="fas fa-credit-card"></i> Payer maintenant</button>
                            <a href="#" class="btn btn-secondary" id="greencardInfoBtn">Plus d'infos</a>
                        </div>
                    </div>
                </div>

                <!-- Témoignages -->
                <div class="testimonials">
                    <h3 data-editable="text" data-key="testimonials_title">Ils ont participé au programme</h3>
                    <div class="testimonials-grid">
                        <div class="testimonial">
                            <img src="assets/testimonial1.jpg" alt="Témoin" data-editable="image">
                            <p data-editable="text" data-key="testimonial1">"Green Card a changé ma vie, j'ai lancé ma propre entreprise de design"</p>
                            <cite>- Marie J.</cite>
                        </div>
                        <div class="testimonial">
                            <img src="assets/testimonial2.jpg" alt="Témoin" data-editable="image">
                            <p data-editable="text" data-key="testimonial2">"Les meilleurs 3 mois de formation que j'ai jamais faits"</p>
                            <cite>- Pierre L.</cite>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: ESPACE VIDÉO / VITRINE -->
        <section id="videos" class="videos-section">
            <div class="container">
                <h2 class="section-title" data-editable="text" data-key="videos_title">Espace Vidéo / Vitrine</h2>
                
                <div class="video-gallery">
                    <!-- Vidéo principale -->
                    <div class="main-video">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" 
                                title="ISJIEE Présentation" frameborder="0" allowfullscreen id="main-video" 
                                data-editable="video" data-key="main_video"></iframe>
                        <button class="edit-video-btn" data-target="main-video">Changer la vidéo</button>
                    </div>

                    <!-- Grille de vidéos -->
                    <h3 data-editable="text" data-key="videos_grid_title">Nos dernières créations</h3>
                    <div class="video-grid" id="videoGrid">
                        <!-- Les vidéos seront générées dynamiquement -->
                    </div>

                    <!-- Bouton pour ajouter une vidéo (mode édition) -->
                    <button id="addVideoBtn" class="btn btn-outline add-video-btn" style="display: none;">
                        <i class="fas fa-plus"></i> Ajouter une vidéo
                    </button>
                </div>
            </div>
        </section>

        <!-- SECTION 5: WINGINFLUENCEUR - MARKETING -->
        <section id="winginfluenceur" class="wing-section">
            <div class="container">
                <h2 class="section-title" data-editable="text" data-key="wing_title">WingInfluenceur</h2>
                <p class="section-subtitle" data-editable="text" data-key="wing_subtitle">
                    Devenez influenceur avec ISJIEE
                </p>

                <div class="wing-content">
                    <div class="wing-text">
                        <h3 data-editable="text" data-key="wing_offer_title">Ce que nous offrons</h3>
                        <ul class="wing-list">
                            <li><i class="fas fa-star"></i> <span data-editable="text" data-key="wing_item1">Formation au personal branding</span></li>
                            <li><i class="fas fa-star"></i> <span data-editable="text" data-key="wing_item2">Stratégie de contenu personnalisée</span></li>
                            <li><i class="fas fa-star"></i> <span data-editable="text" data-key="wing_item3">Mise en relation avec des marques</span></li>
                            <li><i class="fas fa-star"></i> <span data-editable="text" data-key="wing_item4">Monétisation de votre audience</span></li>
                        </ul>
                        <button class="btn btn-primary" id="wingPaymentBtn">Rejoindre le programme</button>
                    </div>
                    <div class="wing-image">
                        <img src="assets/wing-placeholder.jpg" alt="WingInfluenceur" id="wing-image" data-editable="image">
                        <button class="change-image-btn" data-target="wing-image"><i class="fas fa-camera"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 6: MARKETING ESPACE -->
        <section id="marketing" class="marketing-section">
            <div class="container">
                <h2 class="section-title" data-editable="text" data-key="marketing_title">Espace Marketing</h2>
                
                <div class="marketing-grid">
                    <div class="marketing-card">
                        <i class="fas fa-chart-line"></i>
                        <h4 data-editable="text" data-key="marketing1_title">Stratégie Digitale</h4>
                        <p data-editable="text" data-key="marketing1_desc">Plan marketing personnalisé pour votre entreprise</p>
                        <button class="btn-small">En savoir plus</button>
                    </div>
                    
                    <div class="marketing-card">
                        <i class="fas fa-ad"></i>
                        <h4 data-editable="text" data-key="marketing2_title">Publicité Social Media</h4>
                        <p data-editable="text" data-key="marketing2_desc">Campagnes Facebook, Instagram, TikTok optimisées</p>
                        <button class="btn-small">En savoir plus</button>
                    </div>
                    
                    <div class="marketing-card">
                        <i class="fas fa-search"></i>
                        <h4 data-editable="text" data-key="marketing3_title">SEO & Référencement</h4>
                        <p data-editable="text" data-key="marketing3_desc">Apparaissez en première page des recherches</p>
                        <button class="btn-small">En savoir plus</button>
                    </div>
                    
                    <div class="marketing-card">
                        <i class="fas fa-envelope"></i>
                        <h4 data-editable="text" data-key="marketing4_title">Email Marketing</h4>
                        <p data-editable="text" data-key="marketing4_desc">Campagnes d'emails qui convertissent</p>
                        <button class="btn-small">En savoir plus</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 7: FORMULAIRE DE CONTACT & BOUTONS PAIEMENT -->
        <section id="contact" class="contact-section">
            <div class="container">
                <div class="contact-grid">
                    <!-- Formulaire de contact -->
                    <div class="contact-form-container">
                        <h2 data-editable="text" data-key="contact_title">Contactez-nous</h2>
                        
                        <form id="contactForm" class="contact-form">
                            <div class="form-group">
                                <input type="text" id="name" placeholder="Votre nom" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" placeholder="Votre email" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="phone" placeholder="Votre téléphone">
                            </div>
                            <div class="form-group">
                                <select id="subject">
                                    <option value="general">Question générale</option>
                                    <option value="greencard">Programme Green Card</option>
                                    <option value="wing">WingInfluenceur</option>
                                    <option value="marketing">Services marketing</option>
                                    <option value="partnership">Partenariat</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea id="message" placeholder="Votre message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">
                                <i class="fas fa-paper-plane"></i> Envoyer
                            </button>
                        </form>
                    </div>

                    <!-- Informations et paiement -->
                    <div class="contact-info">
                        <h3 data-editable="text" data-key="info_title">Informations</h3>
                        
                        <div class="info-item">
                            <i class="fas fa-phone"></i>
                            <span data-editable="text" data-key="contact_phone">+509 3844 7063</span>
                        </div>
                        
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <span data-editable="text" data-key="contact_email">contact@isjiee.ht</span>
                        </div>
                        
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span data-editable="text" data-key="contact_address">Port-au-Prince, Haïti</span>
                        </div>

                        <!-- Boutons de paiement -->
                        <div class="payment-section">
                            <h4 data-editable="text" data-key="payment_title">Paiement en ligne</h4>
                            
                            <div class="payment-buttons">
                                <button class="payment-btn paypal" id="paypalBtn">
                                    <i class="fab fa-paypal"></i> PayPal
                                </button>
                                
                                <button class="payment-btn moncash" id="moncashBtn">
                                    <img src="assets/moncash-icon.png" alt="MonCash"> MonCash
                                </button>
                                
                                <button class="payment-btn card" id="cardBtn">
                                    <i class="fas fa-credit-card"></i> Carte bancaire
                                </button>
                            </div>

                            <div class="payment-amounts">
                                <button class="amount-btn" data-amount="25">25$</button>
                                <button class="amount-btn" data-amount="50">50$</button>
                                <button class="amount-btn" data-amount="100">100$</button>
                                <button class="amount-btn" data-amount="200">200$</button>
                                <input type="number" id="customAmount" placeholder="Autre montant" min="1">
                            </div>
                        </div>

                        <!-- Liens rapides -->
                        <div class="quick-links">
                            <h4 data-editable="text" data-key="links_title">Liens utiles</h4>
                            <div class="links-grid">
                                <a href="#" class="quick-link" data-editable="link" data-key="link1">Mentions légales</a>
                                <a href="#" class="quick-link" data-editable="link" data-key="link2">Politique de confidentialité</a>
                                <a href="#" class="quick-link" data-editable="link" data-key="link3">CGV</a>
                                <a href="#" class="quick-link" data-editable="link" data-key="link4">FAQ</a>
                                <a href="#" class="quick-link" data-editable="link" data-key="link5">Blog</a>
                                <a href="#" class="quick-link" data-editable="link" data-key="link6">Presse</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 8: POLITIQUE DE CONFIGURATION -->
        <section id="configuration" class="config-section">
            <div class="container">
                <h2 class="section-title" data-editable="text" data-key="config_title">Politique de configuration</h2>
                
                <div class="config-content">
                    <div class="config-item">
                        <h3><i class="fas fa-cookie-bite"></i> <span data-editable="text" data-key="config1_title">Cookies et données</span></h3>
                        <p data-editable="text" data-key="config1_text">
                            Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer vos préférences ci-dessous.
                        </p>
                        <label class="switch">
                            <input type="checkbox" id="cookiesAnalytics" checked>
                            <span class="slider"></span>
                            <span>Cookies analytiques</span>
                        </label>
                        <label class="switch">
                            <input type="checkbox" id="cookiesMarketing">
                            <span class="slider"></span>
                            <span>Cookies marketing</span>
                        </label>
                    </div>

                    <div class="config-item">
                        <h3><i class="fas fa-palette"></i> <span data-editable="text" data-key="config2_title">Apparence</span></h3>
                        <div class="theme-selector">
                            <button class="theme-btn" data-theme="light">☀️ Clair</button>
                            <button class="theme-btn" data-theme="dark">🌙 Sombre</button>
                            <button class="theme-btn" data-theme="auto">🔄 Auto</button>
                        </div>
                        <div class="font-size">
                            <label>Taille du texte :</label>
                            <input type="range" id="fontSize" min="12" max="24" value="16">
                        </div>
                    </div>

                    <div class="config-item">
                        <h3><i class="fas fa-bell"></i> <span data-editable="text" data-key="config3_title">Notifications</span></h3>
                        <label class="switch">
                            <input type="checkbox" id="notificationsNews">
                            <span class="slider"></span>
                            <span>Newsletter</span>
                        </label>
                        <label class="switch">
                            <input type="checkbox" id="notificationsPromo">
                            <span class="slider"></span>
                            <span>Offres promotionnelles</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="assets/logo.png" alt="ISJIEE" class="footer-logo">
                    <p data-editable="text" data-key="footer_about">Inspiré par la lumière, forgé dans le feu</p>
                </div>
                
                <div class="footer-col">
                    <h4 data-editable="text" data-key="footer_links">Liens</h4>
                    <a href="#accueil">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#green-card">Green Card</a>
                    <a href="#videos">Vidéos</a>
                </div>
                
                <div class="footer-col">
                    <h4 data-editable="text" data-key="footer_legal">Légal</h4>
                    <a href="#" data-editable="link" data-key="footer_privacy">Politique de confidentialité</a>
                    <a href="#" data-editable="link" data-key="footer_terms">Conditions d'utilisation</a>
                    <a href="#" data-editable="link" data-key="footer_cookies">Gestion des cookies</a>
                </div>
                
                <div class="footer-col">
                    <h4 data-editable="text" data-key="footer_social">Suivez-nous</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p data-editable="text" data-key="footer_copyright">
                    © 2025 ISJIEE - Tous droits réservés - Cadet Dieurissaint
                </p>
                <p class="footer-version">Version 2.0</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="config.js"></script>
    <script src="script.js"></script>
</body>
</html>:root {
    --primary: #caa76b;
    --primary-dark: #b88d4a;
    --secondary: #6b5847;
    --dark: #2c2c2c;
    --light: #faf7f2;
    --gray: #8b7d74;
    --success: #4CAF50;
    --danger: #f44336;
    --warning: #ff9800;
    --info: #2196F3;
    --bg: #ffffff;
    --text: #333333;
    --shadow: 0 10px 30px rgba(0,0,0,0.08);
    --radius: 12px;
    --max-width: 1200px;
}

/* Mode sombre */
[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #f0f0f0;
    --light: #2d2d2d;
    --shadow: 0 10px 30px rgba(0,0,0,0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    background: var(--bg);
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
}

/* Admin Bar */
.admin-bar {
    background: #2c3e50;
    color: white;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: none;
}

body.editing .admin-bar {
    display: block;
}

.admin-container {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.admin-buttons {
    display: flex;
    gap: 10px;
}

.admin-btn {
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.admin-btn:hover {
    background: rgba(255,255,255,0.2);
}

/* Header */
.site-header {
    background: var(--bg);
    box-shadow: var(--shadow);
    position: sticky;
    top: 40px;
    z-index: 999;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}

.site-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
}

.main-nav {
    display: flex;
    gap: 20px;
}

.nav-link {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.3s;
}

.nav-link:hover,
.nav-link.active {
    background: var(--primary);
    color: white;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    color: var(--text);
    cursor: pointer;
}

/* Hero Section */
.hero-section {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--light) 0%, var(--bg) 100%);
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
}

.highlight {
    color: var(--primary);
}

.hero-subtitle {
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 15px;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: var(--secondary);
    color: white;
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
}

.btn-block {
    width: 100%;
}

.hero-image {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: var(--radius);
}

/* About Section */
.about-section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: var(--primary);
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 50px;
}

.about-card {
    background: var(--bg);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    position: relative;
    transition: transform 0.3s;
}

.about-card:hover {
    transform: translateY(-5px);
}

.card-icon {
    width: 60px;
    height: 60px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.about-card h3 {
    margin-bottom: 15px;
}

.edit-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--primary);
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
}

body.editing .edit-icon {
    display: flex;
}

.values-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-top: 30px;
}

.value-tag {
    background: var(--light);
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
}

/* Green Card Section */
.green-card-section {
    padding: 80px 0;
    background: var(--light);
}

.program-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 60px;
}

.program-image {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
}

.program-image img {
    width: 100%;
    height: auto;
}

.change-image-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: var(--primary);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
}

body.editing .change-image-btn {
    display: flex;
}

.program-features {
    list-style: none;
    margin: 20px 0;
}

.program-features li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.program-features i {
    color: var(--success);
}

.program-price {
    font-size: 1.5rem;
    margin: 20px 0;
}

.price {
    font-weight: 800;
    color: var(--primary);
    font-size: 2rem;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 30px;
}

.testimonial {
    text-align: center;
}

.testimonial img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
}

/* Videos Section */
.videos-section {
    padding: 80px 0;
}

.video-gallery {
    max-width: 800px;
    margin: 0 auto;
}

.main-video {
    margin-bottom: 40px;
    position: relative;
}

.edit-video-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--primary);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: none;
}

body.editing .edit-video-btn {
    display: block;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

/* Wing Section */
.wing-section {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
    color: white;
}

.wing-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-top: 40px;
}

.wing-list {
    list-style: none;
    margin: 30px 0;
}

.wing-list li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Marketing Section */
.marketing-section {
    padding: 80px 0;
}

.marketing-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.marketing-card {
    background: var(--bg);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: transform 0.3s;
}

.marketing-card:hover {
    transform: translateY(-5px);
}

.marketing-card i {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.btn-small {
    background: var(--primary);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 6px;
    margin-top: 15px;
    cursor: pointer;
}

/* Contact Section */
.contact-section {
    padding: 80px 0;
    background: var(--light);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-form {
    background: var(--bg);
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
}

.contact-info {
    background: var(--bg);
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.info-item i {
    width: 40px;
    height: 40px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Payment Section */
.payment-section {
    margin: 30px 0;
    padding: 20px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.payment-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 15px 0;
}

.payment-btn {
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.payment-btn.paypal {
    background: #0070ba;
    color: white;
}

.payment-btn.moncash {
    background: #27ae60;
    color: white;
}

.payment-btn.card {
    background: var(--secondary);
    color: white;
}

.payment-amounts {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 20px 0;
}

.amount-btn {
    padding: 8px 15px;
    border: 1px solid var(--primary);
    background: transparent;
    color: var(--primary);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

.amount-btn:hover {
    background: var(--primary);
    color: white;
}

#customAmount {
    width: 120px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
}

/* Quick Links */
.links-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 10px;
}

.quick-link {
    color: var(--text);
    text-decoration: none;
    font-size: 0.9rem;
}

.quick-link:hover {
    color: var(--primary);
}

/* Configuration Section */
.config-section {
    padding: 80px 0;
}

.config-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.config-item {
    background: var(--bg);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

/* Toggle Switch */
.switch {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 15px 0;
    cursor: pointer;
}

.switch input {
    display: none;
}

.slider {
    width: 50px;
    height: 24px;
    background: #ddd;
    border-radius: 12px;
    position: relative;
    transition: background 0.3s;
}

.slider:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
}

.switch input:checked + .slider {
    background: var(--primary);
}

.switch input:checked + .slider:before {
    transform: translateX(26px);
}

/* Theme Selector */
.theme-selector {
    display: flex;
    gap: 10px;
    margin: 15px 0;
}

.theme-btn {
    padding: 8px 15px;
    border: 1px solid #ddd;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
}

.theme-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* Footer */
.site-footer {
    background: var(--dark);
    color: white;
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 40px;
}

.footer-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 15px;
}

.footer-col h4 {
    margin-bottom: 20px;
}

.footer-col a {
    color: #999;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.3s;
}

.footer-col a:hover {
    color: var(--primary);
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 0;
}

.social-links a:hover {
    background: var(--primary);
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.9rem;
    color: #999;
}

/* Responsive */
@media (max-width: 992px) {
    .hero-content,
    .program-content,
    .wing-content,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .about-grid,
    .marketing-grid,
    .footer-grid,
    .config-content {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .video-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg);
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow);
    }
    
    .main-nav.opened {
        display: flex;
    }
    
    .about-grid,
    .marketing-grid,
    .footer-grid,
    .config-content,
    .testimonials-grid,
    .video-grid {
        grid-template-columns: 1fr;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .payment-buttons {
        grid-template-columns: 1fr;
    }
}// config.js - Configuration globale du site ISJIEE

const SITE_CONFIG = {
    version: '2.0.0',
    siteName: 'ISJIEE',
    author: 'Cadet Dieurissaint',
    email: 'contact@isjiee.ht',
    phone: '+50938447063',
    
    // Couleurs
    colors: {
        primary: '#caa76b',
        secondary: '#6b5847',
        success: '#4CAF50',
        danger: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    },
    
    // Liens de paiement
    payment: {
        paypal: 'https://paypal.me/isjiee',
        moncash: 'https://moncash.com/isjiee',
        stripe: 'https://buy.stripe.com/isjiee'
    },
    
    // Réseaux sociaux
    social: {
        facebook: 'https://facebook.com/isjiee',
        instagram: 'https://instagram.com/isjiee',
        youtube: 'https://youtube.com/@isjiee',
        tiktok: 'https://tiktok.com/@isjiee',
        linkedin: 'https://linkedin.com/company/isjiee'
    },
    
    // Vidéos par défaut
    videos: {
        main: 'VIDEO_ID_1',
        gallery: [
            { id: 'VIDEO_ID_2', title: 'Présentation Green Card' },
            { id: 'VIDEO_ID_3', title: 'Témoignages' },
            { id: 'VIDEO_ID_4', title: 'Formation Marketing' }
        ]
    },
    
    // Programmes
    programs: {
        greencard: {
            price: 150,
            currency: 'USD',
            duration: '3 mois'
        },
        wing: {
            price: 200,
            currency: 'USD',
            duration: '6 mois'
        }
    }
};

// Exporter pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}