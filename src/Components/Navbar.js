import logo from "./logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </div>
  );
}

export default Navbar;
