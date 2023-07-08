const products = [
    {
        id: 1,
        name: "Pioneer DJM V10 LF",
        price: 2500,
        category: "mixer",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-v10-lf/djm-v10-lf-top.png?h=1170&w=1029&hash=C23FCBF179AACBB360D6009BFCC65D9A",
        description: "Pioneer DJM V10 LF es un mezclador de club para DJ de 6 canales con faders largos y sin crossfader con un sonido cálido con energía y presencia, potente y versátil módulo de FX, interfaz de audio USB dual, y muchas más prestaciones. El mezclador Pioneer DJ DJM V10 LF cuenta con 6 canales con faders largos, ecualizador de 4 bandas, un isolador de 3 bandas, interfaz de audio USB dual, y con múltiples opciones para la conexión de diferentes fuentes de audio así como de ruteo",
        stock: 5,
    },
    {
        id: 2,
        name: "Sennheiser HD 25 Plus",
        price: 200,
        category: "auriculares",
        img: "https://assets.sennheiser.com/img/6553/product_detail_x2_tablet_HD_25_PLUS_Isofront_RGB_red_optm..jpg",
        description: "Sennheiser HD 25 Plus es el HD 25 auricular para DJ de siempre con una mejora en la unión mecánica entre la diadema y las carcasas que contienen las cápsulas, por lo que ahora la construcción es más sólida, aumenta la durabilidad y proporciona un ajuste más suave.",
        stock: 8,
    },
    {
        id: 3,
        name: "Pioneer CDJ 3000",
        price: 1900,
        category: "reproductores",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/cdj-3000/black/cdj-3000-top-hero-sp.png",
        description: "El multi reproductor avanzado de Pioneer CDJ-3000 es la opción perfecta para darle rienda suelta a tu poder creativo. Este multi reproductor constituye una robusta unidad alimentada por un avanzado MPU. También cuenta con un equipamiento de componentes de alta calidad especialmente desarrollados y con múltiples características innovadoras. Pioneer es una marca líder en su sector por su capacidad de avance e innovación, y una vez más lo vuelve a demostrar colocando la primera MPU en un CJD. El resultado de ello es un multi reproductor que controla la unidad, brinda un rendimiento estable y habilita nuevas funciones avanzadas, además de ser capaz de crear una experiencia de DJ más fluida.",
        stock: 12,
    },
]

export const getProducts = () => {
    return new Promise((resolve) => (
        setTimeout(()=> {
            resolve(products);
        }, 500)
    ))
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let productsFilter = products.filter(prod => prod.category === productCategory)
            resolve(productsFilter)
        }, 500)
    })
}

