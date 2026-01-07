import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { LogOut, Search, Download } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = ({ onLogout }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchVolunteers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredVolunteers(volunteers);
    } else {
      const filtered = volunteers.filter(volunteer => 
        volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volunteer.phone.includes(searchTerm) ||
        volunteer.volunteerType.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVolunteers(filtered);
    }
  }, [searchTerm, volunteers]);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get(`${API}/volunteer`);
      setVolunteers(response.data);
      setFilteredVolunteers(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error loading data",
        description: "Failed to fetch volunteer submissions",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Volunteer Type', 'Message', 'Submitted At'];
    const csvData = filteredVolunteers.map(v => [
      v.name,
      v.email,
      v.phone,
      v.volunteerType,
      v.message,
      new Date(v.timestamp).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `volunteer_submissions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-saffron-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Sanatan Shakti Sangrah - Volunteer Submissions</p>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline"
            className="border-saffron-300 hover:bg-saffron-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Card */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white border-saffron-200">
            <p className="text-gray-600 mb-2">Total Submissions</p>
            <p className="text-4xl font-bold text-saffron-700">{volunteers.length}</p>
          </Card>
          <Card className="p-6 bg-white border-amber-200">
            <p className="text-gray-600 mb-2">With Email</p>
            <p className="text-4xl font-bold text-amber-700">
              {volunteers.filter(v => v.email).length}
            </p>
          </Card>
          <Card className="p-6 bg-white border-orange-200">
            <p className="text-gray-600 mb-2">With Phone</p>
            <p className="text-4xl font-bold text-orange-700">
              {volunteers.filter(v => v.phone).length}
            </p>
          </Card>
        </div>

        {/* Search and Export */}
        <Card className="p-6 mb-6 bg-white">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, email, phone, or volunteer type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-saffron-200 focus:border-saffron-500"
              />
            </div>
            <Button 
              onClick={exportToCSV}
              className="bg-saffron-600 hover:bg-saffron-700 text-white"
              disabled={filteredVolunteers.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export to CSV
            </Button>
          </div>
        </Card>

        {/* Table */}
        <Card className="bg-white overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-600">Loading submissions...</div>
          ) : filteredVolunteers.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              {searchTerm ? 'No submissions match your search' : 'No volunteer submissions yet'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-saffron-800">Name</TableHead>
                    <TableHead className="font-bold text-saffron-800">Email</TableHead>
                    <TableHead className="font-bold text-saffron-800">Phone</TableHead>
                    <TableHead className="font-bold text-saffron-800">Volunteer Type</TableHead>
                    <TableHead className="font-bold text-saffron-800">Message</TableHead>
                    <TableHead className="font-bold text-saffron-800">Submitted At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVolunteers.map((volunteer) => (
                    <TableRow key={volunteer.id} className="hover:bg-saffron-50">
                      <TableCell className="font-medium">{volunteer.name}</TableCell>
                      <TableCell>{volunteer.email || '-'}</TableCell>
                      <TableCell>{volunteer.phone || '-'}</TableCell>
                      <TableCell>{volunteer.volunteerType}</TableCell>
                      <TableCell className="max-w-xs truncate">{volunteer.message || '-'}</TableCell>
                      <TableCell className="whitespace-nowrap">{formatDate(volunteer.timestamp)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        {/* Results count */}
        {filteredVolunteers.length > 0 && (
          <p className="text-center text-gray-600 mt-4">
            Showing {filteredVolunteers.length} of {volunteers.length} submissions
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
