
const NavButton = (props: any) => { 
return (
              <a
                href={props.href}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title={props.title}
                className={`${props.textSize} transition duration-300 ease-in-out ${
                  props.isActive ? "text-yellow-500 font-bold" : "text-white"
                } hover:text-yellow-500`}
              >
                <i className={`${props.iconClass} hover:scale-110 transition duration-300 ease-in-out`}></i> {props.text}
              </a>            
)
}

export default NavButton;