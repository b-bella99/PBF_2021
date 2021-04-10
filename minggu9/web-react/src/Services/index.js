import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order = desc');

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Dafar API - DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

//MAHASISWA

// Daftar API - GET
const getNewsMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order = desc');

// Daftar API - POST
const postNewsMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// Dafar API - DELETE
const deleteNewsMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {       // inisialisasi function-function yang akan disediakan global API.
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,
    getNewsMahasiswa,
    postNewsMahasiswa,
    deleteNewsMahasiswa
}

export default API;