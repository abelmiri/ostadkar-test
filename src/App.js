import React, {Component} from "react"
import "./App.scss"
import View from "./View"
import DropDown from "./media/SvgDropDown"

class App extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            string: "",
            isOpen: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(text)
    {
        this.setState({...this.state, string: text.toLowerCase().trim()})
    }

    handleClick()
    {
        let {isOpen} = this.state
        this.setState({...this.state, isOpen: !isOpen})
    }

    render()
    {
        const {string, isOpen} = this.state
        return (
            <div className="App">
                <div className="App-header">
                    <div className="input-side">
                        <div>
                            Enter Your Input
                        </div>
                        <input onChange={(e) => this.handleChange(e.target.value)}/>
                    </div>
                    <div className={isOpen ? "board" : "board-closed"}>
                        <div style={{marginTop: "10px"}}>Output</div>
                        <hr className={isOpen ? "hr-active" : "hr-inactive"}/>
                        <View string={string} isOpen={isOpen}/>
                        <div className={"drop-down"} onClick={() => this.handleClick()}>
                             <DropDown className="drop-down-svg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
