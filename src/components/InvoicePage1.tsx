import React from 'react';

interface InvoicePage1Props {
  logo2: string;
}

const InvoicePage1: React.FC<InvoicePage1Props> = ({ logo2 }) => {
  return (
    <div 
      className="bg-white shadow-lg w-[210mm] min-h-[297mm] p-8 relative page-break-after"
      style={{ 
        fontFamily: 'Arial, sans-serif',
        fontSize: '11px',
        lineHeight: '1.4',
        color: '#000'
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h1 className="text-sm font-bold text-gray-700 mb-2">
            IShine Cleaning 4u Services
          </h1>
          <div className="text-xs text-gray-700 space-y-0.5">
            <p>Address: No 25B Jalan Bayu Tinggi 1A,</p>
            <p className="">Batu Unjur, 41200 Klang</p>
            <p>Talk: 0176255555/0167896644</p>
            <p>Email: ishinepro106@gmail.com</p>
          </div>
        </div>
        
        <div>
          <img src={logo2} alt="logo_image" className="w-28" />
        </div>
      </div>

      {/* Invoice Details Section */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-xl text-gray-400 mb-3">INVOICE</h2>
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">BILL TO</p>
            <div className="text-sm">
              <p className="font-medium">Maha</p>
              <p>76353894</p>
            </div>
          </div>
        </div>
        
        <div className="text-right text-xs space-y-1">
          <div><span className="text-gray-600 mr-5">INVOICE</span> <span className="font-medium ml-4">OC-2508-0038</span></div>
          <div><span className="text-gray-600 mr-5">DATE</span> <span className="font-medium ml-8 mr-5">13/08/2025</span></div>
          <div><span className="text-gray-600 mr-5">TERMS</span> <span className="font-medium ml-6 mr-10">Due on</span></div>
          <div><span className="text-gray-600 mr-5">DUE DATE</span> <span className="font-medium ml-1 mr-5">13/08/2025</span></div>
        </div>
      </div>

      {/* Services Table */}
      <div className="mb-6">
        <table className="w-full text-xs">
          <thead className='bg-slate-50'>
            <tr className="">
              <th className="text-left py-2 text-gray-400 font-bold w-20">SVC DATE</th>
              <th className="text-left py-2 text-gray-400 font-bold w-20">ACTIVITY</th>
              <th className="text-center py-2 text-gray-400 font-bold">DESCRIPTION</th>
              <th className="text-center py-2 text-gray-400 font-bold w-12">QTY</th>
              <th className="text-right py-2 text-gray-400 font-bold w-20">RATE</th>
              <th className="text-right py-2 text-gray-400 font-bold w-20">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-gray-200">
              <td className="py-2">13/08/2025</td>
              <td className="py-2">Cleaning</td>
              <td className="py-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dol</td>
              <td className="py-2 text-center">2</td>
              <td className="py-2 text-right">RM100.00</td>
              <td className="py-2 text-right">RM200.00</td>
            </tr>
            <tr className=" border-gray-200">
              <td className="py-2">13/08/2025</td>
              <td className="py-2">Cleaning</td>
              <td className="py-2 text-center">2 Houses Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dol</td>
              <td className="py-2 text-center">1</td>
              <td className="py-2 text-right">RM150.00</td>
              <td className="py-2 text-right">RM150.00</td>
            </tr>
            <tr className=" border-gray-200">
              <td className="py-2">13/08/2025</td>
              <td className="py-2">Cleaning</td>
              <td className="py-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dol</td>
              <td className="py-2 text-center">1</td>
              <td className="py-2 text-right">RM100.00</td>
              <td className="py-2 text-right">RM100.00</td>
            </tr>
            <tr className=" border-gray-300">
              <td className="py-2">13/08/2025</td>
              <td className="py-2">Cleaning</td>
              <td className="py-2 text-center">2 Houses</td>
              <td className="py-2 text-center">1</td>
              <td className="py-2 text-right">RM150.00</td>
              <td className="py-2 text-right">RM150.00</td>
            </tr>
          </tbody>
        </table>
        
        {/* Dashed line separator */}
        <div className="border-t-2 border-dashed border-gray-400 mt-3 mb-4"></div>
      </div>

      {/* Additional Expenses Section - First 5 items */}
    <div className="mb-6">
  <h3 className="font-medium mb-3 text-sm">Additional Expenses</h3>
  <table className="w-full text-xs table-fixed border-collapse">
    <thead className="bg-slate-50">
      <tr className="border-gray-300">
        <th className="w-[10%] text-left py-2 pl-4 text-gray-400 font-bold">Item</th>
        <th className="w-[40%] text-left py-2 pl-4 text-gray-400 font-bold">Name</th>
        <th className="w-[10%] text-center py-2 text-gray-400 font-bold">QTY</th>
        <th className="w-[20%] text-right py-2 text-gray-400 font-bold">RATE</th>
        <th className="w-[20%] text-right py-2 text-gray-400 font-bold">AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      {[
        ['1', 'box', '1', 'RM33.00', 'RM33.00'],
        ['2', 'fefe', '1', 'RM3.00', 'RM3.00'],
        ['3', '33', '1', 'RM4.00', 'RM4.00'],
        ['4', 'dcdc', '1', 'RM3.00', 'RM3.00'],
        ['5', '3rw3', '1', 'RM3.00', 'RM3.00'],
      ].map((row, i) => (
        <tr key={i} className="border-gray-200">
          <td className="py-2 pl-4">{row[0]}</td>
          <td className="py-2 pl-4">{row[1]}</td>
          <td className="py-2 text-center">{row[2]}</td>
          <td className="py-2 text-right">{row[3]}</td>
          <td className="py-2 text-right">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
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

export default InvoicePage1;