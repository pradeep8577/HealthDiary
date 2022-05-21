import React from "react";
import step1 from './img/step1.jpg'
import step2 from './img/step2.jpg'
import step3 from './img/step3.jpg'

const About = () => {
  return (
    <>
      <div>
        <main class="flex-shrink-0">
          <header class="py-5">
            <div class="px-5">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-6">
                  <div class="text-center my-5">
                    <h1 class="fw-bolder mb-3">
                      3 simple steps to book your online doctor visit today.
                    </h1>
                    {/* <a class="btn-primary btn-lg" href="#scroll-target">Read our story</a> */}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section class="py-5 bg-light" id="scroll-target">
            <div class="px-5 my-5">
              <div class="row gx-5 align-items-center">
                <div class="col-lg-6">
                  <img
                    class="img-fluid rounded mb-5 mb-lg-0"
                    src={step1}
                    alt="..."
                  />
                </div>
                <div class="col-lg-6">
                  <h2 class="fw-bolder">Step 1</h2>
                  <p class="lead fw-normal text-muted mb-0">
                    Book an online doctor appointment..
                  </p>
                  <h6>Book a same day appointment from anywhere.</h6>
                </div>
              </div>
            </div>
          </section>
          <section class="py-5">
            <div class="px-5 my-5">
              <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-first order-lg-last">
                  <img
                    class="img-fluid rounded mb-5 mb-lg-0"
                    src={step2}
                    alt="..."
                  />
                </div>
                <div class="col-lg-6">
                  <h2 class="fw-bolder">Step 2</h2>
                  <p class="lead fw-normal text-muted mb-0">
                  Talk to your online doctor.
                  </p>
                  <h6>See a doctor on your smartphone or computer.</h6>
                </div>
              </div>
            </div>
          </section>
          <section class="py-5 bg-light" id="scroll-target">
            <div class="px-5 my-5">
              <div class="row gx-5 align-items-center">
                <div class="col-lg-6">
                  <img
                    class="img-fluid rounded mb-5 mb-lg-0"
                    src={step3}
                    alt="..."
                  />
                </div>
                <div class="col-lg-6">
                  <h2 class="fw-bolder">Step 3</h2>
                  <p class="lead fw-normal text-muted mb-0">
                  Pick up medications prescribed by your online doctor.
                  </p>
                  <h6>We can send prescriptions to any local pharmacy.</h6>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
