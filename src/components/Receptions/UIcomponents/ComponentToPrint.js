import React from 'react';

let ComponentToPrint =React.forwardRef(
    (props,ref) =>{
        return(
            <div ref={ref}>
                <table>
                    <thead>
                    <th>column 1</th>
                    <th>column 2</th>
                    <th>column 3</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }
)
export default ComponentToPrint;
