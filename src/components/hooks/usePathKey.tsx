import { useLocation } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router'
function usePathKey() {
  const location = useLocation()
  const key: RouterKeys = location.pathname.split('/')[1] as RouterKeys
  return key
}
export default usePathKey