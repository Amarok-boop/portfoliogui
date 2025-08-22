"use client";
import { useState, useEffect } from "react";

interface Photo {
  src: string;
  alt: string;
  title: string;
  location: string;
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allPhotos = [
    {
      src: "https://i.ibb.co/WNXDCt81/DILSINHO-1.jpg",
      alt: "Dilsinho 1",
      title: "Dilsinho",
      location: "Rio de Janeiro, 2024"
    },
    {
      src: "https://i.ibb.co/yvVV1ty/DILSINHO-2.jpg",
      alt: "Dilsinho 2", 
      title: "Dilsinho",
      location: "Rio de Janeiro, 2024"
    },
    {
      src: "https://i.ibb.co/ywSzkmg/DILSINHO-3.jpg",
      alt: "Dilsinho 3",
      title: "Dilsinho", 
      location: "Rio de Janeiro, 2024"
    },
    {
      src: "https://i.ibb.co/mVPDXW7r/NALDO-1.jpg",
      alt: "Naldo 1",
      title: "Naldo",
      location: "Angra dos Reis, 2024"
    },
    {
      src: "https://i.ibb.co/81BrChh/NALDO-2.jpg",
      alt: "Naldo 2",
      title: "Naldo",
      location: "Angra dos Reis, 2024"
    },
    {
      src: "https://i.ibb.co/svp6d2Bt/NALDO-3.jpg",
      alt: "Naldo 3",
      title: "Naldo",
      location: "Angra dos Reis, 2024"
    },
    {
      src: "https://i.ibb.co/hxMytsNK/PIXOTE-1.jpg",
      alt: "Pixote 1",
      title: "Pixote",
      location: "Rio de Janeiro, 2025"
    },
    {
      src: "https://i.ibb.co/VpbcLyVs/PIXOTE-2.jpg",
      alt: "Pixote 2",
      title: "Pixote",
      location: "Rio de Janeiro, 2025"
    }
  ];

  // Randomize photos on component mount
  useEffect(() => {
    const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);
    setPhotos(shuffled);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
          color: #fff;
          font-weight: 300;
          background: #000;
        }

        .sylk-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sylk-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/MxCD2qYd/EN9uw-Tm-W4-AUSOPD.jpg') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }

        .sylk-hero h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 4rem;
          font-weight: 300;
          letter-spacing: 3px;
          margin-bottom: 1rem;
          margin-top: 4rem;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .sylk-hero p {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 2rem;
        }

        .sylk-btn {
          display: inline-block;
          padding: 12px 30px;
          background: transparent;
          border: 2px solid white;
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 300;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .sylk-btn:hover {
          background: white;
          color: #333;
        }

        .sylk-nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sylk-nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 768px) {
          .sylk-nav-content {
            justify-content: center;
            position: relative;
          }
          
          .sylk-hamburger {
            position: absolute;
            left: 0;
          }
        }

        .sylk-logo {
          font-family: 'Poppins', 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 1.15rem;
          font-weight: 300;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
        }

        .sylk-nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .sylk-nav-links a {
          font-family: 'Poppins', 'Helvetica Neue', Helvetica, sans-serif;
          color: #fff;
          text-decoration: none;
          font-weight: 300;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 1.1rem;
          opacity: 0.7;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .sylk-nav-links a:hover {
          opacity: 1;
          outline: none;
          text-decoration: none;
        }

        .sylk-section {
          padding: 5rem 0;
        }

        .sylk-section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 3rem;
          color: #fff;
        }

        .sylk-gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .sylk-gallery-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .sylk-photo-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          animation: loadItem 2s forwards;
        }

        .sylk-photo-item:hover {
          transform: scale(1.05);
        }

        .sylk-photo-item:nth-child(1) {
          animation-delay: 0.2s;
        }

        .sylk-photo-item:nth-child(2) {
          animation-delay: 0.4s;
        }

        .sylk-photo-item:nth-child(3) {
          animation-delay: 0.6s;
        }

        .sylk-photo-item:nth-child(4) {
          animation-delay: 0.8s;
        }

        @keyframes loadItem {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sylk-photo-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #222;
          transition: all 0.3s ease;
          backface-visibility: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .sylk-photo-item:hover img {
          transform: scale(1.1);
        }

        .sylk-photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 2rem;
        }

        .sylk-photo-item:hover .sylk-photo-overlay {
          opacity: 1;
        }

        .sylk-photo-info {
          color: white;
        }

        .sylk-photo-info h3 {
          font-size: 1.2rem;
          font-weight: 300;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
        }

        .sylk-photo-info p {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
        }

        .sylk-video-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .sylk-video-item {
          background: #111;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .sylk-video-content {
          padding: 1rem;
          text-align: center;
        }

        .sylk-video-content h3 {
          font-size: 1.3rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .sylk-video-content p {
          color: #ccc;
          font-size: 0.9rem;
          margin: 0;
        }

        .sylk-about {
          background: #111;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sylk-about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .sylk-about p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          font-weight: 300;
        }

        .sylk-contact {
          background: #000;
          color: white;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .sylk-contact .sylk-section-title {
          color: white;
        }

        .sylk-contact-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
          max-width: 900px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .sylk-contact-item {
          text-align: center;
          min-width: 200px;
        }

        .sylk-contact-item h4 {
          font-size: 1.1rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          color: white;
        }

        .sylk-contact-item p {
          color: #ccc;
          font-weight: 300;
          font-size: 1rem;
        }

        .sylk-footer {
          background: #222;
          color: #666;
          text-align: center;
          padding: 2rem 0;
          font-size: 0.9rem;
          font-weight: 300;
        }

        .footer-social {
          margin-bottom: 2rem;
        }

        .social {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social li a {
          display: inline-block;
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .social li a:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        /* Rotating Text Animation */
        .rotate-words {
          position: relative;
          display: block;
          color: #fff;
          width: 100%;
          height: 1.2em;
          text-align: center;
          margin: 0 auto;
        }

        .rotate-words span {
          position: absolute;
          opacity: 0;
          animation: rotateWord 21s linear infinite 0s;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          white-space: nowrap;
          font-weight: 600;
        }

        .rotate-words span:nth-child(2) { animation-delay: 3s; }
        .rotate-words span:nth-child(3) { animation-delay: 6s; }
        .rotate-words span:nth-child(4) { animation-delay: 9s; }
        .rotate-words span:nth-child(5) { animation-delay: 12s; }
        .rotate-words span:nth-child(6) { animation-delay: 15s; }
        .rotate-words span:nth-child(7) { animation-delay: 18s; }

        @keyframes rotateWord {
          0% { opacity: 0; }
          2% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          5% { opacity: 1; transform: translateX(-50%) translateY(0px); }
          17% { opacity: 1; transform: translateX(-50%) translateY(0px); }
          20% { opacity: 0; transform: translateX(-50%) translateY(10px); }
          80% { opacity: 0; }
          100% { opacity: 0; }
        }

        .sylk-hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .sylk-hamburger span {
          width: 25px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .sylk-hero h1 {
            font-size: 2.5rem;
          }

          .sylk-nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: none;
          }

          .sylk-nav-links.open {
            transform: translateY(0);
            display: flex;
          }

          .sylk-hamburger {
            display: flex;
          }

          .sylk-gallery-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .sylk-section {
            padding: 3rem 0;
          }

          .sylk-section-title {
            font-size: 2rem;
          }

          .sylk-contact-grid {
            gap: 2rem;
            flex-direction: column;
          }

          .sylk-contact-item {
            min-width: auto;
          }
        }

        .aspect-video {
          aspect-ratio: 16/9;
          position: relative;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .aspect-vertical {
          aspect-ratio: 9/16;
          position: relative;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .aspect-video iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .aspect-vertical iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        @media (max-width: 480px) {
          .sylk-gallery-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="sylk-nav">
        <div className="sylk-container">
          <div className="sylk-nav-content">
            <div className="sylk-logo">Amaro Fotógrafo</div>
            <div 
              className="sylk-hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`sylk-nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('gallery')}>Galeria</a></li>
              <li><a onClick={() => scrollToSection('videos')}>Vídeos</a></li>
              <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="sylk-hero">
        <div>
          <h1>
            Eu capturo
            <br/>
            <span className="rotate-words">
              <span>vida.</span>
              <span>momentos.</span>
              <span>felicidade.</span>
              <span>emoções.</span>
              <span>ação.</span>
              <span>beleza.</span>
              <span>histórias.</span>
            </span>
          </h1>
          <div style={{ textAlign: 'center' }}>
            <button 
              className="sylk-btn"
              onClick={() => scrollToSection('gallery')}
            >
              Ver Galeria
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="sylk-section">
        <div className="sylk-container">
          <h2 className="sylk-section-title">Galeria de Fotos</h2>
          
          {/* First Row - 4 photos */}
          <div className="sylk-gallery-row">
            {photos.slice(0, 4).map((photo, index) => (
              <div key={index} className="sylk-photo-item">
                <img src={photo.src} alt={photo.alt} />
                <div className="sylk-photo-overlay">
                  <div className="sylk-photo-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.location}</p>
              </div>
              </div>
            </div>
            ))}
            </div>

          {/* Second Row - 4 photos */}
          <div className="sylk-gallery-row">
            {photos.slice(4, 8).map((photo, index) => (
              <div key={index + 4} className="sylk-photo-item">
                <img src={photo.src} alt={photo.alt} />
                <div className="sylk-photo-overlay">
                  <div className="sylk-photo-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.location}</p>
              </div>
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="sylk-section">
        <div className="sylk-container">
          <h2 className="sylk-section-title">Galeria de Vídeos</h2>
          
          {/* Vertical Videos */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', maxWidth: '700px', margin: '0 auto 3rem auto', flexWrap: 'wrap'}}>
            <div className="sylk-video-item" style={{textAlign: 'center'}}>
              <div className="aspect-vertical" style={{maxHeight: '350px', width: '250px', margin: '0 auto'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1112131720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{width: '100%', height: '100%'}}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Lançamento Peninsula"
                />
                </div>
              <div className="sylk-video-content">
                <h3>Lançamento Peninsula</h3>
                <p>Rio de Janeiro, 2025</p>
                </div>
              </div>

            <div className="sylk-video-item" style={{textAlign: 'center'}}>
              <div className="aspect-vertical" style={{maxHeight: '350px', width: '250px', margin: '0 auto'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1105954636?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{width: '100%', height: '100%'}}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Retrato em Movimento"
                />
                </div>
              <div className="sylk-video-content">
                <h3>Retrato em Movimento</h3>
                <p>TikTok, 2025</p>
              </div>
            </div>
          </div>

                              {/* Horizontal Video */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <div className="sylk-video-item" style={{textAlign: 'center', maxWidth: '800px', width: '100%'}}>
              <div className="aspect-video" style={{maxHeight: '450px', margin: '0 auto'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1105996377?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{width: '100%', height: '100%'}}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Naldo"
                />
                </div>
              <div className="sylk-video-content">
                <h3>Naldo</h3>
                <p>Angra dos Reis, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sylk-section sylk-about">
        <div className="sylk-container">
          <h2 className="sylk-section-title">Sobre Mim</h2>
          <div className="sylk-about-content">
            <p>
            Olá! Sou o Amaro, um fotógrafo apaixonado por capturar momentos únicos. 
            Minha jornada na fotografia começou como hobby e se transformou em uma 
            paixão que me permite contar histórias através das lentes.
          </p>
            <p>
              Cada clique é uma oportunidade de eternizar um instante, de preservar 
              uma emoção, de criar uma memória que durará para sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sylk-section sylk-contact">
        <div className="sylk-container">
          <h2 className="sylk-section-title">Entre em Contato</h2>
          <div className="sylk-contact-grid">
            <div className="sylk-contact-item">
              <h4>Email</h4>
              <p>guilhermeamaro67@gmail.com</p>
            </div>
            <div className="sylk-contact-item">
              <h4>Telefone</h4>
              <p>(21) 96556-8323</p>
            </div>
            <div className="sylk-contact-item">
              <h4>Instagram</h4>
              <p>@amarofotografo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sylk-footer">
        <div className="sylk-container">
          {/* Social Icons */}
          <div className="footer-social">
            <ul className="social">
              <li><a href="https://www.instagram.com/amarofotografo" target="_blank" rel="noopener noreferrer" className="instagram">📷</a></li>
              <li><a href="mailto:guilhermeamaro67@gmail.com" className="email">✉️</a></li>
              <li><a href="https://wa.me/5521965568323" target="_blank" rel="noopener noreferrer" className="whatsapp">📞</a></li>
            </ul>
          </div>
          
          <p style={{
            fontFamily: 'Poppins, Helvetica Neue, Helvetica, sans-serif',
            fontSize: '1.2rem',
            fontWeight: '300',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: '#fff'
          }}>
            Deus é Fiel
          </p>
          <p>&copy; 2025 Amaro Fotógrafo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}