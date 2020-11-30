import React from 'react'
import './title.css'

function Title({titles}) {
       
    return (
      <section className="title">
        <h2>{titles}</h2>
      </section>
    );
}

export default Title;