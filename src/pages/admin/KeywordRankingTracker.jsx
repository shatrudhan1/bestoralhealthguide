import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const mockChartData = [
  { week: 'W1', pos: 12 }, { week: 'W2', pos: 11 }, { week: 'W3', pos: 9 }, 
  { week: 'W4', pos: 9 }, { week: 'W5', pos: 7 }, { week: 'W6', pos: 4 },
];

const mockKeywords = [
  { id: 1, keyword: "best oral probiotics", cur: 2, prev: 3, vol: 12100, clicks: 1400, url: "/blog/best-oral-probiotics", status: "up" },
  { id: 2, keyword: "prodentim reviews", cur: 4, prev: 4, vol: 22000, clicks: 850, url: "/reviews/prodentim", status: "stable" },
  { id: 3, keyword: "how to cure bad breath", cur: 7, prev: 5, vol: 40500, clicks: 320, url: "/blog/bad-breath-complete-guide", status: "down" },
  { id: 4, keyword: "bleeding gums treatment", cur: 3, prev: 8, vol: 18000, clicks: 900, url: "/blog/bleeding-gums-causes-treatment", status: "up" },
  { id: 5, keyword: "is gingivitis reversible", cur: 1, prev: 1, vol: 9900, clicks: 1800, url: "/blog/is-gingivitis-reversible", status: "stable" },
];

const KeywordRankingTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderStatus = (status, cur, prev) => {
    const diff = prev - cur; // positive is good (rank up)
    if (status === 'up') return <span className="text-green-600 flex items-center font-bold"><ArrowUpRight size={14}/> +{diff}</span>;
    if (status === 'down') return <span className="text-red-500 flex items-center font-bold"><ArrowDownRight size={14}/> {diff}</span>;
    return <span className="text-gray-400 flex items-center"><Minus size={14}/></span>;
  };

  const filtered = mockKeywords.filter(k => k.keyword.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Keyword Tracker | Admin</title>
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Keyword Rankings</h1>
          <p className="text-gray-500 mt-1">Track target keyword positions and search volume trends.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card><CardContent className="pt-6 text-center"><div className="text-xs text-gray-500 uppercase font-bold">Tracked</div><div className="text-2xl font-bold mt-1">145</div></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><div className="text-xs text-gray-500 uppercase font-bold">Top 3</div><div className="text-2xl font-bold text-green-600 mt-1">18</div></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><div className="text-xs text-gray-500 uppercase font-bold">Top 10</div><div className="text-2xl font-bold text-blue-600 mt-1">42</div></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><div className="text-xs text-gray-500 uppercase font-bold">Moved Up</div><div className="text-2xl font-bold text-green-500 mt-1">24</div></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><div className="text-xs text-gray-500 uppercase font-bold">Moved Down</div><div className="text-2xl font-bold text-red-500 mt-1">8</div></CardContent></Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-4 flex flex-row items-center justify-between">
                <CardTitle>Keyword Database</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search keywords..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Keyword</TableHead>
                      <TableHead className="text-center">Pos</TableHead>
                      <TableHead className="text-center">Change</TableHead>
                      <TableHead className="text-right">Volume</TableHead>
                      <TableHead className="text-right">Est. Clicks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <div className="font-medium text-gray-900">{row.keyword}</div>
                          <div className="text-xs text-blue-500">{row.url}</div>
                        </TableCell>
                        <TableCell className="text-center font-bold">{row.cur}</TableCell>
                        <TableCell className="text-center flex justify-center mt-2">{renderStatus(row.status, row.cur, row.prev)}</TableCell>
                        <TableCell className="text-right text-gray-500">{row.vol.toLocaleString()}</TableCell>
                        <TableCell className="text-right font-medium">{row.clicks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-sm text-gray-500">Trend: "best oral probiotics"</CardTitle>
                <div className="text-3xl font-bold">Position 2 <span className="text-sm font-normal text-green-500">+1</span></div>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                    <YAxis reversed={true} domain={[1, 20]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="pos" stroke="#2563eb" strokeWidth={3} dot={{r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff'}} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordRankingTracker;