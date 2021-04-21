import React from 'react'
import propTypes from 'prop-types'
import '../styles/chanel.css'

const Chanel = ({Avatar,Name,Descript})=>{
    return (
     <article className="container chanel">
<img src={Avatar} className="avatar"/>
<h3>{Name}</h3>
<p>{Descript}</p>
     </article>
    )
}
Chanel.propTypes = {
    Avatar: propTypes.string.isRequired,
    Name: propTypes.string.isRequired,
    Descript: propTypes.string.isRequired,
  }
  
  export default Chanel