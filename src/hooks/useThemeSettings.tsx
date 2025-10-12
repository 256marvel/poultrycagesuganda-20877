import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ThemeSetting {
  key: string;
  value: any;
}

export const useThemeSettings = () => {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();

    // Subscribe to changes
    const subscription = supabase
      .channel('theme_settings_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'theme_settings' }, () => {
        fetchSettings();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('theme_settings')
      .select('*');

    if (!error && data) {
      const settingsMap: Record<string, any> = {};
      data.forEach((setting: ThemeSetting) => {
        settingsMap[setting.key] = setting.value;
      });
      setSettings(settingsMap);
    }
    setLoading(false);
  };

  const getSetting = (key: string, defaultValue: string = '') => {
    return settings[key]?.text || settings[key]?.url || defaultValue;
  };

  return { settings, getSetting, loading };
};
