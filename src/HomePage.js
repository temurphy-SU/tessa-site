import React from 'react';

export default function SlaveryAbolitionPage() {
  return (
    <div className="page-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="main-title">Slavery in the Age of Abolition</h1>

          <div className="content-grid">
            {/* Plantation Image */}
            <div className="image-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ten_Views_in_the_Island_of_Antigua_%281823%29%2C_plate_3_-_Betty%27s_Hope.jpg/1200px-Ten_Views_in_the_Island_of_Antigua_%281823%29%2C_plate_3_-_Betty%27s_Hope.jpg" 
                alt="Historic plantation scene" 
              />
            </div>

            {/* Right Column Text */}
            <div>
              <p className="text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a est pellentesque, cursus eros vel, euismod nulla. Nunc vitae felis nec velit pellentesque tempus. Etiam fermentum scelerisque orci, vitae molestie erat laoreet vel. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; in vel luctus lectus. Proin vitae felis facilisis, egestas felis vulputate, tempus turpis. Nulla eleifend augue sapien, sit amet ultrices turpis lacinia ac. Vestibulum in malesuada mi, at scelerisque ligula.
              </p>
              <p className="text-content">
                Suspendisse potenti. Aliquam nisl enim, pulvinar eu aliquet in, finibus at arcu. Nullam eget libero sit amet velit mollis consectetur at vitae odia. Vestibulum egestas condimentum purus. Suspendisse sed congue risus. Nam vestibulum vitae urna in cursus. Quisque vel ex vitae nulla volutpat consequat vel in sapien. Sed quis neque mollis, consequat arcu vitae, placerat tortor. Mauris lacinia erat mauris.
              </p>
            </div>
          </div>

          <div className="content-grid">
            {/* Left Column Text */}
            <div>
              <p className="text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a est pellentesque, cursus eros vel, euismod nulla. Nunc vitae felis nec velit pellentesque tempus. Etiam fermentum scelerisque orci, vitae molestie erat laoreet vel. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; in vel luctus lectus. Proin vitae felis facilisis, egestas felis vulputate, tempus turpis. Nulla eleifend augue sapien, sit amet ultrices turpis lacinia ac. Vestibulum in malesuada mi, at scelerisque ligula.
              </p>
              <p className="text-content">
                Suspendisse potenti. Aliquam nisl enim, pulvinar eu aliquet in, finibus at arcu. Nullam eget libero sit amet velit mollis consectetur at vitae odia. Vestibulum egestas condimentum purus. Suspendisse sed congue risus. Nam vestibulum vitae urna in cursus. Quisque vel ex vitae nulla volutpat consequat vel in sapien. Sed quis neque mollis, consequat arcu vitae, placerat tortor. Mauris lacinia erat mauris.
              </p>
            </div>

            {/* Map */}
            <div className="image-card">
              <div className="map-container">
                <svg viewBox="0 0 400 300" className="map-svg">
                  {/* Ocean background */}
                  <rect width="400" height="300" fill="#d4e8e8" />
                  
                  {/* Caribbean islands */}
                  <circle cx="100" cy="80" r="15" fill="#c4a57b" />
                  <text x="100" y="110" textAnchor="middle" fontSize="10" fill="#333">Montserrat</text>
                  
                  <circle cx="120" cy="130" r="18" fill="#c4a57b" />
                  <text x="120" y="160" textAnchor="middle" fontSize="10" fill="#333">Guadeloupe</text>
                  
                  <circle cx="110" cy="180" r="12" fill="#c4a57b" />
                  <text x="55" y="185" textAnchor="middle" fontSize="10" fill="#333">Dominica</text>
                  
                  <circle cx="115" cy="210" r="10" fill="#c4a57b" />
                  <text x="70" y="225" textAnchor="middle" fontSize="10" fill="#333">Martinique</text>
                  
                  <circle cx="130" cy="220" r="14" fill="#c4a57b" />
                  <text x="175" y="225" textAnchor="middle" fontSize="10" fill="#333">Saint Lucia</text>
                  
                  <circle cx="120" cy="250" r="11" fill="#c4a57b" />
                  <text x="120" y="275" textAnchor="middle" fontSize="10" fill="#333">Saint Vincent</text>
                  
                  <ellipse cx="200" cy="270" rx="45" ry="15" fill="#c4a57b" />
                  <text x="200" y="295" textAnchor="middle" fontSize="10" fill="#333">Trinidad and Tobago</text>
                  
                  {/* Circular map frame */}
                  <circle cx="280" cy="120" r="80" fill="none" stroke="#8b9d8d" strokeWidth="3" />
                  <path d="M 280 40 Q 320 60 340 100 Q 350 120 340 140 Q 320 180 280 200 Q 240 180 220 140 Q 210 120 220 100 Q 240 60 280 40" 
                        fill="#d4e8e8" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="documents-section">
        <div className="container">
          <h2 className="section-title">Lorem ipsum dolor sit amet</h2>

          <div className="documents-grid">
            {/* Old Book Cover */}
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80" 
                alt="Aged book cover" 
                className="document-image"
              />
            </div>

            {/* Handwritten Document */}
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1568459522947-eb1bfea95668?w=800&q=80" 
                alt="Historical handwritten document" 
                className="document-image"
              />
            </div>

            {/* Old Books Stack */}
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Stack of old books" 
                className="document-image"
              />
            </div>
          </div>

          <div className="centered-text">
            <p className="text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a est pellentesque, cursus eros vel, euismod nulla. Nunc vitae felis nec velit pellentesque tempus. Etiam fermentum scelerisque orci, vitae molestie erat laoreet vel. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; in vel luctus lectus. Proin vitae felis facilisis, egestas felis vulputate, tempus turpis. Nulla eleifend augue sapien, sit amet ultrices turpis lacinia ac. Vestibulum in malesuada mi, at scelerisque ligula.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-text">Brought To You By</span>
              <div className="logo-circle">
                <svg viewBox="0 0 50 50" className="logo-svg">
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="3,2" />
                  <text x="25" y="30" textAnchor="middle" fontSize="10" fill="#333" fontWeight="bold">UWI</text>
                </svg>
              </div>
            </div>
            <div className="footer-social">
              <span className="footer-text">Follow Our Work</span>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="#333">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}