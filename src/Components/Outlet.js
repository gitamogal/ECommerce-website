import React from 'react';
import './Outlet.css';
import Brand from './Brand';
const Outlet = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Topbanner-5090-1024x1200-Ends26.gif" className="d-block w-100" alt="photo" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P2-MuftiUSPA-3050.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P3-SnitchBrroksBrothers-Upto60.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P4-ShiningDivaYoubella-Under399.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P5-USPA-Upto50.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P6-GulmoharJaipurIvoc-Flat55ExtraUpto35.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P7-CapreseAccessorizeLondon-Upto70.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/17042023-UHP-D-Main-P8-DNMXTS-Under299.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="heading">
                <h4>Today's Deals</h4>
            </div>
            <div className='headingSlider'>
            <Brand/>
            </div>
            <div className='Store'>
                <img className='headerpic' src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-header.jpg" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-trends.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-ajiogold.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-up&comingbrands.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-max.jpg" width="300px" height="400px" />
            </div>
            <div className='Store'>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-internationalbrands.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/MHP-D-activewear.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-azorte.jpg" width="300px" height="400px" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-TheresMoreInStore-wedding.jpg" width="300px" height="400px" />
            </div>
            <div className='StoreHeading'>
            <img className='headerpic' src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-Upto30.jpg"></img>
            </div>
            <div className='Store2'>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-ShirtsTshirts.jpg"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-Tops.jpg"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-kURTAS.jpg"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-Skirts.jpg"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-Shorts.jpg"/>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/07042023-UHP-D-CoolFits-CapsStolesScarves.jpg"/>
            </div>  
        </div>

    )
}

export default Outlet

