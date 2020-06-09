import { ConnectionRecord } from './storage/ConnectionRecord';

// Custom matchers which can be used to extend Jest matchers via extend, e. g. `expect.extend({ toBeConnectedWith })`.

export function toBeConnectedWith(received: ConnectionRecord, connection: ConnectionRecord) {
  const pass = received.theirDid === connection.did && received.theirKey === connection.verkey;
  if (pass) {
    return {
      message: () =>
        `expected connection ${received.did}, ${received.verkey} not to be connected to with ${connection.did}, ${connection.verkey}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected connection ${received.did}, ${received.verkey} to be connected to with ${connection.did}, ${connection.verkey}`,
      pass: false,
    };
  }
}
