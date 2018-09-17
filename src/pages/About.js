import React from 'react'
import './About.css'

export default function About (){

  const tab = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div className="kateObject">
        <p>{"const kate = {" }</p>
        <p>{tab}{"from: 'San Francisco'," }</p>
        <p>{tab}{"livesIn: 'Melbourne'," }</p>
        <p>{tab}{"favoriteProgrammingLanguage: 'Javascript'," }</p>
        <p>{tab}{"values: [" }</p>
        <p>{tab}{tab}{"'creativity','learning', 'family',"}</p>
        <p>{tab}{tab}{"'spreading happiness'"}</p>
        <p>{tab}{"]" }</p>
        <p>{tab}{"hobbies: [" }</p>
        <p>{tab}{tab}{"'ukulele','drone photography',"}</p>
        <p>{tab}{tab}{"'walking/hiking', 'board games'"}</p>
        <p>{tab}{"]" }</p>
        <p>{tab}{"lovesCats: true," }</p>
        <p>{tab}{"volunteersWith:"} <a href="https://www.cheltenhamcatrescue.org.au/" target="_blank">'cheltenham cat rescue'</a></p>
        <p>{"}"}</p>
      </div>
    </div>
  )
}