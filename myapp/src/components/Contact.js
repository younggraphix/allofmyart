import React, { Component } from 'react';
import Popup from './Popup';

class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showError: false,
      formSubmitted: false
    }
    this.throwFormError = this.throwFormError.bind(this)
  }

  validateForm = () => {
    var self = this;

    return function(e) {
      let array = document.querySelectorAll('.personal-info div input')
      let hasError = false

      array.forEach(element => {
        if(element.value < 1) {
          self.throwFormError(element)
          hasError = true
        }
      });
      if(hasError === false) {
        self.submitForm()
      }
    }
  }

  throwFormError = (element) => {
    let offendingInput = element.parentElement.children[0].innerText

    alert('Please fill out ' + offendingInput)
  }

  submitForm = () => {
    this.setState({
      formSubmitted: true
    })
    this.redirectHome();
  }

  redirectHome = () => {
    setTimeout(function() {
      window.location = '/home'
    }, 2000)
  }

  render() {

    return (
        <div className="contact">
            <form>
                <fieldset className="personal-info">
                    <legend>Personal Info</legend>
                    <div>
                      <label>First Name</label>
                      <input type="text"/>
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input type="text"/>
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    </div>
                    <div>
                      <label>Phone</label>
                      <input type="tel"/>
                    </div>
                      <input type="hidden" name="" value=""/>
                      <input type="hidden" name="" value=""/>
                </fieldset>
                <fieldset>
                    <legend>Request</legend>
                    <div>
                      <label>What is your project?</label>
                      <textarea type="text"/>
                    </div>
                    <div className="radios">
                      <label>Does it involve site creation?</label>
                      <label>yes</label>
                      <input type="radio" name="site-creation-yes" value="yes" />
                      <label>no</label>
                      <input type="radio" name="site-creation-no" value="no" />
                    </div>
                    <div className="radios animation">
                      <label>Does it require animation?</label>
                      <label>yes</label>
                      <input type="radio" name="site-creation-yes" value="yes" />
                      <label>no</label>
                      <input type="radio" name="site-creation-no" value="no" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Inspiration</legend>
                    <div>
                      <label>What other brands inspire you?</label>
                      <textarea type="text"/>
                    </div>
                    <div>
                      <label>Where did you hear about me?</label>
                      <select name="" id="">
                          <option value="friend">a friend</option>
                          <option value="instagram">instagram</option>
                          <option value="other">other</option>
                      </select>
                    </div>
                </fieldset>
            </form>
            <button onClick={this.validateForm()}>Send Request</button>
            { this.state.formSubmitted ? <Popup /> : '' }
        </div>
    )
  }
}

export default Contact;