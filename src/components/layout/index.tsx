import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router';
import { useState } from 'react';
import React from "react";
import useIsShowHeader from "@/components/hooks/useIsShowHeader"

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import useIsShowMenu from "@/components/hooks/useIsShowMenu";
const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps['items'] = [
  {
    label: '开始考试',
    key: 'exam_select',
    icon: <MailOutlined />,
  },
  {
    label: '考试记录',
    key: 'exam_history',
    icon: <AppstoreOutlined />,
  },
];

const MyLayout: React.FC = ()=> {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [current, setCurrent] = useState('exam_select');
  //导航切换
  const Navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    Navigate(routersData[e.key as RouterKeys].path)
  };
  const is_show_header = useIsShowHeader()
  const is_show_menu = useIsShowMenu()
  if (!is_show_header) {
    return <><Outlet /></>
  }
  return (
      <Layout>
        <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
        >
          <div className="demo-logo" />
          {is_show_menu &&
          <Menu
              theme="dark"
              mode="horizontal"
              onClick={onClick}
              items={items}
              selectedKeys={[current]}
              style={{flex: 1, minWidth: 0}}
          />}
        </Header>
        <Content style={{ padding: '0 48px' }}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
          {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
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