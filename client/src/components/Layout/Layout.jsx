import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, keywords, description ,title , author}) => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '73.4vh' }}>
      <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title:"Ecommerce-App",
  description:"Mern stack project",
  keywords:"react , node express , mongoDB",
  author:"Shaquib",
}

export default Layout