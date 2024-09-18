
const NavButton = (props: any) => { 
return (
              <a
                href={props.href}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title={props.title}
                // target="_blank"
                // rel="noopener noreferrer"
                className={`${props.textSize} hover:text-yellow-500 transition duration-300 ease-in-out`}
              >
                <i className={`${props.iconClass} hover:scale-110 transition duration-300 ease-in-out`}></i> {props.text}
              </a>            
)
}

export default NavButton;