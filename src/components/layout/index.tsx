import { useNavigate, Outlet } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router';
import { useState, useEffect } from 'react';
import React from "react";
import useIsShowHeader from "@/components/hooks/useIsShowHeader"
import styles from './index.module.scss'
import { useLocation   } from "react-router-dom";
import {getMenuData, Iconfont, MenuDataKey, getMenuData2} from '@/test_data/test.ts'

import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Space , Button } from 'antd';
import type { MenuProps,ButtonProps } from 'antd';
import useIsShowMenu from "@/components/hooks/useIsShowMenu";
const { Header, Content, Footer } = Layout;

const MyLayout: React.FC = ()=> {
  const match = useLocation ();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [current, setCurrent] = useState<string>('exam_select');
  const [menuItems, setMenuItems] = useState<MenuDataKey[]>([]);

  //导航切换
  const Navigate = useNavigate()

  useEffect(() => {
    toggleClick2(getMenuData)
  }, [])

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    Navigate(routersData[e.key as RouterKeys].path)
  };
  const toggleClick: ButtonProps['onClick'] = (e)=>{
    toggleClick2(getMenuData2)
  }
  function toggleClick2(arrData: MenuDataKey[]){
    const menuData = arrData.map((item:MenuDataKey)=> ({
      ...item,
      icon: Iconfont(item.icon as string)
    }))
    setMenuItems(()=>menuData)
    setCurrent(menuData[0].key as string);
  }
  const is_show_header = useIsShowHeader()
  const is_show_menu = useIsShowMenu()
  if (!is_show_header) {
    return <><Outlet /></>
  }
  console.log(match)
  return (
      <Layout className={styles.myLayout}>
        <Header className={styles.myLayout_header}
        >
          <img style={{height: '80%'}} src="https://cdn.chinabidding.cn/public/yjsc/img/logo2.png" alt=""/>
          <div className={styles.userInfo}>
            <Space size={16}>
              <Button onClick={toggleClick}>切换管理员</Button>
              <Avatar style={{backgroundColor: '#F2F4F7', color: '#9FA3A7'}} icon={<BellOutlined />} />
              <Avatar style={{marginRight: 10, color: '#1880FF', backgroundColor: '#F2F4F7'}} icon={<UserOutlined />} />
            </Space>
            <span>赵天一</span>
          </div>
        </Header>
        <Content className={styles.myLayout_content}>
          <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                paddingTop: 0
              }}
          >
            {is_show_menu &&
            <Menu
                mode="horizontal"
                onClick={onClick}
                items={menuItems as MenuProps['items']}
                selectedKeys={[current]}
                style={{flex: 1, minWidth: 0}}
            />}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
  );
};

export default MyLayout;