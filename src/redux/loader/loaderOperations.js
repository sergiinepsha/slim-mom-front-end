/* eslint-disable import/no-anonymous-default-export */
import loaderActions from './loaderActions';

const loaderStart = async dispatch => dispatch(loaderActions.startLoader());

const loaderEnd = async dispatch => dispatch(loaderActions.endLoader());

export default {
   loaderStart,
   loaderEnd,
};
