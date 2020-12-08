import React from 'react'

class Form extends React.Component {

    sendHandler = (e) => {
        e.preventDefault()
        

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    state = {
        email:"", 
        name:"",
        subject:"",
        message:"",
    }

    render() {
        return (
            
            <form action="https://formspree.io/f/xoqpkejl"
            method="POST" class="form"
            >
                <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>

                <label>
                    email
                    <input value={this.state.email} onChange={this.changeHandler} name="email" type="email" class="email"></input>
                </label>
                <label>
                    name
                    <input value={this.state.name} onChange={this.changeHandler} name="name" type="text" class="name"></input>
                </label>
                <label>
                    subject
                    <input value={this.state.subject} onChange={this.changeHandler} name="subject" type="text" class="subject"/>
                    <label>
                        Message
                        <input value={this.state.message} onChange={this.changeHandler} name="message" type="text" class="subject"/>
                    </label>
                    <button onClick={this.sendHandler}type="submit">Send</button>
                </label>
               
                {/* <div class ="form-item">
                    <input type="text" class="form-input"
                    placeholder="first name" 
                    aria-label="first name">
                    </input>
                </div>

                <div class ="form-item">
                    <input type="email" class="form-input"
                    placeholder="email" 
                    aria-label="email">
                    </input>
                </div>
               

                <div class ="form-item">
                    <input type="text" class="form-input"
                    placeholder="subject" 
                    aria-label="subject">
                    </input>
                </div> 

                <button class="form-button"
                type="submit"> signup </button> */}

            </form>
            
            
        )
    }

}

export default Form;