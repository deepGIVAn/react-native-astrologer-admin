import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradients = props => {
  const {colors, style, children, start, end} = props;

  return (
    <>
      <LinearGradient colors={colors} start={start} end={end} style={style}>
        {children}
      </LinearGradient>
    </>
  );
};
export default LinearGradients;
