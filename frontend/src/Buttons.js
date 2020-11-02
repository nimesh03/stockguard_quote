import React from 'react';


function NextButton(props) {
    let curStep = props.currentStep; 
    if (curStep !== 6) {
        return (
            <button
                type='button'
                className='btn btn-primary btn-lg'
                onClick={props.onClick}>
            Next</button>
        );
    }
    return null;
}

function BackButton(props) {
    let curStep = props.currentStep;
    let disabled = curStep === 1? true : false;
    return (
        <button 
            disabled={disabled}
            type='button'
            className='btn btn-secondary btn-lg'
            onClick={props.onClick}>
        Back</button>
    );
}

function FinishButton(props) {
    let curStep = props.currentStep;
    if (curStep === 6) {
        return (
            <button 
                type='submit'
                className='btn btn-success btn-lg'
                // onClick={() => window.location.href = "/quote.html"}
            >
            Finish</button>
        );
    }
    return null;
}

export {NextButton, BackButton, FinishButton};