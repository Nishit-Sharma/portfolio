'use client';

import Image from "next/image";
import Picture from "../static/NishitSharma.JPG";
import { pdfjs, Document, Page } from 'react-pdf';
import { useState } from 'react';
import myResume from "../static/NishitSharmaResume.pdf";
import myTranscript from "../static/NishitSharmaTranscript.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString()

export default function summary() {
    const [resumeClick, setResumeClick] = useState(false);
    const [transcriptClick, setTranscriptClick] = useState(false);

    function handleResumeClick() {
        if (transcriptClick) {
            handleTranscriptClick();
        }
        setResumeClick(!resumeClick);
    }

    function handleTranscriptClick() {
        if (resumeClick) {
            handleResumeClick();
        }
        setTranscriptClick(!transcriptClick);
    }

    function Summary() {
        return (
            <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-96">
                <h1>I am a student at the Morris County School of Technology and I will be attending the County College of Morris in my senior year. I am passionate about Game Design, Robotics, and Video Games.</h1>
            </div>
        );
    }
    
    function Resume() {
        if (resumeClick && transcriptClick) {
            handleTranscriptClick();
        }
        return (
            <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto">
                <Document file={myResume}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false} />
                </Document>
            </div>
        );
    }
    
    function Transcript() {
        return (
            <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto">
                <Document file={myTranscript}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false} />
                </Document>
            </div>
        );
    }

    return (
        <main>
            <div className="container mx-auto py-6 px-4 flex flex-row bg-jet content-center items-center justify-center">
                <div className="container rounded-3xl mx-10 px-10 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto">
                    <div className="rounded-3xl w-80 h-80 overflow-hidden mx-auto">
                        <Image src={Picture} alt="Nishit Sharma" loading="lazy"/>
                    </div>
                    <h1 className="pt-4">Hello! My name is Nishit Sharma</h1>
                </div>
                <div className="justify-center items-center content-center">
                    {resumeClick ? <Resume/>
                        : transcriptClick ? <Transcript/>
                            : <Summary/>}
                    <div className="container mx-10 py-6 bg-jet text-center w-96 flex flex-row items-center justify-center">
                        <button className="container rounded-3xl mx-10 px-5 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto" onClick={handleResumeClick}>RESUME</button>
                        <button className="container rounded-3xl mx-10 px-5 py-6 bg-jet text-center shadow-2xl hover:scale-105 duration-500 w-auto" onClick={handleTranscriptClick}>TRANSCRIPT</button>
                    </div>
                </div>
            </div>

        </main>
    );
}

// https://www.youtube.com/watch?v=0FRyKY_PMLE