import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { resRocket, canRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const rocketsContainer = rockets.map((rockets) => (
    <div className="flex justify-around m-10" key={rockets.id}>
      <img className="h-40 w-40 mr-5" src={rockets.images} alt="" />
      <div>
        <div className="font-sans ">{rockets.name}</div>
        <span>
          {rockets.reserved && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold  text-white bg-[#18A2B8] rounded-md">Reserved</span>
          )}
        </span>
        <div className="mb-2">{rockets.description}</div>
        <div className="text-container">
          {rockets.reserved && (
          <button className="   bg-white p-1 text-gray-500 border-2 rounded-sm hover:bg-gray-200" type="button" onClick={() => dispatch(canRocket(rockets.id))}>
            {' '}
            Cancel Reservation
          </button>
          )}
          {' '}
          {!rockets.reserved && (
          <button className="rounded-sm px-2 p-1 bg-blue-500 text-white" type="button" onClick={() => dispatch(resRocket(rockets.id))}>
            {' '}
            Reserve Rocket
          </button>
          )}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="">{rocketsContainer}</div>
    </div>
  );
};

export default Rockets;
