import React from "react";
import "./favouriteMeals.css";

const favouriteMealsList = [
  {
    id: 1,
    title: "Double Cheeze Burst Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Maharaja Chicken Burger",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
  },
  {
    id: 3,
    title: "Vegetable Hakka Noodles",
    cover:
      "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
  },
  {
    id: 4,
    title: "Creamy Chocolate Cake",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  },
  {
    id: 5,
    title: "All Time Favourite Biryani",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
  },
];

const FavouriteMeals = () => {
  return (
    <div className="favourite-meals container">
      <div className="favourite-meals-wrapper">
        <h1 className="section-title">Favourite Meals</h1>
        <p className="section-subtitle">Here are some inspiration for your order</p>
        <div className="favourite-meals-row">
          {favouriteMealsList.map((meal) => (
            <div className="favourite-meals-item" key={meal.id}>
              <div className="favourite-meals-item-image">
                <img src={meal.cover} alt={meal.title} />
              </div>
              <h6 className="favourite-meals-item-title">{meal.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteMeals;
