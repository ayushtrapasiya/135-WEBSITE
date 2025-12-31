import React, { useEffect, useState } from 'react';
import './ThirdSeaction.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

/* -------------------- STATIC DATA -------------------- */

// Categories (same shape as API)
const STATIC_CATEGORIES = [
  { _id: 'cat1', name: 'Event Catering' },
  { _id: 'cat2', name: 'Meal Plans' },
  { _id: 'cat3', name: 'Food Delivery' },
  { _id: 'cat4', name: 'Diet Plans' },
];

// Menu Items (same shape as API)
const STATIC_ITEMS = [
  {
    _id: 'item1',
    itemName: 'Greek Salad',
    description: 'Fresh lettuce, olives, feta cheese, and olive oil dressing.',
    category: 'cat1',
    images: [
      'https://images.unsplash.com/photo-1551248429-40975aa4de74',
    ],
    size: [{ sizePrice: 199 }],
  },
  {
    _id: 'item2',
    itemName: 'Quinoa Bowl',
    description: 'Protein-packed quinoa with fresh veggies and herbs.',
    category: 'cat2',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    ],
    size: [{ sizePrice: 249 }],
  },
  {
    _id: 'item3',
    itemName: 'Avocado Salad',
    description: 'Creamy avocado with greens and lemon dressing.',
    category: 'cat3',
    images: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    ],
    size: [{ sizePrice: 299 }],
  },
  {
    _id: 'item4',
    itemName: 'Chicken Protein Salad',
    description: 'Grilled chicken with high-protein ingredients.',
    category: 'cat4',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    ],
    size: [{ sizePrice: 349 }],
  },
  {
  _id: 'item5',
  itemName: 'Fruit Detox Salad',
  description: 'Seasonal fresh fruits with light honey-lemon dressing.',
  category: 'cat1',
  images: [
    'https://images.unsplash.com/photo-1572441710534-680c9d4f2e4b',
  ],
  size: [{ sizePrice: 179 }],
},
{
  _id: 'item6',
  itemName: 'Paneer Protein Bowl',
  description: 'High-protein paneer with greens and Indian spices.',
  category: 'cat2',
  images: [
    'https://images.unsplash.com/photo-1604908177522-040e3bfae6b5',
  ],
  size: [{ sizePrice: 329 }],
},
{
  _id: 'item7',
  itemName: 'Sprouts Salad',
  description: 'Healthy mixed sprouts with onion, tomato & lemon.',
  category: 'cat3',
  images: [
    'https://images.unsplash.com/photo-1617191518300-6b9bd6f66a7f',
  ],
  size: [{ sizePrice: 149 }],
},

];

/* -------------------- COMPONENT -------------------- */

export default function ThirdSeaction() {
  const navigate = useNavigate();
  const [categories, setcategories] = useState([]);
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const [loading, setLoading] = useState(true);

 
  const fetchItems = async () => {
    try {
      const filtered = STATIC_ITEMS
      setItems(filtered);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  /* -------- SAME FUNCTION (API REMOVED, STATIC USED) -------- */
  async function getitem() {
    try {
      setcategories(STATIC_CATEGORIES);

      if (STATIC_CATEGORIES.length > 0) {
        setActiveCategory(STATIC_CATEGORIES[0]._id);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  /* -------- SAME useEffect -------- */
  useEffect(() => {
    fetchItems();
    getitem();
  }, [activeCategory]);

  const getdetails = (v) => {
    navigate(`/Detail/${v._id}`);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="menu-section p-5">
      <div className="menu-container">
        <div className="decor-left">
          <img
            src="https://i.pinimg.com/736x/c1/51/ca/c151cabb43f5830ac378f3da27d69f37.jpg"
            alt=""
          />
        </div>
        <div className="decor-right">
          <img
            src="https://i.pinimg.com/736x/4c/2c/25/4c2c258ccc9874d20a1f91464ac8e2eb.jpg"
            alt=""
          />
        </div>

        <h1 className="menu-heading">
          Eat Clean. Feel Great. Explore <span>Our Salad Menu</span>
        </h1>

        <div className="menu-items">
          {items.length > 0 ? (
            items.slice(0, 6).map((v, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-5">
                <div
                  className="menu-card-1"
                  onClick={() => getdetails(v)}
                >
                  <img
                    src={v.images?.[0]}
                    alt={v.itemName}
                    className="menu-img"
                  />
                  <div className="menu-content">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="menu-name">{v.itemName}</h5>
                      {v?.size?.map((s, i) => (
                        <div key={i} className="menu-price">
                          ₹{s?.sizePrice || '0.00'}
                        </div>
                      ))}
                    </div>
                    <p className="menu-desc">
                      {truncateText(
                        v.description || 'High-quality ingredients',
                        80
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items available</p>
          )}
        </div>

        <Link to="/OurMenu">
          <button className="view-all-btn">
            View All <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
}
