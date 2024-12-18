
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../components/singup/singup';

interface PrivateRouteProps {
    children: React.ReactNode;
  }


const  RouterGuard: React.FC<PrivateRouteProps>   = ({children})=>{
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
  
    return user ? <>{children}</> : <Navigate to="/login" />;
}
export default RouterGuard