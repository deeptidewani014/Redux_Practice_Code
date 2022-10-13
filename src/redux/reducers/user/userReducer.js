const initialState = {
  uid: '',
  userName: '',
  isUserLogin: false,
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        uid: action.id,
      };

    default:
      return state;
  }
};

export default userReducer;
