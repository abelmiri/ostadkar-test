import React, {PureComponent} from "react"
import PropTypes from "prop-types"

export default class View extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            views: [],
        }
        this.handleViews = this.handleViews.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        let {string} = this.props
        if (prevProps.string !== string)
        {
            let counts = [], words = [], views = string.split("/")
            views.forEach(view =>
            {
                let x, inx = 0, number = "", word = ""
                for (x of view)
                {
                    if (!isNaN(x))
                    {
                        number += x
                    }
                    else
                    {
                        word = view.slice(inx)
                        break
                    }
                    inx++
                }
                counts.push(parseInt(number, 10))
                words.push(word)
            })
            this.setState({...this.state, views: words, counts: counts})
        }
    }

    handleViews(view, index)
    {
        const {counts} = this.state

        switch (view)
        {
            case "xl":
                if (counts[index] && counts[index] > 0)
                {
                    let arr = new Array(counts[index])
                    arr.fill("value")

                    return <React.Fragment>
                        {
                            arr.map(p => <div className="xl"/>)
                        }
                    </React.Fragment>
                }
                else
                    return <div className="xl"/>
            case "l":
                if (counts[index] && counts[index] > 0)
                {
                    let arr = new Array(counts[index])
                    arr.fill("value")

                    return <React.Fragment>
                        {
                            arr.map(p => <div className="l"/>)
                        }
                    </React.Fragment>
                }
                else
                    return <div className="l"/>

            case "sm":
                if (counts[index] && counts[index] > 0)
                {
                    let arr = new Array(counts[index])
                    arr.fill("value")

                    return <React.Fragment>
                        {
                            arr.map(p => <div className="sm"/>)
                        }
                    </React.Fragment>
                }
                else
                    return <div className="sm"/>

            default :
                return null
        }
    }

    render()
    {
        const {views} = this.state
        return (
            <React.Fragment>
                {views.map((view, index) => this.handleViews(view, index))}
            </React.Fragment>
        )
    }
}

View.propTypes = {
    string: PropTypes.string.isRequired,
}
