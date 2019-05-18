
export function updateTotal(total) {
  return {
    type: 'UPDATE_ORDER_TOTAL',
    total: total,
  }
}

export function executeOrder(id) {
  return {
    type: 'UPDATE_ITEM',
    id: id,
    status: 'ordered',
  }
}