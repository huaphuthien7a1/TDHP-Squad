import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actCloseModal } from 'redux/actions/modal.action';
import IRootState from 'models/IRootState';

const ModalForm = () => {
  const dispatch = useDispatch();
  const { isOpen, ComponentContent } = useSelector(
    (state: IRootState) => state.modalReducer
  );
  const handleClose = () => {
    dispatch(actCloseModal());
  };
  return (
    <Modal
      className='rounded-xl relative'
      visible={isOpen}
      onCancel={handleClose}
      closable={true}
      footer={null}
      destroyOnClose={true}
    >
      {ComponentContent}
    </Modal>
  );
};

export default ModalForm;
