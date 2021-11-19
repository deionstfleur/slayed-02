import React from 'react'
import './App.css';

const Landing = () => {
    return (
        <div>
            <div style={{height: 600, backgroundColor: '#3567F5'}}>
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 col-xs-12">
                      <h1 style={{fontSize: 100, paddingTop: 60, color: 'white', width: '90%'}}>Slayed by Sarah</h1>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        {/* <img style={{paddingTop: 83}} height="200" width="200" src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" /> */}
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing
