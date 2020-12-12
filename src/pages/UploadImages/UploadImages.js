import React from "react";
import './UploadImages.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function UploadImages() {
  const [image, setImage] = React.useState("");
  const id = parseInt(useParams().id);
  const history = useHistory();

  const _handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', image);
    data.append('id', id);

    axios.post(process.env.REACT_APP_SERVER_URL + 'post/upload-photo.php', data, { })
      .then(history.push("/"));
  }

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
    }

    reader.readAsDataURL(file)
  }
  
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12 section-t8">
          <div class="row">
            <h1 class="title-single text-center title-add-image">Pasul 2: Încarcă o imagine</h1>
          </div>
          <div class="row upload-image">
            <form onSubmit={(e)=>_handleSubmit(e)}>
              <input className="file-input"
                type="file" 
                onChange={(e)=>_handleImageChange(e)} />
              <button class="btn btn-a"
                type="submit" 
                onClick={(e)=>_handleSubmit(e)}>
                  Incarcă imagine</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}
    
export default UploadImages;