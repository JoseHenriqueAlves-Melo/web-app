const initialState = {
    newValue: []
  };
  export const favoriteReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'FAVORITE_ANIME':
        return {
          ...state,
          newValue: [...state.newValue, action.payload],
        };
      default:
        return state;
    }
  };