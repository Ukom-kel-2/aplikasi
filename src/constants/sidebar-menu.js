import DashboardIcon from '../assets/icons/dashboard.svg';
import ProductIcon from '../assets/icons/product.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import UserIcon from '../assets/icons/user.svg';
import Done from '../assets/images/histori.png';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/admin/dashboard',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/admin/orders',
        title: 'Orders',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/admin/products',
        title: 'Products',
    },
    {
        id: 4,
        icon: Done,
        path :'/admin/history',
        title :'History',

    },
    {
        id: 5,
        icon: UserIcon,
        path: '/admin/admin',
        title: 'My account',
    },

]

export default sidebar_menu;