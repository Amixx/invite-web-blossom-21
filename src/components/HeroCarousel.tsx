const HeroCarousel = () => {
  const image = "/trami-to-be.jpg";

  return (
    <div className="absolute inset-0">
      <img
        src={image}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default HeroCarousel;
