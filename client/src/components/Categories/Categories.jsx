import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/564x/66/b7/6d/66b76d326abdc4f913f8415d486ddfa4.jpg"
            alt=""
          />
          <button>
            <Link to="/products/sale" className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/564x/ed/0e/35/ed0e35d257b78e054a18ff7b34323b58.jpg"
            alt=""
          />
          <button>
            <Link to="/products/text" className="link">
              TEXTILES
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://i.pinimg.com/564x/28/d6/4d/28d64d28d8d7d6427041d2fd2b5de6d3.jpg"
            alt=""
          />
          <button>
            <Link to="/products/new" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.pinimg.com/564x/9f/64/ed/9f64ed149d5389da3219064c11d74417.jpg"
                alt=""
              />
              <button>
                <Link to="/products/diy" className="link">
                  DIY
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://i.pinimg.com/564x/63/82/01/638201e561b28a5704929a314d504344.jpg"
                alt=""
              />
              <button>
                <Link to="/products/acc" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/564x/2c/f1/8e/2cf18ee7d2d7419ff8b29337b53d1b13.jpg"
            alt=""
          />
          <button>
            <Link to="/products/handi" className="link">
              Handicrafts
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;