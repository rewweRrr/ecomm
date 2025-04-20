export default ({ env }) => ({
  host: '0.0.0.0', // Принудительно задаем хост
  url: env('PUBLIC_URL', 'https://your-app.vercel.app'), // Указываем полный URL
  admin: {
    autoOpen: false // Отключаем автооткрытие админки
  }
  // host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  // app: {
  //   keys: env.array('APP_KEYS'),
  // },
});
