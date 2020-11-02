import React from 'react';
import {Step1, Step2, Step3, Step4, Step5, Step6} from './Steps';
import {BackButton, NextButton, FinishButton} from './Buttons';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; 


//add production site
// skip step 6
// add step 7 popup to 5
// edit the state so that it is formatted for the text
// send nimesh the json
class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            // step 1
            quote_optype: "", 

            // step 2
            quote_totsowhead: 0,
            quote_totmarkethead: 0, 

            // step 3
            quote_flowtype: "", 

            //step 4
            quote_name: "", 
            quote_email: "",

            // step 5
            // quote_loc_type: null, // WHAT IS THIS FIELD????
            pods : [],

            // step 6
            // coverages: "",
            // submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createPod = this.createPod.bind(this);
    };

    setCurrentStep(num) {
        this.setState({currentStep: num});
        console.log(this.state);
    };
ß
    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change, () => {console.log(this.state)})
    };

    handleSubmit = e => {
        
        // alert(JSON.stringify(this.state, null, '\t'));
        
        // console.log(this.state);
                e.preventDefault();
                const data = {
                    quote_optype: this.state.quote_optype,
                    quote_totsowhead: this.state.quote_totsowhead,
                    quote_totmarkethead: this.state.quote_totmarkethead,
                    quote_flowtype: this.state.quote_flowtype,
                    quote_name: this.state.quote_name,
                    quote_email: this.state.quote_email,
                    pods: this.state.pods
                };
                axios
                  .post("http://localhost:8080/api/form/", data)
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
    };        

    createPod(type, county, hogs, bin1, val1, bin2, val2, bin3, val3, bin4, val4) {
        if (type && county && hogs) {
            const newPod = {
                quote_headtype: type,
                quote_loc_county: county,
                quote_head: hogs,

                quote_cov1_bin : bin1,
                quote_cov1_val : Number(parseFloat(val1).toFixed(2)),
                quote_cov2_bin : bin2,
                quote_cov2_val : Number(parseFloat(val2).toFixed(2)),
                quote_cov3_bin : bin3,
                quote_cov3_val : Number(parseFloat(val3).toFixed(2)),
                quote_cov4_bin : bin4,
                quote_cov4_val : Number(parseFloat(val4).toFixed(2))
            };

         
            this.setState((prevState) => {
                return { 
                    pods: prevState.pods.concat(newPod) 
                };
            });
            console.log('created the pod!');
        }

        document.getElementById('quote_headtype').value = "";
        document.getElementById('quote_loc_county').value = "";
        document.getElementById('quote_head').value = 0;

        document.getElementById('quote_cov1_bin').value = false;
        document.getElementById('quote_cov1_val').value = 0;
        document.getElementById('quote_cov2_bin').value = false;
        document.getElementById('quote_cov2_val').value = 0;
        document.getElementById('quote_cov3_bin').value = false;
        document.getElementById('quote_cov3_val').value = 0;
        document.getElementById('quote_cov4_bin').value = false;
        document.getElementById('quote_cov4_val').value = 0;
    }

    render() {
        return (
            <form className='p-3' onSubmit={this.handleSubmit} >
                <div className='h-75'>
                    <Step1
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        quote_optype={this.state.quote_optype}
                    />

                    <Step2
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        quote_totsowhead={this.state.quote_totsowhead}
                        quote_totmarkethead={this.state.quote_totmarkethead}
                    />    

                    <Step3
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        quote_flowtype={this.state.quote_flowtype}
                    >
                    </Step3>

                    <Step4
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        quote_email={this.state.quote_email}
                        quote_name={this.state.quote_name}
                    />

                    <Step5
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        createPod={this.createPod}
                        pods={this.state.pods}
                    />

                    <Step6
                        currentStep={this.state.currentStep}
                        onChange={this.handleChange}
                        // state={this.state}
                    />
                </div>
                
                <div className='row mb-4 p-3 fixed-bottom justify-content-lg-center'>
                    <div className='col-lg-8'>
                        <div className='d-flex d-flex justify-content-between'>
                            <div >
                                <BackButton onClick={() => this.setCurrentStep(this.state.currentStep -1)} currentStep={this.state.currentStep}/>
                            </div> 
                            <div>
                                <NextButton onClick={() => this.setCurrentStep(this.state.currentStep +1)} currentStep={this.state.currentStep}/>
                                <FinishButton currentStep={this.state.currentStep} />
                            </div> 
                        </div>
                    </div>
                </div> 
            </form>
        );
    };
}



export {MasterForm};