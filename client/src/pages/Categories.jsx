import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import useCategory from '../hooks/useCategory'


const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container">
                <div className="row">
                    {categories.map((c) => (
                        <div className="col-md-6 mt-6 mb-2 gx-3 gy-3" key={c._id}>
                            <Link to={`/category/${c.slug}`} className="btn btn-primary">
                                {c.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Categories