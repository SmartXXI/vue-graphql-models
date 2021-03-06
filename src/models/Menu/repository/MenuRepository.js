class MenuRepository {
  constructor(items = []) {
    this.items = items;

    return new Proxy(this, {
      get: MenuRepository.__get
    });
  }

  static __get(target, prop) {
    // istanbul ignore else
    if (Reflect.has(target, prop)) {
      return Reflect.get(target, prop) || [];
    }
    const menuItems = Reflect.get(target, 'items') || [];

    return menuItems.find(i => i.id === prop);
  }
}

export default MenuRepository;
