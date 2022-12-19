import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import { Doughnut } from "react-chartjs-2";
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

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [period, setPeriod] = useState(10);
  const [expectedRateRetuen, setExpectedRateRetuen] = useState(3);
  const [lumpsums, setLumpsums] = useState(1343);
  const [gains, setGains] = useState(343);
  const [loaded, setLoaded] = useState(true);


  const data = {
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [investment, gains],
        backgroundColor: ["#F06D70", "#97C5FB"],
      }
    ],
    labels: ["Present Value", "Gain"]
  }

  const lumpsumCalculate = () => {
    setLoaded(!loaded)

    const data = {
      investment: investment,
      period: period,
      returnValue:expectedRateRetuen
  };

  axios.post('http://localhost:5010/api/lumpsum', data).then((res) => {
      console.log("lllllll", res.data.data);
     
      setLumpsums(res.data.data.lumpsum);
      setGains(res.data.data.gains);
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

  let incPeriod = () => {
    if (period < 60) {
      setPeriod(Number(period) + 1);
    }
  };
  let decPeriod = () => {
    if (period > 1) {
      setPeriod(period - 1);
    }
  }

  
  let incExpectedRateRetuen = () => {
    if (expectedRateRetuen < 60) {
      setExpectedRateRetuen(Number(expectedRateRetuen) + 1);
    }
  };
  let decExpectedRateRetuen = () => {
    if (expectedRateRetuen > 1) {
      setExpectedRateRetuen(expectedRateRetuen - 1);
    }
  }
  const valueLimit = () =>{
    if(parseInt(investment)>1000000){
      setInvestment(1000000)
    }else if(parseInt(period)>50){
      setPeriod(50)
    }else if(parseInt(expectedRateRetuen)>50){
      setExpectedRateRetuen(50)
    }
  }

  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3 pb-4">Lumpsum Calculator</h2>
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
                        <div className="col-md-4 text-center">
                          <label for="m-saving"
                            className="text-label font-weight-500 py-2">
                            Investment(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt=""
                              className="img-fluid max-27" onClick={decInvestment}></img>
                            <input type="text" className="form-control" value={investment} onKeyUp={valueLimit} onChange={(e) => setInvestment(e.target.value)}
                              name="m-saving" placeholder="200" />
                            <img src={plus} alt="" onClick={incInvestment}
                              className="img-fluid max-27"></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year"
                            className="text-label font-weight-500 py-2">
                            Period (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" onClick={decPeriod}
                              className="img-fluid max-27"></img>
                            <input type="text" className="form-control" value={period} onKeyUp={valueLimit} onChange={(e) => setPeriod(e.target.value)}
                              name="year" placeholder="5" />
                            <img src={plus} alt="" onClick={incPeriod}
                              className="img-fluid max-27"></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return"
                            className="text-label font-weight-500 py-2">
                            Expected Rate of Return (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt=""
                              className="img-fluid max-27" onClick={decExpectedRateRetuen}></img>
                            <input type="text" className="form-control" value={expectedRateRetuen} onKeyUp={valueLimit} onChange={(e) => setExpectedRateRetuen(e.target.value)}
                              name="return" placeholder="7" />
                            <img src={plus} alt=""
                              className="img-fluid max-27" onClick={incExpectedRateRetuen}></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pt-2 mt-1 text-right text-xs-center">
                        <button className="new-btn1 mt-4" onClick={lumpsumCalculate}> Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro  br-50 mx-lg-3" id="result">
                      <div className="col-md-4">
                        <div className="result-content result-content-shadow-pro">
                          <ul className="text-center">
                            <li>
                              <div
                                className="text-label font-weight-500 py-2">
                                Present Value(₹)
                              </div>
                              <div
                                className="inputf transcard bg-white py-2">
                                {investment}</div>
                            </li>
                            <li>
                              <div
                                className="text-label font-weight-500 py-2">
                                Gain(₹)
                              </div>
                              <div
                                className="inputf transcard bg-white py-2">
                                {gains}</div>
                            </li>
                            <li>
                              <div
                                className="text-label font-weight-500 py-2">
                                Future Value(₹)
                              </div>
                              <div
                                className="inputf transcard bg-white py-2">
                                {lumpsums}</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8  pt-5">
                        <div className="result-title text-center">
                          <h2>Result</h2>
                        </div>
                        <div className="pt-4">
                          <Doughnut data={data} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                          }}
                            width={638} height={341} />
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
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Lumpsum Calculator ? </Accordion.Header>
                    <Accordion.Body>
                      <p>A Lumpsum Calculator is an online tool used for computing the corpus one-time mutual fund investments may compound into overtime. Investors can use this tool to compute their investments’ returns at varying time intervals like 1-year, 3-years, 5-years, etc. The logic governing this tool takes into account the amount parked in the investment, the average rate of return the investor is expecting, and the investment tenure to fetch the desired projection.</p>
                      <p>Using this tool is a practice encouraged among investors, as it helps them get a better picture of the end result, and consequently, make better, and well-informed financial decisions.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> How does a Mutual Fund Lumpsum Calculator help you ?</Accordion.Header>
                    <Accordion.Body>
                      <p>"As already discussed, Lumpsum Calculators are used to compute the corpus an investment may compound into over the opted tenure of investment. Now, let’s try and understand the significance of such estimations with the help of the example listed below. Let’s assume herein the investor is looking to invest money with the intent of buying a house 15 years from today.</p>
                      <p>He presently has Rs. 5,00,000 in hand, which he chooses to invest in a mutual fund, that may draw returns at the rate of 12%. To plan ahead, he needs to know what this investment shall compound into. Consequently, he feeds the certain figures in the Lumpsum Calculator, namely the investment amount, the tenure of investment, and the expected rate of return.</p>
                      <p>Upon hitting “Calculate”, the tool computes the values to arrive at a compounded approximate value of Rs. 27,36,000. This projection shall allow the investor to entertain the idea of buying something close to this value, and if need be, make additional lumpsum investments at intermittent intervals to achieve the final corpus he/she may be targeting."</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> What are the benefits/advantages of Lumpsum Mutual Fund Investments ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Lumpsum Mutual Fund Investments are apt for individuals who wish to make investments in mutual funds in one shot i.e without the involvement of an instalment plan. Lumpsum investments are simpler as compared to other modes of investment as they allow you to invest as per your convenience and fund availability.</p>
                      <p>The freedom to invest at time intervals of your choice, based on fund availability, makes investing in a lumpsum the preferred mode of parking funds for many individuals. The returns fetched herein are tax-efficient, which coupled with the absence of a lock-in period, a favorable aspect of open-ended mutual funds, makes investing money in one go a very tempting and liquid option.</p>
                      <p>Besides, there is no upper limit to the amount that can be invested in mutual funds in a lumpsum, so you can keep parking all the money you wish to without a worry in the world. However, those still reluctant, need to understand that the money sitting in their savings bank account shall never grow beyond a certain point, as it simply cannot fetch returns equalling the inflation rate.</p>
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