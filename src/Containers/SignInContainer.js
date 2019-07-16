import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from 'Components/SignIn';
import * as LoginActions from 'Store/modules/Login';

class SignInContainer extends Component {
    componentDidMount() {
        console.log(LoginActions.handleChange);
    }
    render() {
        const { input, LoginActions, history } = this.props;
        return (
            <div>
                <SignIn history={history} input={input} handleChange={LoginActions.handleChange} />
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
)(SignInContainer);