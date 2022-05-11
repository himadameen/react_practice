import React, {createRef} from 'react';

class RefClass extends React.Component {
    constructor() {
        super();
        this.inputRef1 = createRef();
        this.inputRef2 = React.createRef();
        this.outRef1 = React.createRef();
    }

    handleSubmit = () => {
        console.log('handle submit trigeered...');
        console.log(this.inputRef1.current.value);
        console.log(this.inputRef2.current.value);
        this.outRef1.current.innerHTML = this.inputRef1.current.value + this.inputRef2.current.value;
        //call api
    }

    render() {
        return(
            <>  
            <br></br>
            
                <h2>Login Form</h2>
                <br></br>
                <input type="text" ref={this.inputRef1}/>
                <br></br>
                <input type="password" ref={this.inputRef2}/>
                <br></br>
                <button onClick={this.handleSubmit}>Login</button>
                <br></br>

                <div ref={this.outRef1}></div>
                <br></br><br></br>
            </>
        )
    }
}

export default RefClass



// Uncontrolled Component
// Controlled Component