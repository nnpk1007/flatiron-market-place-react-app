import React, { useState } from "react";

function AddItem() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
  return (
    <div>
      <h1>Add Item For Sale</h1>
    </div>
  );
}

export default AddItem;
