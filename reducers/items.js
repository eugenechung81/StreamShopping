export const items = (state = [{
  'id': 'item1',
  'cost': 1,
  'description': 'Marker',
  'imgPath': require('./../img/marker.jpg'),
  'weight': 2,
  'status': 'order',
}, {
  'id': 'item2',
  'cost': 1,
  'description': 'Marker',
  'imgPath': require('./../img/marker1.jpg'),
  'weight': 2,
  'status': 'in_transit',
}, {
  'id': 'item3',
  'cost': 3,
  'description': 'Rebbel Drink',
  'imgPath': require('./../img/drink.jpg'),
  'weight': 12,
  'status': 'order',
},{
  'id': 'item4',
  'cost': 10,
  'description': 'Fire Extinguisher',
  'imgPath': require('./../img/fireext.jpg'),
  'weight': 160,
  'status': 'order',
},{
  'id': 'item5',
  'cost': 25,
  'description': 'Coffee Machine',
  'imgPath': require('./../img/coffemach.jpg'),
  'weight': 800,
  'status': 'order',
}], action) => {
   switch (action.type) {
     case 'UPDATE_ITEM':
       return state.map(item =>
         (item.id === action.id)
           ? {...item, status: action.status}
           : item
       );
     default:
       return state
   }
};