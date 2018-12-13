import React, { PureComponent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from '.\\CV2018_Ninni_Hornaeus.pdf';

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
    // render(){
    //     return(
    //         <Document file="./CV2018_Ninni_Hornaeus.pdf" />
    //     )
    // }
    
}

export default PdfView;