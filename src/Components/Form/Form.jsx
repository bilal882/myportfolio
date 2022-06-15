import React from 'react'

export default function Form() {
    return (
        <div className='content m-5'>
            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="First Name" />
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Last Name" required />
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Email" required />
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <input type='submit' class="button is-link" value="Submit"/>
                </div>
            </div>
        </div>
    )
}
