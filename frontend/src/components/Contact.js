import React from "react";

const Contact = () => {
  return (
    <section class="my-28" id="contact">
      <header class="px-5 text-2xl font-bold pt-10">
        <h2>Contact Me</h2>
        <p class="text-base font-thin">I'd love to hear your thoughts!</p>
      </header>
      <div class="md:mx-6 flex flex-col md:flex-row justify-between md:items-end">
        <div class="bg-gray px-6 py-8 md:rounded-lg shadow-lg justify-center my-7 md:w-6/12  ">
          <div>
            <p class="font-bold">Veeral Sharma</p>
            <p class="font-thin">New Delhi, India</p>
            <a
              href="mailto: veeralsharma0001@gmail.com"
              class="border-b-2 mt-3 inline-block border-gray-500"
            >
              veeralsharma0001@gmail.com
            </a>
          </div>
          <a
            class="border-b-2 mt-3 inline-block border-gray-500"
            href="./veeralResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <div class="flex flex-row flex-wrap mt-7">
            <div class="mr-4">
              <a
                href="https://www.linkedin.com/in/veeral-sharma-156829196/"
                target="_blank"
                rel="noreferrer"
              >
                <span class="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    class="mr-1"
                  />
                  LinkedIn
                </span>
              </a>
            </div>
            <div class="mr-4">
              <a
                href="https://github.com/veeralsharma"
                target="_blank"
                rel="noreferrer"
              >
                <span class="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    class="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="m-auto mt-10 md:mt-0 max-w-xs md:max-w-sm">
          <img
            src="./images/rocket.webp"
            width="380px"
            height="280px"
            alt="red rocket flying"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
