import {
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  SET_SCROLL_STATUS,
  SET_IS_SCROLLING_DOWN
} from './actions';

const initialState = {
  showSideDrawer: false,
  didScroll: false,
  isScrollingDown: false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      return { ...state, showSideDrawer: true };

    case CLOSE_SIDE_DRAWER:
      return { ...state, showSideDrawer: false };

    case SET_SCROLL_STATUS:
      return { ...state, didScroll: action.payload };

    case SET_IS_SCROLLING_DOWN:
      return { ...state, isScrollingDown: action.payload };
    default:
      return state;
  }
}

export const openSideDrawer = () => {
  document.body.style.overflow = 'hidden';
  return {
    type: OPEN_SIDE_DRAWER
  };
};
export const closeSideDrawer = () => {
  document.body.style.overflow = 'auto';
  return {
    type: CLOSE_SIDE_DRAWER
  };
};
export const setScrollStatus = didScroll => {
  return {
    type: SET_SCROLL_STATUS,
    payload: didScroll
  };
};
export const setIsScrollingDown = isScrollingDown => {
  return {
    type: SET_IS_SCROLLING_DOWN,
    payload: isScrollingDown
  };
};
