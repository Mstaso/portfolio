import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
    
      render() {
        const { status } = this.state;
        return (
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xoqpkejl"
            method="POST"
            class="contact-form"
          >
           
           <h3 id="get-in-touch">Get In Touch</h3>
            <input type="text" name="name" placeholder="name" class="name"/>
            <input type="email" name="email" placeholder="email" class="email"/>
        
        
            <input type="text" name="subject" placeholder="subject" class="subject"/>
            <textarea name = "message">
          </textarea>
            {/* <input type="text" name="message" placeholder="message" class="message"/> */}
            
            {status === "SUCCESS" ? <p>Thanks!</p> : <button class="send-btn">Send</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        );
      }
    
      submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    }

export default Form;