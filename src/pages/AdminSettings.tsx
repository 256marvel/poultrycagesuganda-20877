import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

interface ThemeSetting {
  key: string;
  value: any;
  category: string;
}

export default function AdminSettings() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settings, setSettings] = useState<ThemeSetting[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/');
      toast({
        title: 'Access Denied',
        description: 'You need admin privileges to access this page',
        variant: 'destructive',
      });
    }
  }, [isAdmin, loading, navigate, toast]);

  useEffect(() => {
    if (isAdmin) {
      fetchSettings();
    }
  }, [isAdmin]);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('theme_settings')
      .select('*')
      .order('key');

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to load settings',
        variant: 'destructive',
      });
    } else {
      setSettings(data || []);
    }
  };

  const handleSave = async (key: string, newValue: string, category: string) => {
    setSaving(true);

    const { error } = await supabase
      .from('theme_settings')
      .update({ value: { text: newValue } })
      .eq('key', key);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to save setting',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: 'Setting saved successfully',
      });
      fetchSettings();
    }

    setSaving(false);
  };

  const handleValueChange = (key: string, newValue: string) => {
    setSettings(settings.map(s => 
      s.key === key ? { ...s, value: { text: newValue } } : s
    ));
  };

  const getSettingsByCategory = (category: string) => {
    return settings.filter(s => s.category === category);
  };

  const renderSettingInput = (setting: ThemeSetting) => {
    const value = setting.value?.text || setting.value?.url || '';
    const isTextarea = setting.key.includes('description') || setting.key.includes('content') || setting.key.includes('mission');

    return (
      <div key={setting.key} className="space-y-2">
        <Label htmlFor={setting.key} className="text-sm font-medium capitalize">
          {setting.key.replace(/_/g, ' ')}
        </Label>
        {isTextarea ? (
          <Textarea
            id={setting.key}
            value={value}
            onChange={(e) => handleValueChange(setting.key, e.target.value)}
            rows={4}
            className="w-full"
          />
        ) : (
          <Input
            id={setting.key}
            value={value}
            onChange={(e) => handleValueChange(setting.key, e.target.value)}
            className="w-full"
          />
        )}
        <Button
          size="sm"
          onClick={() => handleSave(setting.key, value, setting.category)}
          disabled={saving}
          className="mt-2"
        >
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Admin Settings</h1>
            <p className="text-muted-foreground">Manage your theme settings</p>
          </div>
        </div>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section Settings</CardTitle>
                <CardDescription>Customize your homepage hero section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory('hero').map(renderSettingInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About Section Settings</CardTitle>
                <CardDescription>Customize your about section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory('about').map(renderSettingInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Services Section Settings</CardTitle>
                <CardDescription>Customize your services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory('services').map(renderSettingInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Section Settings</CardTitle>
                <CardDescription>Customize your contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory('contact').map(renderSettingInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="footer" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Footer Settings</CardTitle>
                <CardDescription>Customize your footer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory('footer').map(renderSettingInput)}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
