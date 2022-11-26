import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/Dashboard"><i className="fa fa-info-circle"></i> Informes</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-gift"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/ProductList"><i className="fa fa-list-alt"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/orderList"><i className="fa fa-truck"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-user-plus"></i> Usuarios</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar