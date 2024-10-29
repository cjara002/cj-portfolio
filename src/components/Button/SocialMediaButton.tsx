const SocialMediaButton = (props: any) => {
  return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-1/4 text-white rounded-full transition-all duration-300 hover:animate-bounce ${props.hoverWithColor}`}
      >
        <i className={props.iconClass}></i>
      </a>
  );
};

export default SocialMediaButton;