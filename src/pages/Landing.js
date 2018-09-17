import React from 'react'
import './Landing.css'


class Landing extends React.Component {

  render(){
    return (
      <div className="landing-grid">
        <div className="welcome">
          <h1>Hi, I'm Kate</h1>
          <h1>I'm a <span>full-stack web developer</span>.</h1>
        </div>
        <div className="skills">
          <section className="html"><span className="html-span">html</span></section>
          <section className="css">css</section>
          <section className="ruby">ruby</section>
          <section className="js">js</section>
          <section className="node">node</section>
          <section className="react">react</section>
        </div>

      </div>
    )
  }
}


export default Landing