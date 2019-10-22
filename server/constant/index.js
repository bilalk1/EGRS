export { group, contact, address } from './messages';
export const Authors = [
  { name: 'Rose Martin', age: 34, id: '1' },
  { name: 'Robert Green', age: 23, id: '2' },
  { name: 'John Doe', age: 45, id: '3' },
];
export const Books = [
  {
    name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1',
  },
  {
    name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2',
  },
  {
    name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3',
  },
];
export const Contacts = [{
  id: '1', addressId: '1', groupId: '1', firstName: 'Theodore L', lastName: 'Telles', gender: 'male', dob: '7/27/1974', nick: '', note: '', status: true,
},
];
export const Addresses = [
  {
    id: '1', address: '2048  Thompson Street', city: 'Los Angeles', state: 'California', country: 'United States', zipCode: '90017', phone: '562-674-4628', fax: '562-674-4628', mobile: '818-269-2550', email: 'lxgb3a3u1pb@meantinc.com',
  },
];
export const Groups = [
  {
    id: '1', name: 'Family', description: 'Family Talk', type: 'private',
  },
];
