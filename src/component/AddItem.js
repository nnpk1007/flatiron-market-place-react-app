import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem({ username }) {
  console.log(username)
    const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // handle submit button click
    const handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            title,
            price : parseFloat(price),
            description,
            image,
            soldby: username
        }

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .then((r) => r.json())
        .then((data) => {
            // reset the form fields
            setTitle("")
            setDescription("")
            setPrice("")
            setImage("")

            const addMore = window.confirm("Item added successfully. Do you want to add more item for sale?")

            if (addMore) {
            }
            else {
                navigate("/listing")
            }
        })
        .catch((error) => console.log(error))
    }

  return (
    <div>
      <h1>Add Item For Sale</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} required onChange={(e) => setTitle(e.target.value)}/>
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Price</label>
          <input type="text" className="form-control" value={price} required onChange={(e) => setPrice(e.target.value)}/>
          <label>Image</label>
          <input type="url" className="form-control" value={image} required onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary mt-2" >
            Submit
        </button>
      </form>
    </div>
  );
}

export default AddItem;
