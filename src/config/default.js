export default {
  PORT: 3000,
  WIREGUARD_PREPARATION_SERVER_DIR: __dirname || '/etc-wireguard',
  WIREGUARD_SERVER_DIR: process.env?.WIREGUARD_DIR ?? '/etc/wireguard',
  WIREGUARD_INTERFACE: process.env?.WIREGUARD_INTERFACE ?? 'wg0',
  WIREGUARD_BASE_IPV4_CIDR: process.env?.WIREGUARD_BASE_IPV4_CIDR ?? '173.40', // First two octets of the IPv4 CIDR
}