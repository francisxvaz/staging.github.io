import React from 'react'

export default function MainLink({link}) {
    return (
        <div className="container-fluid">
            <div className="alert alert-primary" role="alert">
                <a href={link} target="_blank">
                    {link}
                </a>
            </div>
            </div>
    )
}
