import Home from "../Pages/Homepage/Home";

const routes = [
  { path: "/", index: true, element: <Home /> },
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
