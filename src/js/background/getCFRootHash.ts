/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function getCFRootHash(
  host: string,
  version: string,
): Promise<Response | null> {
  return new Promise(resolve => {
    console.log('[*getCFRootHash.ts*] host,version = ', host, ',', version);

    if (host == 'keen.csrl.info') {
      // Own server

      fetch('https://geralt.csrl.info/codeverify', {method: 'GET'})
        .then(response => {
          resolve(response);
          console.log(
            '[*getCFRootHash.ts*] Response from our server: ',
            response,
          );
        })
        .catch(error => {
          console.error('ERROR fetching hash from our server', error);
          resolve(null);
        });
    } else {
      //Cloudflare
      fetch(
        'https://staging-api.privacy-auditability.cloudflare.com/v1/hash/' +
          `${encodeURIComponent(host)}/${encodeURIComponent(version)}`,
        {method: 'GET'},
      )
        .then(response => {
          resolve(response);
          console.log('[*getCFRootHash.ts*] ROOTHASH from CF: ', response);
          console.log(
            '[*getCFRootHash.ts*] host,version = ',
            host,
            ',',
            version,
          );
        })
        .catch(error => {
          console.error('error fetching hash from CF', error);
          resolve(null);
        });
    }
  });
}
