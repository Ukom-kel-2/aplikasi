import './dashboard.css';
import './style.css';

import hello from '../../assets/icons/hello.svg';
import Table from './tabless.jsx';

const Dashboard = () => {
    return (
        <main>
            <div className="main__container">{/* === Container === */}
                <div id='navbar'>
                <div className="main__title">{/* === Title === */}
                    <img src={hello} alt="hello" />
                    <div className="main_greeting">
                        <h1>HELLO</h1>
                        <p>Ardhi Rizal</p>
                    </div>
                </div>
                </div>
                <div id='content'>
                <div className="main__cards">
                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Total Stok</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-money-bill fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Laba Kotor</p>
                            <span className="font-bold text-title">Rp 4,300,200</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Produk Terjual</p>
                            <span className="font-bold text-title">230</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Kategori</p>
                            <span className="font-bold text-title">20</span>
                        </div>
                    </div>
                </div>
                </div>

                <div className="charts">{/* === CHARTS ==== */}

                    <div className="charts__left">{/* === LEFT ==== */}
                        <div className="charts__left__title">
                            <div>
                                <h1>Laporan Harian</h1>
                                <p>List pembelian</p>
                            </div>
                               
                        </div>
                        <div>
                            <Table/>
                        </div>
                        
                    </div>

                    <div className="charts__right">{/* === RIGHT === */}
                        <div className="charts__right__title">
                            <div>
                                <h1>Dasboard barang</h1>
                                <p></p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                       <div className="charts__right__cards">
                           <div className="card1">
                               <h1>Perabotan</h1>
                               <p>Value : Rp 3,450,000</p>
                           </div>

                           <div className="card2">
                               <h1>Furnitur</h1>
                               <p>Value : Rp 23,440,900</p>
                           </div>

                           <div className="card3">
                               <h1>Konsumsi</h1>
                               <p>Value : Rp 54,900,500</p>
                           </div>

                           <div className="card4">
                               <h1>Otomotif</h1>
                               <p>Value : Rp 18,700,600</p>
                           </div>
                       </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Dashboard;