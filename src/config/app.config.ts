interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company profile and outlets',
    'Browse available construction tools for rent',
    'Rent construction tools from specific outlets',
    'Manage personal profile and view rental history',
  ],
  ownerAbilities: [
    'Manage Company profile',
    'Manage multiple outlets under the Company',
    'Invite and remove Admins',
    'Delegate responsibilities to Admins',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/bcbf7b6f-5c73-4ef9-ac0c-77d110e749a9',
};
