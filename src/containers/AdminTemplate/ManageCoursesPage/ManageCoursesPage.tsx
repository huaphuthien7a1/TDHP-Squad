import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { URL_GET_LEARNING_PATHS } from 'redux/urlAPI';

const ManageCoursesPage = (props: any) => {
  const [newCourse, setNewCourse] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: any) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url: URL_GET_LEARNING_PATHS,
        data: newCourse,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        className='flex flex-col gap-y-3 w-[500px] bg-primary bg-opacity-75 rounded-xl p-6'
        autoComplete='off'
        onSubmit={handleSubmitForm}
      >
        <h2 className='text-white text-3xl text-center font-medium mb-3'>
          Create new course
        </h2>
        <div className='flex flex-col gap-y-3'>
          <input
            type='text'
            name='name'
            id='name'
            className='p-5 w-full border-solid border border-gray-100 rounded-lg'
            placeholder='Enter course name'
            onChange={handleChange}
          />
        </div>
        <textarea
          id='description'
          name='description'
          className='p-5 w-full min-h-[200px] border-solid border border-gray-100 rounded-lg scrollbar-hide'
          placeholder='Enter course description'
          onChange={handleChange}
        ></textarea>
        <button
          type='submit'
          className='p-3 text-lg font-medium rounded-lg text-white bg-blue-400'
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ManageCoursesPage;
