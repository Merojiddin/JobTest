import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

const Job = {
  Title: 'Developer',
  CompanyName: "Developed Company",
  Description: `Rent out your parking space or your garage and earn $4,000+ / year!
  We are looking for side hustlers and passive income lovers to join Neighbor as independent hosts
  Neighbor connects hosts with unused space to renters in need of storage. Earn extra cash by renting out your empty space today! Neighbor is a great compliment to your dog walking, door dashing, airport driving, rv sharing, car sharing, or other side gig. Neighbor is a self-storage and parking community that allows`,
}
const array = [1,2,3,4,5,6,7,8,9,10]


const Api = {
 base: 'https://www.zippia.com/api/jobs/'
}

const Jobs = () => {
  const classes = useStyles();
  //const [query, setQuery] = useState('');
 
  fetch(Api.base, {
    method: 'POST',
    body:JSON.stringify({
      "companySkills": true,
      "dismissedListingHashes": [],
      "fetchJobDesc": true,
      "jobTitle": "Business Analyst",
      "locations": [],
      "numJobs": 20,
      "previousListingHashes": []
    }),
    headers:{
      "Content-type": "aplication/json: charset=UTF-8"
    }
  }).then(response => response.json())
  .then(json => console.log(json))

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
          {array.map((e) => (
            <div className={classes.jobContainer} key={e}>
              <h3 className={classes.jobTitle}>{Job.Title}</h3>
              <h4 className={classes.jobCompany}>{Job.CompanyName}</h4>
              <p className={classes.jobDescription}>
                {Job.Description.length < 250 
                ? Job.Description
                : Job.Description.slice(0, 250) + ' ...' }
              </p>
            </div>
          ))}
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
    maxWidth: 1180,
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
    flexWrap: 'wrap',
  },
  jobContainer: {
    width: 240,
    height: 262,
    padding: '15px', 
    border: 'solid 2px #d8dee2',
    borderRadius: 5,
    marginRight: '15px',
    marginBottom: '15px',
    transition: 'all 0.3s ease 0s',
    '&:hover': {
      boxShadow: '0px 0px 9px 1px',
    }
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: '36px',

  },
  jobCompany: {
    fontWeight: 300,
    lineHeight: '18px',
    fontSize: 14,
    marginBottom: 5,
  },
  jobDescription: {
    height: 190,
    fontSize: 16,
  },
 
}))

export default Jobs