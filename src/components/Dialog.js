
import React from "react";

class Dilog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>this is test</div>)
    }
}

ReactDom.render(
    <Dilog></Dilog>,
    document.getElementById('app')
);