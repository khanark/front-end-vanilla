import { getData } from '../services/movies.js';
import { p } from '../utils/utils.js';

const template = movies => {
  const ul = p('ul', { class: 'list' }, '');
  movies.forEach(m => {
    const li = p(
      'li',
      { class: 'movie' },
      p('div', { class: 'img-wrapper' }, p('img', { src: m.img })),
      p(
        'div',
        { class: 'details-wrapper' },
        p('p', {}, m.title),
        p('а', { href: `/details/${m.id}`, class: 'buttons' }, 'details')
      )
    );
    ul.appendChild(li);
  });
  return ul;
};

export const home = async ctx => {
  const movies = await getData();
  ctx.renderContent(template(movies));
};
