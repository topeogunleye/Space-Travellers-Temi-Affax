import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) =>
    state.missionsReducer.missions
  );

  useEffect(() => {
    dispatch(fetchMissions());
    console.log(missions);
  }, []);

  const missionsDiv = missions.map((mission) => (
    <div key={mission.mission_id}>
      <div className="">{mission.mission_name}</div>
    </div>
  ));

  return (
    <div className="mission-container">
      <div className="mission">
        {missionsDiv}
        <h2>Mission</h2>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque
        voluptatibus aperiam voluptatem doloremque, quam eveniet est aliquam
        rerum animi?
      </div>
      <div className="status">
        <button type="button"> not a member</button>
        <button type="button"> join mission</button>
      </div>
    </div>
  );
};

export default Missions;
