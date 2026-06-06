import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, AlertTriangle, Users, MousePointerClick, Search, Download, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SEOMonitoringDashboard = () => {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Preparing your CSV report. It will download shortly.",
    });
  };

  const topPagesViews = [
    { title: "Bad Breath Complete Guide", url: "/blog/bad-breath-complete-guide", views: 4250, time: "4m 12s" },
    { title: "Best Oral Probiotics", url: "/blog/best-oral-probiotics", views: 3820, time: "3m 45s" },
    { title: "Gum Disease Complete Guide", url: "/blog/gum-disease-complete-guide", views: 2900, time: "5m 30s" },
    { title: "Bleeding Gums Causes & Treatment", url: "/blog/bleeding-gums-causes-treatment", views: 2150, time: "3m 15s" },
  ];

  const topPagesEngagement = [
    { title: "Gum Disease Complete Guide", duration: "5m 30s", bounce: "42%" },
    { title: "How to Reverse Gingivitis Naturally", duration: "4m 45s", bounce: "45%" },
    { title: "Bad Breath Complete Guide", duration: "4m 12s", bounce: "51%" },
    { title: "Best Oral Probiotics", duration: "3m 45s", bounce: "58%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>SEO Monitoring Dashboard | Admin</title>
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">SEO Monitoring Dashboard</h1>
            <p className="text-gray-500 mt-1">Overview of traffic, search metrics, and automated alerts.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} /> Last 7 Days
            </Button>
            <Button onClick={handleExport} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Download size={16} /> Export Report
            </Button>
          </div>
        </div>

        {/* Traffic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Page Views</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,592</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1"/> +12.5% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Sessions</CardTitle>
              <MousePointerClick className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18,230</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1"/> +8.2% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg Session Duration</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2m 45s</div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingDown size={12} className="mr-1"/> -2.1% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Bounce Rate</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">54.2%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingDown size={12} className="mr-1"/> -1.5% from last week (Improvement)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Impressions</CardTitle>
              <Search className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142,500</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1"/> +15.4% WoW
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Clicks (GSC)</CardTitle>
              <MousePointerClick className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,820</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1"/> +5.1% WoW
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Average CTR</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.38%</div>
              <p className="text-xs text-red-400 flex items-center mt-1">
                <TrendingDown size={12} className="mr-1"/> -0.5% WoW
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Avg Position</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.2</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1"/> +1.1 Pos WoW
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages Views */}
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Pages by Views</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page Title</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                    <TableHead className="text-right">Avg Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPagesViews.map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-sm truncate max-w-[200px]" title={page.title}>{page.title}</TableCell>
                      <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-gray-500">{page.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Pages Engagement */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages by Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page Title</TableHead>
                    <TableHead className="text-right">Duration</TableHead>
                    <TableHead className="text-right">Bounce</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPagesEngagement.map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-sm truncate max-w-[200px]">{page.title}</TableCell>
                      <TableCell className="text-right text-green-600 font-medium">{page.duration}</TableCell>
                      <TableCell className="text-right">{page.bounce}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50/50 pb-4">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <AlertTriangle size={20} /> Active Alerts & Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <Alert variant="destructive" className="bg-red-50 text-red-900 border-red-200">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Critical: High Bounce Rate</AlertTitle>
                <AlertDescription>
                  /blog/is-prodentim-scam-legit bounce rate increased to 82% this week.
                </AlertDescription>
              </Alert>
              <Alert className="bg-yellow-50 text-yellow-900 border-yellow-200">
                <Search className="h-4 w-4 text-yellow-600" />
                <AlertTitle>Warning: Low CTR</AlertTitle>
                <AlertDescription>
                  /blog/dry-mouth-xerostomia-causes-solutions CTR dropped below 1.5% despite 5k impressions.
                </AlertDescription>
              </Alert>
              <Alert className="bg-blue-50 text-blue-900 border-blue-200">
                <TrendingDown className="h-4 w-4 text-blue-600" />
                <AlertTitle>Info: Ranking Drop</AlertTitle>
                <AlertDescription>
                  Keyword "best mouthwash for swollen gums" dropped from Pos 4 to Pos 7.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="bg-green-50/50 pb-4">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp size={20} /> Actionable Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                <div className="font-semibold text-sm text-gray-900 mb-1">Optimize Meta Title</div>
                <p className="text-xs text-gray-600">Update meta title for "Dry Mouth Solutions" to include exact year (2026) to improve CTR.</p>
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                <div className="font-semibold text-sm text-gray-900 mb-1">Improve Content Hook</div>
                <p className="text-xs text-gray-600">The ProDentim Scam article needs a stronger intro paragraph to reduce the 82% bounce rate. Add a clear summary box.</p>
              </div>
              <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                <div className="font-semibold text-sm text-gray-900 mb-1">Internal Linking</div>
                <p className="text-xs text-gray-600">Link from your high-traffic "Bad Breath Guide" to the newer "Tonsil Stones" article to pass authority.</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default SEOMonitoringDashboard;