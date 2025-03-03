import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

interface IngredientsAccordionProps {
    ingredients: string[];
    instructions: string;
}

const IngredientsAccordion = ({ ingredients, instructions }: IngredientsAccordionProps) => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer hover:underline">Show All Recipe</AccordionTrigger>
            <AccordionContent>
                <div>
                    <h4 className="font-bold">Ingredients:</h4>
                    <ul className="list-disc pl-5">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <h4 className="font-bold mt-4">Instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

export default IngredientsAccordion;
