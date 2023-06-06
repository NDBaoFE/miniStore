import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

export const exportToExcel = (data, columns, filename) => {
    return new Promise((resolve, reject) => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");

        // Add column headers to the worksheet
        columns.forEach((column, index) => {
            worksheet.getCell(`${String.fromCharCode(65 + index)}1`).value =
                column.title;
        });

        // Add data rows to the worksheet
        data.forEach((record, rowIndex) => {
            columns.forEach((column, columnIndex) => {
                if (column.dataIndex === "details") {
                    // Handle 'Product Details' column with custom render function
                    const cellValue = column.render(null, record);
                    const nameValue = cellValue.props.children[1]; // Access the 'name' property from the rendered component
                    worksheet.getCell(
                        `${String.fromCharCode(65 + columnIndex)}${
                            rowIndex + 2
                        }`
                    ).value = nameValue;
                } else {
                    const cellValue = record[column.dataIndex] || ""; // Check if cell value is undefined or null
                    worksheet.getCell(
                        `${String.fromCharCode(65 + columnIndex)}${
                            rowIndex + 2
                        }`
                    ).value = cellValue;
                }
            });
        });

        // Auto-fit columns
        worksheet.columns.forEach((column) => {
            column.width =
                column.title?.length < 12 ? 12 : column.title?.length;
        });

        // Generate a buffer with the Excel file
        workbook.xlsx
            .writeBuffer()
            .then((buffer) => {
                // Create a Blob from the buffer
                const blob = new Blob([buffer], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                });

                // Save the Blob as a file
                saveAs(blob, `${filename}.xlsx`);

                resolve(); // Resolve the Promise when the export is successful
            })
            .catch((error) => {
                reject(error); // Reject the Promise if there's an error during the export
            });
    });
};
