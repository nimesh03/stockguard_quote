import React, {useState} from 'react';

function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    return (
        <div className='form-group'>
            <label className='h3' htmlFor="quote_optype">How would you best describe your operation?</label>
            <select value={props.quote_optype} className='custom-select' id='quote_optype' name='quote_optype' onChange={props.onChange}>
                <option></option>
                <option value="Independent (farrow-to-wean)">Independent (farrow-to-wean)</option> 
                <option value="Independent (farrow-to-wean with some finishing)">Independent (farrow-to-wean with some finishing)</option>
                <option value="Independent (farrow-to-finish)">Independent (farrow-to-finish)</option>
                <option value="Integrator (farrow-to-finish with contract finishing)">Integrator (farrow-to-finish with contract finishing)</option>
            </select>
        </div>
    )
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }
    return (
        <React.Fragment>
            <div className='form-group'>
                <label className='h3' htmlFor="quote_totsowhead">How many terminal sows do you maintain?</label>
                <input value={props.quote_totsowhead} type="number" onChange={props.onChange} className="form-control" id="quote_totsowhead" name="quote_totsowhead" placeholder="5,000"></input>
            </div>
            <div className='form-group'>
                <label className='h3' htmlFor="quote_totmarkethead">How many hogs do you market per year?</label>
                <input value={props.quote_totmarkethead} type="number" onChange={props.onChange} className="form-control" id="quote_totmarkethead" name="quote_totmarkethead" placeholder="125,000"></input>
            </div>
        </React.Fragment> 
    )
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }
    return (
        <div className='form-group'>
            <label className='h3' htmlFor='quote_flowtype'>How would you best describe your operation?</label>
             <select value={props.quote_flowtype} onChange={props.onChange} className='custom-select' id='quote_flowtype' name="quote_flowtype">
                <option></option>
                <option>All-in, all-out</option>
                <option>Continuous</option>
            </select>
        </div>
    )
}

function Step4(props) {
    if (props.currentStep !== 4) {
        return null;
    }
    return (
        <React.Fragment>
            <div className='form-group'>
                <label className='h3' htmlFor="quote_name">What is your operation's trade name?</label>
                <input value={props.quote_name} type="text" onChange={props.onChange} className="form-control" id="quote_name" name="quote_name" placeholder="Farm ABC"></input>
            </div>
            <div className='form-group'>
                <label className='h3' htmlFor="quote_email">What is your email address?</label>
                <input value={props.quote_email} type="email" onChange={props.onChange} className="form-control" id="quote_email" name="quote_email" placeholder="hello@farmabc.com"></input>
            </div>
        </React.Fragment>
    );
}

function Step5(props) {
    const [mortgageAndLoan, setMortgageAndLoan] = useState(false);
    const [payroll, setPayroll] = useState(false);
    const [utilities, setUtilities] = useState(false);
    const [cleaning, setCleaning] = useState(false);

    function listPods(pods) {
        return pods.map((pod, i) => 
            <tr key={i}>
                <td>{pod['quote_headtype']}</td>
                <td>{pod['quote_loc_county']}</td>
                <td>{pod['quote_head']}</td>
            </tr>
        );
    }

    
    if (props.currentStep !== 5) {
        return null;
    }
    return (
        <React.Fragment>
            <h3 className='mb-3'>Where are your facilities?</h3>
            <div id='stateHere' className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Type</th>
                            <th scope='col'>County</th>
                            <th scope='col'># Hogs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPods(props.pods)}
                    </tbody>
                </table>
            </div>
            <button type='button' className='btn btn-primary btn-lg mb-3' data-toggle='modal' data-target='#podModal'>
                Add production pod
            </button>

            <div className='modal fade' id='podModal'>
                <div className='modal-dialog modal-dialog-scrollable' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <div className='modal-title'>
                                <h5 className='mb-0'> Add a new pod</h5>
                            </div>
                        </div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <label htmlFor='quote_HeadType'>Site Type</label>
                                <select className='custom-select' id='quote_headtype' name='quote_headtype'>
                                    <option></option>
                                    <option value='Sow farm'>Sow farm</option> 
                                    <option value='Finishing site'>Finishing site</option>
                                </select>
                            </div> 
                            <div className='form-group'>
                                <label htmlFor='quote_loc_county'>County</label>
                                <input className="form-control" type='text' id="quote_loc_county" name="quote_loc_county"></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='quote_head'># of head</label>
                                <input className="form-control" type='number' id="quote_head" name="quote_head"></input>
                            </div>

                            <hr className='mt-3 mb-3'/>
                            <h5 className='mt-3'>What coverages would you like on this pod?</h5>
                            <div className='row p-1'>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="quote_cov1_bin" value={!mortgageAndLoan} onClick={() => setMortgageAndLoan(!mortgageAndLoan)} />
                                        <label className="form-check-label" htmlFor="quote_cov1_bin">Mortgage and Loan</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <input disabled={!mortgageAndLoan} className="form-input form-control" type="number" placeholder="Coverage Amount" id="quote_cov1_val" />
                                </div>
                            </div>
                            <div className='row p-1'>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!payroll} id="quote_cov2_bin" onClick={() => setPayroll(!payroll)} />
                                        <label className="form-check-label" htmlFor="quote_cov2_bin">Payroll</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <input disabled={!payroll} className="form-input form-control" type="number" placeholder="Coverage Amount" id="quote_cov2_val" />
                                </div>
                            </div>
                            <div className='row p-1'>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!utilities} id="quote_cov3_bin" onClick={()=> setUtilities(!utilities)} />
                                        <label className="form-check-label" htmlFor="quote_cov3_bin">Utilities</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <input disabled={!utilities} className="form-input form-control" type="number" placeholder="Coverage Amount" id="quote_cov3_val" />
                                </div>
                            </div>
                            <div className='row p-1'>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!cleaning} id="quote_cov4_bin" onClick={() => setCleaning(!cleaning)} />
                                        <label className="form-check-label" htmlFor="quote_cov4_bin">Additional cleaning costs</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <input disabled={!cleaning} className="form-input form-control" type="number" placeholder="Coverage Amount" id="quote_cov4_val" />
                                </div>
                            </div>
                        </div>
                         
                        <div className='modal-footer'>
                            <button className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
                            <button 
                                className='btn btn-primary' 
                                data-dismiss='modal' 
                                onClick={() => {
                                    props.createPod(
                                        document.getElementById('quote_headtype').value,
                                        document.getElementById('quote_loc_county').value,
                                        document.getElementById('quote_head').value,

                                        mortgageAndLoan,
                                        document.getElementById('quote_cov1_val').value,
                                        payroll,
                                        document.getElementById('quote_cov2_val').value,
                                        utilities,
                                        document.getElementById('quote_cov3_val').value,
                                        cleaning,
                                        document.getElementById('quote_cov4_val').value
                                    ); 
                                }}
                            >
                            Add Pod</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function Step6(props) {


    if (props.currentStep !== 6) {
        return null;
    }
    return (
        <React.Fragment>
            <h3>Click finish if you are ready to get your quote!!!</h3>
        </React.Fragment>
    );
}


export {Step1, Step2, Step3, Step4, Step5, Step6};