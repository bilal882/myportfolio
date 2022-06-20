import React from 'react'

export default function Table() {
    const smaller = "<";
    const laror = "≥";
    return (
        <div className='d-flex align-items-center justify-content-center'>
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
                        <td>{laror}992px</td>
                    </tr>
                    <tr class="active-row">
                        <td>Extra large</td>
                        <td>xl</td>
                        <td>{laror}1200px</td>
                    </tr>
                    <tr class="active-row">
                        <td>Extra extra large</td>
                        <td>xxl</td>
                        <td>{laror}1400px</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}
