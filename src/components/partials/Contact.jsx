import React from 'react';
import SweetAlert from 'sweetalert-react';
import axios from 'axios';
import { apiBaseURL } from '../../../environment';

export class Contact extends React.Component {
  state = {
    messageDetails: {
      name: '',
      subject: '',
      email: '',
      message: ''
    },
    errors: null,
    isLoading: false,
    showSweetAlert: false,
    isSuccess: false,
    sweetAlertMessage: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    axios.post(`${apiBaseURL}/api/message`, this.state.messageDetails)
      .then((response) => {
        const message = `Hi ${response.data.name}! Your message has been delivered. I will get back to you as soon as possible. Thanks for reaching out.`;
        this.setState({
          isSuccess: true, isLoading: false, showSweetAlert: true, sweetAlertMessage: message
        });
      })
      .catch((error) => {
        if (error && typeof error.response.data === 'string') {
          const message = 'Something went wrong. Please try again.';
          this.setState({
            isSuccess: false, showSweetAlert: true, isLoading: false, sweetAlertMessage: message
          });
          return;
        }

        this.setState({ isLoading: false, errors: error.response.data });
      });
  }

  handleChange = (event) => {
    const { messageDetails } = this.state;
    messageDetails[event.target.name] = event.target.value;
    this.setState({ messageDetails });
  }

  render() {
    const {
      errors, isLoading, showSweetAlert, isSuccess, sweetAlertMessage
    } = this.state;
    return (
      <div id="contact" className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Get in Touch</span>
            <h2 className="colorlib-heading">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-mail"></i>
              </div>
              <div className="colorlib-text">
                <p><a href="#">contact@jimohhadi.com</a></p>
              </div>
            </div>

            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-map"></i>
              </div>
              <div className="colorlib-text">
                <p>15 Oyedele Street, Ikotun, Alimosho, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="colorlib-text">
                <p><a href="tel://">+2348163041269</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-md-push-1">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                   data-animate-effect="fadeInRight">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      value={this.state.messageDetails.name}
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"/>
                    {
                      errors && errors.validationError
                        ? <span className="help-block text-danger text-error">{errors.validationError.name} </span> : null
                    }
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      value={this.state.messageDetails.email}
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"/>
                    {
                      errors && errors.validationError
                        ? <span className="help-block text-danger text-error">{errors.validationError.email} </span> : null
                    }
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      value={this.state.messageDetails.subject}
                      name="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"/>
                    {
                      errors && errors.validationError
                        ? <span className="help-block text-danger text-error">{errors.validationError.subject} </span> : null
                    }
                  </div>
                  <div className="form-group">
                        <textarea
                          onChange={this.handleChange}
                          value={this.state.messageDetails.message}
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          className="form-control"
                          placeholder="Message"></textarea>
                    {
                      errors && errors.validationError
                        ? <span className="help-block text-danger text-error">{errors.validationError.message} </span> : null
                    }
                  </div>
                  <div className="form-group">
                    <input disabled={isLoading} type="submit" className="btn btn-primary btn-send-message" value="Send Message"/>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <SweetAlert
          show={showSweetAlert}
          title={isSuccess ? 'Message Delivered!' : 'Error!'}
          text={sweetAlertMessage}
          confirmButtonColor={isSuccess ? 'green' : 'red'}
          onConfirm={() => {
            this.setState({
              messageDetails: {
                name: '',
                subject: '',
                email: '',
                message: ''
              },
              errors: null,
              isLoading: false,
              showSweetAlert: false,
              isSuccess: false,
              sweetAlertMessage: '',
            });
          }}
        />
      </div>
    );
  }
}
