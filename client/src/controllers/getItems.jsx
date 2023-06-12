import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../state_mnagement/actions';
import axios from 'axios';
import { Buffer } from 'buffer';

function ItemsList({ setItems }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    fetchItems().then((response) => {
      const endTime = performance.now();
      const timeElapsed = endTime - startTime;
      setLoadingTime(timeElapsed);
      setItems(response.data);
     
    });
  }, [setItems]);

  async function fetchItems() {
    try {
      const response = await axios.get('http://localhost:5050/items');
      setIsLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return [];
    }
  }

  // Rest of the component code...

}

const mapDispatchToProps = {
  setItems,
};

export default connect(null, mapDispatchToProps)(ItemsList);
