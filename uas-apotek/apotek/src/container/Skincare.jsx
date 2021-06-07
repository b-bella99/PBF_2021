import React from "react";

const Skincare = (props) => {
  return (
    <div className="page-content page-container bg-light" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-10 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-6 bg-white user-profile">
                  <div className="card-block text-center text-dark">
                    <div className="m-b-25">
                      {" "}
                      <img
                        className="mx-auto d-block img-fluid my-3"
                        width="50%"
                        src={props.gambar}
                        alt="medicine"
                      />{" "}
                    </div>
                    <h5 className="f-w-600">{props.nama}</h5>
                    <h4 className="f-w-600 text-info">Rp{props.harga},00</h4>
                    <h6 className="f-w-600">{props.brand}</h6>
                    <br />
                    <br />
                    <button
                      className="btn btn-success btn-danger"
                      onClick={() => {
                        if (window.confirm("Product berhasil dihapus"))
                          props.hapusSkincare(props.id);
                      }}
                    >
                      Hapus Product
                    </button>
                  </div>
                </div>
                <div className="col-sm-6 bg-info">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Deskripsi
                    </h6>
                    <div className="row">
                      <div className="col">
                        <p className="m-b-10 f-w-600">{props.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skincare;
