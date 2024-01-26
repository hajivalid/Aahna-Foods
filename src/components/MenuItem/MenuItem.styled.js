import styled from "styled-components";

export const Itemcard = styled.div`
& .itemCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 1px solid #233142;
}
& .itemInfo{
    width: 75%;
}
& .itemImageInfo{
    width: 175px;
}
& img{
    width: 100%;
    height: 96px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom:6px;
}
& button {
    padding: 10px 20px;
    width: 100%;
    background: #267e3e;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background: #FA0112
    }
}
& h3{
    margin:5px 0px;
    font-weight: 600;
    font-size: 18px;
}
& .veg{color: #267e3e; margin-right: 5px }
& .nonVeg{color: #ae0410; margin-right: 5px }

`;