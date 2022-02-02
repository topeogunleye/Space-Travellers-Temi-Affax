import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchRockets, resRocket, canRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rocketsContainer = rockets.map((rockets) => (
    <div key={rockets.id}>
      <div className="">{rockets.images}</div>
      <div className="">{rockets.name}</div>
      <div className="">{rockets.description}</div>
      <div className="text-container">
        {rockets.reserved && (
          <button
            type="button"
            onClick={() => dispatch(canRocket(rockets.id))}
          >
            {' '}
            Cancel Reservation
          </button>
        )}
        {' '}
        {!rockets.reserved && (
        <button
          type="button"
          onClick={() => dispatch(resRocket(rockets.id))}
        >
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
