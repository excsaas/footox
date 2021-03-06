import styled from 'styled-components';
import Dropdown from 'react-dropdown';

const CollectionStyles = {};

CollectionStyles.BannerContainer = styled.div`
    width: 100%;
    max-height: 350px;
    height: 350px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

CollectionStyles.Overlay = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    height: 100%;
    background: linear-gradient(0deg, #fff, transparent, transparent);
`;

CollectionStyles.Wrapper = styled.div`
    padding: 0 0 2rem;
`;

CollectionStyles.ErrorContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

CollectionStyles.Container = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;

    > h2 {
        color: black;
        max-width: 1200px;
        width: 100%;
        font-size: 2rem;
        margin: 0 auto;
        padding: 1rem;
        margin-top: 1rem;
    }

    .dot-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
    }
`;

CollectionStyles.ProductItemsContainer = styled.div`
    padding: 0 20px;
    flex: 1;
    margin: 0 auto;
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
    }
`;

CollectionStyles.NoContent = styled.div`
    height: 100%;
    width: 100%;
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

CollectionStyles.PaginationContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
`;

CollectionStyles.HeadingContainer = styled.div`
    display: flex;
    padding: 10px 1rem;
    gap: 20px;
    z-index: 1;
    margin-bottom: 10px;
`;

CollectionStyles.FilterContainer = styled.div`
    display: flex;
    padding: 1rem;
    /* justify-content: flex-end; */
    gap: 20px;
    z-index: 1;
`;
CollectionStyles.CustomDropdown = styled(Dropdown)`
    z-index: 0;
    min-width: 150px;
    margin-top: 5px;
`;

export default CollectionStyles;
