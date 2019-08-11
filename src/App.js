import React, {Component} from 'react';
import {Layout, Header,Navigation,Content,Drawer} from 'react-mdl'
import Main from './Components/main'
import './styles.css';

class App extends Component {
render() {
  return (
    <div className='demo-big-content'>
    <Layout>
      <Header title="Kevin Merck" scroll>
      <Navigation>
      <a href='/'>Home </a>
      <a href='/'>Projects</a>
      <a href='/'>About me</a>
      <a href='./contact.js'>Contact</a>
      </Navigation> 
      </Header>
      <Drawer title='Title'>
      <a href='./'>Link</a>
      <a href='./'>Link</a>
      <a href='./'>Link</a>
      <a href='./'>Link</a>

      </Drawer>
      <Content> 
     <div className='page-content' / > 
     <Main /> 

</Content>
    </Layout>
    </div>
  );
}}

export default App;