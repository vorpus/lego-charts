import * as Data from './data';

export const getThemes = () => {
  $.ajax({
    url: 'https://rebrickable.com/api/get_themes',
    data: {
      key: KEY,
      format: 'json'
    },
    success: (success) => {Data.processData('themes', success)},
    error: () => {console.log('fail')}
  });
}

export const getSets = (theme, theme_id) => {

  $.ajax({
    url: 'https://rebrickable.com/api/search',
    data: {
      key: KEY,
      query: theme,
      format: 'json',
      type: 'S',

    },
    success: (success) => {Data.processData('sets', success)},
    error: () => {console.log('fail')}
  });
}

const KEY = 'Xdo02dxumY';
