import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import MetaData from '../layout/MetaData'
import { useParams} from "react-router-dom"

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { addItemToCart } from '../../actions/cartActions'


export const ProductDetails = () => {
    const params= useParams();
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, product } = useSelector(state => state.productDetails)
  
    useEffect(() => {
        dispatch(getProductDetails(params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }



    }, [dispatch, alert, error, params.id])

  const increaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber >= product.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty)
  }

  const decreaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty)
  }

  const addToCart = () => {
    dispatch(addItemToCart(params.id, quantity));
    alert.success('Producto agregado al carrito')
  }

  return (
    <Fragment>
      {loading ? <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title={product.nombre}></MetaData>
          <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
              <Carousel pause='hover'>
                {product.imagen && product.imagen.map(img => (
                  <Carousel.Item key={img.public_id}>
                    <img className="d-block w-100" src={img.url} alt={product.nombre}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
              <h3>{product.nombre}</h3>
              <p id="product_id">ID del Producto {product._id}</p>
              <hr />
              <p id="precio_producto">${product.precio}</p>
              <div className="stockCounter d-inline">
                <span className="btn btn-primary minus" onClick={decreaseQty}>-</span>
                <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
              </div>
              <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.inventario === 0} onClick={addToCart}>Agregar al Carrito</button>
              <hr />
              <p>Estado: <span id="stock_stado" className={product.inventario > 0 ? 'greenColor' : 'redColor'}>{product.inventario > 0 ? "En existencia" : "Agotado"}</span></p>
              <hr />
              <h4 className="mt-2">Descripción:</h4>
              <p>{product.descripcion}</p>
              <hr />
              </div>
              </div>
        </Fragment>
      )}
    </Fragment>
    
  )
}

