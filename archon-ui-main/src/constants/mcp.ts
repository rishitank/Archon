export enum McpServerStatus {
  Running = 'running',
  Starting = 'starting',
  Stopping = 'stopping',
  Stopped = 'stopped',
  NotFound = 'not_found',
  DockerUnavailable = 'docker_unavailable',
  Error = 'error',
}

export enum McpContainerStatus {
  DockerUnavailable = 'docker_unavailable',
}

export enum ApiRoutes {
  McpStatus = '/api/mcp/status',
  McpStart = '/api/mcp/start',
  McpStop = '/api/mcp/stop',
  McpConfig = '/api/mcp/config',
  McpLogs = '/api/mcp/logs',
  McpLogsStream = '/api/mcp/logs/stream',
  TestsLatest = '/api/tests/latest-results',
}
