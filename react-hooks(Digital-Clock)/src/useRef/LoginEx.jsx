import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const LoginEx = () => {

    let buttonTag = useRef(null);
    let [terms, setTerms] = useState(false)
    let acceptTermsHandler = (event) => {
        if (event.target.checked === true) {
            setTerms(buttonTag.current.disabled = false)
        }
        else {
            setTerms(buttonTag.current.disabled = true)
        }
    }

    return <>
        <div className="container mt-5">
            <pre>{JSON.stringify(terms)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <form>
                        <div className='form-group'>
                            <input type="text" placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type="text" placeholder='Password' className='form-control' />
                        </div>
                        <div className='form-check'>
                            <input type="checkbox" onClick={acceptTermsHandler} className='form-control-check' /> Please accept terms & conditions.
                        </div>
                        <input ref={buttonTag} type="submit" className='btn btn-primary' disabled />
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default LoginEx