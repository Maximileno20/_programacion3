import db from "./conexion.js";

export const GetProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM categorias c INNER JOIN productos p ON p.categoria_id = c.id';
        db.all(sql, (err, row) => {
        if(err)  return reject(err);
        resolve(row);
    })
})   
} 

export const GetProduct = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM categorias c INNER JOIN productos p ON p.categoria_id = c.id WHERE p.id = ?';
        db.all(sql, [id], (err, row) => {
        if(err)  return reject(err);
        resolve(row);
    })
})   
}

export const createPtroduct = (product) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO productos(codigo, producto, categoria_id, existencia_actual, precio) VALUES (?, ?, ?, ?, ?)';
        db.run(sql, product, (err) => {
            if(err) return reject(err);
            resolve()
        })
    
    })
}


export const editProduct = (product) => {
    return new Promise((resolve, reject) => {
        const sql = `
                UPDATE productos
                SET codigo = ?, producto = ?, categoria_id = ?, existencia_actual = ?, precio = ?
                WHERE id = ?`;
        db.run(sql, product, (err) => {
            if(err) return reject(err);
            resolve()
        })
    
    })
}


export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM productos WHERE id = ?';
        db.all(sql, [id], (err) => {
        if(err)  return reject(err);
        resolve()
    })
})   
}








export const GetCategories = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM categorias';
        db.all(sql, (err, row) => {
        if(err)  return reject(err);
        resolve(row);
    })
})   
} 

export const GetCategory = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM categorias WHERE id = ?';
        db.all(sql, [id], (err, row) => {
        if(err)  return reject(err);
        resolve(row);
    })
})   
}

export const createCategory = (Category) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO categorias(categoria) VALUES(?)';
        db.all(sql,[Category],  (err) => {
        if(err)  return reject(err);
        resolve()
    })
})   
}

export const updateCategory = (editCategory) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE categorias SET categoria = ? WHERE id = ? ';
        db.all(sql, editCategory,  (err) => {
        if(err)  return reject(err);
        resolve()
    })
})   
}

export const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM categorias WHERE id = ? ';
        db.all(sql, [id], (err) => {
        if(err)  return reject(err);
        resolve()
    })
})   
}






