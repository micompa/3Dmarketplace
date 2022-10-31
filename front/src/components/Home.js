import '../App.css';
import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert} from 'react-alert'


export const Home = () => {
    const { loading, productos, error} = useSelector(state=> state.products)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts());
    }, [dispatch])


    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                
                <Fragment>
                    <body>
                    <main class="main-container">
                        <header class="header">
                            <div class="header__navigation">
                            <img class="header__menu" src='./images/icon-menu.svg' alt='menu icon'></img>
                            <img class="header__logo" src='./images/logo.svg' alt='logo'></img>

                            <nav class="navbar">
                                <ul class="navbar__items">
                                  <li><a class='navbar__link' href='#'>Colecciones</a> </li>  
                                  <li><a class='navbar__link' href='#'>Diseños</a></li>  
                                  <li><a class='navbar__link' href='#'>Partes</a></li>  
                                  <li><a class='navbar__link' href='#'>Acerca de..</a></li>  
                                  <li><a class='navbar__link' href='#'>Contacto</a></li>  
                                </ul>  
                            </nav>

                            </div>
                           
                            
                            <div class='modal-navbar__background'>
                                <nav class="modal-navbar">
                                    <img class="modal-navbar__close-icon" src='./images/icon-close.svg' alt='' srcSet=''></img>
                                    <ul class="modal-navbar__items">
                                    <li><a class='modal-navbar__link' href='#'>Collections</a> </li>  
                                    <li><a class='modal-navbar__link' href='#'>Men</a></li>  
                                    <li><a class='modal-navbar__link' href='#'>Women</a></li>  
                                    <li><a class='modal-navbar__link' href='#'>About</a></li>  
                                    <li><a class='modal-navbar__link' href='#'>Contact</a></li>  
                                    </ul>    
                                </nav>
                            </div>
                            <div className='header__cart-avatar'>
                                <div className='header__cart'>
                                    <div class="header__cart--notification">3</div>
                                    <img src='./images/icon-cart.svg' alt=''></img>
                                </div>

                                <img class="header__avatar" src='./images/image-avatar.png' alt=''></img>

                            </div>
                        </header>
                        
                        <section className='content'>
                            <article class="gallery">
                                <div className='gallery__image-container'>
                                <img className='gallery__previous' src='./images/icon-previous.svg' alt='previous'></img>
                                <img className='gallery__next' src='./images/icon-next.svg' alt='next'></img>

                                </div>
                                <div className='gallery__thumbnails'>
                                <img id="1" class="gallery__thumbnail" src='./images/image-product-1-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="2" class="gallery__thumbnail" src='./images/image-product-2-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="3" class="gallery__thumbnail" src='./images/image-product-3-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="4" class="gallery__thumbnail" src='./images/image-product-4-thumbnail.jpg' alt='thumbnail'></img>
                                </div>
                            </article>

                            <article className='details'>
                                <h2 class="details__company">Arte En 3D</h2>
                                <h2 class="details__tittle">Creaciones originales para tener en casa</h2>
                                <p class="details__description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                                
                                <div class="details__prices">
                                    <p class="details__now">$125.00  <span class="details__discount">50%</span></p>
                                    <p class="details__before">$250.00</p>
                                </div>
                                
                                <div class="details__product-quantity">
                                    <div class="input">
                                    <img class="input__minus" src='./images/icon-minus.svg' alt='minus'></img>
                                    <input class="input__number" type="text" value="0"></input>
                                    <img class="input__plus" src='./images/icon-plus.svg' alt='plus'></img>
                                    </div>
                                    <button className='details__button'><img src='./images/icon-cart-white.svg' alt='cart'></img> Agregar a carrito</button>

                                </div>

                            </article>



                        </section>
                        
                       <div class="cart-modal">
                        <p class="cart-modal__title">Carrito</p>
                        <div class="cart-modal__checkout-container">
                            <div class="cart-modal__details-container">
                            <img class="cart-modal__image" src='./images/image-product-1-thumbnail.jpg' alt=''></img>
                                <div>
                                    <p class="cart-modal__product">Producto.prodcuto seleccionado</p>
                                    <p class="cart-modal__price">$Producto.precio <span>seleccionado</span></p>
                                </div>
                                <img class="cart-modal__delete" src='./images/icon-delete.svg' alt='delete'></img>
                            </div>
                            <button className='cart-modal__checkout'>Checkout</button>
                        </div>
                       </div>

                       <div class="modal-gallery__background">
                            <article class="modal-gallery">
                                <img className='modal-gallery__close' src='./images/icon-close.svg' alt='close'></img>
                                <div className='modal-gallery__image-container'>
                                <img className='modal-gallery__previous' src='./images/icon-previous.svg' alt='previous'></img>
                                <img className='modal-gallery__next' src='./images/icon-next.svg' alt='next'></img>

                                </div>
                                <div className='modal-gallery__thumbnails'>
                                <img id="m1" class="modal-gallery__thumbnail" src='./images/image-product-1-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="m2" class="modal-gallery__thumbnail" src='./images/image-product-2-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="m3" class="modal-gallery__thumbnail" src='./images/image-product-3-thumbnail.jpg' alt='thumbnail'></img>
                                <img id="m4" class="modal-gallery__thumbnail" src='./images/image-product-4-thumbnail.jpg' alt='thumbnail'></img>
                                </div>
                            </article>
                       </div>
                        
                    </main>

                    <footer class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#" target="_blank">Your Name Here</a>.
                    </footer>
                    </body>

                </Fragment>

            )}
            

        </Fragment>
    )
}
export default Home