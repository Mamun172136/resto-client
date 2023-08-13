import React from "react";
import Cover from "../../Shared/Cover/Cover";

import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Resto | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle
        subHeading=" Do not Miss"
        heading="Today's Offer"
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={dessert}
        title="Dessert"
        coverImg={dessertImg}
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>

      <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>
      <MenuCategory
        items={salad}
        title="Salad"
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
