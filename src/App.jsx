import { useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "918953655971";

const categories = [
  {
    id: "tools",
    name: "Tools",
    icon: "🔧",
    description: "Quality tools for construction, repair and everyday work.",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "🚰",
    description: "Pipes, fittings and plumbing accessories.",
  },
  {
    id: "furniture",
    name: "Furniture",
    icon: "🛋️",
    description: "Beds, sofas, dining sets and home furniture.",
  },
  {
    id: "plywood",
    name: "Plywood",
    icon: "🪵",
    description: "All types of plywood available.",
  },
  {
    id: "paint",
    name: "Paint",
    icon: "🎨",
    description: "Paints in different colours, companies and qualities.",
  },
  {
    id: "door",
    name: "Door",
    icon: "🚪",
    description: "Different door sizes and colours available.",
  },
  {
    id: "mica",
    name: "Mica",
    icon: "◼️",
    description: "Different mica colours and sizes.",
  },
  {
    id: "box",
    name: "Box",
    icon: "📦",
    description: "Boxes available in different sizes.",
  },
  {
    id: "tiles",
    name: "Tiles",
    icon: "🧱",
    description: "Wall tiles, floor tiles, marble and granite.",
  },
];

const products = [
  // TOOLS
  {
    name: "Hammer",
    category: "tools",
    icon: "🔨",
    description: "Quality hammer for construction and repair work.",
  },
  {
    name: "Screwdriver",
    category: "tools",
    icon: "🪛",
    description: "Durable screwdrivers for different applications.",
  },
  {
    name: "Nuts & Bolts",
    category: "tools",
    icon: "🔩",
    description: "Strong nuts and bolts available in different sizes.",
  },
  {
    name: "Sandpaper",
    category: "tools",
    icon: "📄",
    description: "Sandpaper for smooth finishing and polishing.",
  },
  {
    name: "Kills",
    category: "tools",
    icon: "🛠️",
    description: "Quality hardware item available for your requirements.",
  },

  // PLUMBING
  {
    name: "Pipe",
    category: "plumbing",
    icon: "🚰",
    description: "Different pipe sizes available.",
  },
  {
    name: "L-Bow",
    category: "plumbing",
    icon: "↪️",
    description: "Quality L-Bow plumbing fittings.",
  },
  {
    name: "T-Shape",
    category: "plumbing",
    icon: "🔱",
    description: "T-Shape plumbing fittings in different sizes.",
  },
  {
    name: "Other Plumbing Items",
    category: "plumbing",
    icon: "🔧",
    description: "Other plumbing items and accessories available.",
  },

  // FURNITURE
  {
    name: "Single Bed",
    category: "furniture",
    icon: "🛏️",
    description: "Strong and comfortable single beds.",
  },
  {
    name: "Double Bed",
    category: "furniture",
    icon: "🛏️",
    description: "Spacious and durable double beds.",
  },
  {
    name: "Sofa Set",
    category: "furniture",
    icon: "🛋️",
    description: "Comfortable and stylish sofa sets.",
  },
  {
    name: "Dining Set",
    category: "furniture",
    icon: "🍽️",
    description: "Dining tables and chairs for your home.",
  },
  {
    name: "Dressing",
    category: "furniture",
    icon: "🪞",
    description: "Stylish dressing furniture for bedrooms.",
  },
  {
    name: "Table",
    category: "furniture",
    icon: "🪑",
    description: "Tables for home and office requirements.",
  },
  {
    name: "Chair",
    category: "furniture",
    icon: "🪑",
    description: "Comfortable chairs for home and office.",
  },
  {
    name: "Almirah",
    category: "furniture",
    icon: "🚪",
    description: "Practical storage furniture for your home.",
  },

  // PLYWOOD
  {
    name: "All Types of Plywood",
    category: "plywood",
    icon: "🪵",
    description: "All types of plywood available.",
  },

  // PAINT
  {
    name: "All Types of Paint",
    category: "paint",
    icon: "🎨",
    description: "All types of paint available.",
  },
  {
    name: "All Colours",
    category: "paint",
    icon: "🌈",
    description: "All colours available.",
  },
  {
    name: "All Companies",
    category: "paint",
    icon: "🏷️",
    description: "Paint from different companies available.",
  },
  {
    name: "All Quality",
    category: "paint",
    icon: "⭐",
    description: "Different quality options available.",
  },

  // DOOR
  {
    name: "Different Door Sizes & Colours",
    category: "door",
    icon: "🚪",
    description: "Different door sizes and colours available.",
  },

  // MICA
  {
    name: "Different Mica Colours & Sizes",
    category: "mica",
    icon: "◼️",
    description: "Different mica colours and sizes available.",
  },

  // BOX
  {
    name: "All Sizes of Box",
    category: "box",
    icon: "📦",
    description: "Boxes available in all sizes.",
  },

  // TILES
  {
    name: "Wall Tiles",
    category: "tiles",
    icon: "🧱",
    description: "Wall tiles available for different spaces.",
  },
  {
    name: "Floor Tiles",
    category: "tiles",
    icon: "⬜",
    description: "Floor tiles available for different spaces.",
  },
  {
    name: "Marble",
    category: "tiles",
    icon: "⬜",
    description: "Marble available for different requirements.",
  },
  {
    name: "Granite",
    category: "tiles",
    icon: "⬛",
    description: "Granite available for different requirements.",
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const [enquiryData, setEnquiryData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  async function submitEnquiry() {
    if (!enquiryData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!enquiryData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enquiryData.name,
            phone: enquiryData.phone,
            product: selectedProduct,
            message: enquiryData.message,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        alert("Failed to save enquiry.");
        return;
      }

      const whatsappMessage = `New Enquiry - Pandey Hardware

Name: ${enquiryData.name}
Phone: ${enquiryData.phone}
Product: ${selectedProduct}
Message: ${enquiryData.message || "No message"}`;

      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setShowEnquiry(false);

      setEnquiryData({
        name: "",
        phone: "",
        message: "",
      });

      window.open(whatsappURL, "_blank");

      alert("Enquiry saved successfully!");
    } catch (error) {
      console.error("Enquiry error:", error);
      alert(
        "Server se connection nahi ho raha. Make sure backend is running."
      );
    }
  }

  function openEnquiry(productName) {
    setSelectedProduct(productName);

    setEnquiryData({
      name: "",
      phone: "",
      message: "",
    });

    setShowEnquiry(true);
  }

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "all" ||
      product.category === activeCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="app">

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div className="enquiry-overlay">
          <div className="enquiry-box">

            <button
              className="enquiry-close"
              onClick={() => setShowEnquiry(false)}
            >
              ×
            </button>

            <span className="section-tag">PRODUCT ENQUIRY</span>

            <h2>Send Your Enquiry</h2>

            <p className="enquiry-product">
              Product: <strong>{selectedProduct}</strong>
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={enquiryData.name}
              onChange={(e) =>
                setEnquiryData({
                  ...enquiryData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              value={enquiryData.phone}
              onChange={(e) =>
                setEnquiryData({
                  ...enquiryData,
                  phone: e.target.value,
                })
              }
            />

            <textarea
              placeholder="Your Message (optional)"
              value={enquiryData.message}
              onChange={(e) =>
                setEnquiryData({
                  ...enquiryData,
                  message: e.target.value,
                })
              }
            />

            <button
              className="enquiry-submit"
              onClick={submitEnquiry}
            >
              Submit Enquiry →
            </button>

          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">🔧</span>
          <span>Pandey Hardware</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#furniture">Furniture</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Quote
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">
            YOUR TRUSTED HARDWARE STORE
          </span>

          <h1>
            Quality Hardware
            <br />
            <span>& Furniture For Every Home</span>
          </h1>

          <p>
            From professional tools and plumbing supplies to
            plywood, paints, doors, tiles and beautiful furniture
            — find what you need for your home and project.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn primary-btn">
              Explore Products →
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section">
        <div className="trust-container">

          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <div>
              <h3>Quality Products</h3>
              <p>Reliable & durable</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <div>
              <h3>Fast Service</h3>
              <p>Quick & convenient</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">₹</div>
            <div>
              <h3>Best Prices</h3>
              <p>Competitive pricing</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">🤝</div>
            <div>
              <h3>Trusted Service</h3>
              <p>Customer satisfaction</p>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section
        className="categories-section"
        id="categories"
      >
        <div className="section-header">
          <span className="section-tag">
            WHAT WE OFFER
          </span>

          <h2>Shop By Category</h2>

          <p>
            Explore our complete range of products
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.id}
            >
              <div
                className={`category-image ${category.id}-bg`}
              >
                <span>{category.icon}</span>
              </div>

              <div className="category-info">
                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <button
                  onClick={() => {
                    setActiveCategory(category.id);

                    document
                      .getElementById("products")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        className="products-section"
        id="products"
      >
        <div className="section-header">
          <span className="section-tag">
            OUR PRODUCTS
          </span>

          <h2>Hardware, Furniture & More</h2>

          <p>
            Browse our products and enquire directly.
          </p>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <span>🔍</span>
        </div>

        {/* FILTER */}
        <div className="product-filter">

          <button
            className={
              activeCategory === "all"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              setActiveCategory("all")
            }
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id
                  ? "filter-active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category.id)
              }
            >
              {category.name}
            </button>
          ))}

        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">

          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.name}
            >
              <div
                className={`product-image ${product.category}-product-bg`}
              >
                <span>{product.icon}</span>
              </div>

              <div className="product-details">

                <span className="product-category">
                  {product.category.toUpperCase()}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">
                  <span className="price">
                    Contact for Price
                  </span>

                  <button
                    onClick={() =>
                      openEnquiry(product.name)
                    }
                  >
                    Enquire
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No product found</h3>
            <p>
              Try searching for another product.
            </p>
          </div>
        )}

      </section>

      {/* FURNITURE FEATURE */}
      <section
        className="furniture-section"
        id="furniture"
      >
        <div className="section-header">
          <span className="section-tag">
            FURNITURE COLLECTION
          </span>

          <h2>Furniture For Your Home</h2>

          <p>
            Comfortable, stylish and durable furniture
            for every space.
          </p>
        </div>

        <div className="furniture-grid">

          {products
            .filter(
              (product) =>
                product.category === "furniture"
            )
            .map((product) => (
              <div
                className="furniture-card"
                key={product.name}
              >
                <div className="furniture-image">
                  <span>{product.icon}</span>
                </div>

                <div className="furniture-info">
                  <span>FURNITURE</span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <button
                    onClick={() =>
                      openEnquiry(product.name)
                    }
                  >
                    Enquire →
                  </button>
                </div>

              </div>
            ))}

        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about-section"
        id="about"
      >
        <div className="about-image">
          <div className="about-image-content">
            🏠
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
            Pandey Hardware is your one-stop destination
            for hardware, plumbing, tools, plywood, paints,
            doors, mica, boxes, tiles and furniture.
          </p>

          <p>
            We aim to provide quality products,
            competitive prices and dependable service for
            homeowners, contractors, builders and
            professionals.
          </p>

          <div className="about-list">
            <div>
              <span>✓</span> Quality Products
            </div>

            <div>
              <span>✓</span> Competitive Prices
            </div>

            <div>
              <span>✓</span> Wide Product Range
            </div>

            <div>
              <span>✓</span> Customer Support
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">

          <span>HAVE A REQUIREMENT?</span>

          <h2>
            Let's Find The Right Product For You.
          </h2>

          <p>
            Contact us for product availability,
            pricing and enquiries.
          </p>

          <button
            className="btn primary-btn"
            onClick={() =>
              openEnquiry("Product Enquiry")
            }
          >
            Send Enquiry →
          </button>

        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >
        <div className="section-header">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>Get In Touch</h2>

          <p>
            We are happy to help with your hardware
            and furniture requirements.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-icon">
              📞
            </div>

            <h3>Call Us</h3>

            <p>+91 8953655971</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              💬
            </div>

            <h3>WhatsApp</h3>

            <p>Send us your enquiry</p>

            <button
              onClick={() =>
                openEnquiry("General Enquiry")
              }
            >
              WhatsApp Us
            </button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              📍
            </div>

            <h3>Visit Our Store</h3>

            <p>Your Business Address</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              ✉️
            </div>

            <h3>Email Us</h3>

            <p>your@email.com</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          🔧 Pandey Hardware & Furniture
        </div>

        <p>
          Quality Products • Trusted Service •
          Complete Solutions
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#furniture">Furniture</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Pandey Hardware & Furniture.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;