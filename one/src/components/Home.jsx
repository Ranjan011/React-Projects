import React from 'react';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

import vg from '../assests/2.webp';
const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Tech Star</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution tp the tech problems you face
                        everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta quam id quisquam totam soluta voluptate culpa optio at, quidem pariatur qui sed architecto, illo molestias explicabo quae minus. Earum numquam quia veritatis perspiciatis, quam facilis possimus, quibusdam voluptatibus dolore officiis ullam est? Voluptatum quibusdam officia totam vitae quod unde ab placeat fugit in eveniet maiores facere doloremque quis aliquid exercitationem a ea odit, soluta nostrum earum iure tempore omnis, ipsum ducimus. Fugiat repellat cum sint modi odio temporibus ullam.</p>
                </div>
            </div>


            <div className='home4' id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay:"1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;