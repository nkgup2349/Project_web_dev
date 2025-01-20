import React, { Component } from 'react'
import loading from './load1.gif'


// class based . kuch nahi hai bas rce likh ke enter to class based components
// export class Load extends Component {
//   render() {
const Load =()=>{
  
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default Load // dono me hona chahiye , matlab class aur functin dono me 
