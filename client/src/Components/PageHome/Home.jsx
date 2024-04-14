import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css'

//Import assets (Images, videos, icons)
import Video from '../../assets/Video.mp4'
import example from '../../assets/example.png'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-violet-100 aspect-square w-full h-[100vh]">
        <div className="homeContainer flex bg-violet-200">
          <div className="videoDiv bg-violet-50">
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-[75%] h-2 my-5 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <span class="absolute px-10 font-[Montserrat] text-2xl text-gray-900 rounded -translate-x-1/2 bg-white left-1/2 dark:text-black dark:bg-violet-50">Promesa</span>
            </div>
            <video src={Video} controls className='shadow-2xl'></video>
          </div>  

          <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-violet-50 outline outline-offset-2 outline-violet-200">
            <img src={example} class="w-full" alt=" example" />
            <div class="px-6 py-3">
              <div class="font-bold text-xl mb-2">Se parte de esta comunidad!</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-16 pt-4 pb-8 items-center justify-center">
              <a href='/Login'>
              <button className='bg-violet-600 hover:bg-violet-800 text-white font-bold font-[Montserrat] py-2.5 px-10 border border-violet-800 rounded outline outline-offset-2 outline-violet-500 cursor-pointer'>
                Prueba Gratuita! → </button>
              </a>
            </div>
          </div>
        </div>

        <section className="my-8 bg-violet-100 text-gray-800 w-full">
          <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
            <h1 className="p-4 text-4xl font-semibold leadi text-center">Lo que dicen nuestros clientes sobre nosotros!</h1>
          </div>
          <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-7 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-8 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-8 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-8 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-8 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-[27%] p-8 rounded-b-lg text-gray-50 bg-violet-600">
                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home