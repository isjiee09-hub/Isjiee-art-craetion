
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