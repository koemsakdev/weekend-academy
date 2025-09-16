import React from 'react';

interface TableHeaderProps {
  headers: string[];
}

const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;