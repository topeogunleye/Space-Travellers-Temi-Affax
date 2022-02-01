import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missions';

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
        <div className="status">
          {mission.reserved ? (
            <button type="button"> not a member</button>
          ) : (
            <button
              type="button"
              onClick={() => dispatch(joinMission(mission.mission_id))}
            >
              {' '}
              join mission
            </button>
          )}
        </div>
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
