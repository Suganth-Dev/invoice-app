import React from 'react';

const InvoicePage2: React.FC = () => {
  return (
    <div 
      className="bg-white shadow-lg w-[210mm] min-h-[297mm] p-8 relative"
      style={{ 
        fontFamily: 'Arial, sans-serif',
        fontSize: '11px',
        lineHeight: '1.4',
        color: '#000'
      }}
    >
      {/* Additional Expenses Section - Continuation from page 1 */}
      <div className="mb-6">
  <table className="w-full text-xs table-fixed border-collapse">
    <tbody>
      {[
        ['6', 'dbf', '1', 'RM11.00', 'RM11.00'],
        ['7', '1wqd', '1', 'RM4.00', 'RM4.00'],
      ].map((row, index) => (
        <tr key={index} className="border-gray-200">
          <td className="py-2 pl-4 w-[10%]">{row[0]}</td>       {/* Item */}
          <td className="py-2 pl-4 w-[40%]">{row[1]}</td>       {/* Name */}
          <td className="py-2 text-center w-[10%]">{row[2]}</td> {/* QTY */}
          <td className="py-2 text-right w-[20%]">{row[3]}</td> {/* RATE */}
          <td className="py-2 text-right w-[20%]">{row[4]}</td> {/* AMOUNT */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      
      <div className="border-t-2 border-dashed border-gray-400 mb-2"></div>

      {/* Totals Section */}
      <div className="flex justify-end mb-6">
        <div className="w-64">
          <table className="w-full text-xs">
            <tbody>
              <tr>
                <td className="py-1 text-gray-400 font-bold">SERVICE</td>
                <td className="py-1 text-right">RM600.00</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400 font-bold">SUBTOTAL</td>
                <td className="py-1 text-right"></td>
              </tr>
              <tr className="border-t-2 border-dashed border-gray-300">
                <td className="py-1 text-gray-400 font-bold">EXPENSES</td>
                <td className="py-1 text-right">RM61.00</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400 font-bold">SUBTOTAL</td>
                <td className="py-1 text-right"></td>
              </tr>
              <tr className="border-t-2 border-dashed border-gray-300">
                <td className="py-1 text-gray-400 font-bold">DISCOUNT</td>
                <td className="py-1 text-right">RM4.00</td>
              </tr>
              <tr className="border-t-2 border-dashed border-gray-300">
                <td className="py-1 text-gray-400 font-bold">TOTAL</td>
                <td className="py-1 text-right">RM657.00</td>
              </tr>
              <tr className="border-t-2 border-dashed border-gray-300">
                <td className="py-1 text-gray-400 font-bold">PAYMENT</td>
                <td className="py-1 text-right">RM150.00</td>
              </tr>
              <tr className="border-t-2 border-dashed border-gray-300">
                <td className="py-1 font-bold text-gray-400">BAL DUE</td>
                <td className="py-1 text-right">RM507.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Status */}
      <div className="mb-6 flex justify-end">
        <div className="text-sm font-bold text-amber-400 mb-1">
          PARTIALLY PAID
        </div>
      </div>

      {/* Payment Information Box */}
      <div className="border border-gray-300 rounded-lg p-4 mb-11 bg-blue-50/30">
        <div className="flex justify-between gap-6">
          <div className="flex-1 text-xs space-y-2">
            <p>Cheques must be crossed and made payable to: IShine Cleaning 4u Services</p>
            <p>Funds Transfer / DuitNow QR</p>
            <br></br>
            <p className="font-medium mt-3">Bank Account Details</p>
            <p>Bank Name: XXX</p>
            <p>Name: IShine Cleaning 4u Services</p>
            <p>Bank Account No: XXX</p>
          </div>
          
          <div className="w-48 text-xs">
            <div className="text-right mb-2">
              <p>DuitNow QR</p>
              <p>Code:</p>
            </div>
            <div className="h-28 border border-gray-300 rounded bg-gray-50 flex items-center justify-center">
              <span className="text-gray-500">No QR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8 text-center text-xs text-gray-400 font-bold space-y-1">
        <p>For any clarifications please email us at <span className="underline">ishinepro106@gmail.com</span> quoting our invoice number.</p>
        <p>Thank you for entrusting us with the Care of your premises</p>
        <p>IShine Cleaning 4u Services is a brand owned and managed by IShine Cleaning 4u Services</p>
      </div>
    </div>
  );
};

export default InvoicePage2;