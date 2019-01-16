// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import ApiRx from '@polkadot/api/rx';
import { ApiInterface$Rx } from '@polkadot/api/types';
import MockProvider from '@polkadot/rpc-provider/mock';

import { Derive } from './index';

const testFunction = (api: ApiInterface$Rx) => {
  return <
    Section extends keyof Derive,
    Method extends keyof (typeof api.derive[Section])
  >(section: Section, method: Method, inputs: any[]) => {
    describe(`derive.${section}.${method}`, () => {
      it('should be a function', () => {
        expect(typeof api.derive[section][method]).toBe('function');
      });

      it('should return an Observable', () => {
        expect((api.derive[section][method] as any)(...inputs)).toBeInstanceOf(Observable);
      });

      it('should be memoized', () => {
        const first = (api.derive[section][method] as any)(...inputs);
        const second = (api.derive[section][method] as any)(...inputs);

        expect(first).toBe(second);
      });
    });
  };
};

describe('derive', () => {
  const api = new ApiRx(new MockProvider());

  beforeAll((done) => api.isReady.subscribe(() => done()));

  testFunction(api)('balances', 'accountIdAndIndex', []);
  testFunction(api)('balances', 'accountIdToIndex', []);
  testFunction(api)('balances', 'accountIndexes', []);
  testFunction(api)('balances', 'accountIndexToId', []);
  testFunction(api)('balances', 'fees', []);
  testFunction(api)('balances', 'validatingBalance', []);
  testFunction(api)('balances', 'validatingBalances', []);
  testFunction(api)('balances', 'votingBalance', []);
  testFunction(api)('balances', 'votingBalances', []);
  testFunction(api)('balances', 'votingBalancesNominatorsFor', []);

  testFunction(api)('chain', 'bestNumber', []);
  testFunction(api)('chain', 'bestNumberFinalised', []);

  testFunction(api)('democracy', 'referendumInfos', []);
  testFunction(api)('democracy', 'referendums', []);
  testFunction(api)('democracy', 'referendumVotesFor', []);
  testFunction(api)('democracy', 'votes', []);

  testFunction(api)('session', 'eraLength', []);
  testFunction(api)('session', 'eraProgress', []);
  testFunction(api)('session', 'sessionProgress', []);
});