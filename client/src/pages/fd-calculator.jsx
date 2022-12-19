import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import 'chartkick/chart.js';
import Select from 'react-select';
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

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [interestRate, setInterestRate] = useState(6);
  const [compoundingPeriod, setCompoundingPeriod] = useState(12);
  const [maturity, setMaturity] = useState(12);
  const [loaded, setLoaded] = useState(true);



  const period = [
    { value: 12, label: "Monthly" },
    { value: 4, label: "Quarterly" },
    { value: 2, label: "Half Yearly" },
    { value: 1, label: "Yearly" },
  ];

  const FDcalculate = () => {
    setLoaded(!loaded)

    const data = {
      investAmount: investment,
      investmentDuration: investmentDuration,
      intrestRate: interestRate,
      compoundingPeriod: compoundingPeriod
    };
    console.log("data", data);
    axios.post('http://localhost:5010/api/fd', data).then((res) => {

      setMaturity(res.data.data);
      $(document).scrollTop($("#result").height());
      setLoaded(loaded)



    })
  }


  let incInvestment = () => {
    if (investment) {
      setInvestment(Number(investment) + 500);
    }
    else if (investment == 0) {
      setInvestment(Number(investment) + 500);
    }

  };
  let decInvestment = () => {
    if (investment >= 500) {

      setInvestment(investment - 500);
    }
    else if (investment < 499) {
      setInvestment(0);
    }
  }

  let incInvestmentDuration = () => {
    if (investmentDuration < 60) {
      setInvestmentDuration(Number(investmentDuration) + 1);
    }
  };
  let decInvestmentDuration = () => {
    if (investmentDuration > 1) {
      setInvestmentDuration(investmentDuration - 1);
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


  const valueLimit = () => {
    if (parseInt(investment) > 1000000) {
      setInvestment(1000000)
    } else if (parseInt(investmentDuration) > 50) {
      setInvestmentDuration(50)
    } else if (parseInt(interestRate) > 50) {
      setInterestRate(50)
    }
  }


  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3 pb-4">FD Calculator</h2>
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
          <div class=" mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-5">
                    <section className="pt-5 pb-5">
                      <div className="row">
                        <div className="col-md-3 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2">
                            Investment Amount(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInvestment}></img>
                            <input type="number" className="form-control" name="m-saving" value={investment} onKeyUp={valueLimit} onChange={(e) => setInvestment(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInvestment}></img>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2">
                            Investment Duration(Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInvestmentDuration}></img>
                            <input type="number" className="form-control" name="m-saving" value={investmentDuration} onKeyUp={valueLimit} onChange={(e) => setInvestmentDuration(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInvestmentDuration}></img>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <label for="year" className="text-label font-weight-500 py-2">
                            Interest Rate (%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInterestRate}></img>
                            <input type="number" className="form-control" name="year" value={interestRate} onKeyUp={valueLimit} onChange={(e) => setInterestRate(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInterestRate}></img>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <label for="return" className="text-label font-weight-500 py-2">
                            Compounding Period
                          </label>
                          <Select className='inputf transcard' options={period} onChange={(e) => setCompoundingPeriod(e.value)} />
                        </div>


                      </div>
                      <div className="col-md-12 pt-4 text-right text-xs-center">
                        <button className="new-btn1 mt-3" onClick={FDcalculate}> Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3 p-lg-5" id="result">
                      <div className="col-md-4">
                        <div className="result-content">
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2 mt-5">
                                Maturity Value(₹)
                              </div>
                              <div className="inputf transcard bg-light-red py-2">{maturity}</div>
                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="result-title text-center">
                          <h2>Result</h2>
                        </div>
                        <div className="text-center">
                          <img src="../assets/img/fd.png" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-4">
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
                    <Accordion.Header><span className="faqs_greenDot"></span> What is an FD Calculator ? </Accordion.Header>
                    <Accordion.Body>
                      <p>A Fixed Deposit Calculator, commonly known as FD Calculator, is an online tool used for computing the amount a fixed deposit investment is likely to grow into upon maturity. The logic governing this tool takes into account certain factors that have to be fed into it by the user for arriving at the estimated interest the investment shall fetch over time.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> How to Use FD Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>Using the FD Calculator is a simple process involving as little as three steps. The user needs to start by feeding into the calculator, the amount he is looking to invest. Thereafter he needs to enter the fixed deposit interest rate he is expecting to fetch, followed by the duration of the investment. Once the user hits the “Calculate” button after making these inputs, the estimated maturity value of the investment shall be displayed on the screen, along with the total interest earned by the investment.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> Why should you use FD Calculator ? </Accordion.Header>
                    <Accordion.Body>
                      <p>FD Calculators compute complex calculations with ease, which helps investors save a lot of time and effort. The accuracy of the projections provided by this online financial planner, gives investors the freedom to compare FD schemes without much hassle. Since fixed deposit interest rates tend to depend upon the tenure of investment, comparing projections in advance helps potential investors determine the investment tenure that fetches returns that are in line with their financial goals.</p>
                      <p>Simply put, these projections give investors the clarity needed for planning their expenses years in advance, which, in turn, allows them to manage their immediate finances more efficiently.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span> Bank FD vs Corporate FD </Accordion.Header>
                    <Accordion.Body>
                      <p>Both Bank and Company Fixed Deposits work on similar principles and cook the money invested over time to fetch the desired returns. Also, they are governed by similar tax provisions. However, certain underlying differences set the two asset classNamees apart. For starters, Bank FDs are offered for investment by banks, as the name suggests, whereas Company Fixed Deposits function under non-banking entities and companies.</p>
                      <p>Also, company FDs have a minimum mandatory lock-in of three months, which is absent in the case of traditional fixed deposits. Regardless, they tend to offer higher returns when compared with Bank FDs, which is an added advantage given the fact that additional returns have the potential to multiply, and consequently compound into a surplus corpus.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="faqs_greenDot"></span> FD vs Mutual Funds </Accordion.Header>
                    <Accordion.Body>
                      <p>Before the pros and cons of investing in FDs and Mutual Funds are weighed and elaborated upon, investors should understand that none of these are bad investments, provided they fit into our scheme of things.</p>
                      <p>Fixed Deposits offer investors the cushion of an assured rate of return albeit on the lower end, whereas mutual fund investments, although likely to surpass fixed deposit interest rates, do not put a number on the returns offered. Instead, they leverage the power of compounding to grow expeditiously over the long term.</p>
                      <p>Tax liability is another factor that sets the two asset classNamees apart. The interest earned through FDs in a financial year, beyond a certain threshold, attracts tax levies, whereas the gains made through mutual fund investments are tax-free up to a certain limit. Moreover, the provisions accompanying premature withdrawals differ in both these asset classNamees.</p>
                      <p>Firstly, there is no provision for partial withdrawal in FDs. The investor can liquidate the fixed deposit prematurely to raise instantaneous cash if need be. Doing so, however, attracts a levy that eats into the interest earned by the investment. Mutual funds, on the other hand, attract a nominal exit load upon liquidation. Following the completion of the first year, this levy turns obsolete, making withdrawals free of charge.</p>
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
export default LumpsumCalculator;