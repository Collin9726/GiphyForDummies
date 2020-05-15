// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiKey: 'rktUbb1LKoGzBCqkd6vGzlafUDcl3kl3',
  trendingBase: 'https://api.giphy.com/v1/gifs/trending?api_key=rktUbb1LKoGzBCqkd6vGzlafUDcl3kl3&limit=24&rating=G',
  gifBase: 'https://api.giphy.com/v1/gifs/search?api_key=rktUbb1LKoGzBCqkd6vGzlafUDcl3kl3&q=',
  gifEnd:'&limit=24&offset=0&rating=G&lang=en',
  stickerBase:'https://api.giphy.com/v1/stickers/search?api_key=rktUbb1LKoGzBCqkd6vGzlafUDcl3kl3&q=',
  stickerEnd:'&limit=24&offset=0&rating=G&lang=en'  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
