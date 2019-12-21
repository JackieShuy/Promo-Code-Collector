import React from 'react'
import CodeList from './CodeList'
import CodeFilter from './CodeFilter'

class AllCode extends React.Component {
    render() {
        return (
            // <div className="container">
                <div className="row">
                    <div className="col-sm-4"><CodeFilter /></div>
                    <div className="col-sm-8"><CodeList /></div>
                </div>
            // </div>
        )
    }
}

export default AllCode