import React from "react";
import "./Carrusel.css";

export const Carrusel = () => {
    return (
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia,
                                    earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem
                                    architecto!</p>
                                <div class="testimonial-user">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="images/personal2@2x.png" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-9">
                                            <h6>Sofia Mendez</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia,
                                    earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem
                                    architecto!</p>
                                <div class="testimonial-user">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="images/testimonio1@2x.png" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-9">
                                            <h6>Sebastian Gimenez</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
    );
}