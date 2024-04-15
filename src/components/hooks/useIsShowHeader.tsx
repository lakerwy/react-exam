import { useLocation } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router'

/**
 * 判断是否显示头部
 */
function useIsShowHeader(): boolean {
  const location = useLocation();
  return location.pathname !== '/login';
}
export default useIsShowHeader

