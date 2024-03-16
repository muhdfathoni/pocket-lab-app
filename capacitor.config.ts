import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.pocketlab',
  appName: 'pocket-lab',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
