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

const RetirementCalculator = () => {
  const [CurrentAge, setCurrentAge] = useState(30)
  const [ExpectedRetirementAge, setExpectedRetirementAge] = useState(60)
  const [MonthlyExpenses, setMonthlyExpenses] = useState(30000)
  const [ExpectedInflation, setExpectedInflation] = useState(6)
  const [CurrentSavingPerMonth, setCurrentSavingPerMonth] = useState(5000)
  const [ExistingCorpus, setExistingCorpus] = useState(200000)
  const [ExpectedPreRetirement, setExpectedPreRetirement] = useState(12)
  const [ExpectedPostRetirement, setExpectedPostRetirement] = useState(7)
  const [LifeExpectancy, setLifeExpectancy] = useState(20)

  const [RetirementYear, setRetirementYear] = useState('30')
  const [Fv, setFv] = useState('1,72,305')
  const [SipAmount, setSipAmount] = useState('4,953')
  const [CorpusMonth, setCorpusMonth] = useState('1,74,74,821')
  const [CorpusExist, setCorpusExist] = useState('50,81,744')
  const [CorpusAch, setCorpusAch] = useState('3,76,72,712')
  const [SHortfall, setSHortfall] = useState('1,51,16,147')
  const [loaded, setLoaded] = useState(true);





  const CalculateRetirement = () => {
    setLoaded(!loaded)

    const data = {
      childAge: CurrentAge,
      retirementAge: ExpectedRetirementAge,
      currentLifestyle: MonthlyExpenses,
      inflationRate: ExpectedInflation,
      currentSaving: CurrentSavingPerMonth,
      existingCorpus: ExistingCorpus,
      expectedPreRetirment: ExpectedPreRetirement,
      expectedPostRetirment: ExpectedPostRetirement,
      lifeExpectancyPostRetirment: LifeExpectancy,
    };

    axios.post('http://localhost:5010/api/retirment', data).then((res) => {

      setRetirementYear(res.data.retirement_yr)
      setFv(res.data.fv)
      setSipAmount(res.data.data)
      setCorpusMonth(res.data.corpus_month)
      setCorpusExist(res.data.corpus_exist)
      setCorpusAch(res.data.corpus_ach)
      setSHortfall(res.data.shortfall_amt)
      $(document).scrollTop($("#result").height());
      setLoaded(loaded)

    })
  }

  let incCurrentAge = () => {
    if (CurrentAge < 60) {
      setCurrentAge(Number(CurrentAge) + 1);
    }
  };
  let decCurrentAge = () => {
    if (CurrentAge > 1) {
      setCurrentAge(CurrentAge - 1);
    }
  }


  // for Approx cost

  let incMonthlyExpenses = () => {
    if (MonthlyExpenses < 1000000) {
      setMonthlyExpenses(Number(MonthlyExpenses) + 500);
    }
    else if (MonthlyExpenses >= 1000000) {
      setMonthlyExpenses(Number(1000000));
    }
    else if (MonthlyExpenses == 0) {
      setMonthlyExpenses(Number(MonthlyExpenses) + 500);
    }

  };
  let decMonthlyExpenses = () => {
    if (MonthlyExpenses >= 500) {

      setMonthlyExpenses(MonthlyExpenses - 500);
    }
    else if (MonthlyExpenses < 499) {
      setMonthlyExpenses(0);
    }
  }

  // for Start college Age

  let incExpectedRetirementAge = () => {
    if (ExpectedRetirementAge < 70) {
      setExpectedRetirementAge(Number(ExpectedRetirementAge) + 1);
    }
  };
  let decExpectedRetirementAge = () => {
    if (ExpectedRetirementAge > 1) {
      setExpectedRetirementAge(ExpectedRetirementAge - 1);
    }
  }



  let incExpectedInflation = () => {
    if (ExpectedInflation < 60) {
      setExpectedInflation(Number(ExpectedInflation) + 1);
    }
  };
  let decExpectedInflation = () => {
    if (ExpectedInflation > 1) {
      setExpectedInflation(ExpectedInflation - 1);
    }
  }

  let incCurrentSavingPerMonth = () => {
    if (CurrentSavingPerMonth) {
      setCurrentSavingPerMonth(Number(CurrentSavingPerMonth) + 500);
    }
    else if (CurrentSavingPerMonth == 0) {
      setCurrentSavingPerMonth(Number(CurrentSavingPerMonth) + 500);
    }

  };
  let decCurrentSavingPerMonth = () => {
    if (CurrentSavingPerMonth >= 500) {

      setCurrentSavingPerMonth(CurrentSavingPerMonth - 500);
    }
    else if (CurrentSavingPerMonth < 499) {
      setCurrentSavingPerMonth(0);
    }
  }

  let incExistingCorpus = () => {
    if (ExistingCorpus) {
      setExistingCorpus(Number(ExistingCorpus) + 500);
    }
    else if (ExistingCorpus == 0) {
      setExistingCorpus(Number(ExistingCorpus) + 500);
    }

  };
  let decExistingCorpus = () => {
    if (ExistingCorpus >= 500) {

      setExistingCorpus(ExistingCorpus - 500);
    }
    else if (ExistingCorpus < 499) {
      setExistingCorpus(0);
    }
  }
  let incExpectedPreRetirement = () => {
    if (ExpectedPreRetirement < 60) {
      setExpectedPreRetirement(Number(ExpectedPreRetirement) + 1);
    }
  };
  let decExpectedPreRetirement = () => {
    if (ExpectedPreRetirement > 1) {
      setExpectedPreRetirement(ExpectedPreRetirement - 1);
    }
  }

  let incExpectedPostRetirement = () => {
    if (ExpectedPostRetirement < 60) {
      setExpectedPostRetirement(Number(ExpectedPostRetirement) + 1);
    }
  };
  let decExpectedPostRetirement = () => {
    if (ExpectedPostRetirement > 1) {
      setExpectedPostRetirement(ExpectedPostRetirement - 1);
    }
  }

  let incLifeExpectancy = () => {
    if (LifeExpectancy < 60) {
      setLifeExpectancy(Number(LifeExpectancy) + 1);
    }
  };
  let decLifeExpectancy = () => {
    if (LifeExpectancy > 1) {
      setLifeExpectancy(LifeExpectancy - 1);
    }
  }



  const valueLimit = () => {
    if (parseInt(CurrentAge) > 60) {
      setCurrentAge(60)
    } else if (parseInt(ExpectedRetirementAge) > 70) {
      setExpectedRetirementAge(70)
    } else if (parseInt(MonthlyExpenses) > 1000000) {
      setMonthlyExpenses(1000000)
    }
    else if (parseInt(ExpectedInflation) > 50) {
      setExpectedInflation(50)
    }
    else if (parseInt(CurrentSavingPerMonth) > 1000000) {
      setCurrentSavingPerMonth(1000000)
    }
    else if (parseInt(ExistingCorpus) > 1000000) {
      setExistingCorpus(1000000)
    }
    else if (parseInt(ExpectedPreRetirement) > 50) {
      setExpectedPreRetirement(50)
    }
    else if (parseInt(ExpectedPostRetirement) > 50) {
      setExpectedPostRetirement(50)
    }
    else if (parseInt(LifeExpectancy) > 100) {
      setLifeExpectancy(100)
    }
  }

  return (
    <>
      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3">Retirement Planning Calculator</h2>
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
                <div className="results pt-5">
                  <div className="shadow-pro br-50 px-4 pb-5">
                    <section className="pt-5 pb-5">

                      <div className="row" >

                        {/*first*/}

                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Current Age (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decCurrentAge}></img>
                            <input type="number" className="form-control" name="m-saving" value={CurrentAge} onKeyUp={valueLimit} onChange={(e) => setCurrentAge(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incCurrentAge}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Expected retirement age (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedRetirementAge}></img>
                            <input type="number" className="form-control" name="year" value={ExpectedRetirementAge} onKeyUp={valueLimit} onChange={(e) => setExpectedRetirementAge(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedRetirementAge}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Monthly expenses for current lifestyle(₹/M)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decMonthlyExpenses}></img>
                            <input type="number" className="form-control" name="return" value={MonthlyExpenses} onKeyUp={valueLimit} onChange={(e) => setMonthlyExpenses(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incMonthlyExpenses}></img>
                          </div>
                        </div>

                      </div>

                      {/*second*/}

                      <div className="row" >
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Expected inflation rate (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedInflation}></img>
                            <input type="number" className="form-control" name="m-saving" value={ExpectedInflation} onKeyUp={valueLimit} onChange={(e) => setExpectedInflation(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedInflation}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Current saving per month (₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decCurrentSavingPerMonth}></img>
                            <input type="number" className="form-control" name="year" value={CurrentSavingPerMonth} onKeyUp={valueLimit} onChange={(e) => setCurrentSavingPerMonth(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incCurrentSavingPerMonth}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Existing Corpus(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExistingCorpus}></img>
                            <input type="number" className="form-control" name="return" value={ExistingCorpus} onKeyUp={valueLimit} onChange={(e) => setExistingCorpus(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExistingCorpus}></img>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2 fs-15">
                            Expected pre retirement returns (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedPreRetirement}></img>
                            <input type="number" className="form-control" name="m-saving" value={ExpectedPreRetirement} onKeyUp={valueLimit} onChange={(e) => setExpectedPreRetirement(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedPreRetirement}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 fs-15">
                            Expected post retirement returns (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decExpectedPostRetirement}></img>
                            <input type="number" className="form-control" name="year" value={ExpectedPostRetirement} onKeyUp={valueLimit} onChange={(e) => setExpectedPostRetirement(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incExpectedPostRetirement}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2 fs-15">
                            Life Expectancy Post retirement(year)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decLifeExpectancy}></img>
                            <input type="number" className="form-control" name="return" value={LifeExpectancy} onKeyUp={valueLimit} onChange={(e) => setLifeExpectancy(e.target.value)} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incLifeExpectancy}></img>
                          </div>
                        </div>

                      </div>

                      <div className="col-md-12  text-right pt-4 text-xs-center">


                        <button className="new-btn1" onClick={CalculateRetirement}>Calculate</button>


                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3 p-lg-5" id="result">


                      <div className="col-md-12 result-title text-center pt-3">
                        <h3>Result</h3>
                      </div>

                      <div className="col-md-12 px-5 pt-3">
                        <div className="row result-content text-center">
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Year to retirement (Years)
                            </div>



                            <div className="inputf transcard bg-light-red py-2">{RetirementYear}</div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Amount Required P.M.-Post <br />Retirement (₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{Fv}</div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Corpus to be Achived @ <br />Retirement(₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{CorpusAch}</div>
                          </div>
                        </div>


                        <div className="row result-content text-center pt-3">
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Corpus you will accumulate with current savings per month(₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{CorpusMonth}</div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Corpus yoy will accumulate with existing savings (₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{CorpusExist}</div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-label font-weight-500 py-2 fs-15">
                              Shortfall in amount(₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">{SHortfall}</div>

                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 px-5 pt-3">
                        <div className="col-md-12 result-title text-center py-3">
                          <h3>Plan of action required</h3>
                        </div>
                        <div className="result-content text-center">

                          <div className="text-label font-weight-500 py-2 fs-15">
                            Extra savings per month required(₹)
                          </div>
                          <div className="inputf transcard bg-light-red py-2">{SipAmount}</div>



                        </div>

                      </div>
                    </div>
                    <div className="row px-5 pt-3">
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
                    <Accordion.Header><span className="faqs_greenDot"></span> What is Retirement Planning ? </Accordion.Header>
                    <Accordion.Body>
                      <p>Retirement Planning refers to the process of planning and managing one's short and long-term finances to help achieve financial independence post-retirement. The absence of an appropriate Retirement Plan could lead to failure in building the needed corpus.</p>
                      <p>This also means that those who do not have a proper Retirement Plan in place run the risk of outliving their savings. This, however, needs to be done by following an investment strategy outlined on the advice of a professional wealth management consultant, who shall take into account factors like the concerned individual’s monthly liabilities, and his investment horizon, among other factors, before recommending a suitable wealth creation plan.</p>
                      <p>Based on the suggestions offered by their financial planning service provider, individuals should compile and diversify their savings bucket for fulfilling their retirement needs.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Retirement Planning Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>Retirement Planning Calculators are online tools used to determine the corpus an individual shall need to compile for leading a comfortable, retired life. This financial goal calculator takes into account the investor’s current age, the age he is to retire in, his present monthly expenses, and the inflation index, among other factors, to deduce the corpus he shall need post-retirement.</p>
                      <p>The tool also helps investors identify the monthly contributions needed to touch that corpus. Retirement Planning Calculators help investors make well-thought-out, informed financial decisions, that are in line with their retirement needs, thereby helping them avoid the risk of outliving their savings.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> How does a Retirement Planning Calculator work ? </Accordion.Header>
                    <Accordion.Body>
                      <p>The logic governing Retirement Planning Calculators takes into account certain factors for projecting the desired results. The investor’s age, the age he is to retire in, his/her current monthly expenses, his savings, and liabilities are among the variables that need to be fed into the calculator before the users hit the “Calculate” button to view their estimated expenses at the time of retirement, the corpus required to meet these expenses, and the amount that needs to be diverted into their portfolio each month for meeting their retirement goals.</p>
                      <p>Let's visualize this with the help of an example: Herein the investor, who is presently 30 years of age, is looking to retire upon touching 60. His current monthly expenses are close to Rs. 40,000, and an existing corpus of Rs. 2,00,000, with Rs. 5,000 diverted into his shortlisted SIP, each month. Let's assume that he shall draw pension till the age of 80, with his investment fetching returns at the rate of 12% pre-retirement and 10% post-retirement. This scenario coupled with an estimated inflation rate of 6% leaves him with a monthly deficit of Rs. 5,000. Simply put, he shall have to invest another Rs. 5,000 per month to build the required corpus of Rs. 1.76 crore for meeting his then monthly expenses, which should be nearly Rs. 2,30,000.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span> Best Retirement Investment Plans</Accordion.Header>
                    <Accordion.Body>
                      <p>To start with, investors can park their money in the mutual fund scheme suggested by their wealth management consultant. If need be, the advisor may suggest diverting some money in other products, like the National Pension System (NPS), the Public Provident Fund (PPF), or Fixed Deposits (FD), based on the individual’s investment risk profile and outstanding liabilities.</p>
                      <p>Investors should understand that a portfolio compiled to build a corpus for retirement needs to be diversified by including various asset classNamees. This helps balance the portfolio, as one asset className may help neutralize the demerits of another. This diversification, however, needs to be done on the recommendations of a certified financial planner, to ensure that all the investments in the bucket work parallelly to achieve the same end result.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="faqs_greenDot"></span> When should one start Retirement Planning ? </Accordion.Header>
                    <Accordion.Body>
                      <p>If experts are to be believed, the sooner the better. The general opinion is that the ideal time to start Retirement Planning is immediately after one starts earning his or her paychecks. No one really knows how long they are going to live, which puts them at the risk of outliving their savings, hence the need to start early. Besides, those who understand compounding, know that investments need adequate time to grow. The gains made in year one have the potential to generate further gains, independently. Given the unpredictable nature of life, it is only apt that a Retirement Plan be put into place as early in life as possible.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header><span className="faqs_greenDot"></span> Retirement Planning with Mutual Funds </Accordion.Header>
                    <Accordion.Body>
                      <p>"Mutual funds are largely popular among those looking to save for retirement, mostly because this asset className has the potential to beat inflation through relatively higher returns. Although such investments are subject to market risks, they are considered a good bet, as the risks involved are mitigated over the long term.</p>
                      <p>A well-planned retirement portfolio usually has a mutual fund as its centerpiece, simply because this asset className offers numerous options to tweak the flow of funds and customize it to match investor priorities, be it the outgo towards the scheme, or the withdrawals an investor may be making. Also, the gains made under this asset className tend to attract nominal tax levies, that can be minimized by adopting a strategy that works its way around related tax provisions.</p>
                      <p>Investing in hybrid funds is another option that suits investors saving for their retirement. Under this asset className, the distribution of the funds infused in equity and debt instruments is balanced to match the needs of the individual concerned. The fact that mutual funds are regulated by an Apex Authority - SEBI, only makes this asset className extremely reliable as the underlying funds are managed in line with the pre-laid norms.”</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header><span className="faqs_greenDot"></span> Fixed Pension with SWP in Mutual Funds </Accordion.Header>
                    <Accordion.Body>
                      <p>"Raising fixed income through a Systematic Withdrawal Plan (SWP) is a suitable alternative for those looking to ensure a pension post-retirement. As the name suggests, this is a mutual fund feature that allows investors to withdraw a certain amount from their corpus at regular intervals, be it monthly, quarterly, or yearly.</p>
                      <p>To accommodate this payout, units are redeemed from the mutual fund the individual has invested in, following which the liquidated amount is transferred to the investor’s bank account, by the AMC concerned. To achieve this, funds under this asset className have to be managed actively, with the portfolio adjusted regularly to keep returns at par with the payout. The investors, if they deem fit, can also pull down or escalate the quantum of the withdrawals, by tweaking the standing instructions they have left with their wealth management consultant.</p>
                      <p>Mutual funds offering systematic withdrawals also allow investors the freedom to switch funds at will. Investors averse to taking risks for high returns can avail this facility to invest in low-risk funds, thereby safeguarding their originally invested corpus from market volatility in the long run.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header><span className="faqs_greenDot"></span> How much Retirement Fund should be allocated in Bank FD ? </Accordion.Header>
                    <Accordion.Body>
                      <p>"Let's start by assuming that all your retirement needs have already been taken care of. All the money you could need to ensure a regular, stable income after retirement is parked in one of the top long term mutual funds, or traditional retirement plans, and all that is left to do is sit back and relax. But what about unforeseen emergencies ? Or the possibility of outliving our savings.</p>
                      <p>Life is unpredictable, and thus the need to have some corpus parked outside your pension investment. This is why parking some corpus in fixed deposits (FD) is of utmost importance. This gives investors the cushion needed to counter such unpredictabilities without compromising on the returns their equity-linked investments are fetching. The investor, however, needs to avoid overdoing this, by ensuring that the money set aside is in line with his/her investment risk profile. "</p>
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
export default RetirementCalculator;