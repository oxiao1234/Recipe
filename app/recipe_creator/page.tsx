'use client';
import { useRouter } from 'next/navigation';

export default function RecipeCreator(){
    const router = useRouter();
    
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(e.target);
        create(formData);
        router.push(`/`)
    }
    
    // Global variable id?
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder = "Recipe Name" name = "header"/>
            <button type = "submit">Submit</button>
        </form>
    )
}

