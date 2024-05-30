"use client";

import Image from "next/image";
import Picture from "../static/NishitSharma.JPG";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import myResume from "../static/NishitSharmaResume.pdf";
import myTranscript from "../static/NishitSharmaTranscript.pdf";
import ResumeIcon from "../static/resume.png"
import TranscriptIcon from "../static/transcript.png"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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
      <div className="container px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-jet hover:scale-105 w-96">
        <h1>
          I am a top-performing student at the Morris County School of
          Technology, with a 4.17 unweighted GPA, and I will be attending the
          County College of Morris in my senior year. I am passionate about Game
          Design, Robotics, and Video Games.
        </h1>
        <br></br>
        <h1>
          I earned a 4 on the AP CSP Test and maintained High Honor Roll status
          throughout high school. I have mastered Java, Python, and C++ and am
          expanding my knowledge to HTML, CSS, Javascript, and Next.js, which I
          used to code this website.
        </h1>
        <br></br>
        <h1>
          I am also involved in my school's robotics team, Team 8588, Tech
          Devils. As the President, I led the team to its most successful year
          to date, increasing membership by 40% and securing $10,000 in funding.
          I also volunteer at the Parsippany Library, where I teach coding
          workshops to over 30 elementary school students.
        </h1>
      </div>
    );
  }

  function Resume() {
    if (resumeClick && transcriptClick) {
      handleTranscriptClick();
    }
    return (
      <div className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-cream hover:scale-105">
        <Document file={myResume}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            customTextRenderer={false}
          />
        </Document>
      </div>
    );
  }

  function Transcript() {
    return (
      <div className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-cream hover:scale-105">
        <Document file={myTranscript}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            customTextRenderer={false}
          />
        </Document>
      </div>
    );
  }

  return (
    <main>
      <div className="container flex flex-row items-center content-center justify-center px-4 py-6 mx-auto bg-jet">
        <div className="container w-auto px-10 py-6 mx-10 text-center duration-500 shadow-2xl rounded-3xl bg-jet hover:scale-105">
          <div className="mx-auto overflow-hidden rounded-3xl w-80 h-80">
            <Image src={Picture} alt="Nishit Sharma" loading="lazy" />
          </div>
          <h1 className="pt-4">Hello! My name is Nishit Sharma</h1>
        </div>
        <div className="flex-col items-center content-center justify-center">
          {resumeClick ? (
            <Resume />
          ) : transcriptClick ? (
            <Transcript />
          ) : (
            <Summary />
          )}
          <div className="container flex flex-row items-center content-center justify-center py-6 mx-auto text-center bg-jet w-96">
            <Image src={ResumeIcon} alt="Resume" width={24} height={24} onClick={handleResumeClick} className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-2xl bg-cream rounded-3xl bg-jet hover:scale-105" />
            <Image src={TranscriptIcon} alt="Transcript" width={24} height={24} onClick={handleTranscriptClick} className="container w-auto px-5 py-6 mx-10 text-center duration-500 shadow-2xl bg-cream rounded-3xl bg-jet hover:scale-105" />
          </div>
        </div>
      </div>
    </main>
  );
}
