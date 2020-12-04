import React from 'react'

class Form extends React.Component {

    render() {
        return (
            <form action="#" class="form">
                <div class ="form-item">
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

                <button class="form-button"
                type="submit"> signup </button>

            </form>
        )
    }

}

export default Form;