import Home from "../Pages/Homepage/Home";
import LocationResults from "../Pages/LocationResults";
import SearchResults from "../Pages/SearchResults";
import TestDetailPage from "../Pages/TestDetailPage";

const routes = [
  { path: "/", index: true, element: <Home /> },
  { path: "/search", index: true, element: <SearchResults /> },
  { path: "/search/tests/:id", index: true, element: <TestDetailPage /> },
  { path: "/location/tests/:id", index: true, element: <LocationResults /> },
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
