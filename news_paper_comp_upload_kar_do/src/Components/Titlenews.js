import React from 'react'


// export class Titlenews extends Component {
//   render() {


const Titlenews =(props)=>{ 
  // let {title , description , imageurl , newsurl , author , updatetime , source} = this.props ;  // class based me this aata ahi 
  let {title , description , imageurl , newsurl , author , updatetime , source} = props ; 

    // let Adate = new Date(updatetime); // this is iso string
    // isse tum Adate.gethr , getsecond , getdate sab kar sakte ho 
    //but hum isko standard me change kar denge
   
    return (
      <div>
        <div className="card" style={{backgroundColor:"#1a2021" , color:"white"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <span className="position-absolute top-0  translate-middle badge  text-bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}<span className="visually-hidden"></span></span>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p style={{color:"#d1d0cd"}} className="card-text"><small >By:{author?author:"Unknown"} , Updated At:{new Date(updatetime).toGMTString()}</small></p>
                <a rel='noreferrer' href={newsurl} target='_blank'  className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }


export default Titlenews; //   dono me hota hia 



// target='_blank' karne se new tab me khul jata hai 