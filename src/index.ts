(customElements as any)['map'] = new Map<string, CustomElementConstructor>();

const originalDefineFn = customElements.define;

customElements.define = (name: string, constructor: CustomElementConstructor, options: ElementDefinitionOptions) => {
  originalDefineFn(name, constructor, options);
  (customElements as any)['map'].set(name, constructor);
}
