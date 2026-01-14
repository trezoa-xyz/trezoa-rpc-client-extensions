import { getStakeActivation } from '@trezoa-xyz/trezoa-rpc-get-stake-activation';
import { Address } from '@trezoa/addresses';
import { createTrezoaRpc } from '@trezoa/rpc';

(async () => {
  const rpc = createTrezoaRpc('https://api.testnet.trezoa.com');
  let stake = '25R5p1Qoe4BWW4ru7MQSNxxAzdiPN7zAunpCuF8q5iTz';
  let status = await getStakeActivation(rpc, stake as Address);
  console.log(status);
})();
