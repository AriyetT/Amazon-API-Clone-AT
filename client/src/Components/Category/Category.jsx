import React from 'react'
import {categoryInfos} from './CategoryFullinfo'
import CatagoryCard from './CategoryCard'
import classes from'./Category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {
        categoryInfos.map((infos, index)=>(
          <CatagoryCard key={index}   data = {infos}/>
        ))
      }
    </section>
  )
}

export default Category



