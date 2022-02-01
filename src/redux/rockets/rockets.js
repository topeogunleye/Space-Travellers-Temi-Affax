import axios from 'axios';

// action creator
const ADD_ROCKET = 'ADD_ROCKET';

// initialize the state

const initialState = {
  rockets: [],
};

// action

const displayRockets = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

// fetch rocket data from API
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = () => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
      const rockets = response.data;
      /* eslint-disable camelcase */
      const [id, rocket_name, description, flickr_images] = rockets;
      dispatch(displayRockets([id, rocket_name, description, flickr_images]));
    })
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return {
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
