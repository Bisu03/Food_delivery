import React from "react";
import './css/top_header.css';
import '../App.css';

class Top_header extends React.Component{
    render() {
        return (
            <div>
                <div className="container-fluid top_header">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-1 col-sm-12">
                                <div className="logo">
                                    <img src="logo.png" alt="logo" height="90px" width="95px"></img>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <div className="desk_menu">
                                    <ul>
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">Drinks</a></li>
                                        <li><a href="javascript:void(0)">Foods</a></li>
                                        <li><a href="javascript:void(0)">Dine In</a></li>
                                        <li><a href="javascript:void(0)">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="icons">
                                <ul>
                                    <li>
                                    <i class="fa fa-search"></i>
                                    </li>
                                    <li> <i class="fa fa-shopping-cart"></i> </li>
                                    <li> <i class="fa fa-user"></i> </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top_header;