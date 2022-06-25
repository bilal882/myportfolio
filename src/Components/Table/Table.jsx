import React from 'react'

export default function Table() {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Batch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="active-row">
                        <td>Ali</td>
                        <td>123</td>
                        <td>3</td>
                    </tr>
                    <tr class="active-row">
                        <td>Hamza</td>
                        <td>342</td>
                        <td>6</td>
                    </tr>
                    <tr class="active-row">
                        <td>Ahsan</td>
                        <td>456</td>
                        <td>8</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
