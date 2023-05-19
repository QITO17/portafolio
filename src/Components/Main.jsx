import React from 'react'
import logo from './img/logo.png'
import button from './img/button.png'
import robot from './img/image.png'
import gafas from './img/gafas.png'
import logo360 from './img/logo360.png'
import control from './img/control.png'
import dinero from './img/dinero.png'
import imgCode from './img/imgCode.png'
import imgGoogle from './img/imgGoogle.png'
import Acaprojects from './Acaprojects'
import { Link } from 'react-router-dom'
import Videover from './Videover'
import videoo from './video/bg.mp4'
const Main = () => {
    const remove = () => {
        const banner = document.querySelector('.conteiner--nav');
        if(banner.classList.contains('show--nav')){
            banner.classList.remove('show--nav')
        }
    }

    const add = () => {
        const banner = document.querySelector('.conteiner--nav')
        banner.classList.add('show--nav')
    }
  return (
<div className='v22'>
    <div className='v2'>
        <video loop autoPlay muted className='videoo'>
            <source src={videoo} type="video/mp4" />
        </video>
    </div>
    
    <header>
        <nav className="navegation">
            <div className="conteiner--nav">
                <i className="gg-close-o" onClick={remove}></i>
                <p  className='enjoy'>WELCOME THIS IS THE MENU</p>
                <p className='enjoy'>ENJOY LIFE!!</p>
                <ul className='nav--list'>
                    <li><a href=""><i className='bx bxs-home'></i>Home</a></li>
                    <li><Link to="/proj"><i className='bx bxs-hard-hat'></i>Projects</Link></li>
                    <li><Link to="/aboutme"><i className='bx bx-child'></i>About me</Link></li>
                    <li><Link to="/conctat" href=""><i className='bx bxs-contact'></i>Contact Me</Link></li>
                </ul>
                <p className='enjoy'>Enjoy your stay on the website</p>
                <button className='enjoy' onClick={remove}>Cerrar</button>
            </div>
        </nav>
        
        <div className="conteinerHeader">
            <div className="conteiner">
                <img src={logo} alt="logo" className='logo'/>
                <img className='buttonMenu' src={button} alt="logo" onClick={add} />
            </div>
            <div className="contenedor">
                <div className="imgRobot">
                    <img className='robot' src={robot} alt="" />
                </div>
                <div className="conteiner--main">
                            {/* <img src={back} alt="" /> */}
                        <div className="content">
                            <h1 className="present">
                                <span id='colorTitle'>Hi!  </span>I Am Arley And I Am Full Stack Developed.
                            </h1>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error delectus vel ex minus. Maxime molestiae vitae, itaque, magnam quidem aperiam sed suscipit nihil repellendus corporis, obcaecati consequatur sunt similique.</p>
                                <button className='click'>Click here</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </header>
    <main>
        <section>
            <article>
               
            </article>

            <article className='nave'>
                <div className="conteiner--target">
                    <div className="card--target">
                        <div className="">
                            <img src={gafas} alt="" />
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                            </p>  
                        </div>
                    </div>

                    <div className="card--target">
                        <div>
                            <img src={logo360} alt="" />
                        </div>

                        <div>
                            <p>
                            Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                            </p>  
                        </div>
                    </div>

                    <div className="card--target">
                        <div>
                            <img src={control} alt="" />
                        </div>

                        <div>
                            <p>
                            Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                            </p>  
                        </div>
                    </div>

                    <div className="card--target">
                        <div>
                            <img src={dinero} alt="" />
                        </div>

                        <div>
                            <p>
                             Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                            </p>  
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <div className="imageWithCircle">
            {/* <img className='image3' src={back2} alt="" /> */}
        </div>
        <div className="conteiner--item--img">
            <div className="conteinerSectionImg">
            <div className="presentImgs">
                <h2><span id='colorLast'>Last Landing</span> and web site projects!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nostrum saepe similique asperiores officia, voluptates vero nobis sequi vitae. Delectus vitae dicta maiores dolorum commodi maxime enim, veritatis quaerat eius.</p>
            </div>

            <div className="conteiner--images">
                <img className='image4' src={imgGoogle} alt="" />
            </div>
        </div>

            <div className="conteinerSectionImg1">
                <div className="presentImgs">
                    <h2><span id='colorLast'>Build  </span> A whole new world</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nostrum saepe similique asperiores officia, voluptates vero nobis sequi vitae. Delectus vitae dicta maiores dolorum commodi maxime enim, veritatis quaerat eius.</p>
                </div>
                <div className="conteiner--img--code">
                    <div className="conteiner--images container--image--code">
                        <img className='image5' src={imgCode} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <Videover />
        </section>
        <section>
            <Acaprojects />
        </section>
    </main>

    

    <footer>
        <div className="conteinerFooter">
            <div className="spaceFooter">
                <h3>Contact me!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore fuga accusantium, dolorum fugiat reiciendis totam ab nihil mollitia delectus dolorem accusamus similique, quisquam amet, id sit voluptate labore veritatis.</p>
                <button>Click Here</button>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Main