import Aboutus from './containers/Aboutus';
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Thanks from './containers/Thanks'

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
        name: "Thanks",
        path: "/thanks",
        exact: true,
        component: Thanks,
        restricted: true,
    },
    {
        name: "Aboutus",
        path: "/aboutus",
        exact: true,
        component: Aboutus,
        restricted: true,
    },
];