import React, { Component } from 'react';

class ProductPolytron extends Component {
    state = {
        listProduk: [],
    };

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/produk')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            }
            )
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetProduk = (data) => {
        fetch(`http://localhost:3001/produk/${data}`, { method: "GET" })
            .then((response) => response.json())
            .then((res) => {
                var dataProduk = { ...this.state.insertKeranjang };
                dataProduk["id"] = res["id"];
                dataProduk["nama"] = res["nama"];
                dataProduk["harga"] = res["harga"];
                dataProduk["stok"] = res["stok"];
                dataProduk["qty"] = 1;
                this.setState({
                    insertKeranjang: dataProduk,
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
                alert("Success added! Check your Cart"); // need change
            });
    };

    listProduk() {
        return this.state.listProduk.map((produk) => {
            return (
                <div className="col-sm-4 my-3 border-info" key={produk.id}>
                    <div className="card border-info">
                        <img
                            className="mx-auto d-block img-fluid my-3"
                            width="50%"
                            src={produk.gambar}
                            alt="Ricecooker"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{produk.nama}</h5><hr/>
                            <h4 className="card-text text-success">
                                Rp{produk.harga},-
                            </h4>
                            <p className="card-text">
                                <small className="text-muted">Stock: {produk.stok}</small>
                            </p>
                            <button className="btn btn-success btn-block"
                                onClick={() => this.handleGetProduk(produk.id)}
                            >
                                Buy Product
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            (response) => {
                if (response.ok) {
                    response.json().then((res) => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };
    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"], 
                qty: res["qty"],
            }),
        });
    };
    handleTombolSimpan = () => {
        fetch("http://localhost:3002/keranjang", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(this.state.insertKeranjang),
        }).then((Response) => {
            this.ambilDataDariServerAPI();
        });
    };

    render() {
        return (
            <div className="col-lg-12 text-center">
                <div className="container">
                    <h1> Refrigrator Catalog</h1><br/>
                    <div className="row">{this.listProduk()}</div>
                </div>
            </div>
        );
    }
}

export default ProductPolytron;