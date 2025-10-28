
ISJIEE/
│
├── index.html          → page d’accueil (vitrine avec Kayla)
├── style.css           → design général
├── script.js           → animations, défilements, effets Kayla
│
├── /assets/            → images, icônes, audios
│   ├── kayla.png
│   ├── logo.png
│   └── background.mp3
│
├── /modules/           → sous-pages ISJIEE
│   ├── green-card.html
│   ├── blue-card.html
│   └── gold-card.html
│
└── README.md           → description officielle du projet ISJIEE
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE – Accueil</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background-color: #f9fafb;
      color: #222;
      overflow-x: hidden;
    }

    header {
      height: 100vh;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(2, 132, 199, 0.6)),
        url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
    }

    header h1 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header p {
      font-size: 1.2rem;
      margin-top: 10px;
      opacity: 0.9;
    }

    .btn {
      margin-top: 30px;
      padding: 12px 28px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #0369a1;
    }

    section {
      padding: 80px 20px;
      text-align: center;
    }

    section h2 {
      font-size: 2rem;
      color: #0284c7;
      margin-bottom: 20px;
    }

    .programs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .card {
      width: 280px;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      color: #0f172a;
      margin-bottom: 10px;
    }

    footer {
      background: #0f172a;
      color: white;
      text-align: center;
      padding: 30px 0;
      margin-top: 50px;
    }

    html {
      scroll-behavior: smooth;
    }
  </style>
</head>

<body>
  <header>
    <h1>ISJIEE</h1>
    <p>Inspirer – Former – Élever la nouvelle génération d’entrepreneurs</p>
    <button class="btn" onclick="scrollToPrograms()">Consulter nos programmes</button>
  </header>

  <section id="programs">
    <h2>Nos Programmes</h2>
    <div class="programs">
      <div class="card">
        <h3>Module Green Card</h3>
        <p>Formation sur la création et gestion d’un business physique.</p>
      </div>
      <div class="card">
        <h3>Module Blue</h3>
        <p>Développement d’entreprise digitale et services en ligne.</p>
      </div>
      <div class="card">
        <h3>Module Gold</h3>
        <p>Leadership, management et stratégie de croissance.</p>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2025 ISJIEE | Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</p>
  </footer>

  <script>
    function scrollToPrograms() {
      document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
    }
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE – Accueil</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background-color: #f9fafb;
      color: #222;
      overflow-x: hidden;
    }

    header {
      height: 100vh;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(2, 132, 199, 0.65)),
        url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      position: relative;
    }

    header h1 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header p {
      font-size: 1.2rem;
      margin-top: 10px;
      opacity: 0.9;
    }

    .btn {
      margin-top: 30px;
      padding: 12px 28px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #0369a1;
    }

    /* --- Kayla Animation --- */
    .kayla {
      position: absolute;
      bottom: 40px;
      right: 40px;
      width: 180px;
      animation: float 4s ease-in-out infinite;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    section {
      padding: 80px 20px;
      text-align: center;
    }

    section h2 {
      font-size: 2rem;
      color: #0284c7;
      margin-bottom: 20px;
    }

    .programs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .card {
      width: 280px;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      color: #0f172a;
      margin-bottom: 10px;
    }

    footer {
      background: #0f172a;
      color: white;
      text-align: center;
      padding: 30px 0;
      margin-top: 50px;
    }

    html {
      scroll-behavior: smooth;
    }
  </style>
</head>

<body>
  <header>
    <h1>ISJIEE</h1>
    <p>Inspirer – Former – Élever la nouvelle génération d’entrepreneurs</p>
    <button class="btn" onclick="scrollToPrograms()">Consulter nos programmes</button>

    <!-- Image de Kayla -->
    <img src="https://i.imgur.com/n1E3rjA.png" alt="Kayla" class="kayla" />
  </header>

  <section id="programs">
    <h2>Nos Programmes</h2>
    <div class="programs">
      <div class="card">
        <h3>Module Green Card</h3>
        <p>Formation sur la création et gestion d’un business physique.</p>
      </div>
      <div class="card">
        <h3>Module Blue</h3>
        <p>Développement d’entreprise digitale et services en ligne.</p>
      </div>
      <div class="card">
        <h3>Module Gold</h3>
        <p>Leadership, management et stratégie de croissance.</p>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2025 ISJIEE | Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</p>
  </footer>

  <script>
    function scrollToPrograms() {
      document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
    }
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE – Accueil</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background-color: #f9fafb;
      color: #222;
      overflow-x: hidden;
    }

    header {
      height: 100vh;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(2, 132, 199, 0.65)),
        url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      position: relative;
    }

    header h1 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header p {
      font-size: 1.2rem;
      margin-top: 10px;
      opacity: 0.9;
    }

    .btn {
      margin-top: 30px;
      padding: 12px 28px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #0369a1;
    }

    /* --- Kayla Animation --- */
    .kayla {
      position: absolute;
      bottom: 40px;
      right: 40px;
      width: 180px;
      animation: float 4s ease-in-out infinite;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    section {
      padding: 80px 20px;
      text-align: center;
    }

    section h2 {
      font-size: 2rem;
      color: #0284c7;
      margin-bottom: 20px;
    }

    .programs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .card {
      width: 280px;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      color: #0f172a;
      margin-bottom: 10px;
    }

    /* --- Cahier de charge section --- */
    .cahier {
      background: #e0f2fe;
      padding: 60px 20px;
      border-top: 3px solid #0284c7;
    }

    .cahier ul {
      list-style: none;
      max-width: 700px;
      margin: 0 auto;
      text-align: left;
      line-height: 1.8;
    }

    .cahier li {
      margin: 12px 0;
      padding-left: 20px;
      position: relative;
    }

    .cahier li::before {
      content: "🔥";
      position: absolute;
      left: 0;
      top: 0;
    }

    footer {
      background: #0f172a;
      color: white;
      text-align: center;
      padding: 30px 0;
      margin-top: 50px;
    }

    html {
      scroll-behavior: smooth;
    }
  </style>
</head>

<body>
  <header>
    <h1>ISJIEE</h1>
    <p>Inspirer – Former – Élever la nouvelle génération d’entrepreneurs</p>
    <button class="btn" onclick="scrollToPrograms()">Consulter nos programmes</button>

    <!-- Image de Kayla -->
    <img src="https://i.imgur.com/n1E3rjA.png" alt="Kayla" class="kayla" />
  </header>

  <section id="programs">
    <h2>Nos Programmes</h2>
    <div class="programs">
      <div class="card">
        <h3>Module Green Card</h3>
        <p>Formation sur la création et gestion d’un business physique.</p>
      </div>
      <div class="card">
        <h3>Module Blue</h3>
        <p>Développement d’entreprise digitale et services en ligne.</p>
      </div>
      <div class="card">
        <h3>Module Gold</h3>
        <p>Leadership, management et stratégie de croissance.</p>
      </div>
    </div>
  </section>

  <section class="cahier" id="cahier">
    <h2>Cahier de charge du projet ISJIEE</h2>
    <ul>
      <li>Créer un écosystème d’apprentissage pour jeunes entrepreneurs.</li>
      <li>Proposer des formations modulaires (Green, Blue, Gold).</li>
      <li>Intégrer l’assistante IA Kayla comme guide interactif.</li>
      <li>Permettre l’accès à des ressources (audio, PDF, vidéos).</li>
      <li>Offrir un tableau de bord personnel et un espace de progression.</li>
      <li>Mettre en ligne les badges et certificats de réussite ISJIEE.</li>
      <li>Développer une version mobile et web intégrée.</li>
    </ul>
  </section>

  <footer>
    <p>© 2025 ISJIEE | Inspiré par la lumière, forgé dans le feu — Cadet Dieurissaint</p>
  </footer>

  <script>
    function scrollToPrograms() {
      document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
    }
  </script>
</body>
</html>


<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ISJIEE – Accueil</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background-color: #f9fafb;
      color: #222;
      overflow-x: hidden;
    }

    header {
      height: 100vh;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(2, 132, 199, 0.65)),
        url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      position: relative;
    }

    header h1 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header p {
      font-size: 1.2rem;
      margin-top: 10px;
      opacity: 0.9;
    }

    .btn {
      margin-top: 30px;
      padding: 12px 28px;
      background: #0284c7;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #0369a1;
    }

    /* Kayla animation */
    .kayla {
      position: absolute;
      bottom: 40px;
      right: 40px;
      width: 180px;
      animation: float 4s ease-in-out infinite;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    section {
      padding: 80px 20px;
      text-align: center;
    }

    section h2 {
      font-size: 2rem;
      color: #0284c7;
      margin-bottom: 20px;
    }

    .programs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .card {
      width: 280px;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      color: #0f172a;
      margin-bottom: 10px;
    }

    .cahier {
      background: #e0f2fe;
      padding: 60px 20px;
      border-top: 3px solid #0284c7;
    }

    .cahier ul {
      list-style: none;
      max-width: 700px;
      margin: 0 auto;
      text-align: left;
      line-height: 1.8;
    }

    .cahier li {
      margin: 12px 0;
      padding-left: 20px;
      position: relative;
    }

    .cahier li::before {
      content: "🔥";
      position: absolute;
      left: 0;
      top: 0;
    }

    footer {
      background: #0f172a;
      color: white;
      text-align: center;
      padding: 30px 0;
      margin-top: 50px;
    }

    html {
      scroll-behavior: smooth;
    }
  </style>
</head>

<body>
  <header>
    <h1>ISJIEE</h1>
    <p>Inspirer – Former – Élever la nouvelle génération d’entrepreneurs</p>
    <button class="btn" onclick="scrollToPrograms()">Consulter nos programmes</button>
    <img src="https://i.imgur.com/n1E3rjA.png" alt="Kayla" class="kayla" />
  </header>

  <section id="programs">
    <h2>Nos Programmes</h2>
    <div class="programs" id="programList"></div>
  </section>

  <section class="cahier" id="cahier">
    <h2>Cahier de charge du projet ISJIEE</h2>
    <ul>
      <li>Créer un écosystème d’apprentissage pour jeunes entrepreneurs.</li>
      <li>Proposer des formations modulaires (Green, Blue, Gold).</li>
      <li>Intégrer l’assistante IA Kayla comme guide interactif.</li>
      <li>Permettre l’accès à des ressources (audio, PDF, vidéos).</li>
      <li>Offrir un tableau de bord personnel et un espace de progression.</li>
      <li>Mettre en ligne les badges et certificats de réussite ISJIEE.</li>
      <li>Développer une version mobile et web intégrée.</li>
    </ul>
  </section>

  <footer>
    <p>© 2025 ISJIEE | Inspiré par la lumière, forgé dans le feu — Cadet Dieurissainty</p>
  </footer>

  <script>
    function scrollToPrograms() {
      document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
    }

    // --- Liste automatique des programmes ---
    const programs = [
      {
        title: "Module Green Card",
        desc: "Formation sur la création et gestion d’un business physique."
      },
      {
        title: "Module Blue",
        desc: "Développement d’entreprise digitale et services en ligne."
      },
      {
        title: "Module Gold",
        desc: "Leadership, management et stratégie de croissance."
      },
      {
        title: "Module Leadership",
        desc: "Maîtriser la communication et le management d’équipe."y
      }
    ];

    const container = document.getElementById("programList");

    programs.forEach(prog => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${prog.title}</h3><p>${prog.desc}</p>`;
      container.appendChild(card);
    });
  </scri

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISJIEE Programmes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <section class="programmes">
    <h1>Nos Programmes ISJIEE</h1>
    <div class="slider-contai Eric">
      <div class="slider">
        <div class="slide green">
          <h2>Green Card</h2>
          <p>Formation de base pour apprendre à créer, vendre et gérer un petit business. Accès à des ateliers pratiques et outils de démarrage.</p>
          <div class="bar">
            <div class="bar-fill green-bar" style="width: 40%"></div>
          </eddiv>
          <span class="bar-label">BAR : 40% – Niveau Débuteant</span>
        </div>

        <div class="slide blue">
          <h2>Blue Card</h2>
          <p>Formation avancée pour développer ton entreprise digitale. Stratégies de marketing, communication et positionnement professionnel.</p>
          <div class="bar">
            <div class="bar-fill blue-bar" style="width: 60%"></div>
          </div>
          <span class="bar-label">BAR : 60% – Niveau Intermédiaire</span>
        </div>

        <div class="slide gold">
          <h2>Gold</h2>
          <p>Programme élite pour les jeunes entrepreneurs. Coaching, financement partiel et accès à des mentors expérimentés.</p>
          <div class="bar">
            <div class="bar-fill gold-bar" style="width: 80%"></div>
          </div>
          <span class="bar-label">BAR : 80% – Niveau Avancé</span>
        </div>

        <div class="slide leadership">
          <h2>Leadership Voice</h2>
          <p>Formation centrée sur le leadership et la communication d’impact. Développe ton influence et ta vision entrepreneuriale.</p>
          <div class="bar">
            <div class="bar-fill purple-bar" style="width: 100%"></div>
          </div>
          <span class="bar-label">BAR : 100% – Niveau Maîtrise</span>
        </div>
      </div>

      <!-- Barre de navigation -->
      <div class="nav-bar">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #f5f7fa;
  color: #222;
  overflow-x: hidden;
}

h1 {
  text-align: center;
  margin-top: 30px;
  font-size: 2rem;
  color: #1a1a1a;
}

.slider-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.slider {
  display: flex;
  transition: transform 0.7s ease;
  width: 400%;
}

.slide {
  flex: 1 0 100%;
  padding: 60px 40px;
  box-sizing: border-box;
  color: white;
  text-align: center;
}

.green { background: linear-gradient(120deg, #00b894, #55efc4); }
.blue { background: linear-gradient(120deg, #0984e3, #74b9ff); }
.gold { background: linear-gradient(120deg, #d4af37, #f9d976); color: #333; }
.leadership { background: linear-gradient(120deg, #6c5ce7, #a29bfe); }

.nav-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s;
  cursor: pointer;
}

.dot.active {
  background-color: #fff;
  transform: scale(1.2);
}

/* === BAR SYSTEM === */
.bar {
  background: rgba(255, 255, 255, 0.3);
  height: 10px;
  border-radius: 10px;
  margin: 25px auto 10px;
  width: 80%;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 1.5s ease;
}

.green-bar { background-color: #00e676; }
.blue-bar { background-color: #0984e3; }
.gold-bar { background-color: #d4af37; }
.purple-bar { background-color: #6c5ce7; }

.bar-label {
  display: block;
  font-size: 0.9rem;
  margin-top: 5px;
  opacity: 0.9;
}
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const slider = document.querySelector(".slider");
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});
,
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

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
</body>
</html>



    <div class="video-box">
      <h3>Casier de vidéos</h3>
      <video controls width="90%">
        <source src="assets/videos/lesson1.mp4" type="video/mp4">
        Ton navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  </section>

  <footer>
    <p>© 2025 ISJIEE</p>
  </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISJIEE | Créativité</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <h1>ISJIEE</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="anglais.html">Anglais</a>
      <a href="creativite.html" class="active">Créativité</a>
    </nav>
  </header>

  <section class="creativite">
    <h2>Espace Créativité</h2>
    <p>Ici, les étudiants peuvent explorer des projets artistiques, des idées innovantes et développer leur imagination à travers des ateliers et projets ISJIEE Art Creation.</p>
    
    <div class="gallery">
      <div class="item">🎨 Design Mode</div>
      <div class="item">💻 Création Digitale</div>
      <div class="item">🎬 Vidéos Créatives</div>
      <div class="item">🧠 Innovation</div>
    </div>
  </section>

  <footer>
    <p>© 2025 ISJIEE</p>
  </footer>
</body>
</html>

.navbar {
  background: #002244;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}

.navbar nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
}

.navbar nav a.active {
  border-bottom: 2px solid #ffd700;
}

.subscribe {
  background: #f0f3f5;
  text-align: center;
  padding: 40px 0;
}

.subscribe form {
  margin-top: 15px;
}

.subscribe input {
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 200px;
}

.subscribe button {
  background: #002244;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  padding: 20px;
}

.gallery .item {
  background: #ececec;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
}

