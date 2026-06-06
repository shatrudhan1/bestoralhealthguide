import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const mockBlogData = [
  { id: 1, title: "Bad Breath Complete Guide", url: "/blog/bad-breath-complete-guide", pos: 3, target: 1, imp: 45000, clicks: 1800, ctr: 4.0, views: 4250, duration: "4:12", bounce: "51%", status: "Top Performer" },
  { id: 2, title: "Best Oral Probiotics", url: "/blog/best-oral-probiotics", pos: 2, target: 1, imp: 38000, clicks: 1520, ctr: 4.0, views: 3820, duration: "3:45", bounce: "58%", status: "Top Performer" },
  { id: 3, title: "Gum Disease Complete Guide", url: "/blog/gum-disease-complete-guide", pos: 5, target: 3, imp: 22000, clicks: 660, ctr: 3.0, views: 2900, duration: "5:30", bounce: "42%", status: "Medium" },
  { id: 4, title: "Dry Mouth Solutions", url: "/blog/dry-mouth-xerostomia-causes-solutions", pos: 12, target: 5, imp: 15000, clicks: 180, ctr: 1.2, views: 450, duration: "1:20", bounce: "75%", status: "Low CTR" },
  { id: 5, title: "Is ProDentim a Scam?", url: "/blog/is-prodentim-scam-legit", pos: 8, target: 4, imp: 8000, clicks: 240, ctr: 3.0, views: 800, duration: "0:45", bounce: "82%", status: "Needs Optimization" },
];

const BlogPerformanceTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(mockBlogData);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Top Performer': return <Badge className="bg-green-500 hover:bg-green-600">Top Performer</Badge>;
      case 'Low CTR': return <Badge variant="destructive">Low CTR</Badge>;
      case 'Needs Optimization': return <Badge className="bg-orange-500 hover:bg-orange-600">Needs Optimization</Badge>;
      default: return <Badge variant="secondary">Medium</Badge>;
    }
  };

  const filteredData = data.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Blog Performance Tracker | Admin</title>
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Blog Performance Tracking</h1>
          <p className="text-gray-500 mt-1">Detailed metric breakdown for every published article.</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500">Total Blogs Tracked</div>
              <div className="text-3xl font-bold mt-2">54</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500">Top Performers</div>
              <div className="text-3xl font-bold text-green-600 mt-2">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500">Low CTR Pages</div>
              <div className="text-3xl font-bold text-red-600 mt-2">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500">Avg CTR</div>
              <div className="text-3xl font-bold text-blue-600 mt-2">3.2%</div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <CardTitle>Article Metrics</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search titles or URLs..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Badge variant="outline" className="px-3 py-2 cursor-pointer border-gray-300">
                  <Filter size={16} className="mr-2" /> Filter
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border border-gray-100">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-[250px]">Blog Title</TableHead>
                    <TableHead><div className="flex items-center gap-1 cursor-pointer">Pos <ArrowUpDown size={12}/></div></TableHead>
                    <TableHead><div className="flex items-center gap-1 cursor-pointer">Imp <ArrowUpDown size={12}/></div></TableHead>
                    <TableHead><div className="flex items-center gap-1 cursor-pointer">Clicks <ArrowUpDown size={12}/></div></TableHead>
                    <TableHead><div className="flex items-center gap-1 cursor-pointer">CTR% <ArrowUpDown size={12}/></div></TableHead>
                    <TableHead><div className="flex items-center gap-1 cursor-pointer">Views <ArrowUpDown size={12}/></div></TableHead>
                    <TableHead>Avg Time</TableHead>
                    <TableHead>Bounce</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">
                        <div className="truncate max-w-[220px]" title={row.title}>{row.title}</div>
                        <div className="text-xs text-gray-400 truncate max-w-[220px]">{row.url}</div>
                      </TableCell>
                      <TableCell>{row.pos} <span className="text-xs text-gray-400">({row.target})</span></TableCell>
                      <TableCell>{(row.imp/1000).toFixed(1)}k</TableCell>
                      <TableCell>{row.clicks}</TableCell>
                      <TableCell className={row.ctr < 2 ? "text-red-500 font-medium" : "text-green-600 font-medium"}>
                        {row.ctr.toFixed(1)}%
                      </TableCell>
                      <TableCell>{row.views}</TableCell>
                      <TableCell>{row.duration}</TableCell>
                      <TableCell className={parseInt(row.bounce) > 70 ? "text-red-500" : ""}>{row.bounce}</TableCell>
                      <TableCell>{getStatusBadge(row.status)}</TableCell>
                    </TableRow>
                  ))}
                  {filteredData.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8 text-gray-500">No results found.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPerformanceTracker;