import styled from '@emotion/styled'

export const Header = styled.h1`
    color: ${props => props.color || 'blue'};
`

export const Button = styled.button`
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${props => props.backgroundColor || 'deeppink'};
  color: ${props => props.color};

  &:hover {
    color: white;
  }

  @media (min-width: 800px) {
     border: 4px solid white;
  }
`
