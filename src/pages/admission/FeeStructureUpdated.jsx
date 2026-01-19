import React from "react";
import Reveal from "../../components/Reveal";

/* ================= STATIC FEE DATA ================= */
const feeList = [
  {
    id: 1,
    class_name: "Nursery – Sr. KG",
    admission_fee: 15000,
    installment_1: 12000,
    installment_2: 10000,
    installment_3: 10000,
    tuition_fee: 32000,
    total_fee: 47000,
  },
  {
    id: 2,
    class_name: "Class I – V",
    admission_fee: 18000,
    installment_1: 15000,
    installment_2: 12000,
    installment_3: 12000,
    tuition_fee: 39000,
    total_fee: 57000,
  },
  {
    id: 3,
    class_name: "Class VI – X",
    admission_fee: 20000,
    installment_1: 18000,
    installment_2: 15000,
    installment_3: 15000,
    tuition_fee: 48000,
    total_fee: 68000,
  },
];

// ₹ Currency format
const formatCurrency = (value) => {
  if (!value || isNaN(value)) return "-";
  return `₹${Number(value).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const FeeStructure = () => {
  return (
    <div className="bg-[#f9fafb]">

      {/* ================= HEADER ================= */}
      <section className="py-16 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f2933]">
            Fee Structure
          </h1>
          <span className="block w-24 h-1 bg-[#EF4444] mx-auto mt-4 rounded-full"></span>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparent and structured fee details for all classes.
          </p>
        </Reveal>
      </section>

      {/* ================= TABLE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {feeList.map((fee) => (
          <Reveal key={fee.id}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-14 overflow-hidden">

              {/* Class Name */}
              <div className="bg-[#0f172a] text-white text-center py-4 text-xl font-bold">
                {fee.class_name}
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "Fees Structure",
                        "1st Installment",
                        "2nd Installment",
                        "3rd Installment",
                        "Total",
                      ].map((head, i) => (
                        <th
                          key={i}
                          className="border px-4 py-3 text-sm font-bold text-[#EF4444] text-center"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="text-gray-700">
                    {/* Admission Fee */}
                    <tr>
                      <td className="border px-4 py-3 font-semibold">
                        Admission Fees
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.admission_fee)}
                      </td>
                      <td className="border px-4 py-3 text-center">-</td>
                      <td className="border px-4 py-3 text-center">-</td>
                      <td className="border px-4 py-3 text-center font-semibold">
                        {formatCurrency(fee.admission_fee)}
                      </td>
                    </tr>

                    {/* Tuition Fees */}
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3 font-semibold">
                        Tuition Fees
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_1)}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_2)}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_3)}
                      </td>
                      <td className="border px-4 py-3 text-center font-semibold">
                        {formatCurrency(fee.tuition_fee)}
                      </td>
                    </tr>

                    {/* New Students */}
                    <tr>
                      <td className="border px-4 py-3 font-semibold">
                        For New Students
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(
                          fee.admission_fee + fee.installment_1
                        )}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_2)}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_3)}
                      </td>
                      <td className="border px-4 py-3 text-center font-bold text-[#EF4444]">
                        {formatCurrency(fee.total_fee)}
                      </td>
                    </tr>

                    {/* Regular Students */}
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3 font-semibold">
                        For Regular Students
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_1)}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_2)}
                      </td>
                      <td className="border px-4 py-3 text-center">
                        {formatCurrency(fee.installment_3)}
                      </td>
                      <td className="border px-4 py-3 text-center font-bold">
                        {formatCurrency(fee.tuition_fee)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer Note */}
              <div className="bg-gray-50 border-t px-6 py-4 text-sm text-gray-600">
                <span className="text-[#EF4444] font-semibold">*</span>
                Please complete the fee payment before the due date to avoid late
                charges.
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default FeeStructure;
