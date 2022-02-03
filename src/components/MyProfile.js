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
    <div className="flex justify-around">
      <table className="table-auto">
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="list-none">{reserved}</td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto">
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="list-none">{resRoc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
