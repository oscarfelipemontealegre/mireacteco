

const productosPet=[
    { id:1, image: "https://www.ammascotas.com/wp-content/uploads/2016/11/Dosificadordobleusorojo.jpg",
        producto:"comedero", precio:10000, categoria:'comer'},
    { id:2, image: "https://www.ammascotas.com/wp-content/uploads/2018/08/Luxury-Acolchada.jpg",producto:"camas",
    precio:70000, categoria:'dormir'},
    {id:3, image: "https://cdn.shopify.com/s/files/1/0567/4401/7943/products/cloe-bluemarine-02_2048x2048.jpg?v=1660049810", producto:"collar", precio:"24000",
    categoria:'calle'}
]

export const getData = new Promise(resolve=>{
    setTimeout(() =>{
        resolve(productostumejoramigo);
    },3000 );
});

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = productostumejoramigo.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}
