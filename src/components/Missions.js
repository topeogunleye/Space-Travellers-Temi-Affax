import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missionsReducer.missions);

  const missionsDiv = missions.map((mission) => (
    <tr
      key={mission.mission_id}
      className="odd:bg-gray-200 divide-x divide-gray-300"
    >
      <td className="flex align-top pl-1">{mission.mission_name}</td>
      <td className="px-3 py-2">{mission.description}</td>
      <td>
        {mission.reserved && (
          <div className="status w-64 flex justify-around text-xs">
            <span className="badge bg-blue-400 text-white rounded-sm px-1 py-0.5 uppercase grid place-items-center">
              Active Member
            </span>
          </div>
        )}
        {!mission.reserved && (
          <div className="status w-64 flex justify-around text-xs">
            <span
              type="button"
              className="badge bg-gray-500 text-white rounded-sm uppercase grid place-items-center px-1 py-0.5"
            >
              not a member
            </span>
          </div>
        )}
      </td>
      <td>
        {mission.reserved && (
          <div className="w-64 flex justify-around text-xs">
            <button
              type="button"
              className="text-sm text-red-600 border-red-400 rounded-sm border-2 px-1 py-0.5"
              onClick={() => dispatch(leaveMission(mission.mission_id))}
            >
              {' '}
              leave mission
            </button>
          </div>
        )}
        {!mission.reserved && (
          <div className="w-64 flex justify-around text-xs">
            <button
              type="button"
              className="text-sm text-gray-600 border-gray-400 rounded-sm border-2 px-1 py-0.5"
              onClick={() => dispatch(joinMission(mission.mission_id))}
            >
              {' '}
              Join Mission
            </button>
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <table className="table-auto">
      <thead>
        <tr className="divide-x">
          <th className="flex align-left pl-1">Mission</th>
          <th className="ml-0">Description</th>
          <th className="flex pl-1">Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{missionsDiv}</tbody>
    </table>
  );
};

export default Missions;
