import React from 'react';
import { connect } from 'react-redux';
console.log('hey');
const ProblemDetail = ({ title, info, summary }) => (
  <div class='problem-detail'>
    <h2 className='title'>{title}</h2>
    <p className='summary'>{summary}</p>
  </div>
);
const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  let title = ownProps.match.params.id;
  return { ...state, title };
};
export const ConnectedProblemDetail = connect(mapStateToProps)(ProblemDetail);
