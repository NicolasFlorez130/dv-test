import { ReactRouter, RootRoute, Route } from '@tanstack/react-router';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

const rootRoute = new RootRoute();

const appLayout = new Route({
   getParentRoute: () => rootRoute,
   id: 'app-layout',
   component: AppLayout,
});

const homeRoute = new Route({
   getParentRoute: () => rootRoute,
   path: '/dv-test',
   component: Home,
});

const profileRoute = new Route({
   getParentRoute: () => rootRoute,
   path: '/dv-test/$username',
   component: Profile,
});

const routeTree = rootRoute.addChildren([appLayout.addChildren([profileRoute, homeRoute])]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
   interface Register {
      router: typeof router;
   }
}
