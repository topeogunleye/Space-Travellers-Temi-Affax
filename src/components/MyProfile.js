import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const reserved = reservedMissions.map((mission) => (
    <li key={mission.mission_id}>{mission.mission_name}</li>
  ));

  const reservedRockets = rockets.filter(
    (rockets) => rockets.reserved === true,
  );

  const resRoc = reservedRockets.map((rocket) => (
    <li key={rocket.id}>{rocket.name}</li>
  ));
  return (
    <div>
      <div className="my-profile">
        <div className="missions">
          <h2>My Missions</h2>
          <ul>{reserved}</ul>
        </div>
        <div className="rockets">
          <h2>My Rockets</h2>
          <ul>{resRoc}</ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
