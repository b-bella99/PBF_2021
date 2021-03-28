import React, { Component } from "react";
var total, subtotal, no;
class Keranjang extends Component {
    state = {
        keranjang: [],
    };
    componentDidMount() {
        this.ambilDataKeranjang();
    }
    ambilDataKeranjang = () => {
        fetch("http://localhost:3002/keranjang")
            .then((response) => response.json())
            .then((jsonHasilAmbilDariAPI) => {
                this.setState({
                    keranjang: jsonHasilAmbilDariAPI,
                });
            });
    };
    listKeranjang() {
        total = 0;
        subtotal = 0;
        no = 0;
        return this.state.keranjang.map((keranjang) => {
            subtotal = keranjang.harga * keranjang.qty;
            total = total + keranjang.harga * keranjang.qty;
            no += 1;
            return (
                <tr key={keranjang.id}>
                    <th scope="row">{no}</th>
                    <td>{keranjang.nama}</td>
                    <td>Rp{keranjang.harga},-</td>
                    <td>{keranjang.qty}</td>
                    <td>Rp{subtotal},-</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="container">
                    <h1>My Cart</h1>
                    <div className="row">
                        <table className="table mt-3 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Sub-total</th>
                                </tr> </thead>
                            <tbody>{this.listKeranjang()}</tbody>
                            <tfoot className="font-weight-bold text-white bg-success">
                                <td className="text-center" colSpan="4">
                                    Total
                                </td>
                                <td>Rp{total},-</td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Keranjang;
