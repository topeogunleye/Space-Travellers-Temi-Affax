import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { resRocket, canRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const rocketsContainer = rockets.map((rockets) => (
    <div key={rockets.id}>
      <div className="">{rockets.images}</div>
      <div className="">{rockets.name}</div>
      <span>
        {rockets.reserved && (
          <div>
            <h4>Reserved</h4>
          </div>
        )}
      </span>
      <div className="">{rockets.description}</div>
      <div className="text-container">
        {rockets.reserved && (
          <button type="button" onClick={() => dispatch(canRocket(rockets.id))}>
            {' '}
            Cancel Reservation
          </button>
        )}
        {' '}
        {!rockets.reserved && (
          <button type="button" onClick={() => dispatch(resRocket(rockets.id))}>
            {' '}
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div>{rocketsContainer}</div>
    </div>
  );
};

export default Rockets;
