import React from 'react';
import { connect } from 'react-redux';
console.log('hey');
const ProblemDetail = ({ itemObj }) => (
  <div className='problem-detail'>
    <h2 className='title'>{itemObj.title}</h2>
    <p className='summary'>{itemObj.details}</p>
  </div>
);
const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);

  let id = ownProps.match.params.id;
  let itemObj = {};
  state.js.forEach(item => {
    if (item.id == id) {
      console.log({ item });
      itemObj = item;
    }
  });
  console.log({ itemObj });
  return { ...state, itemObj };
};
export const ConnectedProblemDetail = connect(mapStateToProps)(ProblemDetail);
