import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import { connect } from 'react-redux';
import { login, signup } from './../../actions/actions';

class Home extends React.Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={() => {
                        this.props.history.push('/profile')
                    }}>
                        HOME <code>src/App.js</code> and save to reload.
        </p>
                    <p onClick={() => {
                        this.props.login("Harsh");
                    }}>
                        Increase
        </p>
                    <p>{this.props.count} {this.props.name}</p>
                    <p onClick={() => {
                        this.props.signup();
                    }}>Decrease</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                </header>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    count: state.reducer.count,
    name: state.reducer.name
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    signup: () => dispatch(signup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);