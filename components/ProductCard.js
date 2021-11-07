import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({imgSrc, title}) => {
    return (
        <>
            <Card style={{ width: "inherit" }}>
                <Card.Img variant="top" src={imgSrc} style={{height: "200px"}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;