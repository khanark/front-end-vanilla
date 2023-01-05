import { p } from '../utils/utils.js';

export const renderNavigation = container => {
  const nav = p(
    'nav',
    { class: 'main-nav' },
    p(
      'ul',
      {},
      p('li', {}, p('a', { href: '/' }, 'Home')),
      p(
        'div',
        { class: 'right-nav' },
        p('li', {}, p('a', { href: '/add-movie' }, 'Add Movie')),
        p('li', {}, p('a', { href: '/login' }, 'Login')),
        p('li', {}, p('a', { href: '/register' }, 'Register'))
      )
    )
  );
  const heading = p('h1', { class: 'heading' }, 'Movies');
  container.appendChild(nav);
  container.appendChild(heading);
};
