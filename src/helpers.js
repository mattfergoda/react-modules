function choice(items) {
  return items[Math.floor(Math.random() * (items.length - 1))];
}

function remove(items, item) {
  for (let i=0; i<items.length; i++) {
    const thisItem = items[i]
    if (item === thisItem) {
      return items.splice(i,1);
    }
  }
}

export { choice, remove };