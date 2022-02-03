import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const reserved = reservedMissions.map((mission) => (
    <li key={mission.mission_id} className="p-4 w-full">
      {mission.mission_name}
    </li>
  ));

  const reservedRockets = rockets.filter(
    (rockets) => rockets.reserved === true,
  );

  const resRoc = reservedRockets.map((rocket) => (
    <li key={rocket.id} className="p-4 w-full">
      {rocket.name}
    </li>
  ));
  return (
    <div className="md:flex justify-around h-screen align-top">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-3xl flex align-left">My Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="min-w-vw">
            <td className="list-none divide-y flex align-top flex-col border-2 h-fit w-4/5 md:w-96">
              {reserved}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-3xl flex align-left">My Rockets</th>
          </tr>
        </thead>
        <tbody>
          <tr className="min-w-vw">
            <td className="list-none divide-y flex  align-top flex-col border-2 h-fit w-4/5 md:w-96">
              {resRoc}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
