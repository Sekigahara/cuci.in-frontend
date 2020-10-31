import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Register from './containers/Register'

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
    {
        name: "Register",
        path: "/Register",
        exact: true,
        component: Register,
        restricted: true,
    },
];