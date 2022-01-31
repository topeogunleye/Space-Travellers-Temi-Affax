import axios from 'axios';

const DISPLAY_MISSIONS = 'DISPLAY_MISSIONS';

const initialState = {
  missions: [],
};

export const displayMissions = (payload) => ({
  type: DISPLAY_MISSIONS,
  payload,
});

// missions.js
export const fetchMissions = () => (dispatch) => {
  axios
    .get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data;
      /* eslint-disable camelcase */
      const [mission_id, mission_name, description] = missions;
      dispatch(displayMissions([mission_id, mission_name, description]));
    })
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return {
        missions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
