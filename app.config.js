export default {
  expo: {
    name: 'auth-app',
    slug: 'auth-app',
    scheme: 'auth-app-scheme',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      bundleIdentifier: 'ios.app.color',
      supportsTablet: true,
    },
    android: {
      package: 'ios.app.color',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      apiUrl: 'https://dummyjson.com',
    },
  },
}