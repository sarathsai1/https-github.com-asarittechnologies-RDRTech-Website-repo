import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Statictics() {
    const [counterState, setCounterState] = useState(false)
    return (
        <div>
            {/* Statistic prograss start */}
            <div className='section3'>

                <div className='statistic'>
                    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                        <div>
                            <h1>RDRTech Analysis</h1>
                        </div>
                        <br />

                        <br />
                        <div className='progress'>
                            <div className='Statictics-project'>
                                <div className='user'>
                                    <div className='number4'>
                                        {counterState &&
                                            <CountUp start={0} end={1389}><div className='num' data-val="1389">000</div></CountUp>

                                        }
                                    </div>

                                    <div className='text-project-1'><p>Projects</p></div>

                                </div>
                                <div>
                                    Discover our latest work and get inspired!
                                </div>
                            </div>
                            <div className='Statictics-project'>
                                <div className='user1'>
                                    <div className='number3'>
                                        {counterState &&
                                            <CountUp start={0} end={1835}><div className='num' data-val="599">000</div></CountUp>
                                        } </div>
                                    <div className='text-project-2'><p>Active <br />Projects</p></div>

                                </div>
                                <div>
                                    Watch this space for updates on our ongoing projects!
                                </div>

                            </div>
                            <div className='Statictics-project'>
                                <div className='user2'>
                                    <div className='number2' >
                                        {counterState &&
                                            <CountUp start={0} end={2865}><div className='num' data-val="599">000</div></CountUp>
                                        } </div>

                                    <div className='text-project-3'><p>Active <br />Clients</p></div>

                                </div>
                                <div>
                                    Our active clients drive our passion for excellence.
                                </div>
                            </div>
                            {/* <div className='Statictics-project'>
                            <div className='user3'>
                                <div className='number1'>
                                {counterState &&
                                    <CountUp start={0} end={3599}><div className='num' >000</div></CountUp>
                                }
                                </div>
                                <div className='text-project'><p>Approved <br />Projects</p></div>
                            </div>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </div>
                            </div> */}

                        </div>
                    </ScrollTrigger>
                </div>

            </div>
            {/* Statistic prograss end */}
        </div>
    )
}

export default Statictics
