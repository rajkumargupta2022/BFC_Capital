import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
import $ from 'jquery';


import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
import styled, { css } from "styled-components";
const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${props =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

function HomeLoanCalculator() {
const [loanAmount,setLoanAmount] = useState(1000000);
const [interestRate,setInterestRate] = useState(10);
const [tenure,setTenure] = useState(10);
const [totalAmount,setTotalAmount] = useState(1585800);
const [totalIntrest,setTotalIntrest] = useState(585800);
const [loan,setLoan] = useState(1000000);
const [emi,setEmi] = useState(13215);
const [loaded, setLoaded] = useState(true);


  const data1 = {
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [totalIntrest, loan],
        backgroundColor: ["#F06D70", "#97C5FB"],
      }
    ],
    labels: ["Total Interest", "Principle Amount"]
  }

  const loanEMiCalculater = () =>{
    setLoaded(!loaded)

    const data = {
      loanAmount: loanAmount,
      rateIntrest: interestRate,
      tanureYear: tenure
  };

  axios.post('http://localhost:5010/api/emi', data).then((res) => {
      console.log("lllllll", res.data.data);
     
      setEmi(res.data.data.emi)
      setLoan(res.data.data.loan_amount)
      setTotalIntrest(res.data.data.total_interest)
      setTotalAmount(res.data.data.total_amount)
      $(document).scrollTop($("#result").height());

      setLoaded(loaded)



  })

  }

 


// for Approx cost

  let incLoanAmount = () => {
    if (loanAmount) {
      setLoanAmount(Number(loanAmount) + 500);
    }
    else if (loanAmount == 0) {
      setLoanAmount(Number(loanAmount) + 500);
    }

  };
  let decLoanAmount = () => {
    if (loanAmount >= 500) {

      setLoanAmount(loanAmount - 500);
    }
    else if (loanAmount < 499) {
      setLoanAmount(0);
    }
  }

  let incInterestRate = () => {
    if (interestRate < 60) {
      setInterestRate(Number(interestRate) + 1);
    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate(interestRate - 1);
    }
  }

  let incTenure= () => {
    if (tenure< 60) {
      setTenure(Number(tenure) + 1);
    }
  };
  let decTenure= () => {
    if (tenure> 1) {
      setTenure(tenure- 1);
    }
  }

  const valueLimit = () =>{
    if(parseInt(loanAmount)>1000000){
      setLoanAmount(1000000)
    }else if(parseInt(interestRate)>50){
      setInterestRate(50)
    }else if(parseInt(tenure)>50){
      setTenure(50)
    }
  }
  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3 pb-4">Home Loan EMI Calculator</h2>
            </div>
          </div>
          <DarkBackground disappear={!loaded}>

          <LoadingOverlay
            active={true}
            style={{ color: "red" }}
            // spinner={<BounceLoader />}
            spinner={true}

          >
            {/* <p>Some content or children or something.</p> */}
          </LoadingOverlay>
        </DarkBackground>
          <div class="mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-5">
                    <section className="pt-5 pb-5">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2">
                            Enter loan amount (₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decLoanAmount}></img>
                            <input type="number" className="form-control" name="m-saving" onKeyUp={valueLimit} value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incLoanAmount}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2">
                            Enter Interest rate (%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInterestRate}></img>
                            <input type="number" className="form-control" name="year"onKeyUp={valueLimit} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInterestRate}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2">
                            Tenure (years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decTenure}></img>
                            <input type="number" className="form-control" name="return" onKeyUp={valueLimit} value={tenure} onChange={(e)=>setTenure(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incTenure}></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pt-4 text-right text-xs-center">
                        <button className="new-btn1 mt-3" onClick={loanEMiCalculater}> Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3" id="result">
                      <div className="col-md-4">
                        <div className="result-content result-content-shadow-pro">
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Your EMI (₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{emi}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Principal(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{loan}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Interest(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{totalIntrest}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Amount(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{totalAmount}</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8  py-5">
                        <div className="result-title text-center">
                          <h2>Results</h2>
                        </div>
                        <div className="pt-4 result-chart"  >
                          <Doughnut data={data1} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                          }}
                            width={638} height={341} />
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-5">
                      <div className="col-md-12 text-right text-xs-center">
                        <button className="btn-custom ">Start Investing</button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Eaq Section Start ================== */}
      <section className="fqa pt-5 pb-5 mutual-fund-faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-4">
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Home Loan EMI Calculator?</Accordion.Header>
                    <Accordion.Body>
                      <p>A Home Loan EMI Calculator helps compute the EMI or monthly instalments a potential home loan is likely to attract, based on certain inputs provided by the user. The logic governing this online tool takes into account the inputs provided to deduce the desired projection.</p>
                      <p>The user can manipulate outcomes by shuffling between permutations and combinations to arrive at a pocket-friendly instalment plan, based on which he or she can run home loan comparisons, and consequently make well-informed financial decisions.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> How does EMI calculation help in planning a home purchase?</Accordion.Header>
                    <Accordion.Body>
                      <p>The EMI payable against a home loan is one of the deciding factors behind shortlisting loan offers. An advance estimation of this upcoming, monthly liability helps homebuyers make the financial arrangements needed. This is where a Housing Loan EMI Calculator comes in handy.</p>
                      <p>This online tool helps potential homebuyers compute the liability availing a home loan is likely to attract, and the finances needed for it. Based on the estimations provided, homebuyers can compare the loan offers extended by banks to arrive at a repayment plan that suits their needs, and financial constraints.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span>How much Home Loan should one take?</Accordion.Header>
                    <Accordion.Body>
                      <p>"Herein, the right question to be asked is, “How much can one afford ?” Usually, banks make sure that the EMI payable against the loan availed does not exceed 40% of the borrower’s monthly income. Borrowers should also take note that their total outgo towards outstanding loans should not go beyond 50% of their monthly income. Besides this, the loan should be availed for the shortest possible tenure.</p>
                      <p>The longer the tenure of a loan is, the lesser the monthly instalment amounts to. This proposition makes opting for longer loan tenures very tempting. Borrowers should, however, avoid falling into this trap, as longer tenures attract higher interest rates.</p>
                      <p>Simply put, the longer the tenure of your home loan is, the more compound interest you will end up paying the banks, this is the universal logic governing the relationship between loans and tenure."</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span>How to use Home Loan EMI Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>The logic governing Home Loan EMI Calculators takes into account certain factors to deduce the EMI payable post disbursement. These include the amount the user is looking to borrow for purchasing the house of his choice, the tenure he is looking to repay the loan in, and the rate of interest the outstanding is likely to attract.</p>
                      <p>The potential borrower needs to hit the “Calculate” button after entering these values, following which the estimated instalment amount or the EMI payable against the loan shall start reflecting. The user can shuffle between permutations and combinations to arrive at an acceptable outcome.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomeLoanCalculator;