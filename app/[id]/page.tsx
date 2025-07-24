import { use } from "react";
import { RecipeType } from "../types";

type Props = Promise<
{
    id: string
}
>

export default function RecipePage(props: { params: Props }){
    const params = use(props.params);
    return (
        <h1>{params.id}</h1>
    );
}