import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import axios from 'axios';
import 'chartkick/chart.js';
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

const ChildEducationCalculator = () => {
  const [childAgeTOday, setChildAgeTOday] = useState(10);
  const [startCollegeAge, setStartCollegeAge] = useState(18);
  const [durationOfEducation, setDurationOfEducation] = useState(3);
  const [approxCurrentCost, setApproxCurrentCost] = useState(500000);
  const [expectedRateReturn, setExpectedRateReturn] = useState(12);
  const [expecetdInflation, setExpecetdInflation] = useState(6);
  const [totalAmtRequired, setTotalAmtRequired] = useState(2143644);
  const [lumpsum, setLumpsum] = useState(904671);
  const [SipAmount, setSipAmount] = useState(904671);
  const [loaded, setLoaded] = useState(true);


  const childCalculater = async (e) => {
    setLoaded(!loaded)

    const data = {
      childAge: childAgeTOday,
      collegeAge: startCollegeAge,
      educationTime:durationOfEducation,
      currentCost:approxCurrentCost,
      expReturnRate: expectedRateReturn,
      inflationRate: expecetdInflation
  };

  axios.post('http://localhost:5010/api/education', data).then((res) => {
      console.log("lllllll", res.data);
  
        setSipAmount(res.data.data)
        setLumpsum(res.data.lumpsum)
        setTotalAmtRequired(res.data.totalAmtRequired)
        $(document).scrollTop($("#result").height());

        setLoaded(loaded)


  })

  }


// for Start Child  Age

  
  let incChildAge = () => {
    if (childAgeTOday < 60) {
      setChildAgeTOday(Number(childAgeTOday) + 1);
    }
  };
  let decChildAge = () => {
    if (childAgeTOday > 1) {
      setChildAgeTOday(childAgeTOday - 1);
    }
  }


// for Approx cost

  let incApproxCurrentCost = () => {
    if (approxCurrentCost) {
      setApproxCurrentCost(Number(approxCurrentCost) + 500);
    }
    else if (approxCurrentCost == 0) {
      setApproxCurrentCost(Number(approxCurrentCost) + 500);
    }

  };
  let decApproxCurrentCost = () => {
    if (approxCurrentCost >= 500) {

      setApproxCurrentCost(approxCurrentCost - 500);
    }
    else if (approxCurrentCost < 499) {
      setApproxCurrentCost(0);
    }
  }


// for Start college Age

  let incCollegeAge = () => {
    if (startCollegeAge < 60) {
      setStartCollegeAge(Number(startCollegeAge) + 1);
    }
  };
  let decCollegeAge = () => {
    if (startCollegeAge > 1) {
      setStartCollegeAge(startCollegeAge - 1);
    }
  }

  let incDurationEducation = () => {
    if (durationOfEducation < 60) {
      setDurationOfEducation(Number(durationOfEducation) + 1);
    }
  };
  let decDurationEducation = () => {
    if (durationOfEducation > 1) {
      setDurationOfEducation(durationOfEducation - 1);
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

  let incExpecetdInflation = () => {
    if (expecetdInflation < 60) {
      setExpecetdInflation(Number(expecetdInflation) + 1);
    }
  };
  let decExpecetdInflation = () => {
    if (expecetdInflation > 1) {
      setExpecetdInflation(expecetdInflation - 1);
    }
  }


  // control for Limit ********************
  const limitChild =() =>{
    // console.log("ssssss",typeof Number(childAgeTOday));
    if(parseInt(childAgeTOday)>25){
      setChildAgeTOday(parseInt(25));
    }else if(parseInt(startCollegeAge)>30){
      setStartCollegeAge(parseInt(30))
    }else if(parseInt(durationOfEducation)>20){
      setDurationOfEducation(parseInt(20))
    }else if(parseInt(approxCurrentCost)>100000000){
      setApproxCurrentCost(parseInt(100000000))
    }else if(parseInt(expectedRateReturn)>50){
      setExpectedRateReturn(parseInt(50))
    }else if(parseInt(expecetdInflation)>50){
      setExpecetdInflation(parseInt(50))
    }

  }

  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3">Child Education Planning Calculator</h2>
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
                <div className="results pt-2">
                  <div className="shadow-pro br-50 px-4 pb-5">
                    <section className="pt-5 pb-5">

                      <div className="row" id="marriage-1">

                        {/*first*/}

                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Child's age today (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27"onClick={decChildAge}  ></img>
                            <input type="number" className="form-control" name="m-saving"  value={childAgeTOday}onKeyUp={limitChild} onChange={(e) => setChildAgeTOday(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27"onClick={incChildAge} ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Start college at age (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decCollegeAge}></img>
                            <input type="number" className="form-control" name="year" value={startCollegeAge}onKeyUp={limitChild} onChange={(e) => setStartCollegeAge(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27"  onClick={incCollegeAge}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Duration of education(Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decDurationEducation}></img>
                            <input type="number" className="form-control" name="return" value={durationOfEducation}onKeyUp={limitChild} onChange={(e) => setDurationOfEducation(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incDurationEducation} ></img>
                          </div>
                        </div>

                      </div>

                      {/*second*/}

                      <div className="row" >
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Approx current cost per year(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decApproxCurrentCost}></img>
                            <input type="number" className="form-control" name="m-saving" value={approxCurrentCost} onKeyUp={limitChild} onChange={(e) => setApproxCurrentCost(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incApproxCurrentCost}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Expected rate of return(%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedRateReturn}></img>
                            <input type="number" className="form-control" name="year" value={expectedRateReturn} onKeyUp={limitChild} onChange={(e) => setExpectedRateReturn(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedRateReturn}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Expected inflation rate (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpecetdInflation}></img>
                            <input type="number" className="form-control" name="return"onKeyUp={limitChild} value={expecetdInflation} onChange={(e) => setExpecetdInflation(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpecetdInflation}></img>
                          </div>
                        </div>

                      </div>
                      <div className="col-md-12  text-right mt-5 text-xs-center">

                        <button className="new-btn1" onClick={childCalculater}>Calculate</button>

                      </div>

                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3 p-lg-5" id="result">

                      <div className="col-md-12 px-5 pt-4">
                        <div className="col-md-12 result-title text-center py-3">
                          <h3>Result</h3>
                        </div>
                        <div className="result-content col-md-12 text-center">

                          <div className="text-label font-weight-500 py-2">
                            Corpus required at start of college (₹)
                          </div>
                          <div className="inputf transcard bg-light-red py-2">{totalAmtRequired}</div>

                        </div>
                      </div>
                      <div className="col-md-12 px-5 pt-4">
                        <div className="col-md-12 result-title text-center py-3">
                          <h3>Plan of action required</h3>
                        </div>
                        <div className="row result-content text-center">
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
                            <div className="inputf transcard bg-light-red py-2">{SipAmount}</div>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="row px-5 pt-5">
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
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is Child Education Planning ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Regardless of who you are, a businessman or a salaried individual, everyone needs to have a financial goal that accounts for their future responsibilities. Having a goal translates into a financially secure future, provided an investment strategy is outlined to achieve this goal. One of the major financial goals in your life is Child Education.</p>
                      <p>Maybe you don’t see yourself getting married or settling down anytime soon, but that does not mean that you shouldn't plan for the future. Maybe your child has already touched the age of 10 and now you are realizing the need to plan for his/her education. Compounding wealth takes time, and the sooner you start, the faster you shall be able to enjoy the money saved, this is the thumb rule. But it's nothing to worry about, as they say, it's never too late to start.</p>
                      <p>Investing money in a Child Education Plan is a step in the financially secure direction you are looking to move in. This investment plan offers you the opportunity to save the money you shall need years later, so you don’t have to liquidate assets or avail loans when the need arises, be it for paying for your Child's Education in that prestigious college, or any other career move your child or you may be considering.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Child Education Planning Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>A Child Education Planning Calculator is used for computing the amount an individual may require to fund his or her Child's Education. This online investment planner takes into account factors like the child’s present age, the age when he is likely to need that money, the rate of returns the investment is likely to fetch, and the inflation rate, among other things, to project the corpus required. Moreover, it also computes and projects the amount that needs to be invested to achieve the targeted corpus, be it every month, or as a one-time lumpsum investment.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> How should you plan for your Child’s Education ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Education is one of the significant expenses that have to be taken into account when planning your child’s future. What makes the task difficult is the numerous variables that have to be kept in mind before outlining an investment strategy for fulfilling this purpose. The escalating cost of education and the ever-growing inflation index are two such factors. Also, none of us know what line of education our child will end up pursuing. This makes putting a number on the amount needed extremely difficult.</p>
                      <p>Investing in a Child Education Plan helps build the money you shall need to fund your child’s education. But this needs to be done with great care and planning, as a flawed investment strategy may cause you to miss your targeted corpus. Also, the growth trajectory of the investments made needs to be monitored round-the-clock, to ensure that the returns fetched are in line with the targeted corpus.</p>
                      <p>To finalise a suitable strategy, investors need to discuss options with their wealth management consultant, who shall do the research needed to identify their investment risk profile and monetary obligations before making a recommendation.</p>
                      <p>At BFC Capital, we pay the attention to detail required to cater to your financial needs appropriately. Investment options are recommended and customised to match your requirements. Moreover, your investments are subjected to relentless monitoring to avoid any shortfall in the returns fetched.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> Best Child Education Plans </Accordion.Header>
                    <Accordion.Body>
                      <p>The assurance of a secure future is the best gift parents can give a child. But how do we ensure this ? Investing money in the right products can get the job done, most of us understand this, but which ones ? The numerous options presently afloat in the financial universe tend to leave guardians clueless about the right investment choice.</p>
                      <p>There was a time when investing in FDs could get the job done, but with fixed deposit interest rates plummeting every other quarter, investors are faced with the risk of falling short of the targeted corpus. The same is the case with company fixed deposits. Yes, they offer relatively higher returns, but they do not have the potential to multiply the money infused, expeditiously.</p>
                      <p>Those thinking of investing in traditional insurance plans are also faced with a similar dilemma. All these investment options, although trusted and old, simply do not possess the attributes needed to ensure a safe future for your child. Parents, when investing money for their child’s future, need to opt for products that can grow expeditiously over the long term through compounding, and have the potential to outrun the inflation index.</p>
                      <p>The suitable course of action herein is to discuss options with a certified financial planner, outline an investment strategy in advance, and diversify investments accordingly.</p>
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
export default ChildEducationCalculator;