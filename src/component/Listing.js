import React, { useEffect, useState } from "react";

function Listing() {
  const [items, setItems] = useState([]);

  // fetch items from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, [items]);

  // handle buy button click
  const handleBuyClick = (itemId) => {
   fetch(`http://localhost:3001/items/${itemId}`, {
    method: "DELETE"
   })
   .then(() => {
    setItems(items.filter((item) => item.id !== itemId))
   })
   .catch((error) => console.log(error))
  };

  
  return (
    <div>
      <h1>Listing Items</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-lg-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                className="card-image-top"
                style={{ height: "300px", objectFit: "contain" }}
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBuyClick(item.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
