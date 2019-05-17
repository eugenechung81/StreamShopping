export const items = (state = [{
  'id': 'item1',
  'cost': 1,
  'description': 'Pen - Used 2',
  'imgPath': require('./../img/pen.jpg'),
  'weight': 2,
  'status': 'order',
}, {
  'id': 'item2',
  'cost': 1,
  'description': 'Pen - Used',
  'imgPath': require('./../img/pen.jpg'),
  'weight': 2,
  'status': 'in_transit',
}, {
  'id': 'item3',
  'cost': 5,
  'description': 'Mouse - Used',
  'imgPath': require('./../img/mouse.jpg'),
  'weight': 24,
  'status': 'order',
},{
  'id': 'item4',
  'cost': 5,
  'description': 'Mouse - Used',
  'imgPath': require('./../img/mouse.jpg'),
  'weight': 24,
  'status': 'order',
}], action) => {
  return state;
};