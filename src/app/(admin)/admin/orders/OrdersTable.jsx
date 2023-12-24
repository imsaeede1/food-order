import { orderListTableHeads } from "@/constants/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

function OrdersTable() {
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {orderListTableHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th">{item.label}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table__td">
              {" "}
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12.5L10.5347 14.7812C10.9662 15.1696 11.6366 15.1101 11.993 14.6519L16 9.5M18 2.5H6C3.79086 2.5 2 4.29086 2 6.5V18.5C2 20.7091 3.79086 22.5 6 22.5H18C20.2091 22.5 22 20.7091 22 18.5V6.5C22 4.29086 20.2091 2.5 18 2.5Z"
                  stroke="#FF9F19"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
            <td className="table__td">1</td>
            <td className="table__td  whitespace-nowrap">نام</td>
            <td className="table__td">نام خانوادگی</td>
            <td className="table__td">
              <div className="flex whitespace-nowrap gap-x-2 items-center">
                ۶
              </div>
            </td>
            <td className="table__td">
              <div className="flex flex-col gap-y-2 items-start">۱۲:۰۱</div>
            </td>
            <td className="table__td">
              <button className="bg-primary-800 rounded py-2 px-4">چاپ</button>
            </td>
            <td className="table__td font-bold text-lg">
              <button className="bg-primary-900 rounded py-2 px-4">
                جزییات
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default OrdersTable;
