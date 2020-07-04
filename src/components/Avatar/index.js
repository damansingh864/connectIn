import React from 'react';
import { Wrapper, ImageWrapper, Img } from './styles'

const Avatar = ({ styles}) => (
  <Wrapper style={styles}>
    <ImageWrapper><Img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=80&w=80" /></ImageWrapper>
  </Wrapper>
);

export default Avatar;