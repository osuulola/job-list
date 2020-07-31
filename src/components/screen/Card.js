import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
   
    return (
        <div className='card1 row my-4 '>
            
            <div className= 'col-12 col-md-2'>
                <img src ={props.job.logo} alt={props.job.company}/>
            </div>
            <div className= 'col-12 col-md-4'>
                <div className='row'> 
                    <h3>{props.job.company}</h3>
                    {props.job.new && <span className='badge badge-primary mx-3'>NEW!</span>}
                    {props.job.featured && <span className='badge badge-dark'>FEATURED</span>}
                </div> 
                <div><Link to={{pathname:`/details/${props.job.id}`, state: {job:props.job} }}>{props.job.position}</Link></div>
                <div className='row'>
                    <p className='mx-3'>{props.job.postedAt}</p>
                    &#x2022;
                    <p className='mx-3'>{props.job.contract}</p>
                    &#x2022;
                    <p className='mx-3'>{props.job.location}</p>
                </div>
            </div>
            <div className= 'col-12 col-md-6 d-flex justify-content-end'>
                <span className='badge badge-primary mx-2'>{props.job.role}</span>
                <span className='badge badge-primary mx-2'>{props.job.level}</span>
                {props.job.languages.map(i=><span key ={i} className='badge badge-primary mx-2'>{i}</span>)}
                {props.job.tools.map(i=><span key ={i} className='badge badge-primary mx-2'>{i}</span>)}
            </div>
        </div>
    )
}

export default Card
