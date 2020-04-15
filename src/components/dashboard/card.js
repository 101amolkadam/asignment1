import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContent from '@material-ui/core/CardContent';
import UpdateIcon from '@material-ui/icons/Update';
import ChartistGraph from "react-chartist";
import { Divider } from '@material-ui/core';



const Card = (props) => {

    var delays = 80,
        durations = 500;
    var delays2 = 80,
        durations2 = 500;
    const Chartist = require("chartist");
    const dailySalesChart = {
        data: {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            series: [[10, 15, 20, 25, 27, 30, 35]]
        },
        options: {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0,
                showArea: true,
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        // for animation
        animation: {
            draw: function (data) {
                if (data.type === "line" || data.type === "area") {
                    data.element.animate({
                        d: {
                            begin: 600,
                            dur: 700,
                            from: data.path
                                .clone()
                                .scale(1, 0)
                                .translate(0, data.chartRect.height())
                                .stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                } else if (data.type === "point") {
                    data.element.animate({
                        opacity: {
                            begin: (data.index + 1) * delays,
                            dur: durations,
                            from: 0,
                            to: 1,
                            easing: "ease"
                        }
                    });
                }
            }
        }
    };

    // ##############################

    const email = {
        data : {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
           series: [
           [5, 4, 3, 7, 5, 6, 3, 4, 8, 3, 6, 5],
           ]
       },
        options : {
           seriesBarDistance: 10
       },
        responsiveOptions : [
           ['screen and (max-width: 640px)', {
           seriesBarDistance: 5,
           axisX: {
               labelInterpolationFnc: function (value) {
               return value[0];
               }
           }
           }]
       ],

       animation: {
           draw: function (data) {
               if (data.type === "bar") {
                   data.element.animate({
                       opacity: {
                           begin: (data.index + 1) * delays2,
                           dur: durations2,
                           from: 0,
                           to: 1,
                           easing: "ease"
                       }
                   });
               }
           }
       }

   };

    // ##############################

    const task = {
        lineChartData : {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [5, 9, 7, 8, 5, 3, 5, 4]
            ]
        },
        lineChartOptions : {
            low: 0,
            showArea: true
        },
        animation: {
            draw: function (data) {
                if (data.type === "line" || data.type === "area") {
                    data.element.animate({
                        d: {
                            begin: 600,
                            dur: 700,
                            from: data.path
                                .clone()
                                .scale(1, 0)
                                .translate(0, data.chartRect.height())
                                .stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                } else if (data.type === "point") {
                    data.element.animate({
                        opacity: {
                            begin: (data.index + 1) * delays,
                            dur: durations,
                            from: 0,
                            to: 1,
                            easing: "ease"
                        }
                    })
                }
            }
        }
    }

    
    return (
        <div style={{ margin: "40px 0 0 1%",paddingBottom:"10" }}>
            <div class="card-deck">
                <div class="card bg-light  mb-6" style={{ maxWidth: "25rem",}}>
                    
                    <div class="card-body">

                        <div style={{
                            paddingLeft: 20, paddingTop: 10, paddingRight: 20,
                            flexDirection: 'coloumn', display: 'flex',
                        }}>
                            <div style={{ padding: 10, background: "gray" }} >
                                <ChartistGraph
                                    style={{
                                        color: 'white', fontSize: '10px',
                                        fontFamily: 'sans-serif', stroke: 'white', strokeWidth: '1',
                                        strokeDasharray: '1px 1px',
                                    }}
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={dailySalesChart.animation}
                                />

                            </div>
                        </div>
                        <br />
                        <h5 class="card-title">Daily Sales</h5>
                        <p class="card-text">55% increase in today sales</p>
                    </div>
                    <Divider />
                        <CardContent >
                            <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                            <text style={{ marginLeft: 10, marginTop: 0, fontSize: 15, color: "#666666" }} >
                                updated 4 minutes ago
                            </text>
                        </CardContent>
                </div>
                <div class="card bg-light  mb-6" style={{ maxWidth: "25rem", }}>
                    
                    <div class="card-body">

                        <div style={{
                            paddingRight: 20, paddingLeft: 20, paddingTop: 10,
                            flexDirection: 'coloumn', display: 'flex',
                        }}>
                            <div style={{ padding: 10, background: "orange" }} >
                                <ChartistGraph
                                    style={{
                                        color: 'white', fontSize: '10px',
                                        fontFamily: 'sans-serif', stroke: 'white', strokeWidth: 3,
                                    }}
                                    className="ct-chart"
                                    data={email.data}
                                    type="Bar"
                                    options={email.options}
                                    responsiveOptions={email.responsiveOptions}
                                    listener={email.animation}
                                />
                            </div>
                        </div>
                        <br />
                        <h5 class="card-title">Email Subscriptions</h5>
                        <p class="card-text">Last Campaign Performance</p>
                    </div>
                    <Divider />
                    <CardContent >
                        <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                        <text style={{ marginLeft: 10, marginTop: 5, fontSize: 15, color: "#666666" }} >
                            campaign sent 2 days ago
                        </text>
                    </CardContent>
                </div>
                <div class="card bg-light mb-6" style={{ maxWidth: "25rem", }}>
                    
                    <div class="card-body">

                        <div style={{
                            paddingRight: 20, paddingLeft: 20, paddingTop: 10,
                            flexDirection: 'coloumn', display: 'flex',
                        }}>
                            <div style={{ padding: 10, background: "lightblue" }} >
                                
                            <ChartistGraph 
                                style={{
                                    color: 'black', fontSize: '10px',
                                    fontFamily: 'sans-serif', stroke: 'white', strokeWidth: 1,
                                }}
                                data={task.lineChartData} 
                                type="Line"
                                options={task.lineChartOptions}        
                                listener={task.animation}                        
                            />
                            </div>
                        </div>
                        <br />
                        <h5 class="card-title">Completed Tasks</h5>
                        <p class="card-text">Last Compaign Performance</p>
                    </div>
                    <Divider />
                    <CardContent >
                        <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                        <text style={{ marginLeft: 10, marginTop: 5, fontSize: 15, color: "#666666" }} >
                            campaign sent 2 days ago
                        </text>
                    </CardContent>
                </div>                
            </div>
        </div>
    );
}

export default Card;