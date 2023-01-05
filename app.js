import { home } from './views/home.js';
import { renderNavigation } from './views/navigation.js';

const container = document.querySelector('.main');
const header = document.querySelector('.main-header');

renderNavigation(header);

const paths = {
  '/': home,
  '/details/1231321': () => console.log('You want to add a movie'),
};

const context = {
  redirect: path => {
    paths[path]();
  },
  renderContent: content => {
    container.replaceChildren(content);
  },
};

document.addEventListener('click', e => {
  if (e.target.nodeName !== 'A') {
    return;
  }
  e.preventDefault();
  const url = new URL(e.target.href);
  console.log('clicked');
  const showView = paths[url.pathname];
  showView(context);
});
