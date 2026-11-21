import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.linguastep.app',
  appName: 'LinguaStep',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
};

export default config;
