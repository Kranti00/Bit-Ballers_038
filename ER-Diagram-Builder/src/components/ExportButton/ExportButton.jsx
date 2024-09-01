import { Button } from "@chakra-ui/react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

export const ExportButton = ({ elementId }) => {
  const exportToPdf = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    try {
      const canvas = await htmlToImage.toCanvas(element);
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save("ER_Diagram.pdf");
    } catch (error) {
      console.log("Error in PDF Generating", error);
    }
  };

  const exportToImage = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;
  
    htmlToImage
      .toPng(element)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "ER_Diagram.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <>
      <Button
        colorScheme="blue"
        size={"sm"}
        onClick={exportToPdf}
        m={"20px"}
        zIndex={10}
        padding={"10px 15px"}
        borderRadius={"4px"}
      >
        Export as PDF
      </Button>
      <Button
        colorScheme="blue"
        size={"sm"}
        onClick={exportToImage}
        m={"20px"}
        zIndex={10}
        padding={"10px 15px"}
        borderRadius={"4px"}
      >
        Export as Image
      </Button>
    </>
  );
};
