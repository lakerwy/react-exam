import { useLocation } from 'react-router-dom';
import type {RouterKeys} from '@/router'
import { routersData } from '@/router'
function useIsShowMenu() {
  const location = useLocation()
  console.log('location', location)
  const key: RouterKeys = location.pathname.split('/')[1] as RouterKeys
  if(!key) {
    return false
  }
  if(routersData[key].hasMenu) {
    return true
  } else {
    return false
  }
}
export default useIsShowMenu;