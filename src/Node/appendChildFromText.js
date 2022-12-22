Node.prototype.appendChildFromText = function (textToConvertToAnElement) {
  if (!(typeof textToConvertToAnElement === "string" || textToConvertToAnElement instanceof String)) {
    throw new Error("\"textToConvertToAnElement\" is not a string");
  }
  
  const fragment = new DocumentFragment();
  const textWrapper = Object.assign(document.createElement("div"), {
    innerHTML: textToConvertToAnElement,
  });
  const textChildren = textWrapper.childNodes;
  
  fragment.appendChild(textWrapper);
  
  while (textChildren.length > 0) {
    fragment.appendChild(textChildren[0]);
  }
  
  this.appendChild(fragment);
}
