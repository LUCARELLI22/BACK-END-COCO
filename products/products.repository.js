const { query } = require("../config/connection.sql"); 

const insertarProducto = async ({ titulo, descripcion, precio, stock, codigo }) => {
try {
    const consultaString = 'INSERT INTO productos (titulo, descripcion, stock, precio, codigo) VALUES (?, ?, ?, ?, ?)';
    const valores = [titulo, descripcion, stock, precio, codigo];
    const resultado = await query(consultaString, valores);
    return resultado.insertId;
} catch (error) {
    throw { status: 500, message: 'Error interno en el servidor' };
}
};

const seleccionarProductoPorId = async (id) => {
try {
    const consultaString = 'SELECT * FROM productos WHERE id = ?';
    const resultado = await query(consultaString, [id]);

    if (resultado.length === 0) {
      throw { status: 404, message: `Producto con id ${id} no encontrado` }; 
    } else {
    return resultado[0];
    }
} catch (error) {
    if (error.status === 404) {
    throw error;
    } else {
    throw { status: 500, message: 'Error interno en el servidor' };
    }
}
};

const deleteProductoPorId = async (id) => {
try { 
    const consultaString = 'DELETE FROM productos WHERE id = ?';
    const resultado = await query(consultaString, [id]);

    if (resultado.affectedRows === 0) { 
    throw { status: 404, message: `Producto con id ${id} no existe` };
    } else {
    return { status: 200, message: `Producto con id ${id} eliminado correctamente` };
    }
} catch (error) {

    if (error.status === 404) {
    throw error;
    } else {
    throw { status: 500, message: 'Error interno en el servidor' };
    }
}
};

const seleccionarProductos = async () => {
try {
    const consultaString = 'SELECT * FROM productos';
    const productos = await query(consultaString);
    return productos;
} catch (error) {
    if (error.status) { 
    throw error;
    } else {
    throw { status: 500, message: 'Error interno en el servidor' };
    }
}
};
const actualizarProducto = async (id, productData) => {
    try {
      const consultaString = 'UPDATE productos SET ? WHERE id = ?';
      const valores = [productData, id];
      const resultado = await query(consultaString, valores);
  
      if (resultado.affectedRows === 0) {
        throw { status: 404, message: `Producto con id ${id} no encontrado` };
      } else {
        
        const [updatedProduct] = await query('SELECT * FROM productos WHERE id = ?', [id]);
        return updatedProduct[0];
      }
    } catch (error) {
      console.error('Error en actualizarProducto:', error); 
      if (error.status === 404) {
        throw error;
      } else {
        throw { status: 500, message: 'Error interno en el servidor' };
      }
    }
  };
  



module.exports = {
insertarProducto,
seleccionarProductoPorId,
deleteProductoPorId,
seleccionarProductos,
actualizarProducto
};