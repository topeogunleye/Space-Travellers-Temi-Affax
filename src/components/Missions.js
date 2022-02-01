import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missionsDiv = missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved && (
          <div className="status">
            <button type="button" className="badge">
              Active Member
            </button>
            <button
              type="button"
              onClick={() => dispatch(leaveMission(mission.mission_id))}
            >
              {' '}
              leave mission
            </button>
          </div>
        )}
        {!mission.reserved && (
          <div className="status">
            <button type="button" className="badge">
              NOT A MEMBER
            </button>
            <button
              type="button"
              onClick={() => dispatch(joinMission(mission.mission_id))}
            >
              {' '}
              join mission
            </button>
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{missionsDiv}</tbody>
    </table>
  );
};

export default Missions;
