import React, { useState, FC } from 'react';
import { Table, Button, Tag, Popconfirm, Space, Spin } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actFetchCourses } from 'redux/actions/course.action';
import Swal from 'sweetalert2';
import { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import Spinner from 'components/Spinner';
type IProps = {
  isLoading: boolean;
  listCourse: any[];
};

const TableCourses: FC<IProps> = ({ isLoading, listCourse }) => {
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

  const handleRemoveCourse = (record: any) => {
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
      title: '_id',
      dataIndex: '_id',
      key: '_id',
      sorter: (item1: { _id: any }, item2: { _id: any }) =>
        item1._id.localeCompare(item2._id),
      sortOrder: sortedInfo.columnKey === '_id' && sortedInfo.order,
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: 'Views',
      dataIndex: 'views',
      key: 'views',
      showOnResponse: true,
      showOnDesktop: true,
      ellipsis: true,
      sorter: (a: { views: number }, b: { views: number }) => a.views - b.views,
      sortOrder: sortedInfo.columnKey === 'views' && sortedInfo.order,
    },

    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      showOnResponse: true,
      showOnDesktop: true,
      ellipsis: true,
      sorter: (a: { rating: number }, b: { rating: number }) =>
        a.rating - b.rating,
      sortOrder: sortedInfo.columnKey === 'rating' && sortedInfo.order,
    },
    {
      title: 'Videos',
      dataIndex: 'videos',
      key: 'videos',
      showOnResponse: true,
      showOnDesktop: true,
      ellipsis: true,
      render: (text: any, record: any, index: React.Key | null | undefined) => {
        return (
          <ul>
            {record.videos.map((item: any, index: any) => (
              <li key={index}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  Link video {index + 1}
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
      title: 'PDF',
      dataIndex: 'pdf',
      key: 'pdf',
      showOnResponse: true,
      showOnDesktop: true,
      render: (
        text: string,
        record: any,
        index: React.Key | null | undefined
      ) => {
        return <div>{record.pdf.url}</div>;
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
            onConfirm={() => handleRemoveCourse(record)}
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
        dataSource={listCourse}
        onChange={handleChange}
        scroll={{ x: 1100 }}
      />
    );
  };

  return <>{renderTable()}</>;
};

export default TableCourses;
