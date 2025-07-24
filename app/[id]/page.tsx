import { RecipeType } from "../types";

type Props = {
    params: {
        id: string;
    }
}

export default function RecipePage({ params }: Props){
    return (
        <h1>{params.id}</h1>
    );
}