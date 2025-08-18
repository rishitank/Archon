// Shared MCP-related constants for the frontend

export const MCP_SERVER_STATUS = {
  RUNNING: 'running',
  STARTING: 'starting',
  STOPPING: 'stopping',
  STOPPED: 'stopped',
  NOT_FOUND: 'not_found',
  DOCKER_UNAVAILABLE: 'docker_unavailable',
  ERROR: 'error',
} as const;

export type McpServerStatus = typeof MCP_SERVER_STATUS[keyof typeof MCP_SERVER_STATUS];

export const MCP_CONTAINER_STATUS = {
  DOCKER_UNAVAILABLE: 'docker_unavailable',
} as const;

export const API_ROUTES = {
  MCP_STATUS: '/api/mcp/status',
  MCP_START: '/api/mcp/start',
  MCP_STOP: '/api/mcp/stop',
  MCP_CONFIG: '/api/mcp/config',
  MCP_LOGS: '/api/mcp/logs',
  MCP_LOGS_STREAM: '/api/mcp/logs/stream',
  TESTS_LATEST: '/api/tests/latest-results',
} as const;

