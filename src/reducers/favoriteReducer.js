const initialState = {
    newValue: []
  };
  export const favoriteReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'FAVORITE_ANIME':
        return {
          ...state,
          newValue: action.payload.data
        };
      default:
        return state;
    }
  };