import React, { Component} from 'react'; 
import {Grid, Cell} from 'react-mdl'

class Landing extends Component { 
render(){ 
  return (
<div style={{width: '100%', margin: 'auto'}}>
  <Grid className='Landing-grid'> 
  <Cell col={12}>
  <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92jnME9n0sQlQigp-21xiervX3C9PBuQJeMxgmusXxag3Hgf3"
  alt=""
  className="avatar-img" 
  />
  <div className='banner-text'> 
  <h1>Full Stack Web Development </h1>
  </div>
</Cell>
  </Grid>
  </div>
)
}}

export default Landing;