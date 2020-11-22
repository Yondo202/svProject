import React, { useState } from "react";
import {
  pdf,
  BlobProvider,
  PDFDownloadLink,
  Document,
  Page,
  Text,
} from "@react-pdf/renderer";

const BlobLink = ({ blob, ...props }) =>
  blob
    ? <a href={URL.createObjectURL(blob)} {...props}>Download Blob</a>
    : <span>Loading Blob...</span>;

const PdfDoc = (
  <Document>
    <Page>
      <Text>This is the PDF document. Hello!</Text>
    </Page>
  </Document>
);

// works
export const DownloadFromPDFDownloadLink = () => (
  <div>
    <PDFDownloadLink document={PdfDoc} fileName="pdf-doc.pdf">
      {({ loading }) => loading
        ? "Loading document..."
        : "Download PDF"
      }
    </PDFDownloadLink>
  </div>
);

// works
export const DownloadFromPDFBlobProvider = () => (
  <BlobProvider document={PdfDoc}>
    {({ blob }) => blob
      ? <BlobLink blob={blob} />
      : <span>Loading blob....</span>
    }
  </BlobProvider>
);

async function getTextBlob() {
  const str = JSON.stringify({ hello: "world" }, null, 2);
  return new Blob([str], { type: "application/json" });
}

// works
export const DownloadFromTextBlob = () => {
  const [blob, setBlob] = useState(null);
  if (!blob) {
    getTextBlob().then(setBlob);
  }

  return <BlobLink blob={blob} />;
};

// toBlob throws error
export const DownloadFromPDFtoBlob = () => {
  const [blob, setBlob] = useState(null);
  const [error, setError] = useState(null);
  if (!blob && !error) {
    pdf(PdfDoc).toBlob()
      .then(setBlob)
      .catch(setError);
  }

  if (error) {
    console.log("toBlob error!", error);
  }

  return error ? error.toString() : <BlobLink blob={blob} />;
};

// toString throws error
export const DownloadFromPDFtoString = () => {
  const [blob, setBlob] = useState(null);
  const [error, setError] = useState(null);
  if (!blob && !error) {
    pdf(PdfDoc)
      .toString()
      .then((str) =>
        setBlob(new Blob([str], { type: "application/pdf" })),
      )
      .catch(setError);
  }

  if (error) {
    console.log("toString error!", error);
  }

  return error ? error.toString() : <BlobLink blob={blob} />;
};