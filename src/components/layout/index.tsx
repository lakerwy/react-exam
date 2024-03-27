import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { routersData, RouterKeys } from '@/router';
import { useState } from 'react';
import React from "react";
import useIsShowHeader from "@/components/hooks/useIsShowHeader"
import styles from './index.module.scss'

import { AppstoreOutlined, MailOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar, Space  } from 'antd';
import type { MenuProps } from 'antd';
import useIsShowMenu from "@/components/hooks/useIsShowMenu";
const { Header, Content, Footer } = Layout;



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
      <Layout className={styles.myLayout}>
        <Header className={styles.myLayout_header}
        >
          <img style={{height: '80%'}} src="https://cdn.chinabidding.cn/public/yjsc/img/logo2.png" alt=""/>
          <div className={styles.userInfo}>
            <Space size={16}>
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
                items={items}
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