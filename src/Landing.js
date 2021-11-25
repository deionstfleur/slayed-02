import React from 'react'
import './App.css';

const Landing = () => {
    return (
        <div>
            <div id="front-card">
                <div class="container">
                    <div className="middle">

                    <div id="dt">
                      <h1  class="text-center home-title">Slayed by Sarah.</h1>


                    </div>

                    <div class="text-center">

                        <div id="home-width" class="row">
                           
                            <div class="col-6">
                                <a target="_blank" style={{textDecoration: 'none'}} href="https://instagram.com/slayedbysarah?utm_medium=copy_link">
                                    <p className="home-btn">Instagram</p>
                                </a>
                            </div>

                            <div class="col-6">
                            <a target="_blank" style={{textDecoration: 'none'}} href="https://twitter.com/">
                                <p className="home-btn">Twitter</p>
                            </a>
                            </div>

                        </div>
                      
                    </div>


                    
{/* 
                    <div class="col-md-6 col-xs-12">
                    <img style={{paddingTop: 83}} height="200" width="200" src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
                </div> */}
                    </div>
                </div>
              

            </div>
        </div>
    )
}

export default Landing
