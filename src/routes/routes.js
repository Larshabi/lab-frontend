import Home from "../Pages/Homepage/Home";
import SearchResults from "../Pages/SearchResults";

const routes = [
  { path: "/", index: true, element: <Home /> },
  { path: "/search", index: true, element: <SearchResults /> },
  // {
  //   path: "/",
  //   element: <HomeLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: "products",
  //       element: <Products />,
  //     },
  //     {
  //       path: "products/:id",
  //       element: <ProductsDetails />,
  //     },
  //   ],
  // },
];

export default routes;
