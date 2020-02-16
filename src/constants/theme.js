export const THEME_LIGHT = 'THEME_LIGHT';
export const THEME_DARK = 'THEME_DARK';

const defaults = {
  primary: 'dodgerblue',
  secondary: 'lightgray',
  error: 'red',
};

export default {
  [THEME_LIGHT]: {
    body: '#E2E2E2',
    text: '#363537',
    ...defaults,
  },
  [THEME_DARK]: {
    body: '#363537',
    text: '#FAFAFA',
    ...defaults,
    primary: 'darkturquoise',
  },
};
