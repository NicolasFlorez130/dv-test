import { ReactRouter, RootRoute, Route } from '@tanstack/react-router';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

const rootRoute = new RootRoute();

const homeRoute = new Route({
   getParentRoute: () => rootRoute,
   path: '/',
   component: Home,
});

const profileRoute = new Route({
   getParentRoute: () => rootRoute,
   path: '/$username',
   component: Profile,
});

const routeTree = rootRoute.addChildren([homeRoute, profileRoute]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
   interface Register {
      router: typeof router;
   }
}
