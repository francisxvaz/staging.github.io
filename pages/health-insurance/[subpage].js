import React from 'react'
import {Container} from "react-bootstrap"
import ScreenShots from '../../components/ScreenShots'
import { useRouter } from 'next/router'
import MainLink from '../../components/MainLink'

export default function index() {
    const router = useRouter()
    var p = router.query.subpage;

    const mainLink = `https://stagepci-www.australianunity.com.au/health-insurance/${p}`
    const desktopUrl = `/images/health-insurance/${p}/desktop.png`
    const iPadUrl = `/images/health-insurance/${p}/iPad.png`
    const mobileUrl = `/images/health-insurance/${p}/mobile.png`

    return (
        <Container className="lg-container">
            <MainLink link = {mainLink} />
            <ScreenShots 
                desktop = {desktopUrl}
                iPad = {iPadUrl}
                mobile = {mobileUrl}
            />
       </Container>
    )
}
