import { Document, Page, pdfjs } from 'react-pdf';

const PaymentDetails = ({ payment }) => {
  return (
    <Document file={`data:application/pdf;base64,${payment.pdfData}`}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PaymentDetails;
