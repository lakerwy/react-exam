import { useLocation } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router'

function useIsShowHeader() {
  const location = useLocation()
  if(location.pathname === '/login') {
    return false
  } else {
    return true
  }
}
export default useIsShowHeader

