import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import ScreenShots from '../../components/ScreenShots'

export default function index() {
    return (
        <Container className="lg-container">
            <div class="container-fluid">
            <div class="alert alert-primary" role="alert">
                <a href="https://www.australianunity.com.au/health-insurance" target="_blank">
                    https://www.australianunity.com.au/health-insurance
                </a>
            </div>
            </div>
            <ScreenShots 
                desktop = "./images/health-insurance/home/desktop.png"
                iPad = "./images/health-insurance/home/iPad.png"
                mobile = "./images/health-insurance/home/mobile.png"
            />
       </Container>
    )
}
