// eslint-disable-next-line jest/no-export
export const getProps = (test: any) => (props: any) => {
  const next: any = {};
  for (const key in props) {
    // eslint-disable-next-line jest/valid-title
    if (test(key || '')) next[key] = props[key];
  }
  return next;
};
// eslint-disable-next-line jest/no-export
export const MRE = /^m[trblxy]?$/;

// eslint-disable-next-line jest/no-export
export const POS = /^flex|m[trblxy]?$/;

// eslint-disable-next-line jest/no-export
export const getMargin = getProps((k: any) => MRE.test(k));

// eslint-disable-next-line jest/no-export
export const omitMargin = getProps((k: any) => !MRE.test(k));

// eslint-disable-next-line jest/no-export
export const getPos = getProps((k: any) => POS.test(k));

// eslint-disable-next-line jest/no-export
export const omitPos = getProps((k: any) => !POS.test(k));
