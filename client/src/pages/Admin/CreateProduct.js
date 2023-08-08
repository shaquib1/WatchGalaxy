import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard - Create Product"}>
         <div className="container-fluid m-4 p-4 ">
    <div className="row">
      <div className="col-md-3">
          <AdminMenu />
      </div>
      <div className="col-md-9"> 
      <h1> create Product</h1>
      </div>
  </div>
  </div>
</Layout>
  )
}

export default CreateProduct