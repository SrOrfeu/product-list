import { styled } from "styled-components";

import { Button } from 'primereact/button'

const PageProductsContainer = styled.div`
padding: 100px; 
`;

const PageProducts = () => {
    return (
        <>
        <PageProductsContainer>
            <h1>Page Products</h1>
            <Button label="submit" />
        </PageProductsContainer>
        </>
    );
}

export default PageProducts;