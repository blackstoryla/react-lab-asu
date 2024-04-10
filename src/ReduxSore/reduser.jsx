const initialLoginState = {
    auth: false
  };

export const reducer = (state = initialLoginState, action) => {
    switch (action.type) {
      case 'LogIn':
        return {
            auth: true
        };
      case 'LogOut':
        return {
            auth: false
        };
      default:
        return state;
    }
  };
