import React from 'react'
import CodeDetail from './CodeDetail'

class CodeList extends React.Component {
    render() {
        return (
            <div>
                <table style={{ marginTop: 22 }}>
                    <tbody className='codeListTable'>
                        <tr className="shadow-sm p-3 mb-5 bg-white rounded">
                            <td style={{ width: 1200}}>
                                <CodeDetail />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CodeList
