import { Router } from "express";
import { GetProducts, GetCategories, createPtroduct, GetProduct, 
    editProduct, deleteProduct, createCategory, GetCategory, 
    updateCategory,
    deleteCategory} from "./database/models.js";

const router = Router();

router.get('/productos', async (req, res) => {
    try {
        const productos = await GetProducts();
        res.render('productos.ejs', {productos});
    } catch (error) {
        throw error;
    }
})

router.get('/producto/crear', async (req, res) => {
    try {
        const categorias = await GetCategories();
        res.render('newProducto.ejs', {categorias});
    } catch (error) {
        throw error
    }
    
})

router.post('/producto/crear', async (req, res) => {
    try {
        const {codigo, producto, categoria, existencia, precio} = req.body;
        createPtroduct([codigo, producto, categoria, existencia, precio])
        res.redirect('/productos')
    } catch (error) {
        throw error
    }   
})

router.get('/producto/editar/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const rows = await GetProduct(id)
        const categorias = await GetCategories();
        res.render('editProducto.ejs', {result : rows[0], categorias});
    } catch (error) {
        throw error
    }   
})


router.post('/producto/editar', async (req, res) => {
    try {
        const {codigo, producto, categoria, existencia, precio, id} = req.body;
        editProduct([codigo, producto, categoria, existencia, precio, id])
        res.redirect('/productos');
    } catch (error) {
        throw error
    }   
})

router.get('/producto/eliminar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        deleteProduct(id);
        res.redirect('/productos');
    } catch (error) {
        throw error;
    }   
})


router.get('/categorias', async (req, res) => {
    try {
        const categorias = await GetCategories();
        res.render('categorias.ejs', {categorias});
    } catch (error) {
        throw error
    }
})


router.get('/categoria/crear', (req, res) => {
    res.render('newCategoria.ejs')
})

router.post('/categoria/crear', (req, res) => {
    try {
        const {categoria} = req.body;
        createCategory(categoria);
        res.redirect('/categorias')
    } catch (error) {
        throw error;
    }
})


router.get('/categoria/editar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await GetCategory(id);
        res.render('editCategoria.ejs', {result : categoria[0]})
    } catch (error) {
        throw error
    }
})

router.post('/categoria/editar', (req, res) => {
    try {
        const { categoria, id } = req.body;
        updateCategory([categoria, id ])
        res.redirect('/categorias')
    } catch (error) {
        throw error;
    }
})


router.get('/categoria/eliminar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        deleteCategory(id)
        res.redirect('/categorias');
    } catch (error) {
        throw error
    }
})



export default router;