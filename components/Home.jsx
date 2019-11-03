import React from 'react'
import { withRouter } from 'react-router-dom';

const Home = props => console.log('home props: ', props) || (
    <h1 className='heading'>Home Page</h1>
);

export default withRouter(Home);
