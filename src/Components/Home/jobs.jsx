import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core"
import axios from 'axios'

import {getRandomColor,createImageFromInitials} from '../@common/utils'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [searchedCompany, setSearchedCompany] = useState([])
  const [companies, setCompanies] = useState([])
  const classes = useStyles();
  let nameArray = []

  useEffect(() => {
    const init = async () => {
      const { data: { jobs = [] } = {} } = await axios.post('https://www.zippia.com/api/jobs/', {
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        "jobTitle": "",
        "locations": [],
        "numJobs": 20,
        "previousListingHashes": []
      })

      setJobs(jobs)
      console.log(jobs)

      //getting copmany names in one array
      jobs.map(({companyName}) => {
        if(!nameArray.includes(companyName)) {nameArray.push(companyName)}    
        return nameArray;
      })
      setCompanies(nameArray)
    }

    init()
  }, [])
  
  const onChangeHandler = (event) => {
    console.log(event.target.value)
    setSearchedCompany(event.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>Jobs For Me</h1>
        <div className={classes.searchBar}> 
          <ul className={classes.searchBarContainer}>
            <li className={classes.searchBarItems}>
              <p className={classes.selectBtnLabel}>Company Name</p >
              <div className={classes.selectBtn}>
                <select className={classes.select} onChange={onChangeHandler}>
                  <option value="0" className={classes.option}>All</option>
                  {companies.map((companyName, i) => ( 
                    <option value={companyName} className={classes.option} key={i}>{companyName}</option> 
                  ))}
                </select>
              </div>
            </li>
            <li className={classes.searchBarItems}>
              <p className={classes.selectBtnLabel}>Time</p >
              <div className={classes.selectBtn}>
                <select className={classes.select} onChange={onChangeHandler}>
                  <option value="0" className={classes.option}  >All</option>
                  <option value="1d ago" className={classes.option}>Yesterday</option>
                  <option value="3d ago" className={classes.option}>Last 3 days</option>
                  <option value="7d ago" className={classes.option}>Last week</option>
                </select>
              </div>
            </li>
          </ul>
        </div>

        <div className={classes.jobs}>
          {jobs.filter((value) => {
            if (searchedCompany == "" || searchedCompany == "0") {
              return value
            } else if (value.companyName === searchedCompany) {
              console.log('searched Value')
              return value
            } else if (searchedCompany == "7d ago") {
                  if (value.postedDate == "6d ago" || 
                      value.postedDate == "5d ago" ||
                      value.postedDate == "4d ago" ||
                      value.postedDate == "3d ago" ||
                      value.postedDate == "2d ago" ||
                      value.postedDate == "1d ago" ||
                      value.postedDate == "0d ago"
                      )  {
                        return value
                      }
            }else if (searchedCompany == "3d ago") {
              if (value.postedDate == "3d ago" ||
                  value.postedDate == "2d ago" ||
                  value.postedDate == "1d ago" ||
                  value.postedDate == "0d ago"
                  ) {
                return value
              }
            } else if (searchedCompany == "1d ago") {
              if (value.postedDate == "1d ago" ||
                  value.postedDate == "0d ago"
                  ) {
                return value
              }
            }
          })          
          .map(({ jobId, jobTitle, jobDescription, companyName, postedDate, companyLogo, skillsets}) => (
            <div className={classes.jobContainer} key={jobId}>
              <div>
                <img src={
                  companyLogo == undefined 
                  ? createImageFromInitials(500, companyName, getRandomColor())
                  : companyLogo
                } alt="logo" className={classes.logoCompany}/>
              </div>
              <h4 className={classes.jobCompany}>{companyName}</h4>
              <p className={classes.jobType}>Remote</p>
              <h3 className={classes.jobTitle}>{jobTitle}</h3>
              <p className={classes.skillset}>
                {skillsets.join(', ').length < 150 
                ? skillsets.join(', ')
                : skillsets.join(', ').slice(0, 150) + ' ...'
              }</p>
              <p className={classes.jobDate}>{postedDate}</p>
              <p className={classes.jobDescription}>
                {jobDescription.length < 250 
                ? jobDescription
                : jobDescription.slice(0, 250) + ' ...' }
              </p >
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: 800,
  },
  container: {
    maxWidth: 1140,
    width: '100%',
    margin: 'auto',
    padding: '20px',
    minWidth: 380,
    ['@media (max-width:1179px)']: {
      width: 920,
      justifyContent: 'center',
    },
    ['@media (max-width:960px)']: {
      width: 650,
      justifyContent: 'center',
      boxSizing: 'border-box'
    },
    ['@media (max-width:610px)']: {
      width: '100%',
      margin: 0,

    },
  },
  mainTitle: {
    fontSize: 36,
    lineHeight: '48px',

  },
  searchBar: {
    margin: '50px 0px'
  },
  searchBarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  //Chosing a copmany
  searchBarItems: {
    marginRight: 20,
    ['@media (max-width:610px)']: {
      width: '100%',
      maxWidth: 600,
      marginRight: 0,
    },

  },
  selectBtn: {
    position: 'relative',
  },
  select: {
    color: '#ffffff',
    padding: '8px 16px',
    backgroundColor: 'DodgerBlue',
    border: '1px solid transparent',
    borderColor: 'transparent transparent rgba(0, 0, 0, 0.1) transparent',
    cursor: 'pointer',
    userSelect: 'none',
    outline: 'none',
    fontSize: 18,
    borderRadius: 5,
    width: 400,
    "&:hover": {
      backgroundColor: 'rgba(30,144,255, 0.8)'
    },
    ['@media (max-width:1179px)']: {
      width: 440,
    },
    ['@media (max-width:610px)']: {
      width: '100%',
      maxWidth: 590,
    },
  },
  
  option: {
    border: '2px solid blue',
    "&:hover": {
      backgroundColor: 'rgba(30,144,255, 0.2)'
    }
  },

  jobs:{
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  jobContainer: {
    width: 240,
    height: 262,
    padding: '15px', 
    border: 'solid 2px #d8dee2',
    borderRadius: 5,
    marginRight: '11px',
    marginBottom: '15px',
    transition: 'all 0.3s ease 0s',
    fontFamily: 'Open Sans',
    color: '#333333',
    '&:hover': {
      boxShadow: '0px 0px 9px 1px',
    },
    ['@media (max-width:1179px)']: {
      width: 260,
      justifyContent: 'spece-between',
    },
    ['@media (max-width:610px)']: {
      width: '100%',
    },

  },
  logoCompany: {
    width: 40, 
    height: 40,
  },
  jobType: {
    color: 'rgba(51,51,51,.8)',
    fontWeight: 400,
    marginBottom: '6px',
    lineHeight: '18px',
    fontSize: '13px',
  },
  jobTitle: {
    fontWeight: 600,
    lineHeight: '18px',
    fontSize: 16,
    marginTop: 6,
    paddingBottom: '10px',
    marginBottom: 10,
    minHeight: '40px',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    borderBottom: '1px solid lightgray',
    height: 55,
  },
  jobCompany: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '18px',
  },
  skillset: {
    color: 'rgba(51,51,51,.8)',
    fontWeight: 400,
    marginBottom: '6px',
    lineHeight: '18px',
    fontSize: '13px',
    height: '85px',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    borderBottom: '1px solid lightgray',


  },
  jobDate: {
    color: 'rgba(51,51,51,.8)',
    fontWeight: 400,
    fontSize: 13
  },
  jobDescription: {
  },
 
}))

export default Jobs