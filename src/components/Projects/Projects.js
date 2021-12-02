import React from 'react';
import img from '../image/photo-1587833823162-763b9eab0f74.jpeg'
const Projects = () => {
    const imgStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1"
    }
    return (
        <div id="projects" className="relative lg:text-white top-44 ">
            {/* <h1 className="text-6xl text-center">Projects
            </h1> */}
            {/* <img style={imgStyle} src={img} alt="" /> */}


            <div class="bg-green-100 py-14">
    {/* <h3 class="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3> */}
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Projects</h1>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">
      {/* <!-- box-1 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Communications</h1>
            <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
            <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>

      {/* <!-- box-2 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Inspired Design</h1>
            <p class="mt-4 text-gray-600">Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
            <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>

      {/* <!-- box-3 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Happy Customers</h1>
            <p class="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
            <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Projects;