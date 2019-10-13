import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './dashboard.scss';
export const Dashboard = ({ jsList }) => (
  <div className='content'>
    {jsList.map((item, index) => (
      <div key={index}>
        <div className='wrapper'>
          <div class='problem'>
            <Link to={`/problem/${item.title}`}>
              <h2 className='title'>{item.title}</h2>
            </Link>
            <p className='summary'>{item.summary}</p>
          </div>
          <div className='author'>
            <img className='avatar' src={item.avatar} />
            <p className='author-info'>
              <span>By </span>
              <a target='_blank' href={item.profile_link}>
                {item.author_name}
              </a>
              <span>{item.timeStamp}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    jsList: state.js
  };
}
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
