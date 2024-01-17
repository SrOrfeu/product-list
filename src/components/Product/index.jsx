const Product = ({classes, name, categoryName, discount, price}) => {
    return (
        <>
            <div className={`bg-white p-4 border-round-sm shadow-3 relative  ${classes}`}>
                {
                    discount != 0 && (
                        <div className="absolute font-bold px-3 py-2 border-round-2xl uppercase text-sm" style={{backgroundColor: "#E7FF86"}}>{discount}%</div>
                    )
                }
                 
                 <img className="w-full" src="https://sneakersul.com.br/cdn/shop/files/air-jordan-1-high-ko-chicago-2.webp?v=1695747969&width=2048" alt="" />    
            </div>
            <h6 className="mt-3 text-sm text-700">{categoryName} </h6>
            <h2 className="font-light text-800 mt-2 mb-3">{name}</h2>
            <h2><del className="font-light text-700 mr-2">R${price}</del>R$100</h2>
        </>
    );
}

export default Product;