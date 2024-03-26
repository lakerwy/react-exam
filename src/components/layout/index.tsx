import { Outlet } from 'react-router-dom';
import Header from "@/components/header";

function Layout(){
  return (
      <div className="layout">
        <div className='header_wrap'>
          <Header />
        </div>
        <div className='nav_wrap'>
          nav_wrap
        </div>
        <div className='outlet_wrap'>
          <Outlet />
        </div>
      </div>
  )
}
export default Layout;