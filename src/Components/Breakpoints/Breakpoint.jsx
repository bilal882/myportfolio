import React from 'react'

export default function Breakpoint() {
    const smaller = "<";
    const laror = "≥";
    return (
        <div>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Breakpoint</th>
                        <th>Class infix</th>
                        <th>Dimensions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="active-row">
                        <td>Extra small</td>
                        <td>None</td>
                        <td>{smaller}576px</td>
                    </tr>
                    <tr class="active-row">
                        <td>Small</td>
                        <td>sm</td>
                        <td>{laror}567</td>
                    </tr>
                    <tr class="active-row">
                        <td>Medium</td>
                        <td>md</td>
                        <td>{laror}768px</td>
                    </tr> 
                    <tr class="active-row">
                        <td>Large</td>
                        <td>lg</td>
                        <td>{laror}768px</td>
                    </tr> 
                    <tr class="active-row">
                        <td>Medium</td>
                        <td>md</td>
                        <td>{laror}768px</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}
