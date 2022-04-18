const ImageGallery = () => {
  return (
    <div className="flex my-10 gap-5 justify-center flex-wrap">
      <img
        className="rounded shadow aspect-[5/4] h-[350px]"
        src="/skips.jpg"
        alt=""
      />
      <img
        className="rounded shadow aspect-[4/5] h-[350px] hidden md:block"
        src="/truck.jpg"
        alt=""
      />

      <img
        className="rounded  aspect-[5/4] shadow h-[350px]"
        src="/two-trucks.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageGallery;
