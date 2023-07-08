import React, { useState } from "react";

function AddItem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      <h1>Add Item For Sale</h1>
      <form>
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
      </form>
    </div>
  );
}

export default AddItem;
