import { createBrowserRouter, redirect } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import App from '../App';

// Función para verificar la autenticación
const checkAuth = () => {
  // Simulación: en una app real, esto podría ser una llamada a una API
  const token = localStorage.getItem('jwt');
  if (!token) {
    // Si no hay token, redirige al login
    throw redirect('/');
  }
  return token;
};

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
    loader: checkAuth,
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
