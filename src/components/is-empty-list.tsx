import React from 'react';

interface IsEmptyListProps {
    text: string;
}

const IsEmptyList = ({ text }: IsEmptyListProps) => {
    return (
        <div className={"flex items-center justify-center my-10 w-full"}>
            <h2 className={"text-[20px] font-bold"}>{text}</h2>
        </div>
    );
};

export default IsEmptyList;
