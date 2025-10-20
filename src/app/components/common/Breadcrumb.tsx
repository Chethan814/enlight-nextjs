"use client";
import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
    bgImage: string;
    pageName: string;
}
 
const Breadcrumb: React.FC<BreadcrumbProps> = ({ bgImage, pageName }) => {
    return (
        <div
            className="breadcrumbarea"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                padding: "relative",
            }}
        >
            {/* Dark Overlay */}
            <div
                className="dark-overlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(32, 32, 32, 0.5)",
                }}
            ></div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb__content__wraper" data-aos="fade-up">
                            <div className="breadcrumb__title" style={{ textAlign: 'center' }}>
                                <h2 className="heading text-white">{pageName}</h2>
                            </div>
                            <div
                                className="breadcrumb__inner"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '5px', alignItems: 'center' }}>
                                    <li>
                                        <Link
                                            href="/"
                                            style={{ color: '#fff', textDecoration: 'none' }}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li style={{ color: '#fff' }}>/</li>
                                    <li style={{ color: '#fff' }}>{pageName}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
