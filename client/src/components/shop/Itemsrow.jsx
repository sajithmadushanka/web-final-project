import React, { useState } from 'react';
import { connect } from 'react-redux';
import ItemsList from '../../controllers/getItems';
import { Buffer } from 'buffer';


import '../../styles/css/shop/itemsrow.css';

function ItemsRow({ items }) {
  if (!Array.isArray(items)) {
    return <div>No items to display</div>;
  }
 
  return (
    <div>
     
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index}>
              {/* ///--------------------------------------- */}

              <div className="Item_card">
      <div className="product_card_line">
      {/* Render the items */}
      {items.slice(index * 4, index * 4 +4).map((item) => (
        <div key={item._id}>
          
              <div className="product_card">
                {item.Image && (
                  <div className="image-container">
                    <img
                      src={`data:${item.Image.contentType};base64,${Buffer.from(item.Image.data).toString('base64')}`}
                      alt="product img"
                    />
                    <button className="addToCart-btn">+</button>
                  </div>
                )}
                <div className="card-bottom">
                  <p>${item.Price}</p>
                  <p>
                    <a href="#">{item.Title}</a>
                  </p>
                  <button className="view-btn">view</button>
                </div>
                {/* Render other item properties */}
              </div>
            </div>
          
        
      ))}
      {/* Render the ItemsList component */}
      <ItemsList />
    </div>
    </div>

      {/* -------------------------------------------------- */}

      </div>
    ))}
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(ItemsRow);
