import logo from './logo.svg';
import './OnlineShop.css';
import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

//tas
const tas = [
    {id: 1, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005722001_1.jpg', name: 'Mountaineering ALETRIS W20 2.0', price:'IDR 379.000'},
    {id: 2, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005433001-ELIPTIC-LUNARIS-55L--1A-RED1.jpg', name: 'Mountaineering ELIPTIC LUNARIS 55L 1A', price:'IDR 1.249.000'},
    {id: 3, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005225001-deeva-1.0-1a-blk.01.jpg', name: 'Mountaineering DEEVA 1.0 1A', price:'IDR 249.000'},
    {id: 4, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910006139.BLK1.jpg', name: 'Mountaineering X-IRIDIUM 2L 1.2 F', price:'IDR 129.000'},
    {id: 5, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910006145.BLK1.jpg', name: 'Mountaineering X-HYGIENE COVER SACK 15L', price:'IDR 149.000'},
    {id: 6, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005430001_1.jpg', name: 'Mountaineering T.S LOGO EIGER 1F', price:'IDR 299.000'}
]

//jaket
const jaket = [
    {id: 1, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910006111.blk-01_3.jpg', name: 'Mountaineering X-KURINDA JACKET WS', price:'IDR 399.000'},
    {id: 2, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005496.mar.01_3.jpg', name: '1989 GAZANIA TRAVEL PARKA WS', price:'IDR 649.000'},
    {id: 3, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910004556.OLI1.jpg', name: '1989 MATAO', price:'IDR 375.000'},
    {id: 4, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005024.BLK1.jpg', name: '1989 X-CORDOBA JACKET', price:'IDR 549.000'},
    {id: 5, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005744.BLK.1.jpg', name: '1989 TRANAVA JUMPER JACKET', price:'IDR 499.000'},
    {id: 6, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005746.NAV.1.jpg', name: '1989 TRANAVA ANORAK JACKET', price:'IDR 499.000'}
]

//footwear
const footwear = [
    { id: 1, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005999b_2.jpg', name: 'Mountaineering CALDERA WS 1.0 SOL BLACK PATTERN 1', price:'IDR 249.000'},
    {id: 2, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005109001_1.jpg', name: '1989 OBLIVION BURGHAM WS PN SOL BLK', price:'IDR 199.000'},
    {id: 3, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910004947u_2_7.jpg', name: 'Mountaineering BLOSSOM', price:'IDR 149.000'},
    {id: 4, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/4/940000591.BRW1.jpg', name: 'Lifestyle RKK0208 TEC COMPOSITE WP WK BT', price:'IDR 3.800.000'},
    {id: 5, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/4/940000596.BLK1.jpg', name: 'Lifestyle 5008 DRESS LEATHER HI-GLS CK', price:'IDR 2.100.000'},
    {id: 6, img: 'https://eigeradventure.com/media/catalog/product/cache/cfb5a39ab026c5e13d59b595a9adab8e/9/1/910005556013_1.jpg', name: 'Mountaineering NATOAS MID 2.5', price:'IDR 599.000'}
]

const OnlineShop = () =>{
    return(
        <Router>
            <div className='OnlineShop'>
                <Navbar />
                <div className = 'container'>
                    
                
                <AuthButton />
                    <Switch>
                        <Route exact path = '/'><Home /></Route>
                        <Route path = '/login'><Login /></Route>
                        <PrivateRoute path = '/producs'><NestProducts /></PrivateRoute>
                        <Route exact path = '/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Navbar ({title}){
    return(
        <nav className="navbar  bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/producs'>Producs</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>
    )
}
Navbar.defaultProps={
    title:'Adventure Store'
};

function Home(){
    return(
        <div className = 'home'>
            <h1>Welcome to Adventure Store</h1>
            <h2>Make it better</h2>
        </div>
    );
}

function About (){
    return(
        <div className = 'home'>
            <h1>EIGER</h1>
            <hr />
            <h4>
            EIGER diluncurkan pertama kali pada tahun 1989 sebagai produk untuk memenuhi berbagai kebutuhan perlengkapan dan peralatan bagi gaya hidup para penggiat alam terbuka. Nama EIGER sendiri terinspirasi dari Gunung Eiger berketinggian 3.970 mdpl dan menjadi “gunung tersulit didaki” ke-3 di dunia yang terletak di Bernese Alps, Swiss. Kini, EIGER menyediakan tiga kategori produk utama, yaitu Mountaineering yang berorientasi pada kegiatan pendakian gunung; Riding yang berfokus pada penjelajahan sepeda motor; serta Authentic 1989 yang diinspirasi dari gaya klasik para pencinta kegiatan petualangan alam terbuka yang diwujudkan dalam desain yang kasual dan stylish. Mengacu pada landasan visi dan misinya, EIGER tidak hanya memberikan kontribusi pada kegiatan luar ruang, namun turut memberikan perhatian yang besar terhadap kelestarian lingkungan demi mewujudkan misi yang meliputi aspek Education, Inspiration, Greenlife, Expedition, dan Responsibility. Hingga saat ini, EIGER telah memiliki jaringan distribusi di seluruh Indonesia dan akan terus memperluas jangkauannya hingga ke mancanegara.
            </h4>
            <hr />
            <br/><br/>
            <h3>Real Store: https://eigeradventure.com/</h3>
        </div>
    );
}

function NestProducts() {
    let { path, url } = useRouteMatch();
    return(
        <div>
            <br/><br/>
        <h2>Product Eiger</h2>
        <ul>
            <li>
                <Link to = {`${url}/Bags`}>Bags</Link>
            </li>
            <li>
                <Link to = {`${url}/Footwears`}>Footwears</Link>
            </li>
            <li>
                <Link to = {`${url}/Jackets`}>Jackets</Link>
            </li>
        </ul>
        <br/><br/><br/><br/>

        <Switch>
            <Route exact path = {path}>
                <h3>Please select a Product.</h3>
            </Route>
            <Route path = {`${path}/Bags`}>  
                <Tas />
            </Route>
            <Route path = {`${path}/Footwears`}>  
                <Footwear />
            </Route>
            <Route path = {`${path}/Jackets`}>  
                <Jaket />
            </Route>
        </Switch>
        </div>
    );
}

// Tas
const ProductTas=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsTas =({prods})=>{
    return (
    <div>
    
    {prods.map(prod=>(
        <ProductTas img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Tas() {
    return(
            <Route exact path='/producs/Bags' render={(props)=>
                <Fragment>
                    <ProductsTas prods={tas}/>
                </Fragment>
                }
            />
    );
}

// End Tas
//Sepatu

const ProductFootwear=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsFootwear =({prods})=>{
    return (
    <div>
    
    {prods.map(prod=>(
        <ProductFootwear img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Footwear() {
    let { topicId } = useParams();
    <h3>{topicId}</h3>
    return(
        <Route exact path='/producs/Footwears' render={(props)=>
            <Fragment>
                <ProductsFootwear prods={footwear}/>
            </Fragment>
            }
        />
    );
}

//End Sepatu
//Jaket

const ProductJaket=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsJaket =({prods})=>{
    return (
    <div>
    
    {prods.map(prod=>(
        <ProductJaket img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Jaket() {
    let { topicId } = useParams();
    <h3>{topicId}</h3>
    return(
            <Route exact path='/producs/Jackets' render={(props)=>
                <Fragment>
                    <ProductsJaket prods={jaket}/>
                </Fragment>
                }
            />
    );
}
//end jakeet
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
    fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();
    let location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/"} };
    return fakeAuth.isAuthenticated ? (
    <p>
        Welcome!{" "}
        <button className='button'
        onClick={() => {
        fakeAuth.signout(() => history.push(from));
        }}
        >
        Sign Out
        </button>
    </p>
    ) : (
    <p></p>
    );
}

function PrivateRoute({ children, ...rest}) {
    return(
        <Route
        {...rest}
        render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
        children
    ) : (
        <Redirect
        to = {{
            pathname: "/login",
            state: {from: location}
        }}
    />
    )
    }
    />
    );
}

function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/"} };
    let login = () => {
    fakeAuth.authenticate(() => {
        history.replace(from);
    });
    };

    return (
    <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button className = 'button' onClick = {login}>Log In</button>
    </div>
    );
}

export default OnlineShop;