import { useState } from "react";
import Button from "react-bootstrap/Button";
import cv from "./Assets/PabloAlbinCV.pdf";
import style from "./Resume.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const numPages = 3;
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previusPage = () => {
    setPage(page - 1);
  };

  return (
    <div className={style.container}>
      <Button variant="primary" href={cv} target="_blank" className={style.BDownload}>
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
      <p>
        Page {page} of {numPages}
      </p>
      <div className={style.pages}>
        <button disabled={page === 1} onClick={previusPage} className={style.buttonPage}>
          {"<"}
        </button>
        <button disabled={page === numPages} onClick={nextPage} className={style.buttonPage}>
          {">"}
        </button>
      </div>
      <Document file={cv} className={style.document}>
        <Page pageNumber={page} scale={1.5} />
      </Document>
      <p>
        Page {page} of {numPages}
      </p>
      <div className={style.pages}>
        <button disabled={page === 1} onClick={previusPage} className={style.buttonPage}>
          {"<"}
        </button>
        <button disabled={page === numPages} onClick={nextPage} className={style.buttonPage}>
          {">"}
        </button>
      </div>
      <Button variant="primary" href={cv} target="_blank" className={style.BDownload}>
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </div>
  );
}

export default Resume;
