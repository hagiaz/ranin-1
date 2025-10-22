// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[910px] w-full bg-white dark:bg-ranin-white py-12 font-jost">
      <div className="max-w-screen-xl mx-auto p-5">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-faculty text-ranin-beige dark:text-ranin-beige">
                Let's connect!
              </h2>
              <p className="font-jost text-gray-500 sm:text-xl dark:text-gray-400">
                Anda bisa terhubung dan menemukan kami pada tautan berikut:
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* EMAIL */}
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-beige dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a href="mailto:raninmandiriindonesia@gmail.com" target="_blank" rel="noreferrer">
                    EMAIL
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a href="mailto:raninmandiriindonesia@gmail.com">raninmandiriindonesia@gmail.com</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:raninmandiriindonesia@gmail.com"
                    className="text-gray-900 inline-flex items-center font-medium dark:text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* WHATSAPP */}
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-beige dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a href="https://wa.me/6281297551225" target="_blank" rel="noreferrer">
                    WHATSAPP
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a href="https://wa.me/6281297551225">6281297551225</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/6281297551225"
                    className="text-gray-900 inline-flex items-center font-medium dark:text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>

              {/* INSTAGRAM */}
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-ranin-beige dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-faculty tracking-tight text-gray-900 dark:text-white hover:underline">
                  <a href="https://www.instagram.com/ranin_konsultan" target="_blank" rel="noreferrer">
                    INSTAGRAM
                  </a>
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      <a href="https://www.instagram.com/ranin_konsultan">ranin_konsultan</a>
                    </span>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/ranin_konsultan"
                    className="text-gray-900 inline-flex items-center font-medium dark:text-white hover:underline"
                  >
                    Visit
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
