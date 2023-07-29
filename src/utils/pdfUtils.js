import React from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ data, columns }) => {
    // Define styles for the PDF document
    const styles = StyleSheet.create({
      page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
      column: { flexDirection: 'column', flex: 1, margin: 8 },
      header: { marginBottom: 8, padding: 4, backgroundColor: '#333', color: '#FFF' },
      cell: { padding: 4, borderBottomColor: '#000', borderBottomWidth: 1 },
    });
  
    // Helper function to render table rows
    const renderRows = () => {
      return data.map((item, index) => (
        <View style={styles.row} key={index}>
          {columns.map((column, colIndex) => (
            <Text style={styles.cell} key={colIndex}>
              {item[column.accessorKey]}
            </Text>
          ))}
        </View>
      ));
    };
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.column}>
            <View style={styles.header}>
              {columns.map((column, index) => (
                <Text key={index} style={styles.cell}>
                  {column.header}
                </Text>
              ))}
            </View>
            {renderRows()}
          </View>
        </Page>
      </Document>
    );
  };  

const generatePDF = (data, columns) => (
  <PDFDownloadLink document={<PDFDocument data={data} columns={columns} />} fileName="list_table.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Export to PDF'
    }
  </PDFDownloadLink>
);

export { generatePDF };
