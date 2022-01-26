import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data 
  const [value,setValue] = React.useState(0)
  const {company,position,date,desc} = jobs[0];
  console.log(company,position,date,desc)

  return <h2>jobs component</h2>
}

export default Jobs
