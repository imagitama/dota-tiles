import React from 'react'
import styled from '@emotion/styled'

const FooterStyled = styled.footer`
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
`

const FooterItemStyled = styled.div`
  padding: 10px;
`

const PageFooter = () => (
  <FooterStyled>
    <FooterItemStyled>Copyright 2019</FooterItemStyled>
    <FooterItemStyled>
      <a href="#">Visit my GitHub.</a>
    </FooterItemStyled>
    <FooterItemStyled>
      <button onClick={() => localStorage.clear()}>Reset</button>
    </FooterItemStyled>
  </FooterStyled>
)

export default PageFooter
