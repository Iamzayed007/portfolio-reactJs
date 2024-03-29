import React from 'react';
import aboutImg from '../image/img-1.jpeg'

const About = () => {

    return (
        <div id="about" className="relative   lg:text-white top-44 "
    //     data-aos="zoom-in"
    //  data-aos-duration="1000"
        >
         
            <h1 className="text-6xl uppercase font-bold  text-center my-10 text-white  ">About</h1>
            <div className="flex justify-center ">
               
                <h4 className=" text-center w-96 text-2xl py-10 px-6 rounded-xl shadow-lg bg-custom-blue lg:w-1/2">I am looking forward to work in an organization where I can get to learn things to achieve my desire and improve my skills. I would love to work for any organization that is related to create content, web development, problem solving etc.</h4>

            </div>
            <div className="flex justify-center  ">
               
                <a target="_blank" href='https://drive.google.com/file/d/1qbb-oeDm1ujeNPwPx11fz_Ixww9ruX2r/view' class="mt-8 mb-4 py-2 px-10 rounded-full bg-buttonColor text-white tracking-widest  transition duration-200">My Resume</a>

            </div>
            <div>
                {/* <BgVideo /> */}

                {/* <img style={imgStyle} src={aboutImg} alt="" /> */}
            </div>
        </div>
    );
};

export default About;