import React from "react";

const Work = () => {
  return (
    <>
      <section className="my-28 px-5" id="work">
        <header className="text-2xl font-bold pt-10">
          <h2>Work</h2>
        </header>
        <div className="my-7 space-y-24">
          <article
            className="flex flex-wrap md:justify-between md:items-center"
          >
            <picture
              className="w-full md:w-6/12 shadow-lg "
            >
              <source
                srcSet={`./images/work/notchup-work.jpg`}
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/webp"
              />
              <source
                srcSet={`./images/rn-mockup-768.jpg 768w,`}
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/jpg"
              />

              <img
                width="768px"
                height="575px"
                loading="lazy"
                alt='MERN eCommerce'
                className="rounded-lg"
              />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">Full Stack Development Intern At NotchUp - (Ed tech startup founded by IIT IIM alumini) (Nov ,2020 - April,2021)</h3>
              <p>Notchup is an EduTech Company that provides you with LIVE online skill development courses designed by IIT, IIM, Harvard Alumni for Ages 5-17 Years</p>
              <div className="flex overflow-visible space-x-3 pb-2">
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    React
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    Nodejs
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    MySQL
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    MongoDB
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    AWS
                  </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-wrap md:justify-between md:items-center"
          >
            <picture
              className="w-full md:w-6/12 shadow-lg md:order-1"
            >
              <source
                srcSet='./images/work/finllect-work.jpg'
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/webp"
              />
              <source
                srcSet={`./images/rn-mockup-768.jpg 768w,`}
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/jpg"
              />

              <img
                width="768px"
                height="575px"
                loading="lazy"
                alt='MERN eCommerce'
                className="rounded-lg"
              />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">Full Stack Development Intern At FInllect (May ,2020 - October,2020)</h3>
              <p> Finllect is a Fin - Tech Company and Under 100 emerging startups in Abu Dhabi, on a mission to make the next generation of consumers become more mindful with their money .  </p>
              <div className="flex overflow-auto space-x-3 pb-2">
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    React
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    Nodejs
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    SocketIo
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    MongoDB
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    Redis
                  </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-wrap md:justify-between md:items-center"
          >
            <picture
              className="w-full md:w-6/12 shadow-lg "
            >
              <source
                srcSet='./images/work/digiyouth-work.jpg'
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/webp"
              />
              <source
                srcSet={`./images/rn-mockup-768.jpg 768w,`}
                sizes="(min-width: 768px) 50vw, 100vw"
                type="image/jpg"
              />

              <img
                width="768px"
                height="575px"
                loading="lazy"
                alt='MERN eCommerce'
                className="rounded-lg"
              />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">Full Stack Development Intern At Digiyouth Infotech (May ,2020 - july,2020)</h3>
              <p>Digiyouth is a Digital Marketing Company which specializes in providing best in class services like search engine optimization , business branding , social media marketing etc.</p>
              <div className="flex overflow-auto space-x-3 pb-2">
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    React
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    php
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    MySQL
                  </span>
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                  >
                    Nodejs
                  </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Work;
