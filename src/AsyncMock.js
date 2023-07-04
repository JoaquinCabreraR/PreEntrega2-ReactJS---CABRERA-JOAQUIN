const products = [
    {
        id: 1,
        name: "Pioneer DJM V10 LF",
        price: 2500,
        category: "Mixer DJ",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-v10-lf/djm-v10-lf-top.png?h=1170&w=1029&hash=C23FCBF179AACBB360D6009BFCC65D9A",
        stock: 5,
    },
    {
        id: 2,
        name: "Sennheiser HD 25 Plus",
        price: 200,
        category: "Auriculares DJ",
        img: "https://assets.sennheiser.com/img/6553/product_detail_x2_tablet_HD_25_PLUS_Isofront_RGB_red_optm..jpg",
        stock: 8,
    },
    {
        id: 3,
        name: "Pioneer CDJ 3000",
        price: 1900,
        category: "Reproductores DJ",
        img: "https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/cdj-3000/black/cdj-3000-top-hero-sp.png",
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
