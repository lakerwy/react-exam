import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'

import Login from '@/page/login'
import AdminManage from '@/page/admin_manage';
import CorretExam from '@/page/corret_exam';
import CorretExamList from '@/page/corret_exam_list';
import Exam from '@/page/exam';
import ExamHistory from '@/page/exam_history';
import ExamSelect from '@/page/exam_select';
import PersonInfo from '@/page/person_info';
import ReadExam from '@/page/read_exam';
import StudentManage from '@/page/student_manage';
import StudentAdd from '@/page/subject_add';
import SubjectManage from '@/page/subject_manage';
import Layout from "@/components/layout";

export const routersData = [
  {
    path: '/',
    /** 重定向 */
    element: <Navigate replace to="/login" />
  },
  {
    path: '/',
    element: <Layout />,
    children:[
      { // 页面1  登录
        path: '/login',
        name: 'login',
        hasMenu: false,
        element: <Login />
      },
      { //页面12： 管理员管理 （超级管理员）
        path: '/admin_manage',
        name: 'admin_manage',
        hasMenu: true,
        element: <AdminManage />
      },
      { // 页面8： 批改试卷（管理员）
        path: '/corret_exam/:exam_id',
        name: 'corret_exam',
        hasMenu: true,
        element: <CorretExam />
      },
      { // 页面7： 批阅试卷列表（管理员）
        path: '/corret_exam_list',
        name: 'corret_exam_list',
        hasMenu: false,
        element: <CorretExamList />
      },
      { // 页面4： 考试 (学生)
        path: '/exam/:exam_id',
        name: 'exam',
        hasMenu: true,
        element: <Exam />
      },
      { //页面5： 学生考试记录 （学生）
        path: '/exam_history',
        name: 'exam_history',
        hasMenu: true,
        element: <ExamHistory />
      },
      {// 页面3： 考题选择 （学生）
        path: '/exam_select',
        name: 'exam_select',
        hasMenu: true,
        element: <ExamSelect />
      },
      { // 页面2： 个人信息录入（学生 管理员）
        path: '/person_info',
        name: 'person_info',
        hasMenu: false,
        element: <PersonInfo />
      },
      {// 页面6 查看试卷（学生 管理员）
        path: '/read_exam/:exam_id',
        name: 'read_exam',
        hasMenu: true,
        element: <ReadExam />
      },
      { //页面9： 学生管理(管理员)
        path: '/student_manage',
        name: 'student_manage',
        hasMenu: true,
        element: <StudentManage />
      },
      {// 页面11： 考题录入（管理员）
        path: '/subject_add',
        name: 'subject_add',
        hasMenu: true,
        element: <StudentAdd />
      },
      {// 页面10： 课程管理 （管理员）
        path: '/subject_manage',
        name: 'subject_manage',
        hasMenu: true,
        element: <SubjectManage />
      },
    ],
  },
]

type RouteType = {
  /** 是否隐藏菜单布局 */
  hideLayout?: boolean
  /** 在菜单栏是否显示 */
  hideInMenu?: boolean
  /** 权限控制 true 则都控制 */
  permissionObj?: {
    /** 是否进行页面权限控制，控制取后端数据 */
    isPagePermission?: boolean
    /** 判断token是否存在控制 */
    isToken?: boolean
  } & true
  children?: RouteType[]
}  & RouteObject

export const router = createBrowserRouter(routersData)

