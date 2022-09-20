import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <h2 className='bootstrap_heading'>A CMS Admin</h2>
            <p className='bootstrap_para'>A CMS Admin project I feature a dashboard, pages, posts, users and login page. I covered at most all of the bootstrap css components as well as some javascript such ass model.</p>
            <p className='bootstrap_para'>In this project I have used many front-end technologies like HTML5, CSS3, Javascript and Bootstrap. For version control I used Git and Github. It is used as admin dashboard to see the customers/Users actions and requirements </p>
            
            
              <div className='row'>
                <div className='col-3'>
                  <a href="https://62f2805dc8386a10625cdebb--comforting-mochi-8fd4b2.netlify.app/" target="_blank" rel="noreferrer" className='btn btn-info bootstrap_btn' >Open in Browser</a>
                </div>
                <div className='col-3'>
                  <a href="https://github.com/atharvagujarathi/bootstrap_theme" target="_blank" rel="noreferrer" className='btn btn-info bootstrap_btn' >Get Code</a>
                </div>
              
              </div>
            
          </div>



          <div className='col-4'>
            <img src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='bootstrap_img'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
