import React from 'react'

export default function ScreenShots({desktop, iPad, mobile}) {
    return (
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-5">
                <div class="font-weight-bold">Desktop</div>
                <img class="col-md-12" src={desktop} />
            </div>
            <div class="col-md-4">
                <div class="font-weight-bold">iPad</div>

                <img class="col-md-12" src={iPad} />
            </div>
            <div class="col-md-3">
                <div class="font-weight-bold">Mobile</div>

                <img class="col-md-12" src={mobile} />
            </div>
        </div>
    </div>
    )
}
