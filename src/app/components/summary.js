import Image from "next/image";
import Picture from "../static/NishitSharma.jpg";

const styleImage = {
    borderRadius: "10%",
    width: "300px",
    height: "300px",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "center",
    margin: "0 auto",
};

export default function summary() {
    return (
        <main>
            <div className="container mx-auto px-4 center-true flex flex-row">
                <div className="container mx-auto py-4 px-4 center-true bg-gray-500 text-center hover:object-top rounded">
                    <div className="rounded-xl w-80 h-80 overflow-hidden object-cover object-center mx-auto">
                        <Image src={Picture} alt="Nishit Sharma"/>
                    </div>
                    <h1>Nishit Sharma</h1>
                </div>
                <div className="container mx-auto px-4 center-true bg-red-500 text-center rounded">
                    <h1>Other Side</h1>
                </div>
            </div>
        </main>
    );
}