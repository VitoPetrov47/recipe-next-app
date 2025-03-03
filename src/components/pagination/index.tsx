import {
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    Pagination
} from "@/components/ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function PaginationCustomList({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <Pagination className={"mt-4"}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handlePrevious} />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === index + 1}
                            onClick={() => onPageChange(index + 1)}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}