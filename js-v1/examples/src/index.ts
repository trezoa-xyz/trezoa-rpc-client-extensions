import { getStakeActivation } from '@trezoa-xyz/trezoa-rpc-get-stake-activation';
import { PublicKey } from '@trezoa/web3.js';
import { Connection } from '@trezoa/web3.js';

(async () => {
  const connection = new Connection('https://api.testnet.trezoa.com');
  let stake = new PublicKey('25R5p1Qoe4BWW4ru7MQSNxxAzdiPN7zAunpCuF8q5iTz');
  let status = await getStakeActivation(connection, stake);
  console.log(status);
})();
