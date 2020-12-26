import React from 'react'
import { Container, makeStyles } from "@material-ui/core";
import SvgIcon from '@material-ui/core/SvgIcon';

import Logo from '../../Assets/logo_white.svg'


const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <SvgIcon src={Logo} fontSize="large"/>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    backgroundColor: '#2c2c2c',
  },
  container: {
    maxWidth: 1140,
    width: '100%',
    margin: '0px auto'
  }
}))

export default Header;