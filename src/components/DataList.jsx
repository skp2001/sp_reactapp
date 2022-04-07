import React from 'react'

import { Card } from './Card'
import './styles.css'

export const DataList = ({dataList}) => {

  return (
    <>
    <div className='profileContainer'>
    {
        dataList ? dataList.map((item) => (
            <Card id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} avatar={item.avatar} />
            )) : <></>
    }
    </div>
    </>
  )
}
