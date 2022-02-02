import axios from 'axios';

// action creators
const ADD_ROCKET = 'ADD_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

// initialize the state

const initialState = {
  rockets: [],
};

// actions

const displayRockets = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export const resRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const canRocket = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

// fetch rocket data from API
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = () => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
      const rockets = response.data;
      const rocketArray = [];
      rockets.forEach((rocket) => {
        const myRockets = {
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          images: rocket.flickr_images,
          reserved: false,
        };
        rocketArray.push(myRockets);
      });
      dispatch(displayRockets(rocketArray));
    })
    .catch(() => {});
};

export const reserveRockets = (rockets, id) => {
  const newState = rockets.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return {
      ...rocket,
      reserved: true,
    };
  });
  return newState;
};

export const cancelRockets = (rockets, id) => {
  const newState = rockets.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return {
      ...rocket,
      reserved: false,
    };
  });
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return {
        rockets: action.payload,
      };
    case RESERVE_ROCKET:
      return {
        rockets: reserveRockets(state.rockets, action.payload),
      };
    case CANCEL_ROCKET:
      return {
        rockets: cancelRockets(state.rockets, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
