import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import 'chartkick/chart.js';
import axios from 'axios'
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

const ChildMarriageCalculator = () => {
  const [childAgeToday, setChildAgeToday] = useState(8);
  const [getMarriedAge, setGetMarriedAge] = useState(18);
  const [amountRequired, setAmountRequired] = useState(1000000);
  const [annualSaving, setAnnualSaving] = useState(30000);
  const [expectedRateReturn, setExpectedRateReturn] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [inflaction, setInflaction] = useState('17,90,848');
  const [futureValue, setFutureValue] = useState('17,90,848');
  const [af, setAf] = useState('12,15,751');
  const [lumpsum, setLumpsum] = useState('3,68,366');
  const [data, setData] = useState('5,285');
  const [loaded, setLoaded] = useState(true);






  const calculateMarrige = () => {
    setLoaded(!loaded)

    const data = {
      childAgeToday: childAgeToday,
      childAgeAfterMarried: getMarriedAge,
      amountRequirmentWedToday: amountRequired,
      annualSaving: annualSaving,
      rateReturn: expectedRateReturn,
      inflationRate: expectedInflation,
    };
    axios.post('http://localhost:5010/api/marrige', data).then((res) => {
      console.log(res.data);
      setInflaction(res.data.inflaction)
      setFutureValue(res.data.futureValue)
      setAf(res.data.af)
      setData(res.data.data)
      setLumpsum(res.data.lumpsum)
      $(document).scrollTop($("#result").height());

      setLoaded(loaded)

    })


  }



  const valueLimit = () => {
    if (parseInt(childAgeToday) > 30) {
      setChildAgeToday(30)
    } else if (parseInt(getMarriedAge) > 50) {
      setGetMarriedAge(50)
    } else if (parseInt(amountRequired) > 100000000) {
      setAmountRequired(100000000)
    }
    else if (parseInt(annualSaving) > 100000) {
      setAnnualSaving(100000)
    }
    else if (parseInt(expectedRateReturn) > 50) {
      setExpectedRateReturn(50)
    }
    else if (parseInt(expectedInflation) > 50) {
      setExpectedInflation(50)
    }
  }






  let incChildAgeToday = () => {
    if (childAgeToday < 60) {
      setChildAgeToday(Number(childAgeToday) + 1);
    }
  };
  let decChildAgeToday = () => {
    if (childAgeToday > 1) {
      setChildAgeToday(childAgeToday - 1);
    }
  }


  // for Approx cost

  let incAmountRequired = () => {
    if (getMarriedAge < 100000000) {
      setAmountRequired(Number(amountRequired) + 500);
    }
    else if (amountRequired > 100000000) {
      setAmountRequired(Number(100000000));
    }
    else if (amountRequired == 0) {
      setAmountRequired(Number(amountRequired) + 500);
    }

  };
  let decAmountRequired = () => {
    if (amountRequired >= 500) {

      setAmountRequired(amountRequired - 500);
    }
    else if (amountRequired < 499) {
      setAmountRequired(0);
    }
  }


  // for Start college Age

  let incGetMarriedAge = () => {
    if (getMarriedAge < 60) {
      setGetMarriedAge(Number(getMarriedAge) + 1);
    }
  };
  let decGetMarriedAge = () => {
    if (getMarriedAge > 1) {
      setGetMarriedAge(getMarriedAge - 1);
    }
  }


  let incAnnualSaving = () => {
    if (getMarriedAge) {
      setAnnualSaving(Number(annualSaving) + 500);
    }
    else if (annualSaving == 0) {
      setAnnualSaving(Number(annualSaving) + 500);
    }

  };
  let decAnnualSaving = () => {
    if (annualSaving >= 500) {

      setAnnualSaving(annualSaving - 500);
    }
    else if (annualSaving < 499) {
      setAnnualSaving(0);
    }
  }



  let incExpectedRateReturn = () => {
    if (expectedRateReturn < 60) {
      setExpectedRateReturn(Number(expectedRateReturn) + 1);
    }
  };
  let decExpectedRateReturn = () => {
    if (expectedRateReturn > 1) {
      setExpectedRateReturn(expectedRateReturn - 1);
    }
  }

  let incExpectedInflation = () => {
    if (expectedInflation < 60) {
      setExpectedInflation(Number(expectedInflation) + 1);
    }
  };
  let decExpectedInflation = () => {
    if (expectedInflation > 1) {
      setExpectedInflation(expectedInflation - 1);
    }
  }
  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3 pb-4">Child Marriage Planning</h2>
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
                      <div className="row" id="marriage-1">
                        {/*first*/}
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Child's age today (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decChildAgeToday}></img>
                            <input type="number" className="form-control" name="m-saving" onKeyUp={valueLimit} value={childAgeToday} onChange={(e) => setChildAgeToday(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incChildAgeToday}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Child will get married at the age of (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decGetMarriedAge}></img>
                            <input type="number" className="form-control" name="year" onKeyUp={valueLimit} value={getMarriedAge} onChange={(e) => setGetMarriedAge(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incGetMarriedAge}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Amount required for wedding as on today(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decAmountRequired}></img>
                            <input type="number" className="form-control" name="return" onKeyUp={valueLimit} value={amountRequired} onChange={(e) => setAmountRequired(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incAmountRequired}></img>
                          </div>
                        </div>
                      </div>
                      {/*second*/}
                      <div className="row" >
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Annual Saving(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decAnnualSaving}></img>
                            <input type="number" className="form-control" name="m-saving" onKeyUp={valueLimit} value={annualSaving} onChange={(e) => setAnnualSaving(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incAnnualSaving}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Expected rate of return(%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedRateReturn}></img>
                            <input type="number" className="form-control" name="year" onKeyUp={valueLimit} value={expectedRateReturn} onChange={(e) => setExpectedRateReturn(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedRateReturn}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Expected inflation rate (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedInflation}></img>
                            <input type="number" className="form-control" name="return" onKeyUp={valueLimit} value={expectedInflation} onChange={(e) => setExpectedInflation(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedInflation}></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-5  text-right text-xs-center">
                        <button className="new-btn1" onClick={calculateMarrige}>Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3 p-lg-5" id="result">
                      <div className="col-md-12 px-5 pt-5 ">
                        <div className="col-md-12 result-title text-center">
                          <h3>Result</h3>
                        </div>
                        <div className="result-content text-center">
                          <div className="row pt-3">
                            <div className="col-md-4">
                              <div className="text-label font-weight-500 py-2 ">
                                Inflation Adjusted Cost(₹)
                              </div>
                              <div className="inputf transcard  py-2 bg-light-red">{inflaction}</div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-label font-weight-500 py-2 ">
                                Future value of saving (₹)
                              </div>
                              <div className="inputf transcard py-2 bg-light-red">{futureValue}</div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-label font-weight-500 py-2">
                                Additional funds required to meet expenses(₹)
                              </div>
                              <div className="inputf transcard bg-light-red py-2">{af}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 px-5 pt-5">
                        <div className="col-md-12 result-title text-center ">
                          <h3>Plan of action Required</h3>
                        </div>
                        <div className=" row result-content text-center">
                          <div className="col-md-5">
                            <div className="text-label font-weight-500 py-2">
                              One time investment required(₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{lumpsum}</div>
                          </div>
                          <div className="col-md-2"><div className="text-label font-weight-500 py-2"><strong className="text-black">OR</strong></div></div>
                          <div className="col-md-5">
                            <div className="text-label font-weight-500 py-2">
                              Monthly investment required(₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{data}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-4">
                      <div className="col-md-12 text-right text-xs-center">
                        <button className="btn-custom ">Invest Now</button>
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
              {/* <h4 className="fqa-top-text mb-4 pt-3">Frequently asked questions</h4> */}
              {/* <p className="mb-5">We have conducted 200+ presentations on Financial Planning. Check out some prominent ones here</p> */}
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is Child Marriage Planning ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Saving for their Child’s Marriage is a part of every Indian parent's financial plan, as big fat weddings are a thing here. Given the number of unexpressed expectations and fragile egos at play, conducting marriages can be hectic, and consequently, very expensive. This is why planning for them in advance is advisable.</p>
                      <p>It doesn’t matter if you are not in a hurry to get married, or don’t want to start a family anytime soon, you need to start investing money for the future today, so you can thank yourself tomorrow. This is where a Child Marriage Plan comes in handy.</p>
                      <p>This financial vehicle allows you the freedom to compound wealth for the future, irrespective of the stage of life you are in today. The sooner you start parking money in a Child Marriage Plan, the faster you shall compound the wealth needed to meet your future needs.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Child Marriage Planning Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>This is an online tool used to compute the amount needed for your Child’s Marriage in future, based on the inputs fed, including the estimated cost involved in conducting the marriage as of today, the expected rate of inflation, your child’s age, and the rate of returns you are expecting to fetch, among other things.</p>
                      <p>Upon hitting calculate, the Child Marriage Planning Calculator shall compute these variables and reveal the inflated cost of conducting the marriage ceremony in future and the amount that needs to be invested for this purpose, be it every month, or as a one-time lumpsum investment.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> How should you plan for your Child’s Marriage ? </Accordion.Header>
                    <Accordion.Body>
                      <p>The ideal approach would be to start by projecting the cost involved. This needs to be done keeping in mind the effect escalating inflation rates and certain other factors shall have on the present cost.</p>
                      <p>Typically, wedding costs go up 3-4 fold every 10 years This means you are staring at a minimum expense of Rs 30-40 lakh, if your as-of-date projection is touching Rs 10 lakh, assuming the wedding is 10 years away. The most convenient way to deduce the future cost is using a Child Marriage Planning Calculator.</p>
                      <p>This tool shall not only project the amount you shall need at the time of your Child’s Marriage, but also paint a picture of the volume of investment needed for this purpose. Following this, options must be discussed with a certified financial planner, who shall suggest investment options that suit the purpose.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span> Best investment plans for daughter’s marriage </Accordion.Header>
                    <Accordion.Body>
                      <p>Conducting marriages is an expensive affair, irrespective of the gender of your child. This is why it is advisable to invest in products that have the potential to grow expeditiously. This, however, needs to be done with great care, so you do not end up short of the targeted corpus.</p>
                      <p>Investing in gold bonds is an option some have availed. Although the commodity has the potential to grow in value, it does carry risks as gold prices tend to fluctuate intermittently owing to global developments and certain other factors. Real estate investments, on the other hand, do not ensure immediate liquidity. Yes, stationary assets can appreciate in value over time, but selling them at a short notice is a different ball game. Moreover, liquidating them at the appreciated value is a challenge many have failed to overcome.</p>
                      <p>FDs, however, are easy to liquidate and offer sure returns. But with banks pulling down fixed deposit interest rates every other quarter, investors run the risk of falling short of the amount targeted. Money for future needs should only be invested on the advice of a professional wealth management consultant, and in products that can compound over the long term and also are easy to liquidate.</p>
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
export default ChildMarriageCalculator;