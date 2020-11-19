import Aboutus from './containers/Aboutus';
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Thanks from './containers/Thanks'
import ApplyPartnership from './containers/ApplyPartnership'
import Fitur from './containers/Fitur'
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
        name: "Thanks",
        path: "/thanks",
        exact: true,
        component: Thanks,
        private: true,
    },
    {
        name: "Aboutus",
        path: "/aboutus",
        exact: true,
        component: Aboutus,
        restricted: false,
    },
    {
        name: "ApplyPartnership",
        path: "/applypartnership",
        exact: true,
        component: ApplyPartnership,
        private: true,
    },
    {
        name: "Fitur",
        path: "/fitur",
        exact:true,
        component: Fitur,
        restricted: false,
    },
    {
        name: "Register",
        path: "/register",
        exact: true,
        component: Register,
        restricted: true,
    }
];