import {
  ClockIcon,
  RefreshIcon,
  TrashIcon,
  TruckIcon,
} from "@heroicons/react/solid";

const OurService = () => {
  return (
    <section id="service" className="relative services-area py-120">
      <div className="container">
        <div className="flex">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 section-title">
              <h4 className="title">Our Services</h4>
              <p className="text">
                Hep Skip Hire provides services across Herts, Bucks, London and
                Greater London.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <div className="row">
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <TrashIcon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Skip Hire</h4>
                    <p className="text">
                      We offer skips of all sizes and we'll hlp you find the
                      perfect skip for the job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <TruckIcon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Roll-on Roll-off</h4>
                    <p className="text">
                      Perfect for large amounts of waste that needs to be
                      removed quickly and easily.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <ClockIcon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Wait and Load</h4>
                    <p className="text">
                      No need to have the waste hanging around. We can remove
                      the skip as soon as it is ready to go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <RefreshIcon className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Eco Friendly</h4>
                    <p className="text">
                      We are committed to the environment and ensure as little
                      waste as possible ends up in landfill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-image">
        <div className="image">
          <img src="services.svg" alt="Services" />
        </div>
      </div>
    </section>
  );
};

export default OurService;
