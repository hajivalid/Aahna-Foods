import styled from "styled-components";

export const Itemcard = styled.div`
& .itemCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    border-top: 2px solid #233142;
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
    border-radius: 6px
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
}
& .veg{color: #267e3e; margin-right: 5px }
& .nonVeg{color: #ae0410; margin-right: 5px }

`;