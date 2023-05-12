import React from 'react'
import htmll from './img/html-5.png'
import csss from './img/css-3.png'
import js from './img/js.png'
import reactlogo from './img/reactlogo.png'
import taild from './img/taild.png'
import '../style.css'



const AboutMe = () => {
  return (
    <div className='conteiner1'>
        <div className='present'>
            <h1 className='nombre'>hello welcome</h1>
            <p>
                Yo soy <span className='nombre'>Jostin Arley Hurtado </span>
                 soy un chico sociable divertido
                serio y que le gusta el trabajo
                en equipo, Amo los Video Juegos
                y la técnologia
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus aliquid, placeat quisquam error ipsum rerum qui quaerat nihil praesentium minus? Veritatis facere repellendus illum? Atque sequi repellendus enim quia.
            Quam ab, molestiae dolorum at maiores libero veniam similique hic quas aspernatur provident praesentium corrupti asperiores amet dolorem illum perferendis odit, laborum, consectetur rerum. Aspernatur eius pariatur nostrum architecto ex!
            Voluptatum quos expedita laudantium praesentium. Obcaecati consequatur aperiam veritatis voluptates provident alias quidem porro, natus cumque delectus ipsam a aut nostrum fugit sunt expedita at blanditiis possimus? Praesentium, aut commodi.</p>
        </div>
    <div>
        <h2 className='tec'>Ténologias</h2>
    <ul className='content--imgs'>
            <li>
                <div>
                    <p>HTML</p>
                    <div className='imagenes'><img src={htmll} alt="" /></div>
                </div>
            </li>

            <li>
                <div>
                    <p>CSS</p>
                    <div className='imagenes'><img src={csss} alt="" /></div>
                </div>
            </li>

            <li>
                <div>
                    <p>JavaScript</p>
                    <div className='imagenes'><img src={js} alt="" /></div>
                </div>
            </li>

            <li>
                <div>
                    <p>React</p>
                    <div className='imagenes'><img src={reactlogo} alt="" /></div>
                </div>
            </li>

            <li>
                <div>
                    <p>Tailwindcss</p>
                    <div className='imagenes'><img src={taild} alt="" /></div>
                </div>
            </li>

        </ul>

    <div className='present'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum ut debitis maiores inventore quibusdam dolores dolore distinctio. Molestiae tempore modi accusantium veritatis alias officia, dicta vitae dolores vel exercitationem?
        Enim dignissimos excepturi eaque numquam totam, at eligendi alias odit minus consequatur sequi, dolorem laborum vel deleniti quisquam aut adipisci cum iste amet eum culpa vero nulla saepe? Nihil, inventore.
        Incidunt accusantium esse est fugiat a. Cupiditate quaerat sit iste, et culpa totam maxime. Eligendi magni eaque asperiores! Modi qui earum maiores nisi cumque officiis quia molestiae ea id. Quod.
        Incidunt repellat repellendus nulla hic corporis recusandae magni, natus eligendi in laudantium aliquam veniam, modi nobis sed, ipsa quaerat. Aliquid fugiat quaerat, quisquam voluptatem eligendi ex consectetur sunt quas assumenda?
        Modi in iste id nam fugit? Aliquid, ex amet! Maxime repellat consectetur libero, ex laborum fuga eum rerum? Autem ullam accusamus at aut quia quos esse. Eveniet animi magnam doloribus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam debitis, id, rem unde atque reiciendis sit accusantium itaque alias quae dolorem voluptatem neque fugiat doloribus quasi nesciunt ratione? Natus, sit.
        Quasi repudiandae repellendus qui soluta eveniet ad, animi, nesciunt ab temporibus iure molestiae quae magnam dolorem debitis, vel atque sed! Cupiditate suscipit facilis sit obcaecati commodi tempore fugit et quod.
        At odit aliquid dolore. Vel iste vitae nesciunt facere ab ut maiores earum. Quis, nulla at maxime dignissimos blanditiis soluta ratione aliquam suscipit illo tenetur culpa corrupti doloribus cupiditate dolorum.
        Harum corporis obcaecati ea. Perferendis voluptate dolore amet illum ex nesciunt. Aperiam, hic voluptate voluptates in omnis porro nobis ex! Nam consequatur voluptas quos sunt unde harum odit molestias ipsam.
        Hic eos nesciunt laboriosam ratione, veritatis eius, reiciendis commodi animi pariatur dolorum ab repellendus ea voluptatum. Doloribus suscipit ab laboriosam accusamus veniam sunt ratione, labore assumenda quidem perferendis commodi fugiat?</p>
    </div>
 
    </div>
        <h2>HOBBIES</h2>
       <div className="hobbies">
        <div className='hobi1'><p>Program</p></div>
        <div className='hobi2'><p>Play</p></div>
        <div className='hobi3'><p>Exercise</p></div>
       </div>
    </div>
  )
}

export default AboutMe