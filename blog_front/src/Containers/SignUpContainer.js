import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from 'Components/SignUp';
import * as LoginActions from 'Store/modules/Login';

class SignUpContainer extends Component {
    componentDidMount() {
        console.log(LoginActions.handleChange);
    }
    onClick = (input) => {
        console.log(input)
    }
    render() {
        const { onClick } = this;
        const { input, LoginActions } = this.props;
        return (
            <div>
                <SignUp input={input} onClick={onClick} handleChange={LoginActions.handleChange} />
            </div>
        );
    }
}

const mapeStateToProps = state => ({
    input: state.Login.input
})

const mapDispatchToProps = dispatch => ({
    LoginActions: bindActionCreators(LoginActions, dispatch)
})
export default connect(
    mapeStateToProps,
    mapDispatchToProps
)(SignUpContainer);