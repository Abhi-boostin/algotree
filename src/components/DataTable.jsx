"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, Search } from 'lucide-react';

export default function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  const [searchQuery, setSearchQuery] = useState('');

  // Sort function
  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Filter function
  const filteredData = useMemo(() => {
    return sortedData.filter(item => {
      return Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [sortedData, searchQuery]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Sort request handler
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Render sorting indicator
  const getSortIndicator = (name) => {
    if (sortConfig.key !== name) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortConfig.direction === 'ascending' ? 
      <ArrowUpDown className="ml-2 h-4 w-4 text-blue-500" /> : 
      <ArrowUpDown className="ml-2 h-4 w-4 text-blue-500 transform rotate-180" />;
  };

  // Pagination controls
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="p-2 text-sm border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>

      <div className="rounded-md border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th 
                  onClick={() => requestSort('id')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    ID
                    {getSortIndicator('id')}
                  </div>
                </th>
                <th 
                  onClick={() => requestSort('name')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    Name
                    {getSortIndicator('name')}
                  </div>
                </th>
                <th 
                  onClick={() => requestSort('email')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    Email
                    {getSortIndicator('email')}
                  </div>
                </th>
                <th 
                  onClick={() => requestSort('role')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    Role
                    {getSortIndicator('role')}
                  </div>
                </th>
                <th 
                  onClick={() => requestSort('status')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    Status
                    {getSortIndicator('status')}
                  </div>
                </th>
                <th 
                  onClick={() => requestSort('lastLogin')}
                  className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    Last Login
                    {getSortIndicator('lastLogin')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
              {currentItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(indexOfLastItem, filteredData.length)}
          </span>{' '}
          of <span className="font-medium">{filteredData.length}</span> results
        </div>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <Button
                key={pageNumber}
                variant={currentPage === pageNumber ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
} 