import Image from "next/image";
import Picture from "../static/NishitSharma.JPG";


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
            <div className="relative container mx-auto py-6 px-4 flex flex-auto flex-row bg-jet content-center">
                <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto">
                    <div className="rounded-3xl w-80 h-80 overflow-hidden mx-auto">
                        <Image src={Picture} alt="Nishit Sharma" loading="lazy"/>
                    </div>
                    <h1 className="pt-4">Hello! My name is Nishit Sharma</h1>
                </div>
                <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-96">
                    <h1>I am a student at the Morris County School of Technology and I will be attending the County College of Morris in my senior year.  </h1>
                </div>
            </div>

        </main>
    );
}