import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const ProtectedRoute = ({ allowedRole }) => {
  const { auth } = useAuth()

  if (!auth) return <Navigate to="/login" replace />
  if (auth.role !== allowedRole) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
