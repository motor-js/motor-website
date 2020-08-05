import React, { useState } from "react";
import Layout from "@theme/Layout";
import { Document, Page } from 'react-pdf';
import { Button } from '@motor-js/core'

const license = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function incrementPage () {
    console.log(pageNumber, numPages)
    if( pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(1)
    }
   
  }
  
  return (
    <Layout title="License">
      <div style={{ height: '100%', width: '100%'}}>
        <Document
          file="../img/license.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <Button onClick={incrementPage}>Next Page</Button>
      </div>
    </Layout>
  )
}

export default license