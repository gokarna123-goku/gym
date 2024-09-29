import React from 'react'

const Layout = ({ children, className }) => {
    return (
        <div className={`w-full lg:px-24 md:px-16 sm:px-6 px-4 py-3 ${className}`}>
            {children}
        </div>
    )
}

export default Layout