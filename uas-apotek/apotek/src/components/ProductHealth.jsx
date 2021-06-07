import React, { Component } from 'react';
import firebase from "firebase";
import Health from "../container/Health";
import Navbar from './Navbar';
import Footer from './Footer';

class ProductHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {          // Komponen state dari React untuk statefull component
            listHealth: []     // Variabel array yang digunakan untuk menyimpan data dari API
        }
    }

    ambilDataDariServerAPI = () => {    // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref('/');
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusHealth = (idHealth) => {
        const {listHealth} = this.state;
        const newState = listHealth.filter(data => {
            return data.id !== idHealth;
        });
        this.setState({listHealth: newState});
    }

    handleTombolTambah = () => {
        let nama = this.refs.nama.value; // this.refs mengacu pada input field (input text, textarea, dll)
        let harga = this.refs.harga.value;
        let gambar = this.refs.gambar.value;
        let brand = this.refs.brand.value;
        let deskripsi = this.refs.deskripsi.value;
        let id = this.refs.id.value;

        if (id && nama && harga && gambar && brand && deskripsi) { //cek apakah seua data memiliki nilai (tidak null)
            const {listHealth} = this.state;
            const indeksHealth = listHealth.findIndex(data => {
                return data.id === id;
            });
            listHealth[indeksHealth].nama = nama;
            listHealth[indeksHealth].harga = harga;
            listHealth[indeksHealth].gambar = gambar;
            listHealth[indeksHealth].brand = brand;
            listHealth[indeksHealth].deskripsi = deskripsi;
            this.setState({listHealth});
        } else if (nama && harga && gambar && brand && deskripsi) { // jika data belum ada di server
            const id = new Date().getTime().toString();
            const { listHealth } = this.state;
            listHealth.push({id, nama, harga, gambar, brand, deskripsi});
            this.setState({ listHealth });
        }

        this.refs.nama.value = "";
        this.refs.harga.value = "";
        this.refs.gambar.value = "";
        this.refs.brand.value = "";
        this.refs.deskripsi.value = "";
        this.refs.id.value ="";
    };

    render() {
        return (
            <div className="col-lg-12 text-center bg-light">
                
                <Navbar />
                <div className="container">
                    <div className="row" id="product">
                        <div className="col-5">
                        <h4>✏️ Tambah Data Baru Health Care</h4><br></br>
                            <div className="form pb-2 border-bottom border border-warning">
                            <div className="form-group row p-2">
                                    <label htmlFor="title" className="col-sm-4 col-form-label"><h5><b>Nama</b></h5></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="nama" name="nama" ref="nama"/>
                                    </div>
                                </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="title" className="col-sm-4 col-form-label"><h5><b>Harga</b></h5></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="harga" name="harga" ref="harga"/>
                                    </div>
                                </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="title" className="col-sm-4 col-form-label"><h5><b>Brand</b></h5></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="brand" name="brand" ref="brand"/>
                                    </div>
                                </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="title" className="col-sm-4 col-form-label"><h5><b>Link Gambar</b></h5></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="gambar" name="gambar" ref="gambar"/>
                                    </div>
                                    </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="title" className="col-sm-4 col-form-label"><h5><b>Deskripsi</b></h5></label>
                                        <div className="col-sm-8">
                                            <textarea name="deskripsi" id="deskripsi" cols="3" rows="3" className="form-control" col="3" ref="deskripsi"></textarea>
                                        </div>
                                </div>
                                <input type="hidden" name="id" ref="id"/><br></br>
                                <button type="submit" className="btn btn-primary" onClick={this.handleTombolTambah} >Simpan</button>
                            </div>
                        </div>

                        <div className="col-7">
                            <h4>🩺 Produk Health Care</h4><br></br>
                            {
                                this.state.listHealth.map(health => {
                                    return <Health key={health.id} nama={health.nama} harga={health.harga} gambar={health.gambar} brand={health.brand} deskripsi={health.deskripsi}  hapusHealth = {() => this.handleHapusHealth(health.id)}/>
                                })
                            }
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductHealth;