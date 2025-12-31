import React, { useEffect, useState } from 'react'
import './OurMenu.css'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/* ---------------- STATIC DATA ---------------- */

const STATIC_CATEGORIES = [
  { _id: 'cat1', title: 'Salads' },
  { _id: 'cat2', title: 'Bowls' },
  { _id: 'cat3', title: 'Protein Meals' },
  { _id: 'cat4', title: 'Detox' },
];

const STATIC_ITEMS = [
  {
    _id: 'item1',
    itemName: 'Greek Salad',
    description: 'Fresh lettuce, olives, feta cheese, olive oil dressing.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1551248429-40975aa4de74'],
    size: [{ sizePrice: 199 }],
  },
  {
    _id: 'item2',
    itemName: 'Quinoa Bowl',
    description: 'Protein-rich quinoa with fresh veggies.',
    category: 'Bowls',
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c'],
    size: [{ sizePrice: 249 }],
  },
  {
    _id: 'item3',
    itemName: 'Paneer Protein Meal',
    description: 'High-protein paneer with herbs and greens.',
    category: 'Protein Meals',
    images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
    size: [{ sizePrice: 329 }],
  },
  {
    _id: 'item4',
    itemName: 'Fruit Detox Salad',
    description: 'Seasonal fruits with honey-lemon dressing.',
    category: 'Detox',
    images: ['https://images.unsplash.com/photo-1572441710534-680c9d4f2e4b'],
    size: [{ sizePrice: 179 }],
  },
  {
    _id: 'item5',
    itemName: 'Avocado Salad',
    description: 'Fresh avocado, greens & olive oil.',
    category: 'Salads',
    images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d'],
    size: [{ sizePrice: 299 }],
  },
  {
  _id: 'salad1',
  itemName: 'Greek Salad',
  description: 'Fresh lettuce, olives, feta cheese and olive oil.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1551248429-40975aa4de74'],
  size: [{ sizePrice: 199 }],
},
{
  _id: 'salad2',
  itemName: 'Avocado Salad',
  description: 'Creamy avocado with greens and lemon dressing.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d'],
  size: [{ sizePrice: 249 }],
},
{
  _id: 'salad3',
  itemName: 'Caesar Salad',
  description: 'Classic Caesar with crunchy croutons.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1'],
  size: [{ sizePrice: 229 }],
},
{
  _id: 'salad4',
  itemName: 'Corn Salad',
  description: 'Sweet corn mixed with herbs and veggies.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
  size: [{ sizePrice: 179 }],
},
{
  _id: 'salad5',
  itemName: 'Sprouts Salad',
  description: 'Healthy sprouts with onion and lemon.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1617191518300-6b9bd6f66a7f'],
  size: [{ sizePrice: 149 }],
},
{
  _id: 'salad6',
  itemName: 'Pasta Salad',
  description: 'Cold pasta with veggies and Italian dressing.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5b2'],
  size: [{ sizePrice: 269 }],
},
{
  _id: 'salad7',
  itemName: 'Beetroot Salad',
  description: 'Boiled beetroot with light spices.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1625940957015-bc0d5b8bca1d'],
  size: [{ sizePrice: 159 }],
},
{
  _id: 'salad8',
  itemName: 'Cucumber Salad',
  description: 'Cooling cucumber with mint dressing.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1566843970906-7f5b1a2c6f93'],
  size: [{ sizePrice: 129 }],
},
{
  _id: 'salad9',
  itemName: 'Fruit Salad',
  description: 'Fresh seasonal fruits with honey.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1572441710534-680c9d4f2e4b'],
  size: [{ sizePrice: 189 }],
},
{
  _id: 'salad10',
  itemName: 'Chickpea Salad',
  description: 'Protein rich chickpeas with veggies.',
  category: 'Salads',
  images: ['https://images.unsplash.com/photo-1599021456807-4f8f1a4c9c2d'],
  size: [{ sizePrice: 219 }],
},
{
  _id: 'bowl1',
  itemName: 'Quinoa Bowl',
  description: 'Protein rich quinoa with vegetables.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c'],
  size: [{ sizePrice: 249 }],
},
{
  _id: 'bowl2',
  itemName: 'Veg Rice Bowl',
  description: 'Steamed rice with mixed vegetables.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1589301760014-d929f3979dbc'],
  size: [{ sizePrice: 199 }],
},
{
  _id: 'bowl3',
  itemName: 'Mexican Bowl',
  description: 'Beans, corn and spicy sauce.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1617196038437-1e7a7e5c3f2a'],
  size: [{ sizePrice: 279 }],
},
{
  _id: 'bowl4',
  itemName: 'Paneer Bowl',
  description: 'Paneer cubes with veggies.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1604908177522-040e3bfae6b5'],
  size: [{ sizePrice: 299 }],
},
{
  _id: 'bowl5',
  itemName: 'Tofu Bowl',
  description: 'Healthy tofu with greens.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1600628422019-49dce6e3c3b1'],
  size: [{ sizePrice: 289 }],
},
{
  _id: 'bowl6',
  itemName: 'Brown Rice Bowl',
  description: 'Brown rice with veggies.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1597393353363-0f1c7c13d3d1'],
  size: [{ sizePrice: 219 }],
},
{
  _id: 'bowl7',
  itemName: 'Asian Bowl',
  description: 'Asian flavors with noodles.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1612929633738-8fe44f7ec841'],
  size: [{ sizePrice: 319 }],
},
{
  _id: 'bowl8',
  itemName: 'Falafel Bowl',
  description: 'Falafel with hummus.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1600628422019-49dce6e3c3b1'],
  size: [{ sizePrice: 289 }],
},
{
  _id: 'bowl9',
  itemName: 'Mediterranean Bowl',
  description: 'Olives, feta and veggies.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1'],
  size: [{ sizePrice: 309 }],
},
{
  _id: 'bowl10',
  itemName: 'Lentil Bowl',
  description: 'High protein lentils.',
  category: 'Bowls',
  images: ['https://images.unsplash.com/photo-1617093727343-374698b1b08d'],
  size: [{ sizePrice: 239 }],
},

];

/* ---------------- COMPONENT ---------------- */

export default function OurMenu() {
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getdetails = (v) => {
    localStorage.setItem("selectedItem", JSON.stringify(v));
    localStorage.setItem("allItems", JSON.stringify(items));
    navigate(`/Detail/${v._id}`);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  /* -------- SAME FUNCTION (STATIC DATA) -------- */
  const getCategories = async () => {
    try {
      setCategories(STATIC_CATEGORIES);
      if (STATIC_CATEGORIES.length > 0) {
        setAdd(STATIC_CATEGORIES[0].title);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /* -------- SAME FUNCTION (STATIC DATA) -------- */
  const fetchItems = async (categoryTitle) => {
    setLoading(true);
    try {
      const filteredItems = categoryTitle
        ? STATIC_ITEMS.filter((item) => item.category === categoryTitle)
        : STATIC_ITEMS;

      setItems(filteredItems);
      setDisplayedItems(filteredItems.slice(0, 10));
      setVisibleCount(10);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreItems = () => {
    const nextCount = visibleCount + 10;
    setDisplayedItems(items.slice(0, nextCount));
    setVisibleCount(nextCount);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    fetchItems(add);
  }, [add]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          100 >=
        document.documentElement.scrollHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, visibleCount]);

  return (
    <div className='our-menu-section pt-5'>
        {loading && (
  <div className="our-menu-page-loader">
    <div className="spinner"></div>
    <p>Loading menu...</p>
  </div>
)}

      <div className='our-menu-header text-center'>
        <h1 className='fw-bolder our-menu-heading-title mt-3' style={{ fontSize: "3.5rem" }}>
          Let's Explore Our Menu
        </h1>
        <p className='our-menu-subtitle col-5 m-auto fs-6 mb-5'>
          Designed to give your digestive system a break while delivering replenishing nutrients.
        </p>
      </div>

      <div className="our-menu-filter-row d-flex justify-content-between mx-5">
        <div className="our-menu-category-dropdown-wrapper">
          <select
            className="our-menu-category-select"
            onChange={(e) => setAdd(e.target.value)}
          >
            <option value=''>All</option>
            {categories.map((value) => (
              <option key={value._id} value={value.title}>
                {value.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <br />

      {displayedItems.length > 0 ? (
        <div className='menu-list-container row m-0 p-0'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="col-12 col-md-6 mb-4">
                  <div className="menu-card d-flex align-items-center">
                    <Skeleton height={100} width={100} circle />
                  </div>
                </div>
              ))
            : displayedItems.map((v, i) => (
                <div
                  key={i}
                  className="col-12 col-md-6 mb-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => getdetails(v)}
                >
                  <div className="menu-card d-flex align-items-center">
                    <div className="menu-card-image-wrapper">
                      <img src={v.images[0]} alt={v.itemName} className="menu-card-image" />
                    </div>
                    <div className="menu-card-info">
                      <h5 className="menu-card-title">{v.itemName}</h5>
                      <p className="menu-desc">
                        {truncateText(v.description, 100)}
                      </p>
                      {v?.size?.map((sz, index) => (
                        <span key={index} className="menu-card-price">
                          ₹{sz?.sizePrice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <h3 className='text-center our-no-item-msg' style={{ color: "#2b1b5d" }}>
          No Items Available
        </h3>
      )}
    </div>
  )
}
