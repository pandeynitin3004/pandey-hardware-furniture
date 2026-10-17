import { useState } from "react";
import "./App.css";
function enquireOnWhatsApp(productName) {
  const phoneNumber = "8953655971";

  const message = `Hello Pandey Hardware, I want to enquire about ${productName}. Please share the price and availability.`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
const products = [
  {
    name: "Professional Hammer",
    category: "hardware",
    categoryName: "HARDWARE",
    icon: "🔨",
    description: "Heavy-duty hammer for construction and repair work."
  },

  {
    name: "Screwdriver Set",
    category: "hardware",
    categoryName: "HARDWARE",
    icon: "🪛",
    description: "Durable screwdriver set for multiple applications."
  },

  {
    name: "Nuts & Bolts",
    category: "hardware",
    categoryName: "HARDWARE",
    icon: "🔩",
    description: "Strong and reliable fastening solutions."
  },

  {
    name: "Electrical Accessories",
    category: "hardware",
    categoryName: "HARDWARE",
    icon: "⚡",
    description: "Essential electrical accessories for different applications."
  },

  {
    name: "Sofa Set",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🛋️",
    description: "Comfortable and stylish sofa sets for your living room."
  },

  {
    name: "Dining Set",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🍽️",
    description: "Dining table and chairs for your home."
  },

  {
    name: "Singerdan",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🗄️",
    description: "Stylish storage furniture for bedroom and home."
  },

  {
    name: "Double Bed",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🛏️",
    description: "Strong and spacious double bed for your bedroom."
  },

  {
    name: "Single Bed",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🛏️",
    description: "Comfortable and durable single bed for bedrooms."
  },

  {
    name: "Table",
    category: "furniture",
    categoryName: "FURNITURE",
    icon: "🪑",
    description: "Durable tables for home and office requirements."
  }
];

function App() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo">
          <span className="logo-icon">🔧</span>
          <span>Pandey Hardware</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
         <a href="#categories">Hardware</a>
         <a href="#furniture">Furniture</a>
         <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Quote
        </a>

      </header>


      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-tag">
            YOUR TRUSTED HARDWARE STORE
          </div>

          <h1>
            Quality Hardware
            <br />
            <span>For Every Project</span>
          </h1>

          <p>
            From professional tools to electrical, plumbing and
            construction supplies, find everything you need
            for your next project.
          </p>

          <div className="hero-buttons">

            <a href="#products" className="btn primary-btn">
              Explore Products
              <span>→</span>
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* ================= TRUST SECTION ================= */}

      <section className="trust-section">

        <div className="trust-container">

          <div className="trust-item">

            <div className="trust-icon">
              ✓
            </div>

            <div>
              <h3>Quality Products</h3>
              <p>Reliable & durable</p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              🚚
            </div>

            <div>
              <h3>Fast Service</h3>
              <p>Quick & convenient</p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ₹
            </div>

            <div>
              <h3>Best Prices</h3>
              <p>Competitive pricing</p>
            </div>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              🤝
            </div>

            <div>
              <h3>Trusted Service</h3>
              <p>Customer satisfaction</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories-section" id="categories">

        <div className="section-header">

          <span className="section-tag">
            WHAT WE OFFER
          </span>

          <h2>
            Shop By Category
          </h2>

          <p>
            Explore our wide range of hardware products
          </p>

        </div>


        <div className="category-grid">

          {/* Tools */}

          <div className="category-card">

            <div className="category-image tools-bg">
              🔧
            </div>

            <div className="category-info">

              <h3>Tools</h3>

              <p>
                Hand tools, power tools and professional
                equipment for every job.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>


          {/* Electrical */}

          <div className="category-card">

            <div className="category-image electrical-bg">
              ⚡
            </div>

            <div className="category-info">

              <h3>Electrical</h3>

              <p>
                Wires, switches, accessories and
                electrical supplies.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>


          {/* Plumbing */}

          <div className="category-card">

            <div className="category-image plumbing-bg">
              🚰
            </div>

            <div className="category-info">

              <h3>Plumbing</h3>

              <p>
                Pipes, fittings, taps and plumbing
                accessories.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>


          {/* Fasteners */}

          <div className="category-card">

            <div className="category-image fasteners-bg">
              🔩
            </div>

            <div className="category-info">

              <h3>Fasteners</h3>

              <p>
                Nuts, bolts, screws and other
                fastening products.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>


          {/* Paint */}

          <div className="category-card">

            <div className="category-image paint-bg">
              🎨
            </div>

            <div className="category-info">

              <h3>Paint & Accessories</h3>

              <p>
                Brushes, rollers and painting
                accessories.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>


          {/* Building */}

          <div className="category-card">

            <div className="category-image building-bg">
              🧱
            </div>

            <div className="category-info">

              <h3>Building Materials</h3>

              <p>
                Essential materials for construction
                and renovation.
              </p>

              <a href="#products">
                View Products →
              </a>

            </div>

          </div>

        </div>

      </section>
      {/* ================= FURNITURE ================= */}

<section className="furniture-section" id="furniture">

  <div className="section-header">

    <span className="section-tag">
      FURNITURE COLLECTION
    </span>

    <h2>
      Furniture For Your Home
    </h2>

    <p>
      Comfortable, stylish and durable furniture for every space
    </p>

  </div>


  <div className="furniture-grid">


    {/* Sofa Set */}

    <div className="furniture-card">

      <div className="furniture-image sofa-bg">
        🛋️
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Sofa Sets
        </h3>

        <p>
          Comfortable and stylish sofa sets
          for your living room.
        </p>

       <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Sofa Set")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Dining Set */}

    <div className="furniture-card">

      <div className="furniture-image dining-bg">
        🍽️
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Dining Sets
        </h3>

        <p>
          Dining tables and chairs for
          your dining space.
        </p>

       <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Dining Set")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Singerdan */}

    <div className="furniture-card">

      <div className="furniture-image singerdan-bg">
        🗄️
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Singerdan
        </h3>

        <p>
          Beautiful storage furniture for
          your bedroom and home.
        </p>

      <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Singerdan")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Single Bed */}

    <div className="furniture-card">

      <div className="furniture-image single-bed-bg">
        🛏️
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Single Beds
        </h3>

        <p>
          Strong and comfortable single beds
          for bedrooms.
        </p>

       <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Single Bed")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Double Bed */}

    <div className="furniture-card">

      <div className="furniture-image double-bed-bg">
        🛏️
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Double Beds
        </h3>

        <p>
          Spacious and durable double beds
          for your bedroom.
        </p>

        <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Double Bed")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Tables */}

    <div className="furniture-card">

      <div className="furniture-image table-bg">
        🪑
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Tables
        </h3>

        <p>
          Different styles of tables for
          home and office.
        </p>

       <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Table")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Chairs */}

    <div className="furniture-card">

      <div className="furniture-image chair-bg">
        🪑
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Chairs
        </h3>

        <p>
          Comfortable chairs for home,
          office and dining areas.
        </p>

        <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Chair")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


    {/* Almirah */}

    <div className="furniture-card">

      <div className="furniture-image almirah-bg">
        🚪
      </div>

      <div className="furniture-info">

        <span>FURNITURE</span>

        <h3>
          Almirah & Storage
        </h3>

        <p>
          Practical storage solutions for
          bedrooms and homes.
        </p>

        <button
  className="furniture-enquire"
  onClick={() => enquireOnWhatsApp("Almirah")}
>
  Enquire on WhatsApp →
</button>

      </div>

    </div>


  </div>

</section>


     {/* ================= PRODUCTS ================= */}

<section className="products-section" id="products">

  <div className="section-header">

    <span className="section-tag">
      OUR PRODUCTS
    </span>

    <h2>
      Hardware & Furniture
    </h2>

    <p>
      Browse our products and send us your enquiry directly.
    </p>

  </div>


  {/* PRODUCT FILTER */}

  <div className="product-filter">

  <button
    className={filter === "all" ? "filter-active" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={filter === "hardware" ? "filter-active" : ""}
    onClick={() => setFilter("hardware")}
  >
    Hardware
  </button>

  <button
    className={filter === "furniture" ? "filter-active" : ""}
    onClick={() => setFilter("furniture")}
  >
    Furniture
  </button>

</div>


  {/* PRODUCT GRID */}

  <div className="product-grid">
    <div className="product-search">

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <span>🔍</span>

</div>

  {products
  .filter(
    (product) =>
      (filter === "all" || product.category === filter) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (

    <div className="product-card" key={product.name}>

      <div className="product-image">
        {product.icon}
      </div>

      <div className="product-details">

        <span className="product-category">
          {product.categoryName}
        </span>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="product-bottom">

          <span className="price">
            Contact for Price
          </span>

          <button
            onClick={() =>
              enquireOnWhatsApp(product.name)
            }
          >
            Enquire
          </button>

        </div>

      </div>

    </div>

  ))}
  </div>

</section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div className="about-image">

          <div className="about-image-content">
            🛠️
          </div>

        </div>


        <div className="about-text">

          <span className="section-tag">
            ABOUT PANDEY HARDWARE
          </span>

          <h2>
            Your Reliable Partner
            <br />
            For Every Project
          </h2>

          <p>
            Pandey Hardware is committed to providing
            quality hardware products and dependable
            service to customers.
          </p>

          <p>
            Whether you are a homeowner, contractor,
            builder or professional, we aim to provide
            the products you need for your project.
          </p>


          <div className="about-list">

            <div>
              <span>✓</span>
              Quality Products
            </div>

            <div>
              <span>✓</span>
              Competitive Prices
            </div>

            <div>
              <span>✓</span>
              Wide Product Range
            </div>

            <div>
              <span>✓</span>
              Customer Support
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div className="cta-content">

          <span>
            HAVE A HARDWARE REQUIREMENT?
          </span>

          <h2>
            Let's Find The Right Product For You.
          </h2>

          <p>
            Contact us for product availability,
            pricing and enquiries.
          </p>

          <a href="#contact" className="btn primary-btn">
            Contact Us →
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <div className="section-header">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            Get In Touch
          </h2>

          <p>
            We are happy to help with your hardware requirements.
          </p>

        </div>


        <div className="contact-grid">


          <div className="contact-card">

            <div className="contact-icon">
              📞
            </div>

            <h3>
              Call Us
            </h3>

            <p>
              +91 XXXXXXXXXX
            </p>

          </div>


          <div className="contact-card">

            <div className="contact-icon">
              💬
            </div>

            <h3>
              WhatsApp
            </h3>

            <p>
              Send us your enquiry
            </p>

          </div>


          <div className="contact-card">

            <div className="contact-icon">
              📍
            </div>

            <h3>
              Visit Our Store
            </h3>

            <p>
              Your Business Address
            </p>

          </div>


          <div className="contact-card">

            <div className="contact-icon">
              ✉️
            </div>

            <h3>
              Email Us
            </h3>

            <p>
              your@email.com
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          🔧 Pandey Hardware
        </div>

        <p>
          Quality Hardware • Trusted Service
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Pandey Hardware. All Rights Reserved.
        </p>

      </footer>
            

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}

      <a
        href="https://wa.me/918953655971"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>

    

    </div>
  );
}

export default App;