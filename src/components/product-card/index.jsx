import React from 'react';
import ProductCardStyles from './styles';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={'/' + product.id}>
            <ProductCardStyles.Wrapper>
                <ProductCardStyles.Container>
                    <Image
                        width={400}
                        height={400}
                        objectFit="contain"
                        src={product.thumbnail.url}
                    />
                </ProductCardStyles.Container>
                <ProductCardStyles.DetailContainer>
                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>
                </ProductCardStyles.DetailContainer>
            </ProductCardStyles.Wrapper>
        </Link>
    );
};

export default ProductCard;
