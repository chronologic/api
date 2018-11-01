// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface$Emitted } from '../types';

import Mock from './index';

describe('on', () => {
  let mock: Mock;

  beforeEach(() => {
    mock = new Mock();
  });

  it('it emits both connected and disconnected events', (done) => {
    const events: { [index: string]: boolean } = { connected: false, disconnected: false };
    const handler = (type: ProviderInterface$Emitted) => {
      mock.on(type, () => {
        events[type] = true;

        if (Object.values(events).filter((value) => value).length === 2) {
          done();
        }
      });
    };

    handler('connected');
    handler('disconnected');
  });
});