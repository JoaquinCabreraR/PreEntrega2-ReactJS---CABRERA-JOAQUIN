const products = [
    {
        id: 1,
        name: "Pioneer DJM V10 LF",
        price: 2500,
        category: "mixer",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-v10-lf/djm-v10-lf-top.png?h=1170&w=1029&hash=C23FCBF179AACBB360D6009BFCC65D9A",
        description: "Pioneer DJM V10 LF es un mezclador de club para DJ de 6 canales con faders largos y sin crossfader con un sonido cálido con energía y presencia, potente y versátil módulo de FX, interfaz de audio USB dual, y muchas más prestaciones. El mezclador Pioneer DJ DJM V10 LF cuenta con 6 canales con faders largos, ecualizador de 4 bandas, un isolador de 3 bandas, interfaz de audio USB dual, y con múltiples opciones para la conexión de diferentes fuentes de audio así como de ruteo",
        stock: 3,
    },
    {
        id: 2,
        name: "Sennheiser HD 25 Plus",
        price: 150,
        category: "auriculares",
        img: "https://assets.sennheiser.com/img/6553/product_detail_x2_tablet_HD_25_PLUS_Isofront_RGB_red_optm..jpg",
        description: "Sennheiser HD 25 Plus es el HD 25 auricular para DJ de siempre con una mejora en la unión mecánica entre la diadema y las carcasas que contienen las cápsulas, por lo que ahora la construcción es más sólida, aumenta la durabilidad y proporciona un ajuste más suave.",
        stock: 8,
    },
    {
        id: 3,
        name: "Pioneer CDJ 3000",
        price: 2100,
        category: "reproductores",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/cdj-3000/black/cdj-3000-top-hero-sp.png",
        description: "El multi reproductor avanzado de Pioneer CDJ-3000 es la opción perfecta para darle rienda suelta a tu poder creativo. Este multi reproductor constituye una robusta unidad alimentada por un avanzado MPU. También cuenta con un equipamiento de componentes de alta calidad especialmente desarrollados y con múltiples características innovadoras. Pioneer es una marca líder en su sector por su capacidad de avance e innovación, y una vez más lo vuelve a demostrar colocando la primera MPU en un CJD. El resultado de ello es un multi reproductor que controla la unidad, brinda un rendimiento estable y habilita nuevas funciones avanzadas, además de ser capaz de crear una experiencia de DJ más fluida.",
        stock: 12,
    },
    {
        id: 4,
        name: "Pioneer DJ DJM-450",
        price: 750,
        category: "mixer",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-450/djm-450-main.png?h=768&w=1024&hash=74CFABFE81372B4CFFF528E415E3ECD2",
        description: "La mezcla perfecta. Con muchas de las características heredadas de la DJM-900NXS2es la mesa de mezclas ideal para complementar a los reproductores XDJ-700 o los platos PLX-1000. El crossfader Magvel, el suave EQ y los faders de canal ofrecen una respuesta precisa para que te sientas seguro mezclando. Mientras que Sound Colour FX y Beat FX, con control de parámetros, añaden un toque creativo a tus mezclas. Y gracias al procesador digital de 64 bits disfrutarás de audio de alta calidad, cálido, tanto para las fuentes de sonido analógicas como la digitales.",
        stock: 5,
    },
    {
        id: 5,
        name: "Technics EAH-DJ1200",
        price: 180,
        category: "auriculares",
        img: "https://d22fxaf9t8d39k.cloudfront.net/062665f2581c081e04d7755c7308b2c3df11fb3b742faf617dab1a7a982453f533975.jpeg",
        description: "Technics EAH-DJ1200 son unos auriculares creados para poder adaptarse a las necesidades del DJ actual. Son unos auriculares especializados que cuentan con funciones avanzadas, diseño y una gran calidad de sonido. Gracias a su aislamiento del exterior podrás monitorizar tu música en entornos muy ruidosos como en discotecas. Con sus drivers de 40mm de diametro conseguirás un sonido claro y detallado con una gran calidad de sonido sin distorsión ni a muy altos volumenes, dispone de un sonido bien balanceado desde las frecuencias bajas a las altas. Disponen de un diseño ligero para que puedas usarlos durante horas sin que sea incómodo y tiene un brazo de 270º para que puedas realizar la monitorización por un solo oído.",
        stock: 4,
    },
    {
        id: 6,
        name: "Pioneer XDJ 700",
        price: 650,
        category: "reproductores",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/xdj-700/xdj-700-main.png?h=768&w=1024&hash=4502BF83BBC3FD34D473EF548B50941B",
        description: "Tamaño compacto, excelentes características. El XDJ-700 dispone de una gran pantalla táctil, y un diseño familiar con funciones heredadas de su hermano mayor, el XDJ-1000. Su tamaño compacto y su soporte extraíble lo hace perfecto para cabinas pequeñas o espacios reducidos en casa. Una de las novedades es que su altura es variable, dispone de unas patas o cuerpo inferior, el cual puede pasar de una altura de 10.6cm a una de 7.9cm. Puede reproducir AAC, MP3, AIFF y WAV. Si se emplea con la versión para iOS de Rekordbox sólo puede cargar AAC y MP3.",
        stock: 8,
    },
    {
        id: 7,
        name: "Yamaha HS7",
        price: 240,
        category: "monitores",
        img: "https://es.yamaha.com/es/files/photoviewer_speaker_hs7_left_7dd7222537353f8e86c904fc8fbc0aa9.jpg?impolicy=resize&imwid=735&imhei=735?imbypass=on",
        description: "Yamaha HS7, monitor de estudio de 2 vías y campo cercano, bass-reflex biamplificado, con woofer de cono de 6,5 pulgadas y tweeter de cúpula de 1 pulgada. (PRECIO POR UNIDAD)",
        stock: 14,
    },
    {
        id: 8,
        name: "KRK Rokit 7 G4",
        price: 240,
        category: "monitores",
        img: "https://krk.blob.core.windows.net/public/ROKIT-G4/RP7G4-left.png",
        description: "El nuevo monitor profesional KRK ROKIT RP7 G4 (Generación 4) de 7 pulgadas lleva la creatividad de la música y el sonido a un nivel completamente nuevo de la industria. El ecualizador gráfico impulsado por DSP con 25 configuraciones ayuda a acondicionar su entorno acústico mientras ofrece nuevos niveles de versatilidad en un monitor de estudio. Los controladores combinados fabricados con Kevlar® aseguran la misma integridad sonora en todas las frecuencias. Una nueva caja de altavoz y puerto de disparo frontal científicamente diseñados ofrecen una extensión y precisión excepcionales, punzonado y posicionamiento de sala flexible. Sin embargo, un eficiente amplificador de potencia Clase D personalizado impulsa los altavoces de manera uniforme y más eficiente a temperaturas de funcionamiento reducidas y mejora la integridad del audio. (PRECIO POR UNIDAD)",
        stock: 14,
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

