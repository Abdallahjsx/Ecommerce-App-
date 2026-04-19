const routes = [
  { title: "Home", path: "/", private: false },
  { title: "Shop", path: "/shop", private: false },
  { title: "Reels", path: "/reels", private: false },
  { title: "Orders", path: "/orders", private: true },
  { title: "Contact Us", path: "/support/contact-us", private: false },
  { title: "FAQS", path: "/faqs", private: false },
  // { title: "Profile", path: "/profile", private: true },
  { title: "Wishlist", path: "/wishlist", private: true },
  { title: "Cart", path: "/cart", private: true },
];
export default routes;
