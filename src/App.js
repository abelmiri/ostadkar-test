import React, {Component} from "react"
import "./App.scss"
import View from "./View"

class App extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            string: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(text)
    {
        this.setState({...this.state, string: text.toLowerCase().trim()})
    }

    render()
    {
        const {string} = this.state
        return (
            <div className="App">
                <div className="App-header">
                    <div>
                        <div>
                            Enter Your Input
                        </div>
                        <input onChange={(e) => this.handleChange(e.target.value)}/>
                    </div>
                    <div className="board">
                        <div style={{marginTop: "10px"}}>Output</div>
                        <hr/>
                        <View string={string}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
