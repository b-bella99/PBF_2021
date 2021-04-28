import React, {Component} from "react";
import './BlogPost.css'
import Post from '../../component/BlogPost/Post'
/* import API from '../../Services/index' */
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component{
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig); // Inisialisasi konfigurasi database firebase

        this.state = {          // Komponen state dari React untuk statefull component
            listArtikel: []     // Variabel array yang digunakan untuk menyimpan data dari API
        }
    }

    ambilDataDariServerAPI = () => {    // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
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

    componentDidMount(){    // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI() // ambil data dari server local
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {
        const {listArtikel} = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({listArtikel: newState});
    }

    handleTombolSimpan = () => {        // fungsi untuk meng-handle tombol simpan
        let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, dll)
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body) { //cek apakah seua data memiliki nilai (tidak null)
            const {listArtikel} = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            });
            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({listArtikel});
        } else if (title && body) { // jika data belum ada di server
            const uid = new Date().getTime().toString();
            const { listArtikel } = this.state;
            listArtikel.push({uid, title, body});
            this.setState({ listArtikel });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value ="";
    };

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                        <textarea name="body" id="body" cols="3" rows="3" className="form-control" col="3" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan} >Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => { // loooping dan masukkan untuk setiap data yang ada di listArtikel ke vartiabel artikel
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body} idArtikel = {artikel.uid} hapusArtikel = {this.handleHapusArtikel}/> // mapping data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost;