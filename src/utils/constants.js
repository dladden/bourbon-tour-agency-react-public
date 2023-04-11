import React from "react";
import guestsImg0 from "../assets/Buffalo-Trace-Tour-Guests-01.webp";
import guestsImg1 from "../assets/Buffalo-Trace-Tour-Guests-02.webp";
import guestsImg2 from "../assets/Buffalo-Trace-Tour-Guests-03.webp";
import {
  GiBarrel,
  GiSaloon,
  GiSteamLocomotive,
  GiGlassShot,
} from "react-icons/gi";
//This constants set up so editing can be done fast and quick
//SOCIAL LINKS to be inserted in the pages:
export const messenger_link = "https://m.me/user";
export const instagram_link = "https://www.instagram.com/user";
export const whats_app_link = "https://wa.me/999999999";
export const email_link = "owner@staticwebapplication.com";

//links which are used globally to eliminate repetitive code
//LINKS FOR
export const links = [
  {
    id: 1,
    text: "HOME",
    url: "/",
  },
  {
    id: 2,
    text: "TOURS",
    url: "/tours",
  },
  {
    id: 3,
    text: "ABOUT",
    url: "/about",
  },
  {
    id: 4,
    text: "CONTACT",
    url: "/contact",
  },
];
//4 SERVICES WE PROVIDE
export const services = [
  {
    id: 1,
    icon: <GiBarrel />,
    title: "Services One",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique.",
  },
  {
    id: 2,
    icon: <GiSaloon />,
    title: "Services Two",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique.",
  },
  {
    id: 3,
    icon: <GiGlassShot />,
    title: "Services Three",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique.",
  },
  {
    id: 4,
    icon: <GiSteamLocomotive />,
    title: "Services Four",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique.",
  },
];

//CUSTOMER SLIDES used in home page
export const slides = [
  {
    url: guestsImg0,
    title:
      "Our Tour Group of eight guests at Buffalo Trace Distillery in Frankfort Kentucky",
    alt: "Our Tour Group of eight guests at Buffalo Trace Distillery",
  },
  {
    url: guestsImg1,
    title:
      "Our Tour Group of five guests at Buffalo Trace Distillery in Frankfort Kentucky",
    alt: "Our Tour Group of five guests at Buffalo Trace Distillery",
  },
  {
    url: guestsImg2,
    title:
      "Our Tour Group of five guests at Buffalo Trace Distillery in Frankfort Kentucky",
    alt: "Our Tour Group of five guests at Buffalo Trace Distillery",
  },
];
//MAX GUESTS ABLE TO BE RESERVED FOR A TOUR (USED IN CUSTOM TOUR)
export const guests = 20;
//THE 3 TRANSPORTATION TYPES (USED IN CUSTOM TOUR)
export const trans = ["suv", "van", "bus"];
//The current list of distilleries we are able to visit:
export const distilleries = [
  "Buffalo Trace",
  "Castle & Key",
  "Woodford Reserve",
  "Bulleit Distilling",
  "Angel's Envy",
  "Four Roses",
  "Jim Beam",
  "Maker's Mark",
  "Willett Distillery",
  "Evan Williams",
  "Heaven Hill",
  "Old Forester",
  "The Old Crow",
  "Glenns Creek",
  "Stitzel Weller",
  "Wild Turkey",
  "Three Boys",
  "Town Branch",
  "Rabbit Hole",
  "Preservation",
  "Limestone Branch",
  "Lux Row Distillers",
  "Jefferson's",
  "James E. Pepper",
  "Bardstown Bourbon",
  "Michter's",
  "Jeptha Creed",
  "Peerless Distillery",
  "Prohibition Spirits",
  "KY Cooperage",
  "Barton 1792",
];
//All the distilleries
export const distilleries_select = [
  { value: "Buffalo Trace", label: "Buffalo Trace" },
  { value: "Castle & Key", label: "Castle & Key" },
  { value: "Woodford Reserve", label: "Woodford Reserve" },
  { value: "Bulleit Distilling", label: "Bulleit Distilling" },
  { value: "Angel's Envy", label: "Angel's Envy" },
  { value: "Four Roses", label: "Four Roses" },
  { value: "Jim Beam", label: "Jim Beam" },
  { value: "Maker's Mark", label: "Maker's Mark" },
  { value: "Willett Distillery", label: "Willett Distillery" },
  { value: "Evan Williams", label: "Evan Williams" },
  { value: "Heaven Hill", label: "Heaven Hill" },
  { value: "Old Forester", label: "Old Forester" },
  { value: "The Old Crow", label: "The Old Crow" },
  { value: "Glenns Creek", label: "Glenns Creek" },
  { value: "Stitzel Weller", label: "Stitzel Weller" },
  { value: "Wild Turkey", label: "Wild Turkey" },
  { value: "Three Boys", label: "Three Boys" },
  { value: "Town Branch", label: "Town Branch" },
  { value: "Rabbit Hole", label: "Rabbit Hole" },
  { value: "Preservation", label: "Preservation" },
  { value: "Limestone Branch", label: "Limestone Branch" },
  { value: "Lux Row Distillers", label: "Lux Row Distillers" },
  { value: "Jefferson's", label: "Jefferson's" },
  { value: "James E. Pepper", label: "James E. Pepper" },
  { value: "Bardstown Bourbon", label: "Bardstown Bourbon CO." },
  { value: "Michter's", label: "Michter's" },
  { value: "Jeptha Creed", label: "Jeptha Creed" },
  { value: "Peerless Distillery", label: "Peerless Distillery" },
  { value: "Prohibition Spirits", label: "Prohibition Spirits" },
  { value: "KY Cooperage", label: "KY Cooperage" },
];
//The clause for the checkout page
export const checkout_clause =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique. Mauris sed malesuada lectus, euismod aliquet metus. Donec fermentum, enim a luctus vulputate, sapien sapien consequat odio, vel ullamcorper nulla arcu a tellus.";

//country selection
export const country_data = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
];

//Paragraphs used in the about page. Omit the first letter of each paragraph
export const about0 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique. Aliquam consequat gravida odio, a aliquam turpis tincidunt ac. Mauris sed malesuada lectus, euismod aliquet metus. Donec fermentum, enim a luctus vulputate, sapien sapien consequat odio, vel ullamcorper nulla arcu a tellus. Aenean vitae arcu sit amet elit vestibulum scelerisque. Maecenas varius euismod orci, vel rutrum turpis consequat nec. Suspendisse ut sollicitudin enim. Cras fringilla ut libero vel suscipit. Nam interdum posuere enim vel ultrices. Nunc ornare mauris id ex molestie, eu facilisis tortor venenatis. Sed commodo congue lorem, ut viverra leo bibendum vitae. Sed vulputate pretium felis, ac blandit elit eleifend in.";
export const about1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique. Aliquam consequat gravida odio, a aliquam turpis tincidunt ac. Mauris sed malesuada lectus, euismod aliquet metus. Donec fermentum, enim a luctus vulputate, sapien sapien consequat odio, vel ullamcorper nulla arcu a tellus. Aenean vitae arcu sit amet elit vestibulum scelerisque. Maecenas varius euismod orci, vel rutrum turpis consequat nec. Suspendisse ut sollicitudin enim. Cras fringilla ut libero vel suscipit. Nam interdum posuere enim vel ultrices. Nunc ornare mauris id ex molestie, eu facilisis tortor venenatis. Sed commodo congue lorem, ut viverra leo bibendum vitae. Sed vulputate pretium felis, ac blandit elit eleifend in.";
export const about2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus auctor, eleifend sapien vel, pharetra elit. Sed aliquet leo vel odio pretium, at tincidunt sapien tristique. Aliquam consequat gravida odio, a aliquam turpis tincidunt ac. Mauris sed malesuada lectus, euismod aliquet metus. Donec fermentum, enim a luctus vulputate, sapien sapien consequat odio, vel ullamcorper nulla arcu a tellus. Aenean vitae arcu sit amet elit vestibulum scelerisque. Maecenas varius euismod orci, vel rutrum turpis consequat nec. Suspendisse ut sollicitudin enim. Cras fringilla ut libero vel suscipit. Nam interdum posuere enim vel ultrices. Nunc ornare mauris id ex molestie, eu facilisis tortor venenatis. Sed commodo congue lorem, ut viverra leo bibendum vitae. Sed vulputate pretium felis, ac blandit elit eleifend in.";

// https://stripe.com/legal/dpa/faqs

// https://stripe.com/legal/ssa

//https://stripe.com/legal/dpa#download-the-dpa

//"https://course-api.com/react-store-products";
export const tours_url = process.env.REACT_APP_TOURS_URL;
//`https://course-api.com/react-store-single-product?id=`;
export const single_tour_url = process.env.REACT_APP_SINGLE_TOUR_URL;
