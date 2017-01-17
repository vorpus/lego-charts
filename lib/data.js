

export const processData = (type, data) => {
  switch(type) {
    case 'themes':
      addThemes(data.themes);
      break;
    case 'sets':
      addSets(data.results);
      break;
    default:
      console.log('none selected');
  }
}

function addThemes(themes) {
  themes.forEach((theme) => {
    let themeLevel;
    if (theme.theme_id.split('.').length === 3) {
      themeLevel = 'theme-3';
    } else if (theme.theme_id.split('.').length === 2) {
      themeLevel = 'theme-2';
    } else {
      themeLevel = 'theme-1'
    }
    $('.theme-ul').append(`<li class=${themeLevel} data-desc="${theme.descr}" data-id=${theme.theme_id}>${theme.descr}</li>`)
  });
}

function addSets(sets) {
  $('.set-ul').empty();

  sets.forEach((set) => {
    $('.set-ul').append(`<li data-thumb="${set.img_big}">${set.descr}</li>`)
  })
}
