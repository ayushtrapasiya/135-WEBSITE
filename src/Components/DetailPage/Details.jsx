import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css';
import Aos from "aos";
import "aos/dist/aos.css";
import video3 from "/src/assets/Images/13575994-hd_1920_1080_50fps.mp4";
import { IoClose } from "react-icons/io5";
import 'animate.css';

/* ---------------- STATIC ITEMS ---------------- */

const STATIC_ITEMS = [
  {
    _id: 'item1',
    itemName: 'Greek Salad',
    description: 'Fresh lettuce, olives, feta cheese, olive oil dressing.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1551248429-40975aa4de74'],
    size: [{ sizePrice: 199 }],
    ingredients: [
      { name: 'Lettuce' },
      { name: 'Olives' },
      { name: 'Feta Cheese' },
      { name: 'Olive Oil' },
    ],
  },
  {
    _id: 'item2',
    itemName: 'Quinoa Bowl',
    description: 'Protein-rich quinoa with fresh veggies.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c'],
    size: [{ sizePrice: 249 }],
    ingredients: [
      { name: 'Quinoa' },
      { name: 'Bell Peppers' },
      { name: 'Tomato' },
      { name: 'Herbs' },
    ],
  },
  {
    _id: 'item3',
    itemName: 'Paneer Protein Meal',
    description: 'High-protein paneer with herbs and greens.',
    category: 'Protein Meals',
    images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
    size: [{ sizePrice: 329 }],
    ingredients: [
      { name: 'Paneer' },
      { name: 'Spinach' },
      { name: 'Indian Spices' },
      { name: 'Olive Oil' },
    ],
  },
  {
    _id: 'item4',
    itemName: 'Fruit Detox Salad',
    description: 'Seasonal fruits with honey-lemon dressing.',
    category: 'Detox',
    images: ['https://images.unsplash.com/photo-1572441710534-680c9d4f2e4b'],
    size: [{ sizePrice: 179 }],
    ingredients: [
      { name: 'Apple' },
      { name: 'Orange' },
      { name: 'Pomegranate' },
      { name: 'Honey' },
      { name: 'Lemon Juice' },
    ],
  },
  {
    _id: 'item5',
    itemName: 'Avocado Salad',
    description: 'Fresh avocado, greens & olive oil.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d'],
    size: [{ sizePrice: 299 }],
    ingredients: [
      { name: 'Avocado' },
      { name: 'Lettuce' },
      { name: 'Cucumber' },
      { name: 'Olive Oil' },
    ],
  },

  /* ---------- SALADS ---------- */

  {
    _id: 'salad1',
    itemName: 'Greek Salad',
    description: 'Fresh lettuce, olives, feta cheese and olive oil.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1551248429-40975aa4de74'],
    size: [{ sizePrice: 199 }],
    ingredients: [
      { name: 'Lettuce' },
      { name: 'Olives' },
      { name: 'Feta Cheese' },
      { name: 'Olive Oil' },
    ],
  },
  {
    _id: 'salad2',
    itemName: 'Avocado Salad',
    description: 'Creamy avocado with greens and lemon dressing.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d'],
    size: [{ sizePrice: 249 }],
    ingredients: [
      { name: 'Avocado' },
      { name: 'Lettuce' },
      { name: 'Lemon Juice' },
      { name: 'Olive Oil' },
    ],
  },
  {
    _id: 'salad3',
    itemName: 'Caesar Salad',
    description: 'Classic Caesar with crunchy croutons.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1'],
    size: [{ sizePrice: 229 }],
    ingredients: [
      { name: 'Romaine Lettuce' },
      { name: 'Croutons' },
      { name: 'Parmesan' },
      { name: 'Caesar Dressing' },
    ],
  },
  {
    _id: 'salad4',
    itemName: 'Corn Salad',
    description: 'Sweet corn mixed with herbs and veggies.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
    size: [{ sizePrice: 179 }],
    ingredients: [
      { name: 'Sweet Corn' },
      { name: 'Onion' },
      { name: 'Capsicum' },
      { name: 'Herbs' },
    ],
  },
  {
    _id: 'salad5',
    itemName: 'Sprouts Salad',
    description: 'Healthy sprouts with onion and lemon.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1617191518300-6b9bd6f66a7f'],
    size: [{ sizePrice: 149 }],
    ingredients: [
      { name: 'Mixed Sprouts' },
      { name: 'Onion' },
      { name: 'Tomato' },
      { name: 'Lemon Juice' },
    ],
  },
  {
    _id: 'salad6',
    itemName: 'Pasta Salad',
    description: 'Cold pasta with veggies and Italian dressing.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5b2'],
    size: [{ sizePrice: 269 }],
    ingredients: [
      { name: 'Pasta' },
      { name: 'Bell Peppers' },
      { name: 'Olives' },
      { name: 'Italian Dressing' },
    ],
  },
  {
    _id: 'salad7',
    itemName: 'Beetroot Salad',
    description: 'Boiled beetroot with light spices.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1625940957015-bc0d5b8bca1d'],
    size: [{ sizePrice: 159 }],
    ingredients: [
      { name: 'Beetroot' },
      { name: 'Salt' },
      { name: 'Pepper' },
      { name: 'Lemon Juice' },
    ],
  },
  {
    _id: 'salad8',
    itemName: 'Cucumber Salad',
    description: 'Cooling cucumber with mint dressing.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1566843970906-7f5b1a2c6f93'],
    size: [{ sizePrice: 129 }],
    ingredients: [
      { name: 'Cucumber' },
      { name: 'Mint' },
      { name: 'Salt' },
      { name: 'Lemon Juice' },
    ],
  },
  {
    _id: 'salad9',
    itemName: 'Fruit Salad',
    description: 'Fresh seasonal fruits with honey.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1572441710534-680c9d4f2e4b'],
    size: [{ sizePrice: 189 }],
    ingredients: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Pomegranate' },
      { name: 'Honey' },
    ],
  },
  {
    _id: 'salad10',
    itemName: 'Chickpea Salad',
    description: 'Protein rich chickpeas with veggies.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1599021456807-4f8f1a4c9c2d'],
    size: [{ sizePrice: 219 }],
    ingredients: [
      { name: 'Boiled Chickpeas' },
      { name: 'Onion' },
      { name: 'Tomato' },
      { name: 'Herbs' },
    ],
  },

  /* ---------- BOWLS ---------- */

  {
    _id: 'bowl1',
    itemName: 'Quinoa Bowl',
    description: 'Protein rich quinoa with vegetables.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c'],
    size: [{ sizePrice: 249 }],
    ingredients: [
      { name: 'Quinoa' },
      { name: 'Carrot' },
      { name: 'Beans' },
      { name: 'Herbs' },
    ],
  },
  {
    _id: 'bowl2',
    itemName: 'Veg Rice Bowl',
    description: 'Steamed rice with mixed vegetables.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1589301760014-d929f3979dbc'],
    size: [{ sizePrice: 199 }],
    ingredients: [
      { name: 'Rice' },
      { name: 'Carrot' },
      { name: 'Peas' },
      { name: 'Beans' },
    ],
  },
  {
    _id: 'bowl3',
    itemName: 'Mexican Bowl',
    description: 'Beans, corn and spicy sauce.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1617196038437-1e7a7e5c3f2a'],
    size: [{ sizePrice: 279 }],
    ingredients: [
      { name: 'Kidney Beans' },
      { name: 'Sweet Corn' },
      { name: 'Mexican Sauce' },
      { name: 'Rice' },
    ],
  },
  {
    _id: 'bowl4',
    itemName: 'Paneer Bowl',
    description: 'Paneer cubes with veggies.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
    size: [{ sizePrice: 299 }],
    ingredients: [
      { name: 'Paneer' },
      { name: 'Capsicum' },
      { name: 'Onion' },
      { name: 'Spices' },
    ],
  },
  {
    _id: 'bowl5',
    itemName: 'Tofu Bowl',
    description: 'Healthy tofu with greens.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1600628422019-49dce6e3c3b1'],
    size: [{ sizePrice: 289 }],
    ingredients: [
      { name: 'Tofu' },
      { name: 'Broccoli' },
      { name: 'Spinach' },
      { name: 'Soy Sauce' },
    ],
  },
  {
    _id: 'bowl6',
    itemName: 'Brown Rice Bowl',
    description: 'Brown rice with veggies.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1597393353363-0f1c7c13d3d1'],
    size: [{ sizePrice: 219 }],
    ingredients: [
      { name: 'Brown Rice' },
      { name: 'Carrot' },
      { name: 'Beans' },
      { name: 'Herbs' },
    ],
  },
  {
    _id: 'bowl7',
    itemName: 'Asian Bowl',
    description: 'Asian flavors with noodles.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1612929633738-8fe44f7ec841'],
    size: [{ sizePrice: 319 }],
    ingredients: [
      { name: 'Noodles' },
      { name: 'Vegetables' },
      { name: 'Soy Sauce' },
      { name: 'Sesame Oil' },
    ],
  },
  {
    _id: 'bowl8',
    itemName: 'Falafel Bowl',
    description: 'Falafel with hummus.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1600628422019-49dce6e3c3b1'],
    size: [{ sizePrice: 289 }],
    ingredients: [
      { name: 'Falafel' },
      { name: 'Hummus' },
      { name: 'Lettuce' },
      { name: 'Tahini' },
    ],
  },
  {
    _id: 'bowl9',
    itemName: 'Mediterranean Bowl',
    description: 'Olives, feta and veggies.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1'],
    size: [{ sizePrice: 309 }],
    ingredients: [
      { name: 'Olives' },
      { name: 'Feta Cheese' },
      { name: 'Cucumber' },
      { name: 'Tomato' },
    ],
  },
  {
    _id: 'bowl10',
    itemName: 'Lentil Bowl',
    description: 'High protein lentils.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1617093727343-374698b1b08d'],
    size: [{ sizePrice: 239 }],
    ingredients: [
      { name: 'Lentils' },
      { name: 'Onion' },
      { name: 'Tomato' },
      { name: 'Spices' },
    ],
  },
];


/* ---------------- COMPONENT ---------------- */

export default function Details() {
  const { id } = useParams();

  const [itemDetails, setItemDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  /* -------- FETCH DETAIL FROM STATIC DATA -------- */
  useEffect(() => {
    const selectedItem = STATIC_ITEMS.find((item) => item._id === id);
    setItemDetails(selectedItem || null);
  }, [id]);

  /* -------- AOS INIT -------- */
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  /* -------- IMAGE ZOOM -------- */
  useEffect(() => {
    if (!itemDetails) return;

    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(1.6)';
    };

    const handleMouseLeave = () => {
      img.style.transform = 'scale(1)';
      img.style.transformOrigin = 'center center';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [itemDetails]);

  const handleOrderClick = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  if (!itemDetails) {
    return <div className="text-center py-5">No data available</div>;
  }

  return (
    <div className="py-5">

      {/* ---------- POPUP ---------- */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content animate__animated animate__zoomIn">
            <h4 className="text-center mb-3" style={{ color: "#291F51" }}>
              Get the App
            </h4>

            <div className="d-flex justify-content-around">
              <a
                href="https://play.google.com/store/search?q=135+degrees&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn playstore-btn"
              >
                Play Store
              </a>
              <a
                href="https://apps.apple.com/in/app/135-degrees/id6745693877"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn appstore-btn"
              >
                App Store
              </a>
            </div>

            <button className="close-btn mt-4" onClick={closePopup}>
              <IoClose />
            </button>
          </div>
        </div>
      )}

      {/* ---------- PRODUCT SECTION ---------- */}
      <div className="row align-items-center p-5">

        <div className="col-12 col-md-6 mb-4 text-center">
          <div
            ref={containerRef}
            className="zoom-container mt-5 animate__animated animate__fadeInLeft"
          >
            <img
              ref={imgRef}
              src={itemDetails.images[0]}
              alt={itemDetails.itemName}
              className="img-fluid rounded detail-img zoom-image"
            />
          </div>
        </div>

        <div className="col-12 col-md-6 product-desc animate__animated animate__fadeInRight">
          <h2 className="fw-bold" style={{ color: "#291F51" }}>
            {itemDetails.itemName}
          </h2>

          {itemDetails.description && (
            <p style={{ fontStyle: "italic", color: "#291F51" }}>
              {itemDetails.description}
            </p>
          )}

          <h5 className="mt-3" style={{ color: "#291F51" }}>
            <b>Ingredients:</b>
          </h5>
          <hr />

          <div className="d-flex gap-3" style={{ flexWrap: "wrap" }}>
            {itemDetails?.ingredients?.map((v, i) => (
              <p
                key={i}
                style={{
                  color: "white",
                  backgroundColor: "#291F51",
                  borderRadius: "10px",
                  padding: "3px 8px",
                }}
              >
                {v.name}
              </p>
            ))}
          </div>

          {itemDetails?.size?.map((v, i) => (
            <p key={i} style={{ color: "#291F51" }} className="fw-bold">
              MRP {v.sizePrice} /-
            </p>
          ))}

          <button onClick={handleOrderClick} className="order-btn mt-3">
            Order Now
          </button>
        </div>
      </div>

      {/* ---------- MOTIVATION SECTION ---------- */}
      <div className="detail-middle">
        <h1>
          You Deserve To Feel Your Best. Quality Life, <br />
          Better You. Start today!
        </h1>
      </div>

      {/* ---------- VIDEO SECTION ---------- */}
      <div className="fullwidth-video-container">
        <video autoPlay loop muted playsInline className="fullwidth-video">
          <source src={video3} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
