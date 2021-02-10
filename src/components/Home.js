import React from 'react'
import './Home.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo512.png'

function Home() {
    return (
        <div className="home">
            <div className="home__title">
                <div id="title" class="carousel slide" data-ride="carousel" data-interval={4000} data-pause="false">

                    <ul class="carousel-indicators">
                        <li data-target="#title" data-slide-to="0" class="active"></li>
                        <li data-target="#title" data-slide-to="1"></li>
                        <li data-target="#title" data-slide-to="2"></li>
                    </ul>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={logo} alt="Los Angeles" />
                        </div>
                        <div class="carousel-item">
                            <img src={logo} alt="Chicago" />
                        </div>
                        <div class="carousel-item">
                            <img src={logo} alt="New York" />
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#title" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#title" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="overlay">
                    <h4>Designauts</h4>
                    <p>Designauts is the design club of IIT Mandi. Graphic Design, Ui/Ux, Animations, Digital Art.. WE DO IT ALL! Welcome to the official site, feel free to check out more about us or get in touch for collabs/events.</p>
                </div>
            </div>

            <div className="home__about">
                <h2 className="heading">What do we do?</h2>
                <div className="about__row">
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                </div>
                <p>And a lot more than this to find out</p>
            </div>


            <div className="home__competition">
                <h2 className="heading">Competitions</h2>
                <div className="competition__row">
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                </div>
                <p>And a lot more than this to find out</p>
            </div>


            <div className="home__team">
                <h2 className="heading">Team 2020-21</h2>
                <div className="team__row">
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                    <div className="about__card">
                        <img src={logo} alt="logo" className="card__img"/>
                        <div className="card__text">Dummy</div>
                    </div>
                </div>
                <p>And a lot more amazing people. Join us to find out ;]</p>
            </div>
            
        </div>
    )
}

export default Home;
