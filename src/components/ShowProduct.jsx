import React, { useState } from 'react'


function ShowProduct() {



    const [data1, Setdata1] = useState()
    const [data2, Setdata2] = useState()

    function getdata1(val) {
        Setdata1(val.target.value)
    }
    function getdata2(val) {
        Setdata2(val.target.value)
    }


    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3">
                        <div className="hero__categories my-3">
                            <div className="hero__categories__all bg-green">
                                <span className="colorFFF">All departments</span>
                            </div>
                            <ul>
                                <li className="colorFFF"><a href="" className="text-decoration color000">Food</a></li>
                                <li className="colorFFF"><a href="" className="text-decoration color000">Drinks</a></li>
                                <li className="colorFFF"><a href="" className="text-decoration color000">School supplies</a></li>
                                <li className="colorFFF"><a href="" className="text-decoration color000">Personal items</a></li>
                                <li className="colorFFF"><a href="" className="text-decoration color000">Miscellaneous goods</a></li>
                            </ul>
                        </div>
                        <div className="hero__categories my-4">
                            <div className="hero__categories__all ">
                                <span className="colorFFF">Choice</span>
                            </div>

                            <li className="useul">

                                <div className="wrapper">
                                    <header>
                                        <h2>Price Range</h2>
                                        <p>Use slider or enter min and max price</p>
                                    </header>
                                    <div className="price-input">
                                        <div className="field">
                                            <span>Min</span>
                                            <input type="number" className="input-min" />
                                        </div>
                                        <div className="separator">-</div>
                                        <div className="field">
                                            <span>Max</span>
                                            <input type="number" className="input-max" />
                                        </div>
                                    </div>
                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value={data1} onChange={getdata1} step="100" />
                                        <input type="range" className="range-max" min="0" max="10000" value={data2} onChange={getdata2} step="100" />
                                    </div>
                                </div>

                            </li>
                        </div>
                    </div>
                    <div className="col-lg-9 my-4">

                        <div className="hero__item set-bg imagebanner">
                            <div className="hero__text">
                                <span className="colorgreen">Mini Mart</span>
                                <h2 className="color000">FRESH <br />100% Organic</h2>
                                <p>Product on sela dirly on bottom</p>
                                <a href="#" className="btn btn-success">SHOP NOW</a>
                            </div>
                        </div>
                        <div className="row">

                            <div className="titall">
                                <h2>Dirl sela!</h2>
                            </div>

                            <div className="col my-5 action on">
                                <div className="item">
                                    <div className="item-item">
                                        <span>This is a product</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col my-5 action">
                                <div className="item">
                                    <div className="item-item">
                                        <span>This is a product</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col my-5 action">
                                <div className="item">
                                    <div className="item-item">
                                        <span>This is a product</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tital">
                            <h2>Author Product</h2>
                        </div>
                        <div className="minitital">
                            <ul>
                                <li /*onClick={Show(e.target.value)} value={"All"}*/>All</li>
                                <li /*onClick={Show(e.target.value)} value={"Food"} */>Food</li>
                                <li /*onClick={Show(e.target.value)} value={"Drinks"} */>Drinks</li>
                                <li /*onClick={Show(e.target.value)} value={"Schoolsupplies"} */>School supplies</li>
                                <li /*onClick={Show(e.target.value)} value={"Personalitems"} */>Personal items</li>
                                <li /*onClick={Show(e.target.value)} value={"Miscellaneousgoods"} */>Miscellaneous goods</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className="row height290">
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container-sm">
                <div className="row height290">
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong></p>
                        </div>
                    </div>
                    <div className="col my-5">
                        <div className="iteme">
                        </div>
                        <div className="detail">
                            <p className="span">This is a product<br /> <strong>500 Bath</strong>
                            </p>
                        </div>
                    </div>

                </div>

            </div>



        </>













    )




}

export default ShowProduct