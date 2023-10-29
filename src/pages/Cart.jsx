import React, { useRef, useState, useEffect } from "react";
import PagesHero from "../components/PagesHero";
import { foodMenu } from "../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, manualAmount } from "../features/addToCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart);
  useEffect(() => {
    setCartItems(foodMenu.filter((food) => count[food.id] !== 0));
  }, [count, foodMenu]);

  const handleChange = (e, id) => {
    dispatch(manualAmount({ id: id, amount: e.target.value }));
  };

  let amount = 0;
  const totalAmount = (id, price) => {
    amount += count[id] * price;
  };

  return (
    <div>
      <PagesHero title="cart" path="cart" />

      <div className="w-4/5 mx-auto overflow-scroll mt-20">
        <table className="w-[1000px] mx-auto">
          <thead>
            <tr className="bg-[var(--secondary-color)] text-center">
              <th></th>
              <th></th>
              <th className="py-5">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item.id} className="border-b text-center">
                <td>
                  <span
                    onClick={() =>
                      dispatch(manualAmount({ id: item.id, amount: 0 }))
                    }
                    className="text-[1.8rem] border border-white/10 px-2 pb-1 cursor-pointer hover:bg-[var(--secondary-color)] hover:text-black"
                  >
                    ×
                  </span>
                </td>
                <td className="flex justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-20 object-cover rounded my-5"
                  />
                </td>
                <td className="uppercase">{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] active:scale-[0.9] font-bold text-[1.2rem]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="number"
                    onClick={(e) => e.target.select()}
                    value={count[item.id]}
                    onChange={(e) => handleChange(e, item.id)}
                    className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] outline-none w-14 text-[1.2rem]"
                  />
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] active:scale-[0.9] font-bold text-[1.2rem]"
                  >
                    +
                  </button>
                </td>
                {totalAmount(item.id, item.price)}
                <td>${(count[item.id] * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center md:justify-end w-4/5 mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center w-full my-24">
            Cart Is Empty{" "}
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/Shop"
              className="underline block text-[var(--secondary-color)]"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="w-full md:w-[250px] my-24 border p-3">
            <h3>CART TOTALS</h3>
            <p className="flex justify-between text-[.9rem] mt-6">
              <span>Subtotal</span> <span>${amount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-[.9rem] mt-6">
              <span>Delivery</span> <span>$0.00</span>
            </p>
            <p className="flex justify-between text-[.9rem] mt-6 mb-4">
              <span>Discount</span> <span>$0.00</span>
            </p>
            <hr />
            <p className="flex justify-between text-[.9rem] mt-2 mb-5">
              <span>Total</span> <span>${amount.toFixed(2)}</span>
            </p>
            <Link>
              <button className="bg-[var(--secondary-color)] border border-[var(--secondary-color)] w-full py-2 text-black hover:bg-transparent hover:text-white">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
