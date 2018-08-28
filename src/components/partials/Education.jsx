import React from 'react';

export const Education = () => (
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">Education</span>
        <h2 className="colorlib-heading animate-box">Education</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
        <div className="fancy-collapse-panel">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                     aria-controls="collapseOne">University Education
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                   aria-labelledby="headingOne">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="education-list-wrapper">
                        <li><strong>Ahmadu Bello University, Zaria, Nigeria</strong></li>
                        <li>Bsc. Computer Science</li>
                        <li><small>First Class Honours</small></li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <p className="text-right"><strong>2011 - 2015</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                     aria-expanded="false" aria-controls="collapseTwo">Secondary Education
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="headingTwo">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="education-list-wrapper">
                        <li><strong>Abdulaziz Attah Memorial College, Okene, Nigeria</strong></li>
                        <li>Senior Secondary School Certificate</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <p className="text-right"><strong>2004 - 2010</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                     aria-expanded="false" aria-controls="collapseThree">Primary Education
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="headingThree">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="education-list-wrapper">
                        <li><strong>Al-Hilal Nursery and Primary School, Okene, Nigeria</strong></li>
                        <li>Primary School Leaving Certificate</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <p className="text-right"><strong>1998 - 2004</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
