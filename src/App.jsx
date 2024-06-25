import ListPage from "./rotues/listPage/listPage";
import Layout from "./rotues/layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./rotues/homePage/homePage";
import SinglePage from "./rotues/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path:'/',
          element : <Homepage/>
        },
        {
          path:'/list',
          element: <ListPage/>
        },
        {
          path:'/:id',
          element: <SinglePage/>
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
