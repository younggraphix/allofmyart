import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <ul>
          I love three things:
          <li>Art</li>
          <li>Music</li>
          <li>Food</li>
        </ul>
        <ul>
          I love three things:
          <li>Art</li>
          <li>Music</li>
          <li>Food</li>
        </ul>
        <dl>
          <dt>Art</dt>
          <dd>The expression of human creative skill and imagination,</dd>
          <dt>Music</dt>
          <dd>
            Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and
            expression of emotion.
          </dd>
          <dt>Food</dt>
          <dd>
            Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life
            and growth.
          </dd>
        </dl>
        <a href='https://instagram.com/pixelvoyager/'>My Instagram</a>
        <h3>A Designer I Admire:</h3>
        <iframe width="560" maxWidth="100%" height="315" src="https://www.youtube.com/embed/zOPA0NaeTBk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h3>A Song I Wrote</h3>
        <audio controls>
          <source src="/sample_audio.ogg" type="audio/ogg" />
          <source src="/sample_audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
      </div>
    )
  }
}

export default About
