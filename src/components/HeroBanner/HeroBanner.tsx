interface HeroBannerProps {
  image: string,
  heroBannerText : JSX.Element
}

const HeroBanner: React.FC<HeroBannerProps> = ({image, heroBannerText}) => {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
        id="heroBGPhoto"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            {heroBannerText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;