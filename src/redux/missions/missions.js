import axios from 'axios';

const DISPLAY_MISSIONS = 'DISPLAY_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const URL = 'https://api.spacexdata.com/v3/missions';

export const displayMissions = (payload) => ({
  type: DISPLAY_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});
// missions.js
export const fetchMissions = () => (dispatch) => {
  axios
    .get(URL)
    .then((response) => {
      const missions = response.data;
      const missionsArray = [];
      missions.forEach((mission) => {
        const MISSION = {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        };
        missionsArray.push(MISSION);
      });
      /* eslint-disable camelcase */
      dispatch(displayMissions(missionsArray));
    })
    .catch(() => {});
};

export const joinMissions = (missions, id) => {
  const newState = missions.map((mission) => {
    // if the mission id doesn't match the id we are looking for,
    // return the mission
    if (mission.mission_id !== id) {
      return mission;
    }
    // if the mission id matches the id we are looking for,
    // return the mission with reserved set to true
    return {
      ...mission,
      reserved: true,
    };
  });
  return newState;
};

export const LeaveMissions = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

const initialState = {
  missions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return {
        missions: action.payload,
      };
    case JOIN_MISSION:
      return {
        missions: joinMissions(state.missions, action.payload),
      };
    case LEAVE_MISSION:
      return {
        missions: LeaveMissions(state.missions, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
