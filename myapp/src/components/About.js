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
      </div>
    )
  }
}

export default About
