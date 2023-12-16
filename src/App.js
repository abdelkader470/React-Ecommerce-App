import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import LayOut from "./Page/LayOut";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductPage from "./Page/Products/ShopProductPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./Page/User/UserAllAddresPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "allcategory", element: <AllCategoryPage /> },
      { path: "allbrand", element: <AllBrandPage /> },
      { path: "products", element: <ShopProductPage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "order/paymethoud", element: <ChoosePayMethoudPage /> },
      { path: "admin/allproducts", element: <AdminAllProductsPage /> },
      { path: "admin/allorders", element: <AdminAllOrdersPage /> },
      { path: "admin/orders/:id", element: <AdminOrderDetailsPage /> },
      { path: "admin/addbrand", element: <AdminAddBrandPage /> },
      { path: "admin/addcategory", element: <AdminAddCategoryPage /> },
      { path: "admin/addsubcategory", element: <AdminAddSubCategoryPage /> },
      { path: "admin/addproduct", element: <AdminAddProductsPage /> },
      { path: "user/allorders", element: <UserAllOrdersPage /> },
      { path: "user/favoriteproducts", element: <UserFavoriteProductsPage /> },
      { path: "user/addresses", element: <UserAllAddresPage /> },
      { path: "user/add-address", element: <UserAddAddressPage /> },
      { path: "user/edit-address", element: <UserEditAddressPage /> },
      { path: "user/profile", element: <UserProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
