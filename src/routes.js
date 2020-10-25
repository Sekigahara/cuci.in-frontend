import Dashboard from './containers/Dashboard'
import Login from './containers/Login'

export const APP_ROUTE = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Dashboard,
        restricted: false,
    },
    {
        name: "Login",
        path: "/login",
        exact: true,
        component: Login,
        restricted: true,
    },
];