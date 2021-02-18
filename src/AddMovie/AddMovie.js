import React, { useState } from "react";
import "./AddMovie.css";
import ReactStars from "react-rating-stars-component";

import "bootstrap/dist/css/bootstrap.css";
const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [rate, setRate] = useState(1);

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangePostUrl(e) {
    setPostUrl(e.target.value);
  }
  const handleRate = (e) => {
    setRate(e);
  };

  return (
    <div className="for">
      <div className="container">
        <div className=" text-center mt-5 ">
          <h1>Add your best Movie</h1>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_name">Title</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter Movie Title "
                              value={title}
                              onChange={handleChangeTitle}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_lastname">Description</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Please enter MovieDescription *"
                              value={description}
                              onChange={handleChangeDescription}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_email">PostUrl</label>
                            <input
                              id="form_email"
                              type="text"
                              name="posturl"
                              className="form-control"
                              placeholder="Please enter postUrl *"
                              value={postUrl}
                              onChange={handleChangePostUrl}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="form_message">Rate</label>
                            <ReactStars
                              count={5}
                              onChange={handleRate}
                              size={24}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              let t = title;
                              let d = description;
                              let u = postUrl;
                              let r = rate;
                              if (d === "" || u === "" || u === "") alert("no");
                              else {
                                props.addMovie([
                                  { title, description, postUrl, rate },
                                ]);
                              }
                              setTitle("");
                              setPostUrl("");
                              setRate(1);
                              setDescription("");
                            }}
                          >
                            Add Movie
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddMovie;
