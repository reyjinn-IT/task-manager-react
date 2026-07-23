import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function PrivateRoute({ children }: { children: ReactNode }) {
    const isAuthenticated = !!localStorage.getItem('user');
    const location = useLocation();

    return isAuthenticated ? (
    children
    ) : (
    <Navigate to="/login" state={{ from: location }} replace />
    );
}
