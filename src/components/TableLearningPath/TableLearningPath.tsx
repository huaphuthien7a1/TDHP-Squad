import React, { FC, useState } from 'react';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from 'components/Spinner';
import { Table, Button, Tag, Popconfirm, Space, Spin } from 'antd';

type IProps = {
  isLoading: boolean;
  listLearningPath: any[];
};
const TableLearningPath: FC<IProps> = ({ isLoading, listLearningPath }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState<{ filteredInfo: any; sortedInfo: any }>({
    filteredInfo: null,
    sortedInfo: null,
  });
  const handleChange = (pagination: any, filters: any, sorter: any) => {
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const handleSubmitEdit = (record: any) => {
    // history.push('/team-detail/' + record.id);
  };
  const handleRemoveLearningPath = (record: any) => {
    // actDeleteTeamById(record.id)
    //   .then((res) => {
    //     Swal.fire({
    //       width: '400',
    //       icon: 'success',
    //       title: res.data.message,
    //       showConfirmButton: false,
    //       timer: 2000,
    //       timerProgressBar: true,
    //     });
    //     dispatch(actFetchTeamList());
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       width: '400',
    //       icon: 'error',
    //       title: error.response.data.message,
    //       showConfirmButton: false,
    //       timer: 2500,
    //       timerProgressBar: true,
    //     });
    //   });
  };
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',

      showOnResponse: true,
      showOnDesktop: true,
      sorter: (a: { rating: number }, b: { rating: number }) =>
        a.rating - b.rating,
      sortOrder: sortedInfo.columnKey === 'rating' && sortedInfo.order,
    },
    {
      title: 'IsProCourse',
      dataIndex: 'isProCourse',
      key: 'isProCourse',

      showOnResponse: true,
      showOnDesktop: true,
      render: (text: any, record: any, index: React.Key | null | undefined) => {
        return (
          <div
            className={`rounded-xl p-2 w-1/2 text-center text-white ${
              record.isProCourse ? 'bg-yellow-500' : 'bg-red-500'
            }`}
          >
            {record.isProCourse ? 'Yes' : 'No'}
          </div>
        );
      },
    },
    {
      title: 'Courses',
      dataIndex: 'courses',
      key: 'courses',
      showOnResponse: true,
      showOnDesktop: true,
      ellipsis: true,
      render: (text: any, record: any, index: React.Key | null | undefined) => {
        return (
          <ul>
            {record.courses.map((item: any, index: any) => (
              <li key={index}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  Course {index + 1}: {item.name}
                </a>
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      title: 'Thumnail',
      dataIndex: 'thumnail',
      key: 'thumnail',
      showOnResponse: true,
      showOnDesktop: true,
      render: (
        text: string,
        record: any,
        index: React.Key | null | undefined
      ) => {
        return (
          <img
            className='h-[50px]'
            src={record.thumbnail.url}
            alt={record._id}
          />
        );
      },
    },
    {
      title: 'Rooms',
      dataIndex: 'rooms',
      key: 'rooms',
      showOnResponse: true,
      showOnDesktop: true,
      ellipsis: true,
      render: (text: any, record: any, index: React.Key | null | undefined) => {
        return (
          <ul>
            {record.rooms.map((item: any, index: any) => (
              <li key={index}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  Room {index + 1}: {item.name}
                </a>
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      title: '',
      key: 'action',
      ellipsis: true,
      width: '10%',
      showOnResponse: true,
      showOnDesktop: true,
      fixed: 'right',
      align: 'center',
      render: (text: any, record: any, index: React.Key | null | undefined) => (
        <Space size='middle' key={index}>
          <button
            type='button'
            className='bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-3 rounded inline-flex items-center edit-button'
            onClick={() => handleSubmitEdit(record)}
          >
            <EditFilled />
          </button>
          <Popconfirm
            placement='top'
            title='Are you sure you want to delete this course?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => handleRemoveLearningPath(record)}
          >
            <button
              type='button'
              className='bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-3 rounded inline-flex items-center'
            >
              <DeleteFilled />
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const renderTable = () => {
    if (isLoading) return <Spinner />;
    return (
      <Table
        pagination={{ pageSize: 6, showSizeChanger: false }}
        rowKey={'id'}
        className='m-3 drop-shadow-lg'
        size='middle'
        columns={columns}
        dataSource={listLearningPath}
        onChange={handleChange}
        scroll={{ x: 1100 }}
      />
    );
  };

  return <>{renderTable()}</>;
};
export default TableLearningPath;
