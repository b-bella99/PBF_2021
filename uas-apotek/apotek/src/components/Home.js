import React, { Component } from "react";
import Navbar from "./Navbar";
import SwiftSlider from 'react-swift-slider'
import './style/Home.css';
import Footer from './Footer';

const data = [
    { 'id': '1', 'src': 'https://www.farmaku.com/uploads/tags/Baby-Health--Care-Slide-Banner.jpg'},
    { 'id': '2', 'src': 'https://www.farmaku.com/uploads/banners/banner-covid-19.jpg' },
    { 'id': '3', 'src': 'https://www.farmaku.com/uploads/banners/Suu-Balm-Baru-di-Farmaku-Slide-Banner.jpg' },
    { 'id': '4', 'src': 'https://www.farmaku.com/uploads/banners/obat-bulanan.jpg' },
    { 'id': '5', 'src': 'https://www.farmaku.com/uploads/banners/Banner_Farmaku_1250x500.jpg' },
    { 'id': '6', 'src': 'https://www.farmaku.com/uploads/banners/free-masker-november-long-banner.jpg' }
];

function Home() {
    return (
        <div className="bg-light">
            <Navbar />
            <div className="slider">
                <SwiftSlider data={data} showDots={true} enableNextAndPrev={true} />
                <br /><br /><hr />
            </div>
            <div className="desk">
            <h5 className="text-strong">Apotek Tenpoles: Beli Obat di Apotik Online Terlengkap</h5>
            <br/>
            <p>Apotek Tenpoles adalah website apotik online terlengkap & terbesar di Indonesia. Apotek Tenpoles sebagai apotek online menyediakan obat-obatan ethical maupun OTC, jual obat online, produk kecantikan, alat kesehatan dan juga obat resep dokter. Kami berkomitmen untuk memberikan kemudahan bagi para pelanggan untuk mendapatkan produk yang berkualitas, asli, original, harga bersaing, serta kenyamanan dengan pengiriman langsung ke rumah Anda.</p>

            <h6 className="text-strong">Toko Obat Online Terlengkap Di Indonesia</h6>
            <br/>
            <p>Apotek online Apotek Tenpoles menyediakan fitur spesial bagi para pelanggan. Anda dapat beli obat resep dokter online dengan mudah dan nyaman melalui apotik online Apotek Tenpoles. Caranya hanya dengan unggah resep dokter secara online saat ingin melakukan tebus resep dokter online. Apotek Tenpoles ditangani oleh apoteker professional PT.Solusi Sarana Sehat. Jadi fitur ini tentunya sangat aman untuk Anda gunakan. 
            <br /><br/>Kenyamanan dan keamanan bertransaksi di apotek online Apotek Tenpoles menjadi prioritas kami. Oleh karena itu seluruh proses transaksi melalui apotik online Apotek Tenpoles sudah resmi dipayungi oleh badan hukum yang kuat. Begitu pula dengan semua produk yang dijual sudah memiliki BPOM, legalitas yang lengkap serta lolos uji standarisasi. Apotek Tenpoles adalah toko obat online terlengkap dan terpercaya.</p>

            <h6 className="text-strong">Beli Obat Online, Vitamin, Suplemen dan Alat Kesehatan</h6>
            <br/>
            <p>Untuk memenuhi standar dan kualitas yang terbaik, Apotik online Apotek Tenpoles telah bekerja sama dengan berbagai brand penyedia obat terbesar di Indonesia. Mulai dari Kalbe, Kimia Farma, Indo farma, Pharos, hingga Nutriwel dapat Anda temukan di sini sekarang juga.<br/><br/>Apotik online Apotek Tenpoles merupakan solusi pembelian obat online, vitamin, suplemen kesehatan, dan alat kesehatan yang sangat mudah, praktis, dan nyaman. Anda tidak perlu pergi ke luar untuk membeli di apotek. Hanya dengan melalui website, Anda dapat beristirahat di rumah sembari menunggu kebutuhan kesehatan Anda kami antar. Ada berbagai macam obat yang kami sediakan. Mulai dari obat untuk sakit kepala & demam, batuk, radang tenggorokan, flu, maag, diare, sembelit, meriang, masuk angin, pegal linu dan obat kesehatan wanita. Selain itu Anda juga dapat beli alat kesehatan, suplemen kesehatan, dan suplemen dengan harga terjangkau di toko obat online terlengkap Apotek Tenpoles.</p>

            <h6 className="text-strong">Pesan Obat Resep Dokter dengan Mudah</h6>
            <br/>
            <p>Sekarang Anda bisa pesan obat resep dokter secara online dengan mudah. Farmaku menjadi bahwa obat online yang Anda beli bergaransi resmi atau asli. Sebagai toko obat online terlengkap se-Indonesia, semua produk yang disediakan sangat komplit. Apalagi Anda dapet obat resep dokter di Apotik Online Farmaku dengan mudah. Hanya dengan mengunggah resep dokter yang Anda berikan, apoteker kami akan memvalidasi resep yang Anda kirimkan. Hanya dalam waktu 5 menit, Anda akan langsung menerima konfirmasi pesanan obat online Anda. Selain itu, beli obat di di apotik online Farmaku dapat free ongkir. Nikmati segala kemudahan ini hanya di Apotek Tenpoles.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
