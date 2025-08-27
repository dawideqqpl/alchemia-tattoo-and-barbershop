import React, { useState, useEffect } from 'react';
import './App.css';

// To jest testowy komentarz


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="Alchemia Tattoo & Barbershop" />
            <span>Alchemia Tattoo & Barbershop</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Start</a>
            <a href="#about" onClick={() => scrollToSection('about')}>O nas</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Usługi</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Kontakt</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Alchemia Tattoo & Barbershop</h1>
          <p>Profesjonalne usługi barberskie w sercu Katowic</p>
          <div className="hero-buttons">
            <a href="https://booksy.com/pl-pl/163031_alchemia-tattoo-barbershop_barber-shop_11597_katowice" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn primary">Umów wizytę</a>
            <button className="btn secondary" onClick={() => scrollToSection('services')}>
              Nasze usługi
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>O nas</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Alchemia Tattoo & Barbershop to miejsce, gdzie tradycyjne rzemiosło spotyka się z nowoczesnym stylem. 
                Nasz zespół doświadczonych barberów zapewnia najwyższą jakość usług w profesjonalnej atmosferze.
              </p>
              <p>
                Specjalizujemy się w klasycznych i nowoczesnych strzyżeniach męskich, pielęgnacji brody oraz 
                profesjonalnym farbowaniu. Każdy klient otrzymuje indywidualne podejście i doradztwo stylizacyjne.
              </p>
            </div>
            <div className="about-features">
              <div className="feature">
                <h4>Doświadczenie</h4>
                <p>Lata praktyki i doskonalenia umiejętności</p>
              </div>
              <div className="feature">
                <h4>Jakość</h4>
                <p>Tylko najlepsze produkty i narzędzia</p>
              </div>
              <div className="feature">
                <h4>Styl</h4>
                <p>Indywidualne podejście do każdego klienta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Nasze usługi</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Strzyżenie męskie</h3>
              <p>Klasyczne i nowoczesne cięcia dopasowane do Twojego stylu</p>
              <div className="service-price">90 zł</div>
              <div className="service-time">30 min</div>
            </div>
            <div className="service-card">
              <h3>Broda</h3>
              <p>Profesjonalna pielęgnacja i stylizacja brody</p>
              <div className="service-price">60 zł</div>
              <div className="service-time">30 min</div>
            </div>
            <div className="service-card">
              <h3>Combo</h3>
              <p>Pełny pakiet: strzyżenie + broda w atrakcyjnej cenie</p>
              <div className="service-price">120 zł</div>
              <div className="service-time">60 min</div>
            </div>
            <div className="service-card">
              <h3>Cover/Farbowanie brody</h3>
              <p>Profesjonalne farbowanie i kamuflowanie siwizny</p>
              <div className="service-price">70 zł</div>
              <div className="service-time">30 min</div>
            </div>
            <div className="service-card">
              <h3>Włosy półdługie/długie</h3>
              <p>Strzyżenie dłuższych włosów z pełną stylizacją</p>
              <div className="service-price">100 zł</div>
              <div className="service-time">60 min</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Kontakt</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>Adres</h4>
                <p>Zawiszy Czarnego 16A<br />40-872 Katowice</p>
              </div>
              <div className="contact-item">
                <h4>Telefon</h4>
                <p><a href="tel:794565727">794 565 727</a></p>
              </div>
              <div className="contact-item">
                <h4>Godziny otwarcia</h4>
                <div className="hours">
                  <div className="hour-row">
                    <span>Poniedziałek</span>
                    <span>09:00–17:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Wtorek</span>
                    <span>08:00–16:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Środa</span>
                    <span>08:00–16:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Czwartek</span>
                    <span>12:00–20:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Piątek</span>
                    <span>12:00–20:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Sobota</span>
                    <span>08:00–14:00</span>
                  </div>
                  <div className="hour-row">
                    <span>Niedziela</span>
                    <span>Zamknięte</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <a href="https://booksy.com/pl-pl/163031_alchemia-tattoo-barbershop_barber-shop_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn primary large">
                Zarezerwuj przez Booksy
              </a>
              <a href="https://www.facebook.com/alchemiatattoobarbershop" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn secondary large">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Alchemia Tattoo & Barbershop. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;