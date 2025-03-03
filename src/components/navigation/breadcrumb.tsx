import React from 'react';
import {
    Breadcrumb as UIBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface INavLinks {
    navlinks: {
        scLinkName: string;
    };
}

const CustomBreadcrumb: React.FC<INavLinks> = ({ navlinks }) => {
    return (
        <UIBreadcrumb className={"mb-4"}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{navlinks.scLinkName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </UIBreadcrumb>
    );
};

export default CustomBreadcrumb;