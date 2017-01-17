import * as API from "./api";

document.addEventListener('DOMContentLoaded', () => {
  API.getThemes();

  $('.theme-ul').on('click', 'li', (e) => {
    let desc = $(e.target).data().desc;
    let id = $(e.target).data().id;
    API.getSets(desc, id);
  });

  $('.set-ul').on('mouseover', 'li', (e) => {
    let thumb = $(e.target).data().thumb;
    setInfo($(e.target).data());
  })
});

function setInfo(data) {
  $('.set-image').css('background-image', `url(${data.thumb})`);
  $('.set-name').html(`${data.descr}`);
  $('.set-pieces').html(`${data.pieces}`);
  $('.set-id').html(`${data.id}`);
  $('.set-year').html(`${data.year}`);
}
