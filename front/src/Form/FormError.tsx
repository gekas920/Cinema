import React from 'react'
import './Form.css'


interface IProps {
    text:string
}

interface IState {
}

class FormError extends React.Component<IProps,IState>{
    render() {
        return (
            <div className="form-error">
                {this.props.text}
            </div>
        );
    }
}

export default FormError