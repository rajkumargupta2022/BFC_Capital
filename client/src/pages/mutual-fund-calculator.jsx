import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.png"
import plus from "../assets/img/add.png"
import 'animate.css';
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js';
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

  const [monthlySavings, setMonthlySavings] = useState(10000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [expectedRateReturn, setExpectedRateReturn] = useState(10);
  const [totalSaving, setTotalSaving] = useState('6,00,000');
  const [sgains, setSgains] = useState('7,80,823');
  const [totalMonth, setTotalMonth] = useState(5);
  const [loaded, setLoaded] = useState(true);

  const [data1, setData1] = useState([{
    name: "Market Value", data:
      { "0 Year": 0, "1 Year": 126703, "2 Year": 266673, "3 Year": 421300, "4 Year": 592118, "5 Year": 780824 }
  }, { name: "Amount Invested", data: { "0 Year": 0, "1 Year": 120000, "2 Year": 240000, "3 Year": 360000, "4 Year": 480000, "5 Year": 600000 } }
  ])


  const lumpsumCalculate = () => {
    setLoaded(!loaded)

    const data = {
      investment: investment,
      period: period,
      returnValue: expectedRateRetuen
    };

    axios.post('http://localhost:5010/api/lumpsum', data).then((res) => {
      console.log("lllllll", res.data.data);

      setLumpsums(res.data.data.lumpsum);
      setGains(res.data.data.gains);
      $(document).scrollTop($("#result").height());
      setLoaded(loaded)


    })

  }

  const sipCalculate = async (e) => {
    setLoaded(!loaded)

    e.preventDefault();
    const data = {
      monthlySavings: monthlySavings,
      investmentPeriod: investmentPeriod,
      expectedRateReturn: expectedRateReturn
    }

    try {
      await axios.post('http://localhost:5010/api/sip', data).then((res) => {
        console.log("qqqqq", res.data);
        console.log("ssss", res.data.gains);
        setSgains(res.data.gainss);
        setTotalSaving(res.data.totalSaving);
        // setTotal(res.data.mainresults);
        setTotalMonth(res.data.totalMonth);
        $(document).scrollTop($("#result2").height());
        setLoaded(loaded)


        // setLoaded(loaded)


      })

    }
    catch (error) {
      // if (error.response) {
      //   setMsg(error.response.data.msg);

      // }
    }


    var monthlyRate = expectedRateReturn / 12 / 100;

    let mainArray = [];
    let mainFirstObj = { name: "Market Value" };
    let mainSecondObj = { name: "Amount Invested" };
    let firstSubObj = {};
    let secondSubObj = {};
    // if (parseInt(totalMonth) <= 10) {
    for (let i = 0; i < parseInt(investmentPeriod) + 1; i++) {

      console.log("objppppppppp", investmentPeriod + 'Year');

      if (i == 0) {
        firstSubObj[i + 'Year'] = 0;
      } else {
        firstSubObj[i + 'Year'] = (monthlySavings * i * 12).toFixed()
      }

      if (i == 0) {
        secondSubObj[i + 'Year'] = 0;
      } else {
        let marketData = monthlySavings * ((1 + monthlyRate) * ((Math.pow((1 + monthlyRate), i * 12)) - 1) / monthlyRate)
        let marketDataooo = marketData / 12 //(marketData + monthlySavings * i * 12)/ 12
        secondSubObj[i + 'Year'] = (marketDataooo * 12).toFixed()
      }

      // }
      // console.log("obj==", obj1);

    }
    mainFirstObj.data = firstSubObj;
    mainSecondObj.data = secondSubObj;
    mainArray.push(mainFirstObj)
    mainArray.push(mainSecondObj)

    setData1(mainArray)
    console.log("dd", mainArray);


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

  let incNum = () => {
    if (monthlySavings) {
      setMonthlySavings(Number(monthlySavings) + 500);
    }
    else if (monthlySavings == 0) {
      setMonthlySavings(Number(monthlySavings) + 500);
    }

  };
  let decNum = () => {
    if (monthlySavings >= 500) {

      setMonthlySavings(monthlySavings - 500);
    }
    else if (monthlySavings < 499) {
      setMonthlySavings(0);
    }
  }

  let incMonth = () => {
    if (investmentPeriod < 60) {
      setInvestmentPeriod(Number(investmentPeriod) + 1);
    }
  };
  let decMonth = () => {
    if (investmentPeriod > 1) {
      setInvestmentPeriod(investmentPeriod - 1);
    }
  }

  let incPer = () => {
    if (expectedRateReturn < 60) {
      setExpectedRateReturn(Number(expectedRateReturn) + .5);
    }
  };
  let decPer = () => {
    if (expectedRateReturn > 1) {
      setExpectedRateReturn(expectedRateReturn - .5);
    }
  }
  const valueLimit = () => {
    if (parseInt(investment) > 1000000) {
      setInvestment(1000000)
    } else if (parseInt(period) > 50) {
      setPeriod(50)
    } else if (parseInt(expectedRateRetuen) > 50) {
      setExpectedRateRetuen(50)
    }
  }


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

  const showhide = (e) => {
    var datavalue = e.target.getAttribute("data-id");
    if (datavalue == 'lumpsum') {
      e.currentTarget.classList.add('active');
      var element = document.getElementById('sip-tab');
      var showlump = document.getElementById('lumpsum-calculator');
      var showsip = document.getElementById('sip-calculator');
      element.classList.remove('active');
      showlump.classList.add("show", "active");
      showsip.classList.remove("show", "active");
    } else if (datavalue == 'sip') {
      e.currentTarget.classList.add('active');
      var element = document.getElementById('lumpsum-tab');
      var showlump = document.getElementById('lumpsum-calculator');
      var showsip = document.getElementById('sip-calculator');
      element.classList.remove('active');
      showlump.classList.remove("show", "active");
      showsip.classList.add("show", "active");
    }
  }
  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 mb-3 mt-5" >
              <ul class="nav nav-pills nav-fill navtop">
                <li class="nav-item margin_left-4">
                  <a class="nav-link active fs-16" id="lumpsum-tab" href="javascript:viod(0)" data-toggle="tab" onClick={showhide} data-id="lumpsum" >Lumpsum</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-16" id="sip-tab" href="javascript:viod(0)" data-toggle="tab" onClick={showhide} data-id="sip" >SIP</a>
                </li>
              </ul>
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
          <div className="tab-content">
            <div className="tab-pane" id="sip-calculator" role="tabpanel">
              <div className="container pb-5 calculator">
                <div className="row">
                  <div className="col-md-12">
                    <div class="pb-5">
                      <div class="mt-3">
                        <div class="" role="tabpanel">
                          <section>
                            <div className="results pt-3">
                              <div className="shadow-pro br-50 px-5 pb-5">
                                <section className="pt-5 pb-5">
                                  <div className="row">
                                    <div className="col-md-4 text-center">
                                      <label for="m-saving" className="text-label font-weight-500 py-2">
                                        Monthly Savings(₹)
                                      </label>
                                      <div className="d-flex inputf transcard">
                                        <img src={minus} alt="" className="img-fluid max-27" onClick={decNum}></img>
                                        <input type="number" className="form-control" name="m-saving" value={monthlySavings} onChange={(e) => setMonthlySavings(e.target.value)}
                                        />
                                        <img src={plus} alt="" className="img-fluid max-27" onClick={incNum}></img>
                                      </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                      <label for="year" className="text-label font-weight-500 py-2">
                                        Investment Period (Years)
                                      </label>
                                      <div className="d-flex inputf transcard">
                                        <img src={minus} alt="" className="img-fluid max-27" onClick={decMonth}></img>
                                        <input type="number" className="form-control" name="year" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)}
                                        />
                                        <img src={plus} alt="" className="img-fluid max-27" onClick={incMonth}></img>
                                      </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                      <label for="return" className="text-label font-weight-500 py-2">
                                        Expected Rate of Return (% p.a)
                                      </label>
                                      <div className="d-flex inputf transcard">
                                        <img src={minus} alt="" className="img-fluid max-27" onClick={decPer}></img>
                                        <input type="number" className="form-control" name="return" value={expectedRateReturn} onChange={(e) => setExpectedRateReturn(e.target.value)}
                                        />
                                        <img src={plus} alt="" className="img-fluid max-27" onClick={incPer}></img>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12 pt-4  text-right text-xs-center">
                                    <button className="new-btn1 mt-4" onClick={sipCalculate}> Calculate</button>
                                  </div>
                                </section>
                                <div className="row shadow-pro br-50" id="result2">
                                  <div className="col-md-4">
                                    <div className="result-content result-content-shadow-pro">
                                      <ul className="text-center">
                                        <li>
                                          <div className="text-label font-weight-500 py-2">
                                            Amount Invested(₹)
                                          </div>
                                          <div className="inputf transcard bg-white py-2">{totalSaving}</div>
                                        </li>
                                        <li>
                                          <div className="text-label font-weight-500 py-2">
                                            Period (Year)
                                          </div>
                                          <div className="inputf transcard bg-white py-2">{investmentPeriod}</div>
                                        </li>
                                        <li>
                                          <div className="text-label font-weight-500 py-2">
                                            Gains(₹)
                                          </div>
                                          <div className="inputf transcard bg-white py-2">{sgains}</div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-8  py-5">
                                    <div className="result-title text-center">
                                      <h2>Results</h2>
                                    </div>
                                    <div className="pt-4">
                                      <LineChart data={data1} />
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
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane show active" id="lumpsum-calculator" role="tabpanel" >
              <div className="container pb-5 calculator">
                <div class=" mt-3 calculator">
                  <div class="" role="tabpanel">
                    <section>
                      <div className="results pt-3">
                        <div className="shadow-pro br-50 px-5 pb-5">
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
                                  <input type="number" className="form-control" value={investment} onKeyUp={valueLimit} onChange={(e) => setInvestment(e.target.value)}
                                    name="m-saving"
                                  />
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
                                  <input type="number" className="form-control" onKeyUp={valueLimit} value={period} onChange={(e) => setPeriod(e.target.value)}
                                    name="year"
                                  />
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
                                  <input type="number" className="form-control" onKeyUp={valueLimit} value={expectedRateRetuen} onChange={(e) => setExpectedRateRetuen(e.target.value)}
                                    name="return"
                                  />
                                  <img src={plus} alt="" onClick={incExpectedRateRetuen}
                                    className="img-fluid max-27"></img>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 pt-4 text-right">
                              <button className="new-btn1 mt-4" onClick={lumpsumCalculate} > Calculate</button>
                            </div>
                          </section>
                          <div className="row shadow-pro br-50" id="result">
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
                            <div className="col-md-12 text-right">
                              <button className="btn-custom ">Invest Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
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
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Mutual Fund ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Mutual Funds are financial vehicles set up by collecting money from investors who have the same investment goals. The money pool is then invested by the fund manager concerned to buy equities and bonds, with the intent of compounding the corpus over time. In lieu of the investment made, each investor is allocated units that act as a portion of the holdings in the fund.</p>
                      <p>Thereafter, the gains compounded are distributed proportionately among the investors after deducting the expenses incurred.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Mutual Fund Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>A Mutual Fund Calculator is a tool that computes the maturity value of a Mutual Fund investment, based on certain parameters. These include, the amount that is to be invested in the scheme, and the expected rate of returns, amongst others.</p>
                      <p>Thereafter, the potential investor gets to see the lumpsum his investment shall compound into. This computed projection helps potential investors budget their expenses, and consequently set aside the amount that needs to be diverted into the scheme for achieving their financial goals.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> How to use BFC Mutual Fund Calculator ? </Accordion.Header>
                    <Accordion.Body>
                      <p>As already discussed, the investor needs to feed into the BFC Mutual Fund Calculator, the inputs needed for arriving at the desired projection, such as the investment tenure, the amount that is to be diverted into the scheme, and the rate at which the investor is hoping to fetch returns.</p>
                      <p>The user needs to hit the “Calculate” button after feeding these inputs into their respective fields, following which the estimated compounded corpus shall start reflecting on the screen. Users can play around with all sorts of permutations and combinations to arrive at the desired output, and thereby align their finances to meet their monetary goals.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span> How risky are Mutual Funds ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Most investment options carry risks, as they are directly or indirectly affected by the fluctuations of the equity and debt market. The risks involved in Mutual Fund investments can, however, be mitigated by managing the tenure involved. Investors who enter Mutual Funds for quick gains encounter a volatile market, more often than not.</p>
                      <p>Investors opting for the long haul, on the other hand, are able to counter this volatility over the long term. In simpler terms, any money infused in Mutual Funds, be it in a lumpsum or through SIPs, has the potential to tide over the kickbacks of equity market, provided it is allowed sufficient time to do so.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="faqs_greenDot"></span> How much should one invest in Mutual Funds ? </Accordion.Header>
                    <Accordion.Body>
                      <p>This cannot be determined based on the “one size fits all” approach as certain factors have to be considered before suggesting the right amount for investing in Mutual Funds. The word in the market is that minimum 25-30% of one's monthly income should be diverted into savings.</p>
                      <p>This, however, is far from the truth. The amount to be set aside for savings can only be determined after gauging the individual’s financial profile and monetary obligations, irrespective of the asset className. Of this, a certain volume of money needs to be diverted to invest in market-linked products like Mutual Funds, to align the investments with the investor’s financial goals.</p>
                      <p>Besides this, portions of the amount set aside for investing need to be parked in small saving schemes and bank products like FD to diversify investments appropriately, and consequently balance the portfolio.</p>
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