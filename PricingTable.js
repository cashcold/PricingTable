import React, { Component } from 'react';
import './style.css'
class PricingTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='pricing__main'>
                <section className='pricingNow'>
                   <div className='title'>Choose Your Plan</div>
                   <div className='container container__2'>
                       <div className="box box__1">
                           <h1>Basic</h1>
                           <h2 className='popular__1'>Beginner</h2>
                           <div className="price">$0</div>
                           <p>per month</p>
                           <div className="content">
                               Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                           </div>
                           <div className="content">
                               Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                           </div>
                           <div className="content">
                               Lorem ipsum dolor sit amet.<i className='fa fa-times'></i>
                           </div>
                           <div className="content">
                               Lorem ipsum dolor sit amet.<i className='fa fa-times'></i>
                           </div>
                           <a href='' className='btn btn-warning'>Choose this Plan</a>
                       </div>
                       <div className="box box__2">
                            <h1>Primium</h1>
                            <h2 className='popular'>Popular</h2>
                                <div className="price">$49</div>
                                <p>per month</p>
                                <div className="content">
                                    Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet.<i className='fa fa-times'></i>
                                </div>
                                <a href='' className='btn btn-warning'>Choose this Plan</a>
                       </div>
                       <div className="box box__3">
                        <h1>Enterprise</h1>
                        <h2 className='popular__3'>Popular</h2>
                            <div className="price">$99</div>
                            <p>per month</p>
                            <div className="content">
                                Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet.<i className='fa fa-check'></i>
                            </div>
                           <a href='' className='btn btn-warning'>Choose this Plan</a>
                       </div>
                   </div>
                </section>
            </div>
         );
    }
}
 
export default PricingTable;