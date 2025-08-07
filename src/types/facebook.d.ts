declare global {
  interface Window {
    FB: {
      init: (params: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      api: (path: string, method: string, params?: any) => Promise<any>;
      login: (callback: (response: any) => void, params?: any) => void;
      logout: (callback: (response: any) => void) => void;
      getLoginStatus: (callback: (response: any) => void) => void;
    };
  }
}

export {}; 