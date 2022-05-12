import { FC, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { ICourseState } from 'models/ICourseState';
import { useDispatch, useSelector } from 'react-redux';
import { actCloseModal } from 'redux/actions/modal.action';
import { actCreateCourse, actFetchCourses } from 'redux/actions/course.action';
import { serialize } from 'object-to-formdata';
import Swal from 'sweetalert2';
import { Spin } from 'antd';
import IRootState from 'models/IRootState';
const options = {
  indices: false,
  nullsAsUndefineds: false,
  booleansAsIntegers: false,
  allowEmptyArrays: false,
  noFilesWithArrayNotation: false,
  dotsForObjectNotation: false,
};
const CreateCourseForm: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.courseReducer.isLoading
  );
  const [values, setValues] = useState<ICourseState>({
    name: '',
    description: '',
    thumb: '',
    videos: '',
    pdf: '',
  });
  const [newImageURL, setNewImageURL] = useState<string>('');
  useEffect(() => {
    return () => {
      newImageURL && URL.revokeObjectURL(newImageURL);
    };
  }, [newImageURL]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const handleChangeFile = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setValues({
      ...values,
      thumb: file,
    });
    setNewImageURL(URL.createObjectURL(file));
  };
  const handleChangeVideos = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setValues({
      ...values,
      videos: file,
    });
  };
  const handleChangePdf = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    setValues({
      ...values,
      pdf: file,
    });
  };

  const handleSubmit = () => {
    console.log(values);
    const form_data = serialize(values);

    console.log(form_data.getAll);
    dispatch(actCreateCourse(form_data) as any);
  };
  return (
    <>
      {isLoading && (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white/75 z-50'>
          <Spin size='large' />
        </div>
      )}
      <h1 className='text-3xl mt-4 font-bold'>Create course</h1>

      <label htmlFor='name' className='block py-1'>
        Name
      </label>
      <Input
        value={values.name}
        name='name'
        id='name'
        onChange={handleInputChange}
        className='py-3'
      />

      <label htmlFor='description' className='block py-1'>
        Description
      </label>
      <Input
        value={values.description}
        name='description'
        id='description'
        onChange={handleInputChange}
      />
      <label htmlFor='thumb' className='block py-1'>
        Thumbnail
      </label>
      <input
        className='block'
        name='thumb'
        type='file'
        onChange={handleChangeFile}
      />
      {newImageURL && (
        <img
          src={newImageURL}
          alt='Image'
          width='100px'
          className='block py-1'
        />
      )}

      <label htmlFor='videos' className='block py-1'>
        Video
      </label>
      <input
        className='block'
        name='videos'
        type='file'
        onChange={handleChangeVideos}
      />

      <label htmlFor='pdf' className='block py-1'>
        PDF
      </label>
      <input
        className='block mb-3'
        name='pdf'
        type='file'
        onChange={handleChangePdf}
      />
      <hr />
      <Button className='my-3 block' type='primary' onClick={handleSubmit}>
        SUBMIT
      </Button>
    </>
  );
};

export default CreateCourseForm;
