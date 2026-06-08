import {Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar';
const Layout = () => {
  return (
    <div className="layout-container">
     <Sidebar/>
    <Outlet />
    </div>
  )
}
export default Layout