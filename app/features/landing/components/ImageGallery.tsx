import Image from "remix-image";

const ImageGallery = () => {
  return (
    <div className="flex my-10 gap-5 justify-center flex-wrap">
      <Image
        className="rounded shadow h-[350px]"
        src="/skips.jpg"
        alt=""
        responsive={[
          {
            size: {
              width: 360,
              height: 350,
            },
            maxWidth: 360,
          },
          {
            size: {
              width: 660,
              height: 650,
            },
            maxWidth: 660,
          },
          {
            size: {
              width: 1260,
              height: 1250,
            },
            maxWidth: 1260,
          },
        ]}
      />
      <Image
        className="rounded shadow h-[350px] hidden md:block"
        src="/truck.jpg"
        alt=""
        responsive={[
          {
            size: {
              width: 375,
              height: 483,
            },
            maxWidth: 375,
          },
          {
            size: {
              width: 750,
              height: 965,
            },
            maxWidth: 750,
          },
          {
            size: {
              width: 1500,
              height: 1930,
            },
            maxWidth: 1500,
          },
        ]}
      />

      <Image
        className="rounded shadow h-[350px]"
        src="/two-trucks.jpg"
        alt=""
        responsive={[
          {
            size: {
              width: 360,
              height: 350,
            },
            maxWidth: 360,
          },
          {
            size: {
              width: 660,
              height: 650,
            },
            maxWidth: 660,
          },
          {
            size: {
              width: 1260,
              height: 1250,
            },
            maxWidth: 1260,
          },
        ]}
      />
    </div>
  );
};

export default ImageGallery;
