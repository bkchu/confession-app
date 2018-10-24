import { OPEN_SIDE_DRAWER, CLOSE_SIDE_DRAWER } from './actions';

const initialState = {
  showSideDrawer: false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      return { ...state, showSideDrawer: true };

    case CLOSE_SIDE_DRAWER:
      return { ...state, showSideDrawer: false };

    default:
      return state;
  }
}

export const openSideDrawer = () => ({
  type: OPEN_SIDE_DRAWER
});

export const closeSideDrawer = () => ({
  type: CLOSE_SIDE_DRAWER
});
