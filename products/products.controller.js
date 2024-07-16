
const { crearProducto, obtenerProductoPorId, eliminarProductoPorId, buscarProductos, actualizarProductoPorId } = require("./products.service"); // Assuming correct path

const postProductController = async (req, res) => {
  try {
    const { descripcion, titulo, precio, stock, codigo } = req.body;
    if (!descripcion || !titulo || !precio || !stock || !codigo) {
      throw { status: 400, message: 'Todos los campos del producto son obligatorios' };
    }
    const result = await crearProducto(req.body);
    res.status(201).json(result); 
  } catch (error) {
    res.status(error.status || 500).json(error); 
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const {pid} = req.params;
    if (isNaN(pid)) {
      throw { status: 400, message: 'El parámetro pid debe ser un número' };
    }
    const result = await obtenerProductoPorId(pid);
    if (!result) {
      res.status(404).json({ message: `Producto con ID ${pid} no encontrado` }); 
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(error.status || 500).json(error); 
  }
};

const deleteProductByIdController = async (req, res) => {
  try {
    const { pid } = req.params;
    if (isNaN(pid))
    {
      throw { status: 400, message: 'El parámetro pid debe ser un número' };
    }
  
    const result = await eliminarProductoPorId(pid);
    if (result.affectedRows === 0) { 
      res.status(404).json({ message: `Producto con ID ${pid} no encontrado` }); 
    } else {
      res.status(200).json({ message: `Producto con ID ${pid} eliminado correctamente` }); 
    }
  } catch (error) {
    res.status(error.status || 500).json(error); 
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await buscarProductos();
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json(error); 
  }
};


const updateProductController = async (req, res) => {
  try {
    const { pid } = req.params;

    if (isNaN(pid)) {
      throw { status: 400, message: 'El parámetro pid debe ser un número' };
    }
    const numericPid = parseInt(pid);
    const updatedProduct = await actualizarProductoPorId(numericPid, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error en updateProductController:', error);
    if (error.status === 404) {
      res.status(404).json({ message: `Producto con ID ${pid} no encontrado` });
    } else {
      res.status(500).json({ message: 'Error interno en el servidor' });
    }
  }
};


module.exports = {postProductController,getProductByIdController,deleteProductByIdController,getAllProducts,updateProductController};





