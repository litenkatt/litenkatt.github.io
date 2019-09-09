import React, { PureComponent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from '.\\CV2019_Ninni_Hornaeus.pdf';

class PdfView extends PureComponent{
    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
     
      render() {
        const { pageNumber, numPages } = this.state;
     
        return (
          <div>
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        );
      }
}

export default PdfView;