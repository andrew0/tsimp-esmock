import esmock from 'esmock';

const { logNested } = await esmock<typeof import('./nested.js')>(
  './nested.js',
  {
    './log.js': await esmock('./log.js', {
      './mockme.js': {
        value: 'mocked',
      },
    }),
  },
);

logNested();
