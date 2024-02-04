import styled from 'styled-components'

export const Main = styled.main``

export const MainSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`

export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 440px;
  width: 100%;
  display: flex;
`
export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

`
export const SearchBtn = styled.button`
margin-left: 10px;
width: 158px;
height: 50px;
background-color: #009EE4;
border: 1px solid #009EE4;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

  &:hover {
    background-color: #0080c1;
  }
`
export const Filter = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem auto 0.5rem;
`

export const FilterTitle = styled.p`
    width: 200px;
    height: 50px;
    font-size: 16px;
    margin-top: 5px;
`

export const FilterButtons = styled.div`
margin-left: 10px;
width: 258px;
height: 50px;
background-color: #009EE4;
border: 1px solid #009EE4;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
display: flex;
gap: 10px;
  &:hover {
    background-color: #0080c1;
  }

`

export const Activ = styled.button`
width: 127px;
    // border: ${(props) => props.$activ && '2px solid black'};
`

export const MainH1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #009EE4;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 500px;
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`
export const Content = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 270px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 600px;
  margin-left: 10px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`

export const ImgUser = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`