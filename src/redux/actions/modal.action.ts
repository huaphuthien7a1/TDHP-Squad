import React from 'react';
import * as ActionType from '../constants';

export const actCloseModal = () => {
  return { type: ActionType.CLOSE_MODAL };
};

export const actOpenModal = (props: { ComponentContent: React.ReactNode }) => {
  return { type: ActionType.OPEN_MODAL, payload: props.ComponentContent };
};
