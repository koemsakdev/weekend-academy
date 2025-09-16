import React from 'react';

const Table= ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-auto rounded-md shadow-xs border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
        {children}
      </table>
    </div>
  );
};

export default Table;