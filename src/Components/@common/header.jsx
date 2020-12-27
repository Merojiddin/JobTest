import React from 'react'
import { makeStyles } from "@material-ui/core";
//import theme from '../../theme'



const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <button className={`${classes.jobLogo} ${classes.btn}` }>Jobs</button>
        </div>
        <div className={classes.navBarContainer}>
          {/* <ul className={classes.navBar}>
            <li className={classes.navBarItem}><a href="#" className={classes.navBarItemLink}>About</a></li>
            <li className={classes.navBarItem}><a href="#" className={classes.navBarItemLink}>Jobs</a></li>
            <li className={classes.navBarItem}><a href="#" className={classes.navBarItemLink}>Companies</a></li>
            <li className={classes.navBarItem}><a href="#" className={classes.navBarItemLink}>Contacts</a></li>
          </ul>*/}
        </div> 
        <div className={classes.signUpInContainer}>
          <button className={`${classes.navBarSignIn} ${classes.btn}`}>Sign In</button>
          <button className={`${classes.navBarSignUp} ${classes.btn}`}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

//Just using makeStyles for making it easier to read
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    backgroundColor: '#2c2c2c',
    display: 'flex',
  },
  container: {
    maxWidth: 1140,
    minWidth: 340,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0px',
    ['@media (max-width:1179px)']: {
      padding:  '15px 20px',
      width: 920,
    },
    ['@media (max-width:960px)']: {
      width: 610,
    },
    ['@media (max-width:650px)']: {
      width: '100%',
      maxWidth: 600,
      
    },
  },
  logoContainer: {
    height: 60,
    display: 'flex',
    float: 'left'
  },
  btn: {
    color: '#D3D3D3',
    fontSize: 24,
    cursor:'pointer',
    borderRadius: '10px',
    width: 100,
    backgroundColor: '#4c4c4c',
    borderStyle: 'none',
    height: 35,
    alignSelf: 'center',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      backgroundColor: 'rgba(76,76,76, 0.4)'
    }
    
  },
  jobLogo: {
    fontSize: 32,
    border: 'none',
    cursor:'pointer',
    backgroundColor: 'Transparent',
    width: 75,

    '&:hover': {
      backgroundColor: 'Transparent', 
      color: 'grey'
    }
  },
  navBarContainer: {
    float: 'right',
    display: 'flex',
  },
  navBarItem: {
    padding: '0px 20px',
    display: 'inline-block',
    textDecoration: 'none',
  },
  navBarItemLink: {
    color: '#D3D3D3',
    fontSize: 24,
    '&:hover': {
      color: 'grey',
    }
  },
  signUpInContainer: {
    display: 'flex',

  },
  navBarSignUp: {
    backgroundColor:  '#3174EE',
    marginLeft: 10,
    height: 55,
    width: 130,
    '&:hover': {
      backgroundColor: 'rgba(49,116,238, 0.4)'
    }
  },


  
}))

export default Header;