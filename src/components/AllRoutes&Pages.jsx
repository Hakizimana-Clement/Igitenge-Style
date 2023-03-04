import React from "react";
import { Routes, Route } from "react-router-dom";
import AllComponents from "./AllComponents";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Cart1 from "./cartPages/Cart1";
import Cart2 from "./cartPages/Cart2";
import Cart3 from "./cartPages/Cart3";
import Cart4 from "./cartPages/Cart4";
import Cart5 from "./cartPages/Cart5";
import Cart6 from "./cartPages/Cart6";
import Cart7 from "./cartPages/Cart7";
import Cart8 from "./cartPages/Cart8";
import Cart9 from "./cartPages/Cart9";
import Cart10 from "./cartPages/Cart10";
import Cart11 from "./cartPages/Cart11";
import Cart12 from "./cartPages/Cart12";
import Cart13 from "./cartPages/Cart13";
import Cart14 from "./cartPages/Cart14";
import Cart15 from "./cartPages/Cart15";
import Cart16 from "./cartPages/Cart16";
import Cart17 from "./cartPages/Cart17";
import Cart18 from "./cartPages/Cart18";
import Cart19 from "./cartPages/Cart19";
import Cart20 from "./cartPages/Cart20";
import Cart21 from "./cartPages/Cart21";
import Cart22 from "./cartPages/Cart22";
import Cart23 from "./cartPages/Cart23";
import Cart24 from "./cartPages/Cart24";
import Cart25 from "./cartPages/Cart25";
import Cart26 from "./cartPages/Cart26";
import Cart27 from "./cartPages/Cart27";
import Cart28 from "./cartPages/Cart28";
import Cart29 from "./cartPages/Cart29";
import Cart30 from "./cartPages/Cart30";
import CheckOut from "./CheckOut";
import NotFoundPage from "./NotFoundPage";
import Payment from "./Payment";
import SuccessPaymentDialog from "./SuccessPaymentDialog";
import Failed from "./failedPaymentDialog";
import Test from "./Test";
import Test2 from "./Test2";
import Admin from "./Admin";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/failed" element={<Failed />} />

        <Route path="/" element={<AllComponents />} />
        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="/cart-1" element={<Cart1 />} />
        <Route path="/cart-2" element={<Cart2 />} />
        <Route path="/cart-3" element={<Cart3 />} />
        <Route path="/cart-4" element={<Cart4 />} />
        <Route path="/cart-5" element={<Cart5 />} />
        <Route path="/cart-6" element={<Cart6 />} />
        <Route path="/cart-7" element={<Cart7 />} />
        <Route path="/cart-8" element={<Cart8 />} />
        <Route path="/cart-9" element={<Cart9 />} />
        <Route path="/cart-10" element={<Cart10 />} />
        <Route path="/cart-11" element={<Cart11 />} />
        <Route path="/cart-12" element={<Cart12 />} />
        <Route path="/cart-13" element={<Cart13 />} />
        <Route path="/cart-14" element={<Cart14 />} />
        <Route path="/cart-15" element={<Cart15 />} />
        <Route path="/cart-16" element={<Cart16 />} />
        <Route path="/cart-17" element={<Cart17 />} />
        <Route path="/cart-18" element={<Cart18 />} />
        <Route path="/cart-19" element={<Cart19 />} />
        <Route path="/cart-20" element={<Cart20 />} />
        <Route path="/cart-21" element={<Cart21 />} />
        <Route path="/cart-22" element={<Cart22 />} />
        <Route path="/cart-23" element={<Cart23 />} />
        <Route path="/cart-24" element={<Cart24 />} />
        <Route path="/cart-25" element={<Cart25 />} />
        <Route path="/cart-26" element={<Cart26 />} />
        <Route path="/cart-27" element={<Cart27 />} />
        <Route path="/cart-28" element={<Cart28 />} />
        <Route path="/cart-29" element={<Cart29 />} />
        <Route path="/cart-30" element={<Cart30 />} />

        {/* cart 1 */}
        <Route path="/cart-1/checkout" element={<CheckOut />} />
        <Route path="/cart-1/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-1/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 2 */}
        <Route path="/cart-2/checkout" element={<CheckOut />} />
        <Route path="/cart-2/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-2/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 3 */}
        <Route path="/cart-3/checkout" element={<CheckOut />} />
        <Route path="/cart-3/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-3/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 4 */}
        <Route path="/cart-4/checkout" element={<CheckOut />} />
        <Route path="/cart-4/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-4/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 5 */}
        <Route path="/cart-5/checkout" element={<CheckOut />} />
        <Route path="/cart-5/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-5/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 6 */}
        <Route path="/cart-6/checkout" element={<CheckOut />} />
        <Route path="/cart-6/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-6/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 7 */}
        <Route path="/cart-7/checkout" element={<CheckOut />} />
        <Route path="/cart-7/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-7/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 8 */}
        <Route path="/cart-8/checkout" element={<CheckOut />} />
        <Route path="/cart-8/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-8/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 9 */}
        <Route path="/cart-9/checkout" element={<CheckOut />} />
        <Route path="/cart-9/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-9/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 8 */}
        <Route path="/cart-8/checkout" element={<CheckOut />} />
        <Route path="/cart-8/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-8/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 9 */}
        <Route path="/cart-9/checkout" element={<CheckOut />} />
        <Route path="/cart-9/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-9/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 10 */}
        <Route path="/cart-10/checkout" element={<CheckOut />} />
        <Route path="/cart-10/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-10/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 11 */}
        <Route path="/cart-11/checkout" element={<CheckOut />} />
        <Route path="/cart-11/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-11/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 12 */}
        <Route path="/cart-12/checkout" element={<CheckOut />} />
        <Route path="/cart-12/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-12/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 13 */}
        <Route path="/cart-13/checkout" element={<CheckOut />} />
        <Route path="/cart-13/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-13/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 14 */}
        <Route path="/cart-14/checkout" element={<CheckOut />} />
        <Route path="/cart-14/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-14/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 15 */}
        <Route path="/cart-15/checkout" element={<CheckOut />} />
        <Route path="/cart-15/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-15/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 16 */}
        <Route path="/cart-16/checkout" element={<CheckOut />} />
        <Route path="/cart-16/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-16/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 17 */}
        <Route path="/cart-17/checkout" element={<CheckOut />} />
        <Route path="/cart-17/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-17/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 18 */}
        <Route path="/cart-18/checkout" element={<CheckOut />} />
        <Route path="/cart-18/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-18/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 19 */}
        <Route path="/cart-19/checkout" element={<CheckOut />} />
        <Route path="/cart-19/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-19/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 20 */}
        <Route path="/cart-20/checkout" element={<CheckOut />} />
        <Route path="/cart-20/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-20/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 21 */}
        <Route path="/cart-21/checkout" element={<CheckOut />} />
        <Route path="/cart-21/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-21/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 21 */}
        <Route path="/cart-21/checkout" element={<CheckOut />} />
        <Route path="/cart-21/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-21/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 22 */}
        <Route path="/cart-22/checkout" element={<CheckOut />} />
        <Route path="/cart-22/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-22/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 23 */}
        <Route path="/cart-23/checkout" element={<CheckOut />} />
        <Route path="/cart-23/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-23/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 24 */}
        <Route path="/cart-24/checkout" element={<CheckOut />} />
        <Route path="/cart-24/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-24/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 25 */}
        <Route path="/cart-25/checkout" element={<CheckOut />} />
        <Route path="/cart-25/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-25/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 26 */}
        <Route path="/cart-26/checkout" element={<CheckOut />} />
        <Route path="/cart-26/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-26/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 27 */}
        <Route path="/cart-27/checkout" element={<CheckOut />} />
        <Route path="/cart-27/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-27/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 28 */}
        <Route path="/cart-28/checkout" element={<CheckOut />} />
        <Route path="/cart-28/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-28/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 29 */}
        <Route path="/cart-29/checkout" element={<CheckOut />} />
        <Route path="/cart-29/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-29/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* cart 30 */}
        <Route path="/cart-30/checkout" element={<CheckOut />} />
        <Route path="/cart-30/checkout/payment" element={<Payment />} />
        <Route
          path="/cart-30/checkout/payment/success"
          element={<SuccessPaymentDialog />}
        />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/sale" element={<Cart10 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
