'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, Card } from "react-bootstrap";

export function Recipe({id = "0", header = "Untitled Recipe"}) {
    const router = useRouter();
    
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{header}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button onClick={() => router.push(`/${id}`)}>Go to Recipe</Button> 
            </Card.Body>
        </Card>
    );
}

//            <Card.Img variant="top" src="holder.js/100px180" />

