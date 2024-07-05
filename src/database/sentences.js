import db from "./conexion.js";

export const Sentences = () => {
      // Insertar datos en la tabla "categorias"
  const categorias = [
    { categoria: 'Refrigeradores' },
    { categoria: 'Lavadoras' },
    { categoria: 'Cocinas' },
    { categoria: 'Microondas' }
  ];

  categorias.forEach((categoria) => {
    db.run(`
      INSERT INTO categorias (categoria)
      VALUES (?)
    `, [categoria.categoria], (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Categoría "${categoria.categoria}" insertada.`);
      }
    });
  });

  // Insertar datos en la tabla "productos"
  const productos = [
    { codigo: 'REFR-001', producto: 'Refrigerador LG', categoria_id: 1, existencia_actual: 15, precio: 799.99 },
    { codigo: 'REFR-002', producto: 'Refrigerador Samsung', categoria_id: 1, existencia_actual: 12, precio: 899.99 },
    { codigo: 'LAVA-001', producto: 'Lavadora LG', categoria_id: 2, existencia_actual: 20, precio: 599.99 },
    { codigo: 'LAVA-002', producto: 'Lavadora Whirlpool', categoria_id: 2, existencia_actual: 18, precio: 649.99 },
    { codigo: 'COCI-001', producto: 'Cocina Mabe', categoria_id: 3, existencia_actual: 25, precio: 499.99 },
    { codigo: 'COCI-002', producto: 'Cocina GE', categoria_id: 3, existencia_actual: 22, precio: 549.99 },
    { codigo: 'MICR-001', producto: 'Microondas LG', categoria_id: 4, existencia_actual: 30, precio: 149.99 },
    { codigo: 'MICR-002', producto: 'Microondas Samsung', categoria_id: 4, existencia_actual: 28, precio: 179.99 },
    { codigo: 'REFR-003', producto: 'Refrigerador Frigidaire', categoria_id: 1, existencia_actual: 10, precio: 749.99 },
    { codigo: 'LAVA-003', producto: 'Lavadora Maytag', categoria_id: 2, existencia_actual: 16, precio: 699.99 },
    { codigo: 'COCI-003', producto: 'Cocina Bosch', categoria_id: 3, existencia_actual: 20, precio: 599.99 },
    { codigo: 'MICR-003', producto: 'Microondas Panasonic', categoria_id: 4, existencia_actual: 25, precio: 199.99 }
  ];

  productos.forEach((producto) => {
    db.run(`
      INSERT INTO productos (codigo, producto, categoria_id, existencia_actual, precio)
      VALUES (?, ?, ?, ?, ?)
    `, [producto.codigo, producto.producto, producto.categoria_id, producto.existencia_actual, producto.precio], (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Producto "${producto.producto}" insertado.`);
      }
    });
  });

}