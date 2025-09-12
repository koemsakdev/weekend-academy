import Image from "next/image";
export const Logo = () => {
    return (
        <Image
            src={"/badge.png"}
            alt={"Logo"}
            width={30}
            height={30}
        />
    )
}