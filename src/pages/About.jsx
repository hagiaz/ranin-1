import React, { useEffect, useRef } from "react";

const About = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = carousel.offsetWidth / 3;
    const scrollInterval = 1000;

    const interval = setInterval(() => {
      if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
        scrollAmount = 0;
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollAmount += scrollStep;
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, scrollInterval);

    return () => clearInterval(interval); // cleanup on unmount
    }, []);

  return (
    <div className="min-h-[910px] w-full bg-ranin-broken dark:bg-ranin-white py-12 font-jost">
      <div className="max-w-screen-xl mx-auto p-5">

        {/* Section 1 */}
        <section id="about-us-section-1">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <section className="overflow-hidden bg-white dark:bg-transparent">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center justify-center">
                  
                  {/* Left Images */}
                  <div id="about-us-section-1.1" className="w-full sm:w-2/3 mr-0 lg:mr-16 px-4 lg:w-1/3">
                    <div className="-mx-3 flex items-center sm:-mx-4">
                      <div className="w-full px-3 sm:px-4 xl:w-1/2">
                        <div className="py-3 sm:py-4">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1705091310871-eac4ca9a06b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435"
                            alt="About us 1"
                            className="w-full rounded-2xl"
                          />
                        </div>
                        <div className="py-3 sm:py-4">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1661757793473-d7238d217415?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
                            alt="About us 2"
                            className="w-full rounded-2xl"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3 sm:px-4 xl:w-1/2">
                        <div className="relative z-10 my-4">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
                            alt="About us 3"
                            className="w-full rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Text */}
                  <div id="about-us-section-1.2" className="w-full ml-0 lg:ml-16 px-4 lg:w-1/2 xl:w-5/12">
                    <div className="mt-10 lg:mt-0">
                      <p id="about-us-section-1.2.1" className="text-justify dark:text-ranin-beige font-faculty mb-4 block text-lg font-semibold text-primary">
                        Siapa kami?
                      </p>

                      <h2 id="about-us-section-1.2.2" className="mb-5 text-3xl font-faculty text-ranin-beige dark:text-ranin-beige sm:text-[40px]/[48px]">
                        PT. Ranin Mandiri Indonesia
                      </h2>

                      <p id="about-us-section-1.2.3" className="text-justify mb-5 text-base font-jost dark:text-black">
                        hadir sebagai mitra terpercaya dalam menyediakan layanan transportasi darat, pengurusan legalitas dokumen, serta pengadaan barang dan jasa. Kami berkomitmen mendukung kelancaran bisnis pelanggan melalui solusi yang efisien, tepat, dan sesuai kebutuhan.
                      </p>

                      <p id="about-us-section-1.2.4" className="text-justify mb-8 text-base text-body-color dark:text-black">
                        Dengan dukungan tim profesional yang berintegritas dan berpengalaman, kami senantiasa memberikan layanan bernilai tambah. Tujuan kami adalah membangun kepercayaan jangka panjang dan menjadi partner strategis bagi setiap pertumbuhan bisnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Section 2 - Visi Kami */}
        <section id="about-us-section-2">
          <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="relative bg-white dark:bg-transparent">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-col-reverse md:flex-row justify-center flex-wrap items-center">
                  <div className="w-full lg:w-4/12 pt-24 lg:pt-0">
                    <div className="hero-content">
                      <h1 className="mb-5 text-3xl font-faculty !leading-[1.208] dark:text-ranin-beige sm:text-[38px]">
                        Visi Kami :
                      </h1>

                      <p className="mb-8 text-justify max-w-[480px] text-base text-body-color dark:text-black">
                        Menjadi perusahaan jasa terpadu yang terpercaya, profesional, dan inovatif dalam menyediakan solusi transportasi, legalitas dokumen, serta pengadaan barang dan jasa untuk mendukung pertumbuhan bisnis dan kebutuhan masyarakat.
                      </p>
                    </div>
                  </div>

                  <div className="w-full pb-0 lg:pb-24 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                      <div className="relative z-10 inline-block">
                        <img
                          src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3"
                          alt="Visi Kami"
                          className="max-w-full lg:max-w-md lg:ml-auto rounded-tl-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Misi Kami */}
        <section id="about-us-section-3">
          <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="relative bg-white dark:bg-transparent">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-col-reverse md:flex-row justify-center flex-wrap items-center">
                  <div className="w-full lg:w-4/12 pt-12 lg:pt-0">
                    <div className="hero-content">
                      <h1 className="mb-5 text-3xl font-faculty !leading-[1.208] dark:text-ranin-beige sm:text-[38px]">
                        Misi Kami :
                      </h1>

                      <p className="mb-8 text-justify max-w-[480px] text-base text-body-color dark:text-black">
                        Memberikan layanan transportasi yang aman, tepat waktu, dan efisien. <br />
                        Menyediakan jasa pengurusan legalitas dokumen yang cepat, akurat, dan sesuai hukum. <br />
                        Menghadirkan layanan pengadaan barang dan jasa yang transparan, berkualitas, dan kompetitif. <br />
                        Menjaga kepercayaan pelanggan dengan menjunjung tinggi integritas dan profesionalisme. <br />
                        Meningkatkan kinerja perusahaan melalui inovasi, teknologi, dan pengembangan SDM. <br />
                        Berkontribusi terhadap pembangunan ekonomi dan kesejahteraan masyarakat.
                      </p>
                    </div>
                  </div>

                  <div className="w-full pb-0 lg:pb-24 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                      <div className="relative z-10 inline-block">
                        <img
                          src="https://images.unsplash.com/photo-1695388474402-ed805a890d8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                          alt="Misi Kami"
                          className="max-w-full lg:max-w-md lg:ml-auto rounded-tl-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Keunggulan Kami */}
        <section id="about-us-section-4">
          <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="relative bg-white dark:bg-transparent">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-col-reverse md:flex-row justify-center flex-wrap items-center">
                  <div className="w-full lg:w-4/12 pt-12">
                    <div className="hero-content">
                      <h1 className="mt-8 mb-5 text-3xl font-faculty dark:text-ranin-beige sm:text-[38px] text-center">
                        Keunggulan Kami
                      </h1>

                      <p className="mt-4 mb-8 text-xl text-base text-body-color dark:text-black text-center">
                        Terpercaya dan Profesional. <br />
                        Layanan Terpadu. <br />
                        Efisien dan Tepat Waktu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel - Klien Kami */}
        <section className="pt-24 w-full">
          <div className="w-10/12 mx-auto text-center">
            <h2 className="benefit-heading mb-10 text-3xl md:text-5xl font-bold leading-tight text-slate-700 font-faculty">
              Klien <span className="text-scheme-orange">Kami</span>
            </h2>

            <div
              ref={carouselRef}
              className="carousel flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory"
            >
              {/* Example carousel items */}
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="./src/assets/images/tfb.png"
                  alt="PT. Terbit Fajar Bersama"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. Terbit Fajar Bersama
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="https://maystarpikavenue.com/wp-content/uploads/2025/05/LOGO--1024x857.jpg"
                  alt="PT. Mulia Cerah Bersama"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. Mulia Cerah Bersama
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/5/50/Hotel_Ibis_logo_2012.png/800px-Hotel_Ibis_logo_2012.png"
                  alt="PT. Jaya Cipta B"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. Jaya Cipta B
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="https://radian.id/sitepad-data/uploads/2022/12/RPMP.png"
                  alt="PT. Radian Putra Metropolindo Pratama"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. Radian Putra Metropolindo Pratama
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="https://cemarafreshindonesia.com/wp-content/uploads/elementor/thumbs/Asset-33@4x-e1751372898807-r849liql0w1l4n4uliemv0mo91jbiblof64aqtbrhk.png"
                  alt="PT. Cemara Fresh Indonesia"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. Cemara Fresh Indonesia
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="./src/assets/images/cki.png"
                  alt="PT. CKI"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  PT. CKI
                </p>
              </div>
              <div className="flex-shrink-0 w-[80%] md:w-[20%] lg:w-[20%] bg-ranin-broken rounded-lg shadow-xl border-solid">
                <img
                  className="w-full mx-auto px-6 pt-6 rounded-t-[30px] block"
                  src="./src/assets/images/chizu.png"
                  alt="Chizu Star Sejahtera"
                />
                <p className="font-jost text-xl text-slate-800 p-8 text-center">
                  Chizu Star Sejahtera
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;