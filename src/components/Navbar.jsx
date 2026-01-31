

function Navbar(props) {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NewsLuna
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


    
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Search 🔍
        </button>

       <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
               <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    props.func_q(e.target.value.trim())
                    const modalEl = document.getElementById("staticBackdrop");
                    const modal = window.bootstrap.Modal.getInstance(modalEl);
                    e.target.value = ""
                    modal.hide();
                    // Call your function here
                    
                  }
                }}
              />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
        
        


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#"  onClick={() => props.func('general')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.func('technology')}>Technology</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" onClick={() => props.func('sports')} >Sports</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" onClick={() => props.func('science')} >Science</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" onClick={() => props.func('entertainment')} >Entertainment</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" onClick={() => props.func('business')} >Business</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
