import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Badge } from "@/components/ui/badge";

const Header = () => {
    const wishListCount = useSelector((state: RootState) => state.wishList.meals.length);

    return (
        <div className="bg-[#F7F7E3] w-full mb-4">
            <div className={"flex justify-between items-center w-full mx-auto max-w-[1240px] px-2 py-4"}>
                <Link href={"/"} className={"text-[24px] font-bold"}>Logo</Link>
                <div>
                    <nav className="relative">
                        <Link href={"/wish-list"} className="relative flex items-center">
                            <Image src="/wish-list.svg" alt="Wish List" width={30} height={30} />
                            {wishListCount > 0 && (
                                <Badge className="absolute -top-2 -right-3 bg-red-500 text-white">
                                    {wishListCount}
                                </Badge>
                            )}
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;