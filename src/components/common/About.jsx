import React from 'react';
const About = ({ teachername }) => {
     return (
          <div className="card text-center">
               <div className="card-header">درباره سازنده</div>
               <div className="card-body">
                    <h5 className="card-title">برنامه Todo</h5>
                    <p className="card-text">سازنده : {teachername} </p>
               </div>
               <div className="d-flex align-items-center justify-content-center card-footer text-muted">
                    <p className="card-text m-3 border text-danger rounded p-1 border-danger">مارا دنبال کنید</p>
                    <a className="card-link"><i className="btn btn-md btn-danger fa fa-instagram"></i></a>
               </div>
          </div>
     );
};

export default About;
