import { Wrapper } from "./Wrapper";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
export function Products() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/products");
      const content = await response.json();
      setProducts(content);
    })();
  }, []);

  async function delete_product(id) {
    if (window.confirm("Delete?")) {
      console.log(`Removing http://localhost:8000/products/${id}`);
      await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });
    }
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }
  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={`/create`} className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <a
                      //   href={Navigate()}
                      className="btn btn-sm btn-outline-secondary"
                      onClick={(e) => delete_product(product.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}
