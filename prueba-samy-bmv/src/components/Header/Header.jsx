import logo from "../../images/logo.png";

import "./Header.scss"

const Header = (props) => {

    const handleChange =(e) => {
        const data = e.target.value;
        props.handleFilter(data);
    }

    return (
        <header className="header">
            <img 
                src={logo} 
                alt="logo de la empresa" 
                title="logo de la empresa" className="header--logo"
            />
            <input 
                type="text" 
                placeholder={`You are looking for something`} className="header--input"
                onChange={handleChange}
            />
        </header>
    )
}

export default Header; 