import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell, Mail, Activity, TrendingDown, Clock } from 'lucide-react';

const AlertSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Alert thresholds have been updated successfully.",
      variant: "default",
    });
  };

  const handleTest = (alertName) => {
    toast({
      title: "Test Alert Triggered",
      description: `Test notification sent for ${alertName}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Alert Settings | Admin</title>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Alert Configuration</h1>
            <p className="text-gray-500 mt-1">Manage thresholds and notifications for automated SEO monitoring.</p>
          </div>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">Save All Changes</Button>
        </div>

        <div className="grid gap-6">
          {/* Traffic Drop */}
          <Card>
            <CardHeader className="pb-3 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="text-red-500" size={20} />
                  <CardTitle className="text-lg">Traffic Drop Alert</CardTitle>
                </div>
                <Switch defaultChecked />
              </div>
              <CardDescription>Triggers when WoW page views drop below threshold.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Drop Threshold (%)</Label>
                  <Input type="number" defaultValue="20" />
                </div>
                <div className="space-y-2">
                  <Label>Notification Email</Label>
                  <Input type="email" defaultValue="admin@example.com" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 pt-2">
                <div className="flex items-center gap-1"><Clock size={14}/> Last triggered: Never</div>
                <Button variant="outline" size="sm" onClick={() => handleTest('Traffic Drop')}>Test Alert</Button>
              </div>
            </CardContent>
          </Card>

          {/* Ranking Drop */}
          <Card>
            <CardHeader className="pb-3 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-orange-500" size={20} />
                  <CardTitle className="text-lg">Keyword Ranking Drop</CardTitle>
                </div>
                <Switch defaultChecked />
              </div>
              <CardDescription>Triggers when a tracked keyword falls significantly.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Position Drop Threshold</Label>
                  <Input type="number" defaultValue="5" />
                </div>
                <div className="space-y-2">
                  <Label>Min Search Volume</Label>
                  <Input type="number" defaultValue="1000" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 pt-2">
                <div className="flex items-center gap-1"><Clock size={14}/> Last triggered: 2 days ago</div>
                <Button variant="outline" size="sm" onClick={() => handleTest('Ranking Drop')}>Test Alert</Button>
              </div>
            </CardContent>
          </Card>

          {/* Low CTR & Bounce Rate */}
          <Card>
            <CardHeader className="pb-3 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="text-blue-500" size={20} />
                  <CardTitle className="text-lg">Engagement Alerts (CTR & Bounce)</CardTitle>
                </div>
                <Switch defaultChecked />
              </div>
              <CardDescription>Monitors user interaction metrics.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Low CTR Threshold (%)</Label>
                  <Input type="number" step="0.1" defaultValue="2.0" />
                </div>
                <div className="space-y-2">
                  <Label>Min Impressions</Label>
                  <Input type="number" defaultValue="100" />
                </div>
                <div className="space-y-2">
                  <Label>High Bounce Rate (%)</Label>
                  <Input type="number" defaultValue="75" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 pt-2">
                <div className="flex items-center gap-1"><Clock size={14}/> Last triggered: Today</div>
                <Button variant="outline" size="sm" onClick={() => handleTest('Engagement')}>Test Alert</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlertSettings;