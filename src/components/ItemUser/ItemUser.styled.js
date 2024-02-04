import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 50px;
`

export const MainAvatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`
export const MainLogin = styled.p`
  font-family: 'Theano Didot';
  font-weight: 300;
  font-size: 10.1vh;
  margin: 0.7vh 0 0 0;
  color: #009EE4;
`
export const MainH3 = styled.h3`
  font-family: 'Theano Didot';
  transition: all 0.3s;
  font-size: 5.2vh;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.1);
  }
`
export const MainBlockA = styled.a`
  text-decoration: none;
  font-family: 'Theano Didot';
  font-weight: 100;
  font-size: 7.2vh;

  &:hover {
    text-decoration: underline;
  }
`
export const MainBlockP = styled.a`
  font-family: 'Theano Didot';
  font-weight: 300;
  font-size: 7.1vh;
  margin: 0.7vh 0 0 0;
`
