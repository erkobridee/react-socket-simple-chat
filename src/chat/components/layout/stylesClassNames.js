
const main = 'main';
const container = 'container'

const layoutBody = `${container}__body`;

const styles = {
  main,
  layout: container,
  layoutHeader: `${container}__header`,
  layoutBody,
  containerBody: `${layoutBody}__content`,
  containerFooter: `${layoutBody}__footer`
};

export default styles;