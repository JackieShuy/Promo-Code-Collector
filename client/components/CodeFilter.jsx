import React from 'react'

class CodeFilter extends React.Component {
    render() {
        return (
            <div id="list-example" className="list-group">
                <span className='filterTitle'>Website A - Z</span>
                <a className="list-group-item list-group-item-action" >Amazon</a>
                <a className="list-group-item list-group-item-action" >Beautylish</a>
                <a className="list-group-item list-group-item-action" >Selfridge</a>
                <a className="list-group-item list-group-item-action" >SSENCE</a>
                <a className="list-group-item list-group-item-action" >TOPSHOP</a>
            </div>
        )
    }
}

export default CodeFilter