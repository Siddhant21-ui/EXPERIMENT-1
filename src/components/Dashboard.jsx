import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/ProductSlice";
function Dashboard() {
  const { userName, role, logout } = useContext(AuthContext);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      <p>Role: {role}</p>

      {/* Only admin can add products */}
      {role === "admin" && (
        <button
          onClick={() =>
            dispatch(
              addProduct({
                id: Date.now(),
                name: "Sample Product"
              })
            )
          }
        >
          Add Product
        </button>
      )}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}

            {/* Only admin can remove products */}
            {role === "admin" && (
              <button
                onClick={() => dispatch(removeProduct(product.id))}
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
