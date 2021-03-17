import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="lg-container">
     <div class="container-fluid">
        <div class="alert alert-primary" role="alert">
            <a href="https://www.australianunity.com.au/health-insurance" target="_blank">
                https://www.australianunity.com.au/health-insurance
            </a>
        </div>
    </div>


    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5">
                <div class="font-weight-bold">Desktop</div>
                <img class="col-md-12" src="./images/health-insurance/home/desktop.png" />
            </div>
            <div class="col-md-4">
                <div class="font-weight-bold">iPad</div>

                <img class="col-md-12" src="./images/health-insurance/home/iPad.png" />
            </div>
            <div class="col-md-3">
                <div class="font-weight-bold">Mobile</div>

                <img class="col-md-12" src="./images/health-insurance/home/mobile.png" />
            </div>
        </div>
    </div>
    </Container>
  )
}
