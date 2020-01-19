export const config = {
  protocol: 'https',
  host: 'test.ai',
  defaultApiVersion: 1,
};

// const baseUrlPart = `${config.protocol}://${config.host}/v${config.defaultApiVersion}`;
const baseUrlPartNextVersion = `${config.protocol}://${
  config.host
}/v${config.defaultApiVersion + 1}`;

export default {
  test() {
    return `${baseUrlPartNextVersion}/test`;
  },
};
