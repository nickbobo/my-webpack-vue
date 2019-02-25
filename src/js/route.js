import NavConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        // component: require(`./pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

console.info(route);
route.route.push({
  path: '/',
  component: require('../mint-ui/demo.vue')
});

export const navs = route.navs;
export default route.route;
