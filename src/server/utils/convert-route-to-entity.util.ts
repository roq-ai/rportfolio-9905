const mapping: Record<string, string> = {
  organizations: 'organization',
  themes: 'theme',
  users: 'user',
  works: 'work',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
