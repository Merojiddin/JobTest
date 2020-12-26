import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

const Job = {
  Title: 'Developer',
  CompanyName: "Developed Company",
  Description: `Rent out your parking space or your garage and earn $4,000+ / year!
  We are looking for side hustlers and passive income lovers to join Neighbor as independent hosts
  Neighbor connects hosts with unused space to renters in need of storage. Earn extra cash by renting out your empty space today! Neighbor is a great compliment to your dog walking, door dashing, airport driving, rv sharing, car sharing, or other side gig. Neighbor is a self-storage and parking community that allows`,

}



const Api = {
 base: 'https://www.zippia.com/api/jobs/'
}

const Jobs = () => {
  const classes = useStyles();
  //const [query, setQuery] = useState('');
 
  const responses = fetch(Api.base)
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(data => console.log("Response:"+data));
  
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>Jobs For Me</h1>

        <div className={classes.searchBar}> 
          <ul className={classes.searchBarContainer}>
            <li className={classes.searchBarItems}>
              Company Name
            </li>
            <li className={classes.searchBarItems}>
              Time
            </li>
          </ul>
        </div>

        <div className={classes.jobs}>
          <div className={classes.jobContainer}>
            <h3 className={classes.jobTitle}>{Job.Title}</h3>
            <h4 className={classes.jobCompany}>{Job.CompanyName}</h4>
            <p className={classes.jobDescription}>
              {Job.Description.length < 250 
              ? Job.Description
              : Job.Description.slice(0, 250) + ' ...' }
            </p>
            <button className={classes.jobApplyBtn}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  container: {
    maxWidth: 1140,
    width: '100%',
    margin: 'auto',
    padding: '20px'
  },
  mainTitle: {
    fontSize: 36,
    lineHeight: '48px',

  },
  searchBar: {
    margin: '20px 0px'
  },
  searchBarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },

  jobs:{
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

  },
  jobContainer: {
    width: 240,
    height: 262,
    padding: '15px', 
    border: 'solid 2px black'   
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: '36px',


  },
  jobCompany: {
    fontWeight: 300,
    lineHeight: '24px',
    fontSize: 20,

  },
  jobDescription: {
    height: 190,
    fontSize: 16,
  },
  jobApplyBtn: {
    float: 'right',
  }
}))

export default Jobs