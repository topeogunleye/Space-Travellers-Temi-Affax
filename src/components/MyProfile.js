import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const reserved = reservedMissions.map((mission) => (
    <li key={mission.mission_id}>{mission.mission_name}</li>
  ));
  return (
    <div>
      <div className="my-profile">
        <div className="missions">
          <h2>My Missions</h2>
        </div>
        <ul>{reserved}</ul>
        <div className="rockets">
          <h2>My Rockets</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
