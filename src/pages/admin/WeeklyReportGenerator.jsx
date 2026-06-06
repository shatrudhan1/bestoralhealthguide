import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Mail, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const WeeklyReportGenerator = () => {
  const { toast } = useToast();

  const handleAction = (action) => {
    toast({
      title: `Report ${action}`,
      description: `Weekly SEO report has been ${action.toLowerCase()}ed successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Weekly Report Generator | Admin</title>
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Weekly Monitoring Report</h1>
            <p className="text-gray-500 mt-1">Comprehensive weekly snapshot of SEO and traffic performance.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2"><Calendar size={16}/> Week 12, 2026</Button>
            <Button onClick={() => handleAction('Export')} variant="secondary" className="gap-2 bg-white"><Download size={16}/> PDF</Button>
            <Button onClick={() => handleAction('Email')} className="bg-blue-600 hover:bg-blue-700 gap-2"><Mail size={16}/> Email Team</Button>
          </div>
        </div>

        {/* Report Preview Container */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 space-y-8">
          
          <div className="text-center border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-gray-900">Weekly SEO Performance Summary</h2>
            <p className="text-gray-500">March 16, 2026 - March 22, 2026</p>
          </div>

          {/* Exec Summary */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">Executive Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              Traffic has shown strong WoW growth (+12.5%), primarily driven by new rankings for "best oral probiotics" queries. Bounce rates have improved slightly across core pillar pages. However, several informational blogs are exhibiting low CTRs in SERPs despite high impressions, indicating a need for meta-tag optimization.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 font-medium mb-1">Page Views</div>
              <div className="text-xl font-bold text-gray-900">24,592</div>
              <div className="text-xs font-semibold text-green-600 flex items-center mt-1"><ArrowUpRight size={12}/> 12.5%</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 font-medium mb-1">Total Clicks</div>
              <div className="text-xl font-bold text-gray-900">4,820</div>
              <div className="text-xs font-semibold text-green-600 flex items-center mt-1"><ArrowUpRight size={12}/> 5.1%</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 font-medium mb-1">Avg Position</div>
              <div className="text-xl font-bold text-gray-900">14.2</div>
              <div className="text-xs font-semibold text-green-600 flex items-center mt-1"><ArrowUpRight size={12}/> +1.1</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 font-medium mb-1">Keywords in Top 10</div>
              <div className="text-xl font-bold text-gray-900">84</div>
              <div className="text-xs font-semibold text-green-600 flex items-center mt-1"><ArrowUpRight size={12}/> +5 New</div>
            </div>
          </div>

          {/* Top Content */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">Top Performing Content</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-sm text-blue-600">/blog/bad-breath-complete-guide</TableCell>
                  <TableCell className="text-right">4,250</TableCell>
                  <TableCell className="text-right">4m 12s</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm text-blue-600">/blog/best-oral-probiotics</TableCell>
                  <TableCell className="text-right">3,820</TableCell>
                  <TableCell className="text-right">3m 45s</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Action Items */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-3">Issues & Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start bg-orange-50 p-3 rounded-md border border-orange-100">
                <Badge variant="destructive" className="mr-3 shrink-0">Priority</Badge>
                <span className="text-sm text-orange-900"><strong>/blog/is-prodentim-scam-legit:</strong> Bounce rate triggered alert at 82%. <strong>Action:</strong> Rewrite intro paragraph to answer search intent immediately.</span>
              </li>
              <li className="flex items-start bg-blue-50 p-3 rounded-md border border-blue-100">
                <Badge className="bg-blue-500 mr-3 shrink-0">Task</Badge>
                <span className="text-sm text-blue-900"><strong>/blog/dry-mouth-xerostomia-causes-solutions:</strong> CTR dropped to 1.2%. <strong>Action:</strong> Update meta title to include "2026 Guide" to improve click-through.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeeklyReportGenerator;