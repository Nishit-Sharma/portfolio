import Image from "next/image";

export default function summary() {
    return (
        <main>
            <div className="container mx-auto px-4 center-true flex flex-row">
                <div className="container mx-auto px-4 center-true bg-gray-500 text-center">
                    <h1>Nishit Sharma</h1>
                </div>
                <div className="container mx-auto px-4 center-true bg-red-500 text-center">
                    <h1>Other Side</h1>
                </div>
            </div>
        </main>
    );
}