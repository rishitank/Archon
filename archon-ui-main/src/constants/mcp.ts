export enum McpServerStatus {
  RUNNING = 'running',
  STARTING = 'starting',
  STOPPING = 'stopping',
  STOPPED = 'stopped',
  NOT_FOUND = 'not_found',
  DOCKER_UNAVAILABLE = 'docker_unavailable',
  ERROR = 'error',
}

export enum McpContainerStatus {
  DOCKER_UNAVAILABLE = 'docker_unavailable',
}

export enum ApiRoutes {
  MCP_STATUS = '/api/mcp/status',
  MCP_START = '/api/mcp/start',
  MCP_STOP = '/api/mcp/stop',
  MCP_CONFIG = '/api/mcp/config',
  MCP_LOGS = '/api/mcp/logs',
  MCP_LOGS_STREAM = '/api/mcp/logs/stream',
  TESTS_LATEST = '/api/tests/latest-results',
}
