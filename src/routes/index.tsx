import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateLayout />,

    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
      {
        path: 'profile',
        element: <div>Profile</div>,
      },
    ],
  },
]);

export default router;
