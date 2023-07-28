import { saveAs } from "file-saver";
import ExcelJS from "exceljs";
import productApi from "../api/productApi";

export const exportToExcel = async (columns, filename) => {
    // Split the "Product Details" column into separate columns for "Product Img" and "Name"
    const removedCols = ["productId", "details", "action"];
    const token = localStorage.getItem("Authorization");
    const res = await productApi.getAllProduct("", token);
    const data = res.data.data;
    const updatedColumns = [
        ...columns,
        {
            title: "Product Img",
            dataIndex: "productImg",
            key: "productImg",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
    ];
    const ExportCol = updatedColumns.filter(
        (col) => !removedCols.includes(col.dataIndex)
    );

    return new Promise((resolve, reject) => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");

        // Add column headers to the worksheet
        ExportCol.forEach((column, index) => {
            worksheet.getCell(`${String.fromCharCode(65 + index)}1`).value =
                column.title;
        });

        // Add data rows to the worksheet
        data.forEach((record, rowIndex) => {
            ExportCol.forEach((column, columnIndex) => {
                const cellValue = record[column.dataIndex] || ""; // Check if cell value is undefined or null
                worksheet.getCell(
                    `${String.fromCharCode(65 + columnIndex)}${rowIndex + 2}`
                ).value = cellValue;
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
export const downloadTemplate = (columns, filename) => {
    const removedCols = ["productId", "details", "action"];
    const updatedColumns = [
        ...columns,
        {
            title: "Product Img",
            dataIndex: "productImg",
            key: "productImg",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
    ];
    const ExportCol = updatedColumns.filter(
        (col) => !removedCols.includes(col.dataIndex)
    );
    const columnNames = ExportCol.map((column) => column.title);
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Add column headers to the worksheet
    columnNames.forEach((columnName, index) => {
        worksheet.getCell(`${String.fromCharCode(65 + index)}1`).value =
            columnName;
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
        column.width = column.title?.length < 12 ? 12 : column.title?.length;
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
        })
        .catch((error) => {
            console.error("Error while generating the template:", error);
        });
};
