import React, { Component } from 'react';
import firebase from "firebase";
import Skincare from "../container/Skincare";
import Navbar from './Navbar';
import Footer from './Footer';

class ProductSkincare extends Component {
    constructor(props) {
        super(props);
        this.state = {          // Komponen state dari React untuk statefull component
            listSkincare: []     // Variabel array yang digunakan untuk menyimpan data dari API
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

    handleHapusSkincare = (idSkincare) => {
        const {listSkincare} = this.state;
        const newState = listSkincare.filter(data => {
            return data.id !== idSkincare;
        });
        this.setState({listSkincare: newState});
    }

    handleTombolTambah = () => {
        let nama = this.refs.nama.value; // this.refs mengacu pada input field (input text, textarea, dll)
        let harga = this.refs.harga.value;
        let gambar = this.refs.gambar.value;
        let brand = this.refs.brand.value;
        let deskripsi = this.refs.deskripsi.value;
        let id = this.refs.id.value;

        if (id && nama && harga && gambar && brand && deskripsi) { //cek apakah seua data memiliki nilai (tidak null)
            const {listSkincare} = this.state;
            const indekstSkincare = listSkincare.findIndex(data => {
                return data.id === id;
            });
            listSkincare[indekstSkincare].nama = nama;
            listSkincare[indekstSkincare].harga = harga;
            listSkincare[indekstSkincare].gambar = gambar;
            listSkincare[indekstSkincare].brand = brand;
            listSkincare[indekstSkincare].deskripsi = deskripsi;
            this.setState({listSkincare});
        } else if (nama && harga && gambar && brand && deskripsi) { // jika data belum ada di server
            const id = new Date().getTime().toString();
            const { listSkincare } = this.state;
            listSkincare.push({id, nama, harga, gambar, brand, deskripsi});
            this.setState({ listSkincare });
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
                        <h4>✏️ Tambah Data Baru Skin Care</h4><br></br>

                            <div className="form pb-2 border-bottom border border-info p-2 bg-gradient-info">
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
                                <button type="submit" className="btn btn-primary m-2" onClick={this.handleTombolTambah} >Simpan</button>
                            </div>
                        </div>

                        <div className="col-7">
                            <h4>✨ Produk Skin Care</h4><br></br>
                            {
                                this.state.listSkincare.map(skincare => {
                                    return <Skincare key={skincare.id} nama={skincare.nama} harga={skincare.harga} gambar={skincare.gambar} brand={skincare.brand} deskripsi={skincare.deskripsi}  hapusSkincare = {() => this.handleHapusSkincare(skincare.id)}/>
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

export default ProductSkincare;