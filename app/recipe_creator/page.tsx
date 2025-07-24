'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';

export default function RecipeCreator(){
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null); // for accessing form
    
    async function create(formData: FormData){
        const header = formData.get('header');
        try {
            await fetch('/api/recipe_creator', {
                method: 'POST',
                body: JSON.stringify({header})
            }
            );
        }
        catch (error){
            console.error("Error creating recipe", error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        
        if (formRef.current){
            const formData = new FormData(formRef.current);
            await create(formData);
            router.push(`/`)
        }
    }
    
    // Global variable id?
    return (
        // <form onSubmit = {handleSubmit}>
        //     <input type = "text" placeholder = "Recipe Name" name = "header"/>
        //     <button type = "submit">Submit</button>
        // </form>
        <Form ref = {formRef} onSubmit = {handleSubmit}>
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control id = "header" placeholder="Enter name" />
            <Button variant = "primary" type = "submit">
                Submit
            </Button>
        </Form>
    )
}

