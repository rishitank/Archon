"""
MCP-related constants shared across server modules.
"""

# Status strings returned by MCP server management endpoints
class Status:
    RUNNING = "running"
    STARTING = "starting"
    STOPPING = "stopping"
    STOPPED = "stopped"
    NOT_FOUND = "not_found"
    DOCKER_UNAVAILABLE = "docker_unavailable"
    ERROR = "error"

# Environment variable names
ENV_MCP_PORT = "ARCHON_MCP_PORT"

# Default service discovery values
DEFAULT_MCP_SERVICE_HOST = "archon-mcp"

