import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom'

import Login from '@/page/login'
import Layout from "@/components/layout";
import {routersData} from "@/router"
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



function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Layout />}>
        {/* 路由匹配住/home后，不会再往下匹配 */}
        <Route path={routersData.login.path} element={<Login />}></Route>
        <Route path={routersData.admin_manage.path} element={<AdminManage />}></Route>
        <Route path={routersData.corret_exam.path} element={<CorretExam />}></Route>
        <Route path={routersData.corret_exam_list.path} element={<CorretExamList />}></Route>
        <Route path={routersData.exam.path} element={<Exam />}></Route>
        <Route path={routersData.exam_history.path} element={<ExamHistory />}></Route>
        <Route path={routersData.exam_select.path} element={<ExamSelect />}></Route>
        <Route path={routersData.person_info.path} element={<PersonInfo />}></Route>
        <Route path={routersData.read_exam.path} element={<ReadExam />}></Route>
        <Route path={routersData.student_manage.path} element={<StudentManage />}></Route>
        <Route path={routersData.subject_add.path} element={<StudentAdd />}></Route>
        <Route path={routersData.subject_manage.path} element={<SubjectManage />}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
