export const p = (element, properties, ...children) => {
  // crating the initial element
  const el = document.createElement(element);

  // properties contains an onject with key for the property and value of the props value
  //  class = 'something'
  Object.keys(properties).forEach(key => {
    el.setAttribute(key, properties[key]);
  });

  // children is an array with other nested or NOT nested elements
  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  return el;
};
