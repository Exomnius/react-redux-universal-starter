import config from 'config';

const CHANGE = 'redux-starter/i18n/CHANGE';

export function changeLocale(locale) {
  return {
    type: CHANGE,
    locale
  };
}

const initialState = {
  locale: config.i18n.defaultLocale
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
}
