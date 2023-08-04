import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
        <div className='row contactus'>
           <div className='col-md-6'>
            <img
               src='/images/contactUs.png'
               alt='contactUs'
               style={{width:"100%"}}
               />
           </div>
        </div>
    </Layout>
  )
}

export default Contact