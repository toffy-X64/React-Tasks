function ProductHeader({name = 'Default name'}) {
    return (
        <div className="product-header">
            <h3>{name}</h3>
        </div>
    );
}

export default ProductHeader;