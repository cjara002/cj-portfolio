
const NavButton = (props: any) => { 
return (
              <a
                href={props.href}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title={props.title}
                target="_blank"
                rel="noopener noreferrer"
                className={props.textSize}
              >
                <i className={props.iconClass}></i> {props.text}
              </a>            
)
}

export default NavButton;