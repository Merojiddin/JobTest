import React from 'react'
import { makeStyles } from "@material-ui/core";


const Footer = () => {
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <button className={`${classes.jobLogo} ${classes.btn}` }>Jobs</button>
        </div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#2c2c2c',
    display: 'flex',
  },
  container: {
    maxWidth: 1180,
    width: '100%',
    margin: 'auto',
    padding: '10px 15px 30px'
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
  logoContainer: {
    height: 60,
    display: 'flex',
    float: 'left'
  },
  jobLogo: {
    fontSize: 32,
    border: 'none',
    cursor:'pointer',
    backgroundColor: 'Transparent',
    '&:hover': {
      backgroundColor: 'Transparent', 
      color: 'grey'
    }
  },

}))

export default Footer
