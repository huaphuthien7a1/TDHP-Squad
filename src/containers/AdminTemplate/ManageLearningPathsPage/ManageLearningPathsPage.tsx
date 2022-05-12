import { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import IRootState from 'models/IRootState';
import ModalForm from 'HOC/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import TableLearningPath from 'components/TableLearningPath';
import { actOpenModal } from 'redux/actions/modal.action';
import CreateLearningPathForm from 'components/CreateLearningPathForm';
import { actFetchLearningPaths } from 'redux/actions/learningPath.action';

const ManageLearningPathsPage: FC = () => {
  const dispatch = useDispatch();
  const [learningPaths, setLearningPaths] = useState([]);
  const { isLoading, listLearningPath } = useSelector(
    (state: IRootState) => state.learningPathReducer
  );
  useEffect(() => {
    dispatch(actFetchLearningPaths() as any);
  }, []);
  useEffect(() => {
    setLearningPaths(listLearningPath);
  }, [listLearningPath]);
  const handleCreateLearningPath = () => {
    dispatch(actOpenModal({ ComponentContent: <CreateLearningPathForm /> }));
  };
  return (
    <>
      <Button onClick={handleCreateLearningPath} type='primary' className='m-3'>
        Create learning path
      </Button>
      <TableLearningPath
        listLearningPath={listLearningPath}
        isLoading={isLoading}
      />
      <ModalForm />
    </>
  );
};

export default ManageLearningPathsPage;
