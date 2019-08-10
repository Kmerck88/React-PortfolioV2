import React, {Component} from 'react';
import {Layout, Header,Navigation,Content,Drawer} from 'react-mdl'

import './styles.css';

class App extends Component {
render() {
  return (
    <div className='demo-big-content'>
    <Layout>
      <Header title="Kevin Merck" scroll>
      <Navigation>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
      </Navigation> 
      </Header>
      <Drawer title='Title'>
      <a href='./'>Link</a>
      <a href='./'>Link</a>
      <a href='./'>Link</a>
      <a href='./'>Link</a>

      </Drawer>
      <Content> 
     

</Content>
    </Layout>
    </div>
  );
}}

export default App;