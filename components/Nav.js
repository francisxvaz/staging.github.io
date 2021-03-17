import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">STAGING</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/health-insurance">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Health Insurance
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item"  href="/health-insurance/quote">Quotes</a>
                        <a class="dropdown-item"  href="/health-insurance/recommendation">Recommendation</a>
                        <a class="dropdown-item"  href="/health-insurance/edit-quote">Edit quote</a>
                        <a class="dropdown-item"  href="/health-insurance/singles">Singles</a>
                        <a class="dropdown-item" href="/health-insurance/couples">Couples</a>
                        <a class="dropdown-item" href="/health-insurance/families">Families</a>
                        <a class="dropdown-item" href="/health-insurance/single-parents-cover">Single Parents</a>
                        <a class="dropdown-item" href="/health-insurance/hospital-covers">Hospital Cover</a>
                        <a class="dropdown-item" href="/health-insurance/hospital-extras-covers">Hospital and Extras</a>
                        <a class="dropdown-item" href="/health-insurance/extras-covers">Extra Cover</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Overseas Visitor</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}
