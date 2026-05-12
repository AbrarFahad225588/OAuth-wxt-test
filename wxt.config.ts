import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],

  manifest: {
    name: 'OAuth Test',
    version: '1.0',
    manifest_version: 3,
    permissions: ['identity','tabs','activeTab', 'scripting'],
    oauth2: {
      client_id: '645354098751-kc244qncmnqi8j4ti9b4eimbvdb9vmvk.apps.googleusercontent.com',
      scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/drive.file',
      ],
    },
    key: 'mdjpapkkfjfcibaoefjbklgmdcifnkmd',
    // host_permissions: ["http://admission.uestc.edu.cn/*",],
     host_permissions: ["<all_urls>"],
  },
   runner: {
    disabled: true,
  },
});
