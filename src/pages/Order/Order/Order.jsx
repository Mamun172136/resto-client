import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import FoodCard from "../../../components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
const Order = () => {
  const [menu] = useMenu();
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drink"];
  const { category } = useParams();
  console.log(category);

  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  // const drink = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <Helmet>Order</Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>

      {/* <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="mx-auto flex justify-center px-10">
          <Tab className="mr-10">Salad</Tab>
          <Tab className="mr-10">Pizza</Tab>
          <Tab className="mr-10">Soup</Tab>
          <Tab className="mr-10">Desser</Tab>
          <Tab className="mr-10">Drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drink}></OrderTab>
        </TabPanel>
      </Tabs> */}

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
        </TabList>
        <TabPanel>
          {" "}
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
