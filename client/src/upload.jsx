import { useState } from "react";
import axios from "axios";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageChange(event) {
    setSelectedImage(event.target.files[0]);
  }

  async function PostTask(title, price, description, image) {
    const formData = new FormData();
    formData.append("image", image);

    const uri = `http://localhost:5050/addItem/${title}/${price}/${description}`;
    try {
      const res = await axios.post(uri, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.status);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("Error status code:", error.response.status);
      }
    }
  }

  function Submit(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;

    if (title && price && description && selectedImage) {
      PostTask(title, price, description, selectedImage);
    } else {
      alert("Fields cannot be empty!");
    }
  }

  return (
    <>
      <form style={{ margin: "50px 50%", fontSize: "20px" }}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required style={{ padding: "10px" }} />
        <br />
        <label htmlFor="text">Price</label>
        <input type="text" id="price" required style={{ padding: "10px" }} />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          required
          style={{ padding: "10px" }}
        />
        <br />
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          name="image"
          required
          onChange={handleImageChange}
        />

        <button type="submit" onClick={Submit} style={{ padding: "10px" }}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Upload;
