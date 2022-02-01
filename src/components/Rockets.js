import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rocketsContainer = rockets.map((rockets) => (
    <div key={rockets.id}>
      <div className="">{rockets.flickr_images}</div>
      <div className="">{rockets.rockets_name}</div>
      <div className="">{rockets.description}</div>
    </div>
  ));
  return (
    <div className="container">
      <h2>Falcon 1</h2>
      {rocketsContainer}
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <div className="text-container">
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rockets;
