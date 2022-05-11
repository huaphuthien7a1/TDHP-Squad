import React, { useState, useEffect } from 'react';
import ModalForm from 'HOC/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/Spinner';
import IRootState from 'models/IRootState';
import { actFetchCourses } from 'redux/actions/course.action';
import { Button } from 'antd';
import TableCourses from 'components/TableCourses';
import { actOpenModal } from 'redux/actions/modal.action';
import CreateCourseForm from 'components/CreateCourseForm';
const ManageCoursesPage = (props: any) => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const { isLoading, listCourse } = useSelector(
    (state: IRootState) => state.courseReducer
  );

  useEffect(() => {
    dispatch(actFetchCourses() as any);
  }, []);

  useEffect(() => {
    setCourses(listCourse);
  }, [listCourse]);

  const handleCreateCourse = () => {
    dispatch(actOpenModal({ ComponentContent: <CreateCourseForm /> }) as any);
  };

  return (
    <>
      <Button onClick={handleCreateCourse} type='primary' className='m-3'>
        Create course
      </Button>
      <TableCourses listCourse={listCourse} isLoading={isLoading} />
      <ModalForm />
    </>
  );
};

export default ManageCoursesPage;
