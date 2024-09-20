(window as any)['__CustomElementsMap'] = new Map<string, CustomElementConstructor>();

const originalDefineFn = customElements.define;

customElements.define = function(name: string, constructor: CustomElementConstructor, options: ElementDefinitionOptions) {
  originalDefineFn.apply(customElements, [name, constructor, options]);
  (window as any)['__CustomElementsMap'].set(name, constructor);
}
