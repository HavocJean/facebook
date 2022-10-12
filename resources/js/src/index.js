import React from "react";
import ReactDom from "react-dom";

export const App = () => {
    return(
        <div>hello world!</div>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));