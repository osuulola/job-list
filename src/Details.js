import React from 'react';
import {Link} from 'react-router-dom';

function Details(props) {
    
    const job =  props.location.state.job;
    
    
    return (
        <div className='container card1 my-4 text-center'>
            <Link to={{pathname:'/dashboard'}}>Back</Link>
            
        <div className= 'col-12'>
            <img src ={job.logo} alt={job.company}/>
        </div>
        <div className= 'col-12'>
            <div> 
                <h3>{job.company}</h3>
                {job.new && <span className='badge badge-primary mx-3'>NEW!</span>}
                {job.featured && <span className='badge badge-dark'>FEATURED</span>}
            </div> 
            <div>{job.position}</div>
            <div>
                <p className='mx-3'>{job.postedAt}</p>             
                <p className='mx-3'>{job.contract}</p>             
                <p className='mx-3'>{job.location}</p>
            </div>
        </div>
        <div className= 'col-12'>
            <span className='badge badge-primary mx-2'>{job.role}</span>
            <span className='badge badge-primary mx-2'>{job.level}</span>
            {job.languages.map(i=><span key ={i} className='badge badge-primary mx-2'>{i}</span>)}
            {job.tools.map(i=><span key ={i} className='badge badge-primary mx-2'>{i}</span>)}
        </div>
    </div>
    )
}

export default Details
