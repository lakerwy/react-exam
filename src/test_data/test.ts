import { AppstoreOutlined, MailOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import React, {ReactElement} from "react";


const Icons:any = {AppstoreOutlined, MailOutlined, UserOutlined, BellOutlined}

export type MenuDataKey =  {
  label?: string,
  key?: string,
  icon?: string | ReactElement | null
}

export const Iconfont = (icon?:string):(ReactElement | null) => {
  //这里传入的props是一个对象，里面有icon属性，值是antd图标的名字
  if (typeof icon === 'string') return React.createElement(Icons[icon])
  return null;
}

export const getMenuData:MenuDataKey[] = [
  {
    label: '开始考试',
    key: 'exam_select',
    icon: 'MailOutlined',
  },
  {
    label: '考试记录',
    key: 'exam_history',
    icon: 'AppstoreOutlined',
  },
]

export const getMenuData2:MenuDataKey[] = [{
  label: '阅卷列表',
  key: 'corret_exam_list',
  icon: 'AppstoreOutlined',
}, {
  label: '考题管理',
  key: 'subject_add',
}, {
  label: '课程管理',
  key: 'subject_manage',
}, {
  label: '学员管理',
  key: 'student_manage',
}, {
  label: '管理员管理',
  key: 'admin_manage',
}]

