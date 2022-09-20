import React from 'react'
import '../css/style.css'
import img1 from '../img/img1.jpg'



export function AboutPage() {
    return (
      <div className="about-studio default-section wow slideInUp">
        <div className="container">
          <h3 className="title">About me</h3>
          <div className="row">
            <div className="col col-4 col-md-12">
              <blockquote>
                <p>Design is not making beauty, beauty emerges from selection, affinities, integration, love.</p>
                <span>— Louis Kahn</span>
              </blockquote>
            </div>
            <div className="col col-4 col-md-6 col-sm-12">
              <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
            </div>
            <div className="col col-4 col-md-6 col-sm-12">
              <p className="default-text">Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.</p>              
            </div>
          </div>
          <div className="row">
            <div className="col col-4 col-sm-12">
              <div className="team-item">
                <div className="team-item-photo">
                  <div className="container-for-flip team-item-front">
                    <img src={img1} alt="" />
                  </div>
                  <div className="container-for-flip team-item-skills">
                    <div className="title title-white title-light">Skills</div>
                    <div className="characteristic">Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.</div>
                    <ul>
                      <li>
                        <div className="skill-name">Branding</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Design</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "65%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Development</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "85%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Photography</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                    </ul>                    
                  </div>
                </div>
                <div className="team-item-info text-center">
                  <span className="team-item-name">Alexey Koshelenko</span>
                  <span className="team-item-role">JavaScript Developerr</span>
                </div>
              </div>
            </div>
            <div className="col col-4 col-sm-12">
              {/* <div className="team-item">
                <div className="team-item-photo">
                  <div className="container-for-flip team-item-front">
                    <img src={img1} alt="" />
                  </div>
                  <div className="container-for-flip team-item-skills">
                    <div className="title title-white title-light">Skills</div>
                    <div className="characteristic">Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.</div>
                    <ul>
                      <li>
                        <div className="skill-name">Branding</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Design</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Development</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Photography</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                    </ul>                    
                  </div>
                </div>
                <div className="team-item-info text-center">
                  <span className="team-item-name">Marta Laning</span>
                  <span className="team-item-role">Web Engineer</span>
                </div>
              </div> */}
              <div>
              Украина – это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами. В Киеве, столице страны, расположен Софийский собор, украшенный золотыми куполами, мозаикой XI века и фресками. Над рекой Днепр возвышается монастырь Киево-Печерская лавра, место паломничества многих православных христиан. В ее скитах хранятся религиозные реликвии, а в катакомбах – мумифицированные останки православных монахов. 
              </div>
            </div>
            <div className="col col-4 col-sm-12">
              {/* <div className="team-item">
                <div className="team-item-photo">
                  <div className="container-for-flip team-item-front">
                    <img src={img1} alt="" />
                  </div>
                  <div className="container-for-flip team-item-skills">
                    <div className="title title-white title-light">Skills</div>
                    <div className="characteristic">Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.</div>
                    <ul>
                      <li>
                        <div className="skill-name">Branding</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Design</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Development</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                      <li>
                        <div className="skill-name">Photography</div>
                        <div className="progress-bar">
                          <div className="progress" style={{width: "75%"}}></div>
                        </div>
                      </li>
                    </ul>                    
                  </div>
                </div>
                <div className="team-item-info text-center">
                  <span className="team-item-name">Steve Anders</span>
                  <span className="team-item-role">Developer</span>
                </div>
              </div> */}
              <div>Украина – это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами. В Киеве, столице страны, расположен Софийский собор, украшенный золотыми куполами, мозаикой XI века и фресками. Над рекой Днепр возвышается монастырь Киево-Печерская лавра, место паломничества многих православных христиан. В ее скитах хранятся религиозные реликвии, а в катакомбах – мумифицированные останки православных монахов. </div>
            </div>
          </div>
        </div>
      </div>
    )
}