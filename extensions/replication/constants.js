'use strict'; // eslint-disable-line

const testIsOn = process.env.CI === 'true';

const constants = {
    zookeeperReplicationNamespace: '/backbeat/replication',
    proxyVaultPath: '/_/backbeat/vault',
    proxyIAMPath: '/_/backbeat/iam',
    metricsExtension: 'crr',
    metricsTypeQueued: 'queued',
    metricsTypeProcessed: 'processed',
    promMetricNames: {
        replicationQueuedTotal: 'zenko_replication_queued_total',
        replicationQueuedBytes: 'zenko_replication_queued_bytes',
        replicationProcessedBytes: 'zenko_replication_processed_bytes',
        replicationElapsedSeconds: 'zenko_replication_elapsed_seconds',
    },
    redisKeys: {
        ops: testIsOn ? 'test:bb:ops' : 'bb:crr:ops',
        bytes: testIsOn ? 'test:bb:bytes' : 'bb:crr:bytes',
        opsDone: testIsOn ? 'test:bb:opsdone' : 'bb:crr:opsdone',
        bytesDone: testIsOn ? 'test:bb:bytesdone' : 'bb:crr:bytesdone',
        failedCRR: testIsOn ? 'test:bb:crr:failed' : 'bb:crr:failed',
    },
};

module.exports = constants;
