
import ReactDom from "react-dom";
import React from "react";
import { Router, Route, Link } from 'react-router'
import "./public/css/common.css";
import "./public/js/common.js"



class Dilog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>this is test</div>)
    }
}

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="test" component={Dilog} />
    </Router>,
    document.getElementById('app')
);