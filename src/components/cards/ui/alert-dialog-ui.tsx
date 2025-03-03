// AlertRemoveButton.tsx
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertRemoveButtonProps {
    onRemove: () => void;
}

const AlertRemoveButton = ({ onRemove }: AlertRemoveButtonProps) => (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="outline" className="bg-red-300 cursor-pointer w-full">Remove</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    The meal will be removed from the wish list
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onRemove}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

export default AlertRemoveButton;
