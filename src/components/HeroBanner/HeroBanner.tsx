interface HeroBannerProps {
  heroBannerText : JSX.Element
}

const HeroBanner: React.FC<HeroBannerProps> = ({heroBannerText}) => {
  return (
    <div>
      <div
        className="relative h-full bg-cover bg-center bg-desertLandscape"
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