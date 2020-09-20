import React from 'react'
import classes from './Home.module.css';
import Product from './Product';


function Home() {
    return (
        <div className={classes.home}>
            <img 
                className={classes.home__image}
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                               
                alt="banner"
            />

            <div className={classes.home__row}>
                <Product 
                    id={123456}
                    price={10.99}
                    rating={5}
                    title="The Lean StartUp:How constant innovation creates radically successful business"
                    image="https://www.sotech-international.com/3793-thickbox_default/stainless-steel-blender-1500w.jpg"
                />

                <Product 
                    id={1234567}
                    price={10.99}
                    rating={4}
                    title="The Harry Potter: The Solastics"
                    image="https://kids.scholastic.com/content/dam/scholastic/kids/content-cards/image/harry-potter/hp_image_cursed-journey-cover.png"
                />
            </div>

            <div className={classes.home__row}>
                <Product 
                    id={1234568}
                    price={10.99}
                    rating={2}
                    title="Apple watch: Best for your wrist"
                    image="https://cdn.shopify.com/s/files/1/0347/8496/8840/products/cmi_naked-tough_apple-watch-bumper-42mm_clear_cm032907_3_b9bceb98-6a21-4c1d-87c7-fc4831c8c75a_1024x1024_1.png?v=1595029653"
                />

                <Product 
                    id={1234}
                    price={10.99}
                    rating={5}
                    title="Alexa: Your perfect friend"
                    image="https://www.voicefriend.net/sites/default/files/inline-images/Echo-by-itself_0.png"
                />

                <Product 
                    id={1234569}
                    price={10.99}
                    rating={3}
                    title="Best tablet in the world"
                    image="https://www.pngonly.com/wp-content/uploads/2017/06/Tablet-iPad-Pro-PNG.png"
                />
            </div>
        
            <div className={classes.home__row}>
                    <Product 
                        id={12345610}
                        price={10.99}
                        rating={5}
                        title="Samsung QLED TV"
                        image="https://www.thebigscreenstore.com/wp-content/uploads/2019/06/QN65Q70RAFXZX_001_Front1_Black.png"
                    />
            </div>
            
        </div>
    )
}

export default Home
