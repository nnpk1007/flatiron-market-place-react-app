import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Listing({ loggedIn, username }) {
  console.log("from Listing.js:", username)
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItem = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // fetch items from JSON server
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/items`)
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  // handle buy button click
  const handleRemoveClick = (itemId) => {
    if (loggedIn) {
      fetch(`${process.env.REACT_APP_API_URL}/items/${itemId}`, {
        method: "DELETE",
      })
        .then(() => {
          setItems(items.filter((item) => item.id !== itemId));
        })
        .catch((error) => console.log(error));
    } else {
      navigate("/login");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Item"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      
      <div className="row mt-5">
        {filteredItem.map((item) => (
          <div key={item.id} className="col-lg-4 mb-4" >
            <div className="card h-100">
              <img
                src={item.image}
                className="card-image-top"
                style={{ height: "200px", objectFit: "contain" }}
                alt={item.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title ">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
                <p className="card-text>">Sold by {item.soldby}</p>
                <p className="card-text">Call/Text: {item.callortext}</p>
                {username === item.soldby ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRemoveClick(item.id)}
                    >
                      Remove
                    </button>
                ) : "" }

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
