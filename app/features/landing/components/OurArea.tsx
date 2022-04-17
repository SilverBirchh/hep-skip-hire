const OurArea = () => {
  return (
    <section id="area" className="bg-gray-100 pricing-area py-[120px]">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 text-center section-title">
              <h4 className="title">Our Service Areas</h4>
              <p className="text">
                We can remove waste on a regular basis from the following areas:
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-10 flex-wrap">
            <li className="font-bold text-2xl">London</li>
            <li className="font-bold text-2xl">Greater London</li>
            <li className="font-bold text-2xl">Hertfordshire</li>
            <li className="font-bold text-2xl">Buckinghamshire</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurArea;
